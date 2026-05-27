function HeroSection({ onCtaClick }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-emerald-500/15 via-slate-900/90 to-slate-950 p-6 shadow-2xl shadow-slate-950/60 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Built as a portfolio-ready SaaS demo
        </div>

        <div className="space-y-4">
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI Lead Assistant for Cleaning Businesses
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Collect requests, summarize leads, detect urgency, and respond
            faster with a premium intake flow and an operator-friendly pipeline.
          </p>
        </div>

        <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            AI summaries for every incoming request
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Urgency flags for faster prioritization
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Clear status workflow from new to booked
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Built to showcase polished SaaS UX
          </li>
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Try the lead form
          </button>
          <p className="text-xs text-slate-300">
            No backend. No API keys. Everything runs in local React state.
          </p>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-3 text-xs text-slate-300 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Response time
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">
              38% faster
            </p>
          </div>
          <div className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Lead coverage
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">100%</p>
          </div>
          <div className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Missed leads
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">Reduced</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

