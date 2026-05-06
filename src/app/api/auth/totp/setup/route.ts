import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { authenticator } from "otplib"
import QRCode from "qrcode"

export async function POST(req: NextRequest) {
const { user_id } = await req.json()
if (!user_id) return NextResponse.json({ error: "Missing user_id" }, { status: 400 })

const secret = authenticator.generateSecret()
const otpauth = authenticator.keyuri(user_id, "TraffikFuel", secret)
const qrCode = await QRCode.toDataURL(otpauth)

await supabase.from("profiles").update({ totp_secret: secret, totp_enabled: false }).eq("id", user_id)

return NextResponse.json({ secret, qrCode })
}
