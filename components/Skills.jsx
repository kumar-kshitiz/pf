'use client'
import { SKILLS } from '../lib/data'
import useReveal from '../hooks/useReveal'

export default function Skills() {
  const ref = useReveal()
  const all = SKILLS.flatMap((s) => s.items)

  return (
    <section id="skills" ref={ref} className="relative py-24 sm:py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 02 — Stack</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              Technical<br />Skills.
            </h2>
          </div>
          <p className="max-w-md text-sm font-mono-body text-gray-400">
            Languages, frameworks and tooling I rely on day-to-day to ship production-grade software.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {SKILLS.map((cat, i) => (
            <div key={cat.label} className="group bg-[#0a0a0a] p-6 sm:p-8 hover:bg-[#101010] transition-colors">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight">{cat.label}</h3>
                <span className="text-[10px] font-mono-body uppercase tracking-[0.25em] text-gray-600">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span key={it} className="px-3 py-1.5 text-xs font-mono-body text-gray-300 border border-white/10 bg-black/40 group-hover:border-amber-500/40 transition-colors">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-white/10 py-6 bg-black">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...all, ...all].map((s, i) => (
            <span key={`${s}-${i}`} className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white/30">
              {s} <span className="text-amber-500">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
