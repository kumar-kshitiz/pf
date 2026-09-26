import { NextResponse } from 'next/server'
import { sendContactEmail } from '../../../lib/mail'

export const runtime = 'nodejs'

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid contact form' }, { status: 400 })
  }
  const limits = { name: 120, email: 200, subject: 200, message: 4000 }
  const contact = {}
  for (const [field, limit] of Object.entries(limits)) {
    const value = body[field] ?? (field === 'subject' ? '' : null)
    if (typeof value !== 'string' || (field !== 'subject' && !value.trim()) || value.length > limit) {
      return NextResponse.json({ error: `Invalid ${field} (maximum ${limit} characters)` }, { status: 400 })
    }
    contact[field] = value.trim()
  }
  if (!/^[^\s@<>;,]+@[^\s@<>;,]+\.[^\s@<>;,]+$/.test(contact.email) ||
      /[\r\n]/.test(contact.name + contact.subject)) {
    return NextResponse.json({ error: 'Enter a valid email, name, and subject' }, { status: 400 })
  }
  try {
    await sendContactEmail(contact)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email failed:', err.code || 'MAIL_DELIVERY_FAILED')
    return NextResponse.json({ error: 'Could not send message. Please try again or use the email link.' }, { status: 503 })
  }
}
