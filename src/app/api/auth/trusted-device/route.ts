import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  const { user_id } = await req.json()
  if (!user_id) return NextResponse.json({ error: "Missing user_id" }, { status: 400 })

  const token = crypto.randomBytes(32).toString("hex")
  const cookieStore = cookies()

  cookieStore.set("trusted_device", `${user_id}:${token}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  })

  return NextResponse.json({ success: true })
}

export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const cookie = cookieStore.get("trusted_device")
  if (!cookie) return NextResponse.json({ trusted: false })

  const [user_id] = cookie.value.split(":")
  return NextResponse.json({ trusted: true, user_id })
}
