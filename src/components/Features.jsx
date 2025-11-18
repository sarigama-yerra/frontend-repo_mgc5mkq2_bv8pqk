function Features() {
  const items = [
    {
      title: 'Card issuing',
      desc: 'Create branded virtual and physical cards with granular controls and real-time spend insights.',
    },
    {
      title: 'Payments',
      desc: 'Accept global payments with intelligent routing, retries, and built-in fraud prevention.',
    },
    {
      title: 'Banking-as-a-service',
      desc: 'Embed accounts, ACH, and money movement into your product with compliant infrastructure.',
    },
    {
      title: 'Commerce tooling',
      desc: 'Subscriptions, invoicing, checkout links, and analytics built to scale with you.',
    },
  ]

  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(59,130,246,0.2),transparent),radial-gradient(600px_200px_at_80%_10%,rgba(99,102,241,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need to build modern finance</h2>
          <p className="mt-3 text-slate-300/90">A complete suite of APIs and dashboards to launch, run, and scale your fintech products.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md hover:bg-slate-900/60 transition-colors">
              <div className="text-white font-medium">{it.title}</div>
              <div className="mt-2 text-sm text-slate-300/90">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
