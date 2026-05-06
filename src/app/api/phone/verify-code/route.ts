import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

const client = twilio(
process.env.TWILIO_ACCOUNT_SID!,
process.env.TWILIO_AUTH_TOKEN!
)

export async function POST(req: NextRequest) {
try {
const { phone, code } = await req.json()

if (!phone || !code) {
return NextResponse.json({ success: false, error: 'Phone and code required' }, { status: 400 })
}

// Ensure + prefix
const formattedPhone = phone.startsWith('+') ? phone : '+' + phone

const verification = await client.verify.v2
.services(process.env.TWILIO_VERIFY_SERVICE_SID!)
.verificationChecks
.create({ to: formattedPhone, code })

if (verification.status === 'approved') {
return NextResponse.json({ success: true })
} else {
return NextResponse.json({ success: false, error: 'Invalid code' })
}

} catch (error: any) {
return NextResponse.json({ success: false, error: error.message }, { status: 500 })
}
}
