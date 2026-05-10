'use client'
import { Award, GraduationCap, Trophy } from 'lucide-react'
import { EDUCATION, ACHIEVEMENTS } from '../lib/data'
import useReveal from '../hooks/useReveal'

export default function Timeline() {
  const ref = useReveal()
  return (
    <section id="education" ref={ref} className="relative py-24 sm:py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 04 — Education</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              The<br />Journey.
            </h2>
            <ol className="mt-12 relative border-l border-white/15 pl-8 space-y-10">
              {EDUCATION.map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[37px] top-1 w-3 h-3 bg-amber-500 ring-4 ring-black" />
                  <p className="text-[10px] font-mono-body uppercase tracking-[0.3em] text-amber-500">{e.period}</p>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mt-2 tracking-tight">{e.degree}</h3>
                  <p className="mt-1 text-sm font-mono-body text-gray-400 flex items-center gap-2">
                    <GraduationCap size={14} className="text-amber-500" />{e.institution}
                  </p>
                  <p className="mt-1 text-sm font-mono-body text-gray-300">{e.score}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 05 — Achievements</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">Wins.</h2>
            <ul className="mt-12 space-y-px bg-white/10 border border-white/10">
              {ACHIEVEMENTS.map((a, i) => (
                <li key={i} className="bg-[#0a0a0a] p-5 sm:p-6 hover:bg-[#121212] transition-colors flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 border border-amber-500/40 bg-amber-500/5 flex items-center justify-center">
                    {i === 0 ? <Trophy size={18} className="text-amber-500" /> : <Award size={18} className="text-amber-500" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">{a.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm font-mono-body text-gray-400">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
