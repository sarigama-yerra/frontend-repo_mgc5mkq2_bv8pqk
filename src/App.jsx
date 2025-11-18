import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Finviance Inc.</div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-200">Privacy</a>
            <a href="#terms" className="hover:text-slate-200">Terms</a>
            <a href="#status" className="hover:text-slate-200">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
