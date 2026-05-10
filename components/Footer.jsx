import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-tight text-white">
            Kshitiz Kumar<span className="text-amber-500">.</span>
          </p>
          <p className="mt-1 text-[10px] font-mono-body uppercase tracking-[0.25em] text-gray-500">
            © {year} — Built with Next.js + MongoDB
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
            <Mail size={16} />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
