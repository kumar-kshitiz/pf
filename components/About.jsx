'use client'
import { ABOUT, PROFILE } from '../lib/data'
import useReveal from '../hooks/useReveal'

const STATS = [
  { v: '450+', k: 'DSA solved' },
  { v: '1615',  k: 'LeetCode peak' },
  { v: '1515',  k: 'CodeChef peak' },
  { v: '4+',    k: 'AI/Full-stack projects' },
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 01 — About</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              The<br />Engineer.
            </h2>
            <div className="mt-8 hidden lg:block border-l-2 border-amber-500 pl-4">
              <p className="text-xs font-mono-body uppercase tracking-[0.2em] text-gray-500">Currently</p>
              <p className="mt-1 text-sm text-gray-300 font-mono-body">B.Tech CSE @ IIIT Nagpur</p>
              <p className="text-sm text-gray-300 font-mono-body">Open to SDE / AI Engineer roles</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-mono-body">{ABOUT}</p>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {STATS.map((s) => (
                <div key={s.k} className="bg-[#0a0a0a] p-5 sm:p-6 hover:bg-[#121212] transition-colors">
                  <dt className="font-display text-2xl sm:text-3xl font-bold text-white">{s.v}</dt>
                  <dd className="mt-1 text-[10px] sm:text-xs font-mono-body uppercase tracking-[0.2em] text-gray-500">{s.k}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono-body text-gray-400 uppercase tracking-[0.2em]">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-amber-500 transition-colors">✉ {PROFILE.email}</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">↗ github/{PROFILE.githubHandle}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">↗ linkedin/{PROFILE.linkedinHandle}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
