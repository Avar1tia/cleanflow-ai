import { useState } from 'react'
import { generateLeadSummary } from '../utils/generateLeadSummary.js'

function computeUrgency(preferredDate, message) {
  const text = (message || '').toLowerCase()

  if (
    text.includes('urgent') ||
    text.includes('asap') ||
    text.includes('emergency') ||
    text.includes('tomorrow')
  ) {
    return 'High'
  }

  if (
    text.includes('this week') ||
    text.includes('soon') ||
    text.includes('next week')
  ) {
    return 'Medium'
  }

  if (preferredDate) {
    const today = new Date()
    const preferred = new Date(preferredDate)
    const diffDays = (preferred - today) / (1000 * 60 * 60 * 24)
    if (diffDays <= 3) return 'High'
    if (diffDays <= 10) return 'Medium'
  }

  return 'Low'
}

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  cleaningType: '',
  propertySize: '',
  preferredDate: '',
  message: '',
}

function LeadForm({ onAddLead }) {
  const [form, setForm] = useState(initialFormState)
  const inputClassName =
    'w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none ring-emerald-400/60 placeholder:text-slate-500 transition focus:border-emerald-300 focus:ring-2'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = form.fullName.trim()
    if (!trimmedName) return

    const summary = generateLeadSummary({
      fullName: trimmedName,
      cleaningType: form.cleaningType || 'General clean',
      propertySize: form.propertySize || 'home',
      preferredDate: form.preferredDate || 'flexible',
      message: form.message,
    })

    const urgency = computeUrgency(form.preferredDate, form.message)

    const newLead = {
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
      fullName: trimmedName,
      email: form.email.trim(),
      phone: form.phone.trim(),
      cleaningType: form.cleaningType || 'General clean',
      propertySize: form.propertySize,
      preferredDate: form.preferredDate,
      message: form.message,
      summary,
      urgency,
      status: 'New',
    }

    onAddLead(newLead)
    setForm(initialFormState)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-6"
    >
      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="fullName"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={handleChange}
          placeholder="e.g. Alex Rivera"
          className={inputClassName}
        />
      </div>

      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClassName}
        />
      </div>

      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="phone"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className={inputClassName}
        />
      </div>

      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="cleaningType"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Cleaning type
        </label>
        <select
          id="cleaningType"
          name="cleaningType"
          value={form.cleaningType}
          onChange={handleChange}
          className={inputClassName}
        >
          <option value="">Select an option</option>
          <option value="Deep clean">Deep clean</option>
          <option value="Standard clean">Standard clean</option>
          <option value="Move-in / move-out">Move-in / move-out</option>
          <option value="Post-renovation clean">Post-renovation clean</option>
          <option value="Recurring weekly clean">Recurring weekly clean</option>
          <option value="Commercial / studio clean">
            Commercial / studio clean
          </option>
        </select>
      </div>

      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="propertySize"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Property size
        </label>
        <input
          id="propertySize"
          name="propertySize"
          type="text"
          value={form.propertySize}
          onChange={handleChange}
          placeholder="e.g. 2 bed / 1 bath apartment"
          className={inputClassName}
        />
      </div>

      <div className="space-y-1.5 lg:col-span-2">
        <label
          htmlFor="preferredDate"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Preferred date
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={form.preferredDate}
          onChange={handleChange}
          className={inputClassName}
        />
      </div>

      <div className="space-y-1.5 lg:col-span-6">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.08em] text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you need cleaned, any timing constraints, pets, parking notes, or special requests."
          className={`${inputClassName} min-h-[120px] resize-y`}
        />
      </div>

      <div className="flex flex-col gap-2 lg:col-span-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-xs text-slate-500">
          Submitting creates a local demo lead with AI summary and urgency.
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 md:w-auto"
        >
          Add demo lead to dashboard
        </button>
      </div>
    </form>
  )
}

export default LeadForm

