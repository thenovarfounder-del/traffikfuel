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
const { phone, userId } = await req.json()

if (!phone || !userId) {
return NextResponse.json({ error: 'Phone and userId required' }, { status: 400 })
}

await client.verify.v2
.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
.verifications.create({ to: phone, channel: 'sms' })

return NextResponse.json({ success: true })
} catch (error: any) {
return NextResponse.json({ error: error.message }, { status: 500 })
}
}
