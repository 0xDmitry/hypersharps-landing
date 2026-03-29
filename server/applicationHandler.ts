import "dotenv/config"
import type { IncomingMessage, ServerResponse } from "node:http"
import nodemailer from "nodemailer"
import {
  APPLICATION_FIELDS,
  APPLICATION_KIND_LABELS,
  parseApplicationPayload,
  type ApplicationKind,
  type ApplicationValues,
} from "../src/lib/applicationForm.js"

type RequestLike = IncomingMessage & {
  body?: unknown
  method?: string
  url?: string
}

type JsonResponseShape = {
  errors?: Record<string, string>
  message: string
}

type ResponseLike = ServerResponse<IncomingMessage> & {
  json?: (body: JsonResponseShape) => void
  status?: (statusCode: number) => ResponseLike
}

type NormalizedSubmission = {
  kind: ApplicationKind
  values: ApplicationValues
}

const DEFAULT_APPLICATION_EMAIL = "0xhypersharps@gmail.com"

function sendJson(
  response: ResponseLike,
  statusCode: number,
  body: JsonResponseShape,
) {
  if (
    typeof response.status === "function" &&
    typeof response.json === "function"
  ) {
    response.status(statusCode).json(body)
    return
  }

  response.statusCode = statusCode
  response.setHeader("Content-Type", "application/json")
  response.end(JSON.stringify(body))
}

async function readRequestBody(request: RequestLike) {
  if (typeof request.body === "string") {
    return request.body ? JSON.parse(request.body) : {}
  }

  if (request.body && typeof request.body === "object") {
    return request.body
  }

  const chunks: Buffer[] = []

  for await (const chunk of request) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }

  if (chunks.length === 0) {
    return {}
  }

  const rawBody = Buffer.concat(chunks).toString("utf8")

  return rawBody ? JSON.parse(rawBody) : {}
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function buildEmailText(submission: NormalizedSubmission) {
  const fieldLines = APPLICATION_FIELDS[submission.kind].map((field) => {
    return `${field.label}: ${submission.values[field.name] ?? ""}`
  })

  return [
    `HyperSharps ${APPLICATION_KIND_LABELS[submission.kind]}`,
    `Submitted at: ${new Date().toISOString()}`,
    "",
    ...fieldLines,
  ].join("\n")
}

function buildEmailHtml(submission: NormalizedSubmission) {
  const rows = APPLICATION_FIELDS[submission.kind]
    .map((field) => {
      const value = escapeHtml(submission.values[field.name] ?? "")

      return `
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #d4d7dd; font-weight: 700;">${escapeHtml(field.label)}</td>
          <td style="padding: 10px 14px; border: 1px solid #d4d7dd; white-space: pre-wrap;">${value}</td>
        </tr>
      `
    })
    .join("")

  return `
    <div style="font-family: Arial, sans-serif; color: #101418;">
      <h2 style="margin-bottom: 8px;">${escapeHtml(APPLICATION_KIND_LABELS[submission.kind])}</h2>
      <p style="margin-top: 0; margin-bottom: 20px;">Submitted at ${escapeHtml(new Date().toISOString())}</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px;">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `
}

function getConfiguredMailbox() {
  const user = process.env.GMAIL_USER?.trim() || DEFAULT_APPLICATION_EMAIL
  const pass = process.env.GMAIL_APP_PASSWORD?.trim()
  const to = process.env.APPLICATION_EMAIL_TO?.trim() || user

  if (!pass) {
    return {
      error:
        "Missing Gmail credentials. Set GMAIL_USER and GMAIL_APP_PASSWORD before submitting applications.",
    }
  }

  return {
    user,
    pass,
    to,
  }
}

function getReplyTo(values: ApplicationValues) {
  const replyTo = values.email?.trim()

  return replyTo || undefined
}

function getSubject(submission: NormalizedSubmission) {
  const applicantName = (submission.values.name ?? "Unknown applicant").replace(
    /[\r\n]+/g,
    " ",
  )

  return `[HyperSharps] ${APPLICATION_KIND_LABELS[submission.kind]} - ${applicantName}`
}

export async function handleApplicationRequest(
  request: RequestLike,
  response: ResponseLike,
) {
  if (request.method === "OPTIONS") {
    response.statusCode = 204
    response.end()
    return
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST")
    sendJson(response, 405, {
      message: "Method not allowed.",
    })
    return
  }

  let payload: unknown

  try {
    payload = await readRequestBody(request)
  } catch {
    sendJson(response, 400, {
      message: "Invalid JSON payload.",
    })
    return
  }

  const parsed = parseApplicationPayload(payload)

  if ("formError" in parsed) {
    sendJson(response, 400, {
      errors: parsed.errors,
      message: parsed.formError,
    })
    return
  }

  const mailbox = getConfiguredMailbox()

  if ("error" in mailbox) {
    console.error(mailbox.error)

    sendJson(response, 500, {
      message: "Application submissions are temporarily unavailable.",
    })
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailbox.user,
      pass: mailbox.pass,
    },
  })

  try {
    await transporter.sendMail({
      from: mailbox.user,
      to: mailbox.to,
      replyTo: getReplyTo(parsed.submission.values),
      subject: getSubject(parsed.submission),
      text: buildEmailText(parsed.submission),
      html: buildEmailHtml(parsed.submission),
    })
  } catch (error) {
    console.error("Failed to send application email", error)

    sendJson(response, 500, {
      message: "Unable to send the application email right now.",
    })
    return
  }

  sendJson(response, 200, {
    message: "Application received\nWe will contact you soon",
  })
}
