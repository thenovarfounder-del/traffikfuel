// @ts-nocheck
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as any
  const next = searchParams.get('next') || '/onboarding'

  if (token_hash && type) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabase.auth.verifyOtp({ type, token_hash })

    if (!error) {
      // Fire welcome email after successful verification
      try {
        const user = data?.user
        if (user?.email) {
          const name = user.user_metadata?.full_name || ''
          await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.traffikora.com'}/api/email/welcome`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, name })
          })
        }
      } catch (e) {
        // Non-blocking — don't fail verification if email fails
        console.error('Welcome email failed:', e)
      }

      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
