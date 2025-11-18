function CTA() {
  return (
    <section id="get-started" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-emerald-500/15 p-8 sm:p-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Launch your fintech faster</h3>
            <p className="mt-3 text-slate-200/90">Use our developer-first platform to go from idea to production in days, not months.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
                Create account
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900/60 text-white ring-1 ring-white/15 px-5 py-3 text-sm font-semibold hover:bg-slate-900/80 transition-colors">
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
