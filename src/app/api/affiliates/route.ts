// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const body = await request.json()
  const { name, email, website, social_links, audience_size, how_promote } = body

  const { error } = await supabase.from('affiliate_applications').insert({
    name, email, website, social_links, audience_size, how_promote, status: 'pending'
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Notify Randy
  await resend.emails.send({
    from: 'Traffikora <eva@traffikora.com>',
    to: 'traffikoratest@yahoo.com',
    subject: `New Affiliate Application — ${name}`,
    html: `<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
      <h2 style="color:#E8610A;">New Affiliate Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      <p><strong>Social Links:</strong> ${social_links || 'Not provided'}</p>
      <p><strong>Audience Size:</strong> ${audience_size}</p>
      <p><strong>How they plan to promote:</strong></p>
      <p>${how_promote}</p>
      <a href="https://supabase.com/dashboard/project/ehjhsbrcbtqcvmgzjzkm/editor" style="background:#E8610A;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:16px;">Review in Supabase</a>
    </div>`
  })

  // Confirm to applicant
  await resend.emails.send({
    from: 'Eva at Traffikora <eva@traffikora.com>',
    to: email,
    subject: 'Your Traffikora Affiliate Application — Received!',
    html: `<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
      <div style="background:#111;padding:32px;border-radius:12px;text-align:center;margin-bottom:24px;">
        <p style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
      </div>
      <h2 style="color:#111;">Hi ${name}, we got your application!</h2>
      <p style="color:#555;line-height:1.7;">Thank you for applying to the Traffikora Affiliate Program. We review all applications within 48 hours and will reach out to your email with next steps.</p>
      <p style="color:#555;line-height:1.7;">In the meantime, feel free to start sharing your referral link — you can earn commissions even before becoming an official affiliate partner.</p>
      <p style="color:#888;font-size:13px;margin-top:32px;">Questions? Reply to this email or chat with Eva at traffikora.com</p>
    </div>`
  })

  return NextResponse.json({ success: true })
}
