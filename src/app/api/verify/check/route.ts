// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { phone, code } = await req.json()
  if (!phone || !code) return NextResponse.json({ error: 'Phone and code required' }, { status: 400 })

  const twilio = require('twilio')
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

  try {
    const result = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phone, code })
    if (result.status === 'approved') {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Invalid code' }, { status: 400 })
    }
  } catch (err) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
