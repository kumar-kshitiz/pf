'use client'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../lib/data'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 03 — Selected work</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              Featured<br />Projects.
            </h2>
          </div>
          <p className="max-w-md text-sm font-mono-body text-gray-400">
            A curated set of products &amp; systems — spanning AI/RAG, automation and full-stack platforms.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <article key={p.id} className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 hover:border-amber-500/60 transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono-body uppercase tracking-[0.25em] text-amber-500">
                  {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-[10px] font-mono-body uppercase tracking-[0.25em] text-gray-500 mb-1">{p.subtitle}</p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors">{p.name}</h3>
                  </div>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-amber-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>

                <ul className="mt-4 space-y-2 text-sm font-mono-body text-gray-400 leading-relaxed">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-amber-500 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-5 border-t border-white/10">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-mono-body uppercase tracking-[0.15em] text-gray-300 bg-white/5 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
