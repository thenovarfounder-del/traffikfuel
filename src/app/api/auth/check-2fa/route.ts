import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import twilio from 'twilio'

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
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
const phone = security.phone || security.hashed_phone

const client = twilio(
process.env.TWILIO_ACCOUNT_SID!,
process.env.TWILIO_AUTH_TOKEN!
)

try {
await client.verify.v2
.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
.verifications
.create({ to: phone, channel: 'sms' })
} catch (e) {
console.log('Twilio SMS error:', e)
}

return NextResponse.json({
has2fa: true,
phone: phone,
last4: phone.slice(-4)
})
}

return NextResponse.json({ has2fa: false })

} catch (error: any) {
return NextResponse.json({ has2fa: false })
}
}

