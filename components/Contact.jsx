'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react'
import { PROFILE } from '../lib/data'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onChange = (k) => (ev) => setForm((p) => ({ ...p, [k]: ev.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success("Message sent — I'll get back to you soon.")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Could not send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const links = [
    { icon: Mail,     label: PROFILE.email,                      href: `mailto:${PROFILE.email}` },
    { icon: Phone,    label: PROFILE.phone,                      href: `tel:${PROFILE.phone.replace(/\s+/g, '')}` },
    { icon: Github,   label: `github/${PROFILE.githubHandle}`,   href: PROFILE.github },
    { icon: Linkedin, label: `linkedin/${PROFILE.linkedinHandle}`, href: PROFILE.linkedin },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono-body uppercase tracking-[0.3em] text-amber-500">// 06 — Contact</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              Let&apos;s<br />build.
            </h2>
            <p className="mt-6 text-base font-mono-body text-gray-400 leading-relaxed max-w-md">
              Open to internships, full-time SDE roles, and interesting AI/full-stack collaborations. Drop a line — I respond within 24 hours.
            </p>
            <ul className="mt-10 space-y-3">
              {links.map((l) => {
                const Icon = l.icon
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 py-3 border-b border-white/10 hover:border-amber-500 transition-colors"
                    >
                      <Icon size={16} className="text-amber-500 shrink-0" />
                      <span className="text-sm font-mono-body text-gray-300 group-hover:text-white transition-colors">{l.label}</span>
                      <span className="ml-auto text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="bg-[#0a0a0a] border border-white/10 p-6 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field id="name" label="Name *" value={form.name} onChange={onChange('name')} error={errors.name} placeholder="Your full name" />
                <Field id="email" label="Email *" type="email" value={form.email} onChange={onChange('email')} error={errors.email} placeholder="you@domain.com" />
              </div>
              <Field id="subject" label="Subject" value={form.subject} onChange={onChange('subject')} placeholder="(optional) what's this about?" />
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono-body uppercase tracking-[0.3em] text-gray-500 mb-2">Message *</label>
                <textarea
                  id="message" rows={5} value={form.message} onChange={onChange('message')}
                  placeholder="Tell me about your project, role, or idea…"
                  className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 outline-none text-white font-mono-body text-sm py-3 resize-none transition-colors placeholder:text-gray-600"
                />
                {errors.message && <p className="mt-1 text-xs font-mono-body text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit" disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 disabled:bg-amber-500/50 disabled:cursor-not-allowed text-black font-mono-body text-xs uppercase tracking-[0.25em] font-semibold btn-amber"
              >
                {submitting ? 'Sending…' : 'Send message'} <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] font-mono-body uppercase tracking-[0.3em] text-gray-500 mb-2">{label}</label>
      <input
        id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 outline-none text-white font-mono-body text-sm py-3 transition-colors placeholder:text-gray-600"
      />
      {error && <p className="mt-1 text-xs font-mono-body text-red-500">{error}</p>}
    </div>
  )
}
