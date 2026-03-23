import { useEffect, useState } from "react"
import {
  APPLICATION_FIELDS,
  validateApplicationField,
  validateApplicationValues,
  getInitialApplicationValues,
  type ApplicationFieldDefinition,
  type ApplicationFieldErrors,
  type ApplicationKind,
  type ApplicationValues,
} from "../../lib/applicationForm"
import { AnimatePresence, motion } from "motion/react"

type WaitlistFormProps = {
  activeTab: "sharp" | "allocator"
  onSelectWaitlistTab: (tab: "sharp" | "allocator") => void
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error"

type FeedbackState = {
  message: string
  status: SubmissionStatus
}

const inputClassName =
  "bg-background text-on-surface w-full border px-6 py-4 transition-all outline-none placeholder:text-white/20 focus:ring-0"

const feedbackToneClassNames: Record<
  Exclude<SubmissionStatus, "idle" | "submitting">,
  string
> = {
  success: "border-primary/35 bg-primary/30 text-on-surface",
  error: "border-red-500/20 bg-red-500/10 text-[#f96969]",
}

function ApplicationField({
  disabled,
  error,
  field,
  kind,
  onBlur,
  onChange,
  value,
}: {
  disabled: boolean
  error?: string
  field: ApplicationFieldDefinition
  kind: ApplicationKind
  onBlur: (fieldName: string) => void
  onChange: (fieldName: string, value: string) => void
  value: string
}) {
  const inputId = `application-${kind}-${field.name}`
  const errorId = `${inputId}-error`
  const className = `${inputClassName} ${error ? "border-primary" : "border-white/10 focus:border-primary"} ${field.type === "textarea" ? "resize-none" : ""}`

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <label
        className="font-headline text-primary block text-xs tracking-[0.3em] uppercase"
        htmlFor={inputId}
      >
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          autoComplete={field.autoComplete}
          className={className}
          disabled={disabled}
          id={inputId}
          onBlur={() => onBlur(field.name)}
          onChange={(event) => onChange(field.name, event.target.value)}
          placeholder={field.placeholder}
          required
          rows={field.rows ?? 5}
          value={value}
        />
      ) : (
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          autoComplete={field.autoComplete}
          className={className}
          disabled={disabled}
          id={inputId}
          onBlur={() => onBlur(field.name)}
          onChange={(event) => onChange(field.name, event.target.value)}
          placeholder={field.placeholder}
          required
          type={field.type}
          value={value}
        />
      )}
      <p
        className={`text-sm ${error ? "text-[#f96969]" : "text-transparent"} min-h-5`}
        id={error ? errorId : undefined}
      >
        {error || " "}
      </p>
    </div>
  )
}

function ApplicationForm({ kind }: { kind: ApplicationKind }) {
  const [values, setValues] = useState<ApplicationValues>(() =>
    getInitialApplicationValues(kind),
  )
  const [errors, setErrors] = useState<ApplicationFieldErrors>({})
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {},
  )
  const [feedback, setFeedback] = useState<FeedbackState>({
    message: "",
    status: "idle",
  })

  useEffect(() => {
    setValues(getInitialApplicationValues(kind))
    setErrors({})
    setTouchedFields({})
    setFeedback({
      message: "",
      status: "idle",
    })
  }, [kind])

  const isSubmitting = feedback.status === "submitting"
  const isValidationError = Object.values(errors).some(
    (value) => value !== null,
  )
  const fields = APPLICATION_FIELDS[kind]

  const handleChange = (fieldName: string, nextValue: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: nextValue,
    }))

    if (touchedFields[fieldName]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [fieldName]: validateApplicationField(kind, fieldName, nextValue),
      }))
    }

    if (feedback.status !== "idle") {
      setFeedback({
        message: "",
        status: "idle",
      })
    }
  }

  const handleBlur = (fieldName: string) => {
    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [fieldName]: true,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: validateApplicationField(kind, fieldName, values[fieldName]),
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validation = validateApplicationValues(kind, values)

    setValues(validation.normalizedValues)
    setErrors(validation.errors)
    setTouchedFields(
      fields.reduce<Record<string, boolean>>((currentTouchedFields, field) => {
        currentTouchedFields[field.name] = true
        return currentTouchedFields
      }, {}),
    )

    if (!validation.isValid) {
      return
    }

    setFeedback({
      message: "",
      status: "submitting",
    })

    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind,
          ...validation.normalizedValues,
        }),
      })

      const result = (await response.json()) as {
        errors?: ApplicationFieldErrors
        message?: string
      }

      if (!response.ok) {
        setErrors(result.errors ?? {})
        setFeedback({
          message:
            result.message || "Unable to submit the application right now",
          status: "error",
        })
        return
      }

      setValues(getInitialApplicationValues(kind))
      setErrors({})
      setTouchedFields({})
      setFeedback({
        message:
          result.message || "Application received\nWe will contact you soon",
        status: "success",
      })
    } catch {
      setFeedback({
        message: "Unable to submit the application right now",
        status: "error",
      })
    }
  }

  return (
    <form
      className="space-y-6 p-6 pt-8 sm:p-8 md:p-16"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <ApplicationField
            disabled={isSubmitting}
            error={errors[field.name]}
            field={field}
            key={field.name}
            kind={kind}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values[field.name] ?? ""}
          />
        ))}
      </div>
      {fields.slice(2).map((field) => (
        <ApplicationField
          disabled={isSubmitting}
          error={errors[field.name]}
          field={field}
          key={field.name}
          kind={kind}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[field.name] ?? ""}
        />
      ))}
      <button
        className="bg-primary text-on-primary font-headline kinetic-glow disabled:bg-on-surface-variant w-full cursor-pointer py-6 text-xl font-bold tracking-[0.2em] uppercase transition-all hover:brightness-110 disabled:cursor-not-allowed"
        disabled={isSubmitting || isValidationError}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <AnimatePresence>
        {feedback.status !== "idle" && feedback.status !== "submitting" ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            role={feedback.status === "error" ? "alert" : "status"}
            className={`flex items-center justify-center overflow-hidden border px-5 py-4 ${
              feedbackToneClassNames[feedback.status]
            }`}
          >
            <div className="text-center text-sm leading-relaxed whitespace-pre-line uppercase">
              {feedback.message}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  )
}

export default function WaitlistForm({
  activeTab,
  onSelectWaitlistTab,
}: WaitlistFormProps) {
  return (
    <section
      className="bg-background px-6 py-10 sm:py-22 md:py-26 lg:py-32"
      id="application"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <h2 className="font-headline mb-6 text-4xl font-bold tracking-tighter uppercase sm:mb-8 sm:text-5xl md:text-7xl">
            Join the Vanguard
          </h2>
        </div>
        <div className="bg-surface border border-white/10">
          <div className="bg-surface border-b border-white/10 px-6 pt-6 md:px-16 md:pt-10">
            <div className="bg-background flex p-1">
              <button
                onClick={() => onSelectWaitlistTab("sharp")}
                className={`font-headline flex-1 px-2 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "sharp" ? "text-primary border-primary bg-surface-container border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
              >
                Sharp Application
              </button>
              <button
                onClick={() => onSelectWaitlistTab("allocator")}
                className={`font-headline flex-1 px-2 py-5 font-bold tracking-widest uppercase transition-all ${activeTab === "allocator" ? "text-primary border-primary bg-surface-container border-b-2" : "text-on-surface-variant hover:text-on-surface"} cursor-pointer`}
              >
                Allocators Waitlist
              </button>
            </div>
          </div>
          {activeTab === "sharp" ? (
            <ApplicationForm kind="sharp" />
          ) : (
            <ApplicationForm kind="allocator" />
          )}
        </div>
      </div>
    </section>
  )
}
