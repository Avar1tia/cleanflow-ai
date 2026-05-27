import LeadCard from './LeadCard.jsx'

function AdminDashboard({ leads, onUpdateStatus }) {
  const highUrgency = leads.filter((l) => l.urgency === 'High').length
  const newLeads = leads.filter((l) => l.status === 'New').length
  const bookedLeads = leads.filter((l) => l.status === 'Booked').length

  return (
    <section className="space-y-7">
      <header className="rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-6 shadow-xl shadow-slate-950/50 md:p-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              Pipeline overview
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              CleanFlow AI lead dashboard
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
              Review incoming requests with AI summaries, urgency signals, and a
              simple status pipeline designed to feel like a real SaaS operator
              console.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-100">
            <p className="uppercase tracking-[0.14em] text-emerald-300">
              Conversion pulse
            </p>
            <p className="mt-1 text-sm font-semibold">
              {leads.length === 0
                ? 'No data yet'
                : `${Math.round((bookedLeads / leads.length) * 100)}% booked`}
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
            Total leads
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {leads.length}
          </p>
        </div>
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-violet-300">
            New leads
          </p>
          <p className="mt-2 text-2xl font-semibold text-violet-100">
            {newLeads}
          </p>
        </div>
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-rose-300">
            High urgency
          </p>
          <p className="mt-2 text-2xl font-semibold text-rose-100">
            {highUrgency}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-300">
            Booked jobs
          </p>
          <p className="mt-2 text-2xl font-semibold text-emerald-100">
            {bookedLeads}
          </p>
        </div>
      </div>

      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-100">
            Active lead cards
          </h2>
          <p className="text-sm text-slate-400">
            Update statuses as you qualify, contact, and book each lead.
          </p>
        </div>
        <div className="text-xs text-slate-500">
          Sorted by latest created in local state
        </div>
      </header>

      {leads.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-8 text-center text-sm text-slate-400">
          No leads yet. Use the landing page form to simulate incoming
          cleaning requests and see them appear here in real time.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {leads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onUpdateStatus={onUpdateStatus}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default AdminDashboard

