// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'
const ADMIN_PIN = '749251'

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { pin, token } = await request.json()

  // Verify PIN
  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }

  // Verify session token belongs to Randy
  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user || user.id !== ADMIN_ID) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  return NextResponse.json({ success: true })
}
