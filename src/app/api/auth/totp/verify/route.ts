import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import * as OTPLib from "otplib"

export async function POST(req: NextRequest) {
  const { user_id, token } = await req.json()
  if (!user_id || !token) return NextResponse.json({ error: "Missing fields" }, { status: 400 })

  const { data: profile } = await supabase.from("profiles").select("totp_secret").eq("id", user_id).single()
  if (!profile?.totp_secret) return NextResponse.json({ error: "TOTP not set up" }, { status: 400 })

  const valid = OTPLib.totp.verify({ token, secret: profile.totp_secret })
  if (!valid) return NextResponse.json({ error: "Invalid code" }, { status: 401 })

  await supabase.from("profiles").update({ totp_enabled: true }).eq("id", user_id)

  return NextResponse.json({ success: true })
}
