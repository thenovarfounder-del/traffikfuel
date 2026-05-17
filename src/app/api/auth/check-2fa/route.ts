import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import twilio from 'twilio'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ has2fa: false })
    }

    const { data: security } = await supabase
      .from('user_security_settings')
      .select('phone_verified, phone, hashed_phone')
      .eq('user_id', userId)
      .single()

    if (security?.phone_verified && (security?.phone || security?.hashed_phone)) {
      let phone = security.phone || security.hashed_phone

      if (!phone.startsWith('+')) {
        phone = '+' + phone
      }

      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID!,
        process.env.TWILIO_AUTH_TOKEN!
      )

      await client.verify.v2
        .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
        .verifications.create({ to: phone, channel: 'sms' })

      return NextResponse.json({ has2fa: true, phone })
    }

    return NextResponse.json({ has2fa: false })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}