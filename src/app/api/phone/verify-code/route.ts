import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'
import { createClient } from '@supabase/supabase-js'

const client = twilio(
process.env.TWILIO_ACCOUNT_SID!,
process.env.TWILIO_AUTH_TOKEN!
)

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
try {
const { phone, code, userId } = await req.json()

if (!phone || !code || !userId) {
return NextResponse.json({ error: 'Phone, code, and userId required' }, { status: 400 })
}

const verification = await client.verify.v2
.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
.verificationChecks.create({ to: phone, code })

if (verification.status !== 'approved') {
return NextResponse.json({ error: 'Invalid code' }, { status: 400 })
}

const crypto = require('crypto')
const hashedPhone = crypto.createHash('sha256').update(phone).digest('hex')

await supabase
.from('user_security_settings')
.upsert({
user_id: userId,
phone_verified: true,
hashed_phone: hashedPhone
}, { onConflict: 'user_id' })

return NextResponse.json({ success: true })
} catch (error: any) {
return NextResponse.json({ error: error.message }, { status: 500 })
}
}
