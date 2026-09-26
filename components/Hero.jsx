'use client'
import { ArrowDown, MapPin } from 'lucide-react'
import { PROFILE, HERO_BACKGROUND } from '../lib/data'
import useReveal from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BACKGROUND})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-24 sm:pt-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-3 sm:gap-5 border border-white/10 bg-black/35 px-4 sm:px-6 py-3 sm:py-4 font-mono-body uppercase tracking-[0.24em] text-[9px] sm:text-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_30px_rgba(245,158,11,0.08)] backdrop-blur-sm">
          <span className="flex items-center gap-2 text-white/90">
            <MapPin size={16} className="text-amber-500" />
            <span className="text-gray-200">{PROFILE.location}</span>
          </span>
          <span className="hidden sm:inline text-gray-200">
            <span className="text-amber-500">●</span> Available for opportunities
          </span>
          <span className="text-gray-300">© 2026 / v1.0</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 lg:pt-32 pb-24">
        <div className="reveal" style={{ animationDelay: '0.05s' }}>
          <p className="text-xs sm:text-sm font-mono-body uppercase tracking-[0.4em] text-amber-500 mb-6">
            // {PROFILE.title}
          </p>
        </div>

        <h1
          className="reveal font-display text-[14vw] sm:text-[10vw] lg:text-[9rem] xl:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] text-white"
          style={{ animationDelay: '0.15s' }}
        >
          {PROFILE.firstName}{' '}<br />
          <span className="text-amber-500">{PROFILE.lastName}.</span>
        </h1>

        <div className="reveal mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end" style={{ animationDelay: '0.3s' }}>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-mono-body leading-relaxed max-w-2xl">
              <span className="text-amber-500">&gt;</span> Engineering{' '}
              <span className="text-white">AI-driven</span> products &amp; scalable full-stack systems — from{' '}
              <span className="text-white">RAG pipelines</span> to <span className="text-white">browser automation</span>.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end space-y-3 w-full">
            <a
              href="#projects"
              className="w-full lg:w-auto inline-flex items-center justify-between gap-6 px-6 py-4 bg-amber-500 text-black font-mono-body text-xs uppercase tracking-[0.25em] font-semibold btn-amber"
            >
              View Projects <span>→</span>
            </a>
            <a
              href="#contact"
              className="w-full lg:w-auto inline-flex items-center justify-between gap-6 px-6 py-4 bg-transparent text-white border border-white/30 hover:border-amber-500 hover:text-amber-500 transition-colors font-mono-body text-xs uppercase tracking-[0.25em] font-semibold"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors"
      >
        <span className="text-[10px] font-mono-body uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
