'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Fields = {
  discipleName: string
  age: string
  parentName: string
  parentMobile: string
}

type Errors = Partial<Record<keyof Fields, string>>

const initial: Fields = {
  discipleName: '',
  age: '',
  parentName: '',
  parentMobile: '',
}

function validate(values: Fields): Errors {
  const errors: Errors = {}

  if (!values.discipleName.trim()) {
    errors.discipleName = "Please enter the disciple's name."
  } else if (values.discipleName.trim().length < 2) {
    errors.discipleName = 'Name looks too short.'
  }

  const age = Number(values.age)
  if (!values.age.trim()) {
    errors.age = 'Please enter the age.'
  } else if (!Number.isInteger(age) || age < 4) {
    errors.age = 'Age must be a whole number, 4 years or above.'
  } else if (age > 99) {
    errors.age = 'Please enter a valid age.'
  }

  if (!values.parentName.trim()) {
    errors.parentName = "Please enter a parent's name."
  }

  const mobile = values.parentMobile.replace(/[\s-]/g, '')
  if (!values.parentMobile.trim()) {
    errors.parentMobile = "Please enter the parent's mobile number."
  } else if (!/^(\+?\d{1,3})?\d{10}$/.test(mobile)) {
    errors.parentMobile = 'Enter a valid 10-digit mobile number.'
  }

  return errors
}

export function RegistrationForm() {
  const [values, setValues] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function update(field: keyof Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // Front-end only for now — this is where the .NET Core API call will go.
      console.log('[v0] Registration submitted:', values)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-gold/50 bg-card p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-serif text-3xl text-maroon">Thank You!</h2>
        <p className="mt-3 leading-relaxed text-foreground/75">
          We&apos;ve received {values.discipleName.trim()}&apos;s registration.
          Our team will reach out on the number provided to confirm the batch
          and next steps.
        </p>
        <Button
          className="mt-6 h-11 bg-maroon px-5 text-primary-foreground hover:bg-maroon/90"
          onClick={() => {
            setValues(initial)
            setSubmitted(false)
          }}
        >
          Register Another Disciple
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-gold/50 bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <Field
          id="discipleName"
          label="Disciple's Name"
          value={values.discipleName}
          error={errors.discipleName}
          onChange={(v) => update('discipleName', v)}
          autoComplete="name"
          placeholder="e.g. Ananya"
        />

        <Field
          id="age"
          label="Age"
          type="number"
          inputMode="numeric"
          min={4}
          max={99}
          value={values.age}
          error={errors.age}
          onChange={(v) => update('age', v)}
          placeholder="4 years and above"
        />

        <Field
          id="parentName"
          label="Parent's Name (Father or Mother)"
          value={values.parentName}
          error={errors.parentName}
          onChange={(v) => update('parentName', v)}
          autoComplete="name"
          placeholder="e.g. Priya"
        />

        <Field
          id="parentMobile"
          label="Parent's Mobile Number"
          type="tel"
          inputMode="tel"
          value={values.parentMobile}
          error={errors.parentMobile}
          onChange={(v) => update('parentMobile', v)}
          autoComplete="tel"
          placeholder="10-digit mobile number"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-7 h-12 w-full bg-maroon text-base text-primary-foreground hover:bg-maroon/90"
      >
        Submit Registration
      </Button>

      <p className="mt-4 text-center text-sm text-foreground/60">
        By submitting, you agree to be contacted about class enrolment.
      </p>
    </form>
  )
}

type FieldProps = {
  id: keyof Fields
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: 'numeric' | 'tel' | 'text'
  min?: number
  max?: number
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  placeholder,
  autoComplete,
  inputMode,
  min,
  max,
}: FieldProps) {
  const errorId = `${id}-error`
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-serif text-lg text-maroon"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        max={max}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full rounded-lg border bg-background px-4 py-3 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold',
          error ? 'border-destructive' : 'border-input',
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
