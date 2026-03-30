export type ApplicationFieldType = "text" | "email" | "url" | "textarea"

export type ApplicationFieldDefinition = {
  name: string
  label: string
  placeholder: string
  type: ApplicationFieldType
  autoComplete?: string
  rows?: number
}

export const APPLICATION_KIND_LABELS = {
  sharp: "Sharp Application",
  allocator: "Allocator Waitlist Request",
} as const

export const APPLICATION_FIELDS = {
  sharp: [
    {
      name: "name",
      label: "Name",
      placeholder: "Full name or handle",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "you@example.com",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "xProfile",
      label: "X profile",
      placeholder: "@username",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "contactHandle",
      label: "Discord or Telegram",
      placeholder: "@handle",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "polymarketProfile",
      label: "Polymarket profile",
      placeholder: "https://polymarket.com/@username",
      type: "url",
      autoComplete: "url",
    },
    {
      name: "edge",
      label: "Describe your edge",
      placeholder:
        "What is your edge in prediction markets? What do you trade better than most?",
      type: "textarea",
      rows: 5,
      autoComplete: "off",
    },
  ],
  allocator: [
    {
      name: "name",
      label: "Name",
      placeholder: "Full name or handle",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "you@example.com",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "xProfile",
      label: "X profile",
      placeholder: "@username",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "contactHandle",
      label: "Discord or Telegram",
      placeholder: "@handle",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "allocationType",
      label: "Allocator type",
      placeholder: "Individual / DAO / Protocol / Treasury / Family Office",
      type: "text",
      autoComplete: "off",
    },
  ],
} as const satisfies Record<string, readonly ApplicationFieldDefinition[]>

export type ApplicationKind = keyof typeof APPLICATION_FIELDS
export type ApplicationFieldName =
  (typeof APPLICATION_FIELDS)[ApplicationKind][number]["name"]
export type ApplicationValues = Partial<Record<ApplicationFieldName, string>>
export type ApplicationFieldErrors = Partial<
  Record<ApplicationFieldName, string>
>
export type ApplicationTouchedFields = Partial<
  Record<ApplicationFieldName, boolean>
>

export type ApplicationValidationResult = {
  errors: ApplicationFieldErrors
  isValid: boolean
  normalizedValues: ApplicationValues
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isApplicationKind(value: unknown): value is ApplicationKind {
  return value === "sharp" || value === "allocator"
}

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function isValidPolymarketProfileUrl(value: string) {
  try {
    const url = new URL(value)
    return (
      url.protocol === "https:" &&
      url.host === "polymarket.com" &&
      url.pathname.startsWith("/@") &&
      url.pathname.length > 2
    )
  } catch {
    return false
  }
}

function getFieldDefinition(kind: ApplicationKind, fieldName: string) {
  return APPLICATION_FIELDS[kind].find((field) => field.name === fieldName)
}

export function getInitialApplicationValues(
  kind: ApplicationKind,
): ApplicationValues {
  return APPLICATION_FIELDS[kind].reduce<ApplicationValues>((values, field) => {
    values[field.name] =
      field.name === "polymarketProfile" ? "https://polymarket.com/@" : ""
    return values
  }, {})
}

export function getInitialApplicationFieldErrors(
  kind: ApplicationKind,
): ApplicationFieldErrors {
  return APPLICATION_FIELDS[kind].reduce<ApplicationValues>((values, field) => {
    values[field.name] = ""
    return values
  }, {})
}

export function getInitialApplicationTouchedFields(
  kind: ApplicationKind,
): ApplicationTouchedFields {
  return APPLICATION_FIELDS[kind].reduce<ApplicationTouchedFields>(
    (values, field) => {
      values[field.name] = false
      return values
    },
    {},
  )
}

export function validateApplicationField(
  kind: ApplicationKind,
  fieldName: string,
  value: unknown,
) {
  const field = getFieldDefinition(kind, fieldName)

  if (!field) {
    return ""
  }

  const normalizedValue = normalizeValue(value)

  if (!normalizedValue && field.name === "edge") {
    return "Tell us about your edge"
  }

  if (!normalizedValue) {
    return `${field.label} is required`
  }

  if (field.type === "email" && !EMAIL_PATTERN.test(normalizedValue)) {
    return "Enter a valid email address"
  }

  if (field.type === "url" && !isValidPolymarketProfileUrl(normalizedValue)) {
    return "Enter a valid Polymarket profile URL"
  }

  return ""
}

export function validateApplicationValues(
  kind: ApplicationKind,
  values: ApplicationValues,
): ApplicationValidationResult {
  const errors: ApplicationFieldErrors = getInitialApplicationFieldErrors(kind)
  const normalizedValues = { ...values }

  for (const field of APPLICATION_FIELDS[kind]) {
    const normalizedValue = normalizeValue(values[field.name])
    normalizedValues[field.name] = normalizedValue

    const error = validateApplicationField(kind, field.name, normalizedValue)
    errors[field.name] = error
  }

  return {
    errors,
    isValid: Object.values(errors).filter((value) => value !== "").length === 0,
    normalizedValues,
  }
}

export function parseApplicationPayload(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return {
      formError: "Invalid application payload",
    }
  }

  const rawPayload = payload as Record<string, unknown>
  const kind = rawPayload.kind

  if (!isApplicationKind(kind)) {
    return {
      formError: "Invalid application type",
    }
  }

  const validation = validateApplicationValues(kind, rawPayload)

  if (!validation.isValid) {
    return {
      errors: validation.errors,
      formError: "Please complete all required fields",
    }
  }

  return {
    submission: {
      kind,
      values: validation.normalizedValues,
    },
  }
}
