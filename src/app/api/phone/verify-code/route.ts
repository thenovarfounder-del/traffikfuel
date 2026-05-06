import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import twilio from 'twilio'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { user_id, code } = await req.json()

    const { data: security } = await supabaseAdmin
      .from('user_security_settings')
      .select('phone')
      .eq('user_id', user_id)
      .single()

    if (!security?.phone) {
      return NextResponse.json({ success: false, error: 'Phone not found' })
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: security.phone, code: code })

    if (verification.status === 'approved') {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: 'Invalid code' })
    }

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}