import { NextResponse } from 'next/server'
import { PROFILE } from '../../../lib/data'

export async function GET() {
  return NextResponse.json(PROFILE)
}
