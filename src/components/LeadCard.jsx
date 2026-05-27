function StatusPill({ status }) {
  const base =
    'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1'

  if (status === 'Booked') {
    return (
      <span
        className={`${base} bg-emerald-500/10 text-emerald-300 ring-emerald-500/50`}
      >
        Booked
      </span>
    )
  }
  if (status === 'Contacted') {
    return (
      <span
        className={`${base} bg-sky-500/10 text-sky-300 ring-sky-500/50`}
      >
        Contacted
      </span>
    )
  }
  if (status === 'Lost') {
    return (
      <span
        className={`${base} bg-slate-700/40 text-slate-300 ring-slate-500/50`}
      >
        Lost
      </span>
    )
  }
  return (
    <span
      className={`${base} bg-violet-500/10 text-violet-200 ring-violet-500/50`}
    >
      New
    </span>
  )
}

function UrgencyPill({ urgency }) {
  const base =
    'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1'

  if (urgency === 'High') {
    return (
      <span
        className={`${base} bg-rose-500/10 text-rose-300 ring-rose-500/50`}
      >
        High urgency
      </span>
    )
  }
  if (urgency === 'Medium') {
    return (
      <span
        className={`${base} bg-amber-500/10 text-amber-200 ring-amber-500/50`}
      >
        Medium urgency
      </span>
    )
  }
  return (
    <span
      className={`${base} bg-emerald-500/10 text-emerald-200 ring-emerald-500/50`}
    >
      Low urgency
    </span>
  )
}

function LeadCard({ lead, onUpdateStatus }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 shadow-lg shadow-slate-950/50">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-50">
            {lead.fullName}
          </h3>
          <p className="mt-0.5 text-xs text-slate-400">
            {lead.cleaningType || 'Cleaning request'} ·{' '}
            {lead.propertySize || 'Property size not specified'}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <StatusPill status={lead.status} />
          <UrgencyPill urgency={lead.urgency} />
        </div>
      </div>

      <div className="grid gap-2 rounded-xl border border-slate-800/70 bg-slate-950/60 p-3 text-xs text-slate-300 sm:grid-cols-2">
        <p className="leading-relaxed">
          <span className="text-slate-500">Preferred date:</span>{' '}
          {lead.preferredDate || 'Flexible'}
        </p>
        <p className="break-all leading-relaxed">
          <span className="text-slate-500">Contact:</span>{' '}
          {lead.email || lead.phone
            ? `${lead.email || ''}${lead.email && lead.phone ? ' · ' : ''}${lead.phone || ''}`
            : 'Not provided'}
        </p>
      </div>

      <div className="space-y-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] p-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
          AI summary
        </p>
        <p className="text-xs leading-relaxed text-slate-100">{lead.summary}</p>
      </div>

      <div className="space-y-1.5 rounded-xl border border-slate-800/70 bg-slate-950/60 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Original message
        </p>
        <p className="text-xs leading-relaxed text-slate-300">
          {lead.message || 'No additional notes from customer.'}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800/70 pt-3">
        {['New', 'Contacted', 'Booked', 'Lost'].map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onUpdateStatus(lead.id, status)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
              lead.status === status
                ? 'bg-slate-100 text-slate-950'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </article>
  )
}

export default LeadCard

