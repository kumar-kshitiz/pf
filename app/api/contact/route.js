import { NextResponse } from 'next/server'
import { connectDB } from '../../../lib/mongoose'
import { ContactMessage } from '../../../lib/models'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, subject = '', message } = body

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    if (!email?.trim() || !email.includes('@')) return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    if (!message?.trim()) return NextResponse.json({ error: 'Message is required' }, { status: 400 })

    await connectDB()
    const doc = await ContactMessage.create({ name, email, subject, message })

    return NextResponse.json({
      id: doc._id,
      name: doc.name,
      email: doc.email,
      subject: doc.subject,
      message: doc.message,
      created_at: doc.created_at,
    }, { status: 201 })
  } catch (err) {
    console.error('Contact POST error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const rows = await ContactMessage.find({}).sort({ created_at: -1 }).limit(500).lean()
    return NextResponse.json(rows)
  } catch (err) {
    console.error('Contact GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
