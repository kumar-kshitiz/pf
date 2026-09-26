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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          aria-label="Kshitiz Kumar home"
          className="font-display text-base sm:text-lg font-bold tracking-tight uppercase text-white hover:text-amber-500 transition-colors"
        >
          KK<span className="text-amber-500">.</span>
          <span className="text-gray-500 text-xs ml-2 font-mono-body normal-case font-normal">/portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono-body uppercase tracking-[0.18em] transition-all duration-200 ${
                active === l.id
                  ? 'text-amber-400 border border-amber-400/90 bg-black/20 shadow-[0_0_12px_rgba(251,191,36,0.7),0_0_24px_rgba(251,191,36,0.3)] drop-shadow-[0_0_14px_rgba(251,191,36,0.8)]'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={
                active === l.id
                  ? {
                      clipPath: 'polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)',
                      WebkitClipPath: 'polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)',
                    }
                  : undefined
              }
            >
              <span className={`mr-1.5 text-[10px] ${active === l.id ? 'text-amber-400' : 'text-gray-600'}`}>0{i + 1}.</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black text-xs font-mono-body uppercase tracking-[0.2em] font-semibold btn-amber"
        >
          Hire Me <span className="blink">_</span>
        </a>

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
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`text-left px-3 py-3 text-sm font-mono-body uppercase tracking-[0.18em] transition-all ${
                  active === l.id
                    ? 'text-amber-400 border border-amber-400/80 bg-black/30 shadow-[0_0_14px_rgba(251,191,36,0.4)]'
                    : 'text-gray-300 hover:text-amber-500 hover:bg-white/5'
                }`}
                style={
                  active === l.id
                    ? {
                        clipPath: 'polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)',
                        WebkitClipPath: 'polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)',
                      }
                    : undefined
                }
              >
                <span className={`mr-2 ${active === l.id ? 'text-amber-400' : 'text-gray-600'}`}>0{i + 1}.</span>{l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
