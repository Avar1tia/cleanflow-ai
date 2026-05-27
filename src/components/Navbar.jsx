function Navbar({ currentView, onChangeView }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40">
            <span className="text-xs font-semibold text-emerald-300">CF</span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-slate-50">
              <span>CleanFlow</span>
              <span className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-teal-300 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-slate-950 ring-1 ring-emerald-200/60">
                AI
              </span>
            </span>
            <span className="text-[11px] text-slate-500">
              Lead assistant for cleaners
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-2 text-xs md:text-sm">
          <button
            type="button"
            onClick={() => onChangeView('landing')}
            className={`rounded-full px-3 py-1.5 font-medium transition ${
              currentView === 'landing'
                ? 'bg-slate-800 text-slate-50 shadow-sm shadow-slate-950/40'
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            Landing
          </button>
          <button
            type="button"
            onClick={() => onChangeView('admin')}
            className={`rounded-full px-3 py-1.5 font-medium transition ${
              currentView === 'admin'
                ? 'bg-slate-800 text-slate-50 shadow-sm shadow-slate-950/40'
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'
            }`}
          >
            Admin
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

