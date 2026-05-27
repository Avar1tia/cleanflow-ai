function FeatureCard({ title, description }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/80 p-5 shadow-lg shadow-slate-950/40 transition hover:-translate-y-0.5 hover:border-emerald-400/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 transition group-hover:bg-emerald-400/15">
        <span className="text-xs font-semibold text-emerald-200">AI</span>
      </div>
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-400">{description}</p>
    </article>
  )
}

export default FeatureCard

