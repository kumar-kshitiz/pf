import { NextResponse } from 'next/server'
import { connectDB } from '../../../lib/mongoose'
import { StatusCheck } from '../../../lib/models'

export async function POST(req) {
  try {
    const { client_name } = await req.json()
    if (!client_name) return NextResponse.json({ error: 'client_name required' }, { status: 400 })

    await connectDB()
    const doc = await StatusCheck.create({ client_name })
    return NextResponse.json({ id: doc._id, client_name: doc.client_name, timestamp: doc.timestamp }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const rows = await StatusCheck.find({}).sort({ timestamp: -1 }).limit(1000).lean()
    return NextResponse.json(rows)
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
