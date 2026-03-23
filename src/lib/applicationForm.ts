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
      placeholder: "Full Name / Handle",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "example@email.com",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "xProfile",
      label: "X profile",
      placeholder: "Username",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "contactHandle",
      label: "Discord or Telegram",
      placeholder: "Username",
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
      placeholder: "Brief description of trading edge / market focus",
      type: "textarea",
      rows: 5,
      autoComplete: "off",
    },
  ],
  allocator: [
    {
      name: "name",
      label: "Name",
      placeholder: "Full Name / Handle",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "example@email.com",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "xProfile",
      label: "X profile",
      placeholder: "Username",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "contactHandle",
      label: "Discord or Telegram",
      placeholder: "Username",
      type: "text",
      autoComplete: "off",
    },
    {
      name: "allocationType",
      label: "Type of allocation",
      placeholder: "Individual / DAO / Protocol / Prop Firm",
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

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
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
    values[field.name] = ""
    return values
  }, {})
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

  if (!normalizedValue) {
    return `${field.label} is required.`
  }

  if (field.type === "email" && !EMAIL_PATTERN.test(normalizedValue)) {
    return "Enter a valid email address."
  }

  if (field.type === "url" && !isValidHttpUrl(normalizedValue)) {
    return "Enter a valid URL."
  }

  return ""
}

export function validateApplicationValues(
  kind: ApplicationKind,
  values: ApplicationValues,
): ApplicationValidationResult {
  const errors: ApplicationFieldErrors = {}
  const normalizedValues = getInitialApplicationValues(kind)

  for (const field of APPLICATION_FIELDS[kind]) {
    const normalizedValue = normalizeValue(values[field.name])
    normalizedValues[field.name] = normalizedValue

    const error = validateApplicationField(kind, field.name, normalizedValue)

    if (error) {
      errors[field.name] = error
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
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
