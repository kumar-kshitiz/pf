'use client'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'skills',    label: 'Skills' },
  { id: 'projects',  label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const y = window.scrollY + 120
      let cur = 'home'
      LINKS.forEach((l) => {
        const el = document.getElementById(l.id)
        if (el && el.offsetTop <= y) cur = l.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => goTo('home')}
          className="font-display text-base sm:text-lg font-bold tracking-tight uppercase text-white hover:text-amber-500 transition-colors"
        >
          KK<span className="text-amber-500">.</span>
          <span className="text-gray-500 text-xs ml-2 font-mono-body normal-case font-normal">/portfolio</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className={`px-3 py-2 text-xs font-mono-body uppercase tracking-[0.18em] transition-colors ${
                active === l.id ? 'text-amber-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-gray-600 mr-1.5 text-[10px]">0{i + 1}.</span>
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo('contact')}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black text-xs font-mono-body uppercase tracking-[0.2em] font-semibold btn-amber"
        >
          Hire Me <span className="blink">_</span>
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-left px-3 py-3 text-sm font-mono-body uppercase tracking-[0.18em] text-gray-300 hover:text-amber-500 hover:bg-white/5"
              >
                <span className="text-gray-600 mr-2">0{i + 1}.</span>{l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
