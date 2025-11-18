import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold">Fi</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Finviance</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-slate-200/90 hover:text-white transition-colors text-sm">
                {l.name}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
              Get started
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl p-4 space-y-2">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="block px-2 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/10 transition">
                {l.name}
              </a>
            ))}
            <a href="#get-started" className="block text-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
              Get started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
