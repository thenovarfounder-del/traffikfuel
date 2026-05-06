import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import twilio from 'twilio'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { user_id } = await req.json()

    const { data: security, error } = await supabaseAdmin
      .from('user_security_settings')
      .select('phone_verified, phone, hashed_phone')
      .eq('user_id', user_id)
      .single()

    if (error || !security) {
      return NextResponse.json({ requires2fa: false })
    }

    if (security.phone_verified && (security.phone || security.hashed_phone)) {
      const phone = security.phone || security.hashed_phone

      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      )

      try {
        await client.verify.v2
          .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
          .verifications.create({ to: phone, channel: 'sms' })
      } catch (e) {
        console.log('Twilio error:', e)
      }

      return NextResponse.json({
        requires2fa: true,
        last4: phone.slice(-4)
      })
    }

    return NextResponse.json({ requires2fa: false })

  } catch (error: any) {
    return NextResponse.json({ requires2fa: false })
  }
}