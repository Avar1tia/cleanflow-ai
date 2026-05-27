import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import LeadForm from './components/LeadForm.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import { mockLeads } from './data/mockLeads.js'

function App() {
  const [view, setView] = useState('landing') // 'landing' | 'admin'
  const [leads, setLeads] = useState(mockLeads)

  const handleAddLead = (newLead) => {
    setLeads((prev) => [newLead, ...prev])
  }

  const handleUpdateLeadStatus = (id, status) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    )
  }

  const heroCtaHandler = useMemo(
    () => () => {
      const el = document.getElementById('lead-form')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [],
  )

  const featureCards = [
    {
      title: 'Smart lead summaries',
      description:
        'Instantly condense verbose customer messages into a clear, actionable brief your team can scan in seconds.',
    },
    {
      title: 'Urgency detection',
      description:
        'Highlight last-minute move-outs, emergency deep cleans, and time-sensitive jobs before they slip away.',
    },
    {
      title: 'Simple dashboard',
      description:
        'Track every new request from first contact to booked job in a clean, focused lead pipeline.',
    },
    {
      title: 'Faster follow-ups',
      description:
        'See who to call next, with contact details, channel, and context one click away.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_58%)]" />
      <Navbar currentView={view} onChangeView={setView} />

      {view === 'landing' && (
        <main className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-20 pt-8 md:px-8 md:pt-10 lg:pt-14">
          <section className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)] lg:items-stretch">
            <HeroSection onCtaClick={heroCtaHandler} />

            <aside className="rounded-[2rem] border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-5 shadow-xl shadow-slate-950/60 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Dashboard preview
                </p>
                <span className="rounded-full border border-slate-700/80 bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
                  Live demo data
                </span>
              </div>
              <div className="space-y-3">
                {leads.slice(0, 3).map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                      <span className="font-medium text-slate-100">
                        {lead.fullName}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          lead.urgency === 'High'
                            ? 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/40'
                            : lead.urgency === 'Medium'
                              ? 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40'
                              : 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40'
                        }`}
                      >
                        {lead.urgency} urgency
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {lead.summary}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-900/70 p-3 text-xs text-slate-400">
                <span className="text-slate-200">Tip:</span> submit the form
                below, then open <span className="text-slate-200">Admin</span>{' '}
                to manage status workflow.
              </div>
            </aside>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </section>

          <section
            id="lead-form"
            className="rounded-[2rem] border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-xl shadow-slate-950/60 backdrop-blur md:p-8"
          >
            <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Capture a new cleaning lead
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                  Test the{' '}
                  <span className="inline-flex items-center gap-1.5 align-middle">
                    <span>CleanFlow</span>
                    <span className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-teal-300 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-slate-950 ring-1 ring-emerald-200/60">
                      AI
                    </span>
                  </span>{' '}
                  intake flow
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                  Submit a fake request and watch it appear in the dashboard as
                  a structured, summarized lead.
                </p>
              </div>
              <div className="mt-1 rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-400 md:text-right">
                <p className="font-medium text-slate-200">
                  No backend. No real emails.
                </p>
                <p className="text-xs text-slate-500">
                  This is a portfolio demo running entirely in your browser.
                </p>
              </div>
            </div>

            <LeadForm onAddLead={handleAddLead} />
          </section>
        </main>
      )}

      {view === 'admin' && (
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 md:px-8 lg:pt-12">
          <AdminDashboard leads={leads} onUpdateStatus={handleUpdateLeadStatus} />
        </main>
      )}
    </div>
  )
}

export default App
