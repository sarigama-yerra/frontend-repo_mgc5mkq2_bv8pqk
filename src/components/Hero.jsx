import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Modern fintech infrastructure</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
            Financial rails for digital commerce
          </h1>
          <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
            Accept payments, issue cards, and move money globally with a single, unified platform designed for scalability and speed.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
              Start building
            </a>
            <a href="#docs" className="inline-flex items-center rounded-xl bg-slate-900/60 text-white ring-1 ring-white/15 px-5 py-3 text-sm font-semibold hover:bg-slate-900/80 transition-colors">
              View docs
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300/80">
            <div>
              <div className="text-2xl font-semibold text-white">99.99%</div>
              <div className="text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">180+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">7 days</div>
              <div className="text-sm">to go live</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">PCI-DSS</div>
              <div className="text-sm">Level 1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
