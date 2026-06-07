// @ts-nocheck
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

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
      // Send welcome email directly using Resend — no fetch needed
      try {
        const user = data?.user
        if (user?.email) {
          const name = user.user_metadata?.full_name || ''
          const firstName = name ? name.split(' ')[0] : 'there'

          await resend.emails.send({
            from: 'Eva at Traffikora <eva@traffikora.com>',
            to: user.email,
            subject: `Welcome to Traffikora, ${firstName} — you\'re all set ⚡`,
            html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
      <tr>
        <td style="background:#111111;padding:40px;text-align:center;">
          <p style="margin:0;font-family:Georgia,serif;font-size:32px;font-weight:700;color:#ffffff;">Traffik<span style="color:#E8610A;">ora</span></p>
          <p style="margin:10px 0 0;font-size:13px;color:#888888;letter-spacing:2px;text-transform:uppercase;">AI Marketing Automation</p>
        </td>
      </tr>
      <tr>
        <td style="padding:48px 40px 32px;text-align:center;">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Welcome Aboard</p>
          <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;font-weight:700;color:#111111;line-height:1.2;">You\'re in, ${firstName}.<br /><em style="color:#E8610A;">Let\'s get you set up.</em></h1>
          <p style="margin:0 auto;font-size:16px;color:#555555;line-height:1.8;max-width:460px;">Your Traffikora account is ready. In the next 5 minutes, you can have AI working on your marketing 24/7 &mdash; automatically.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:10px;border:1px solid #eeeeee;overflow:hidden;">
            <tr><td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 1</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Complete Your Onboarding</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Tell Traffikora about your business &mdash; your name, industry, city, and platforms. Takes less than 5 minutes.</p>
            </td></tr>
            <tr><td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 2</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Build Your Business Brain</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Paste your website URL and our AI will learn everything about your business automatically.</p>
            </td></tr>
            <tr><td style="padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 3</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Generate Your First Blog Post</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Use your 3 free monthly blog posts to see exactly what Traffikora can do. Real SEO content in seconds.</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://www.traffikora.com/dashboard" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;">Go to Your Dashboard &rarr;</a>
          <p style="margin:16px 0 0;font-size:13px;color:#999999;">Questions? Reply to this email or chat with EVA on the site.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:10px;padding:28px 32px;">
            <tr><td>
              <p style="margin:0 0 20px;font-size:16px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">Your free plan includes:</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;3 AI blog posts per month</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Access to your content dashboard</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Business Brain AI profile builder</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;EVA &mdash; your AI marketing guide</p>
              <p style="margin:0;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Upgrade anytime &mdash; no credit card needed</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff9f5;border:2px solid #E8610A;border-radius:8px;padding:24px 28px;">
            <tr><td>
              <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#111111;font-family:Georgia,serif;">Want full automation from day one?</p>
              <p style="margin:0 0 16px;font-size:13px;color:#555555;line-height:1.7;">Upgrade to Starter at $47/mo for unlimited blog posts, social media content, and the Content Calendar.</p>
              <a href="https://www.traffikora.com/pricing" style="display:inline-block;background:#E8610A;color:#ffffff;padding:11px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">See All Plans &rarr;</a>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eeeeee;">
          <p style="margin:0 0 4px;font-size:12px;color:#999999;text-align:center;">Traffikora &mdash; Set it once. It markets forever.</p>
          <p style="margin:0;font-size:12px;color:#bbbbbb;text-align:center;">
            <a href="https://www.traffikora.com/dashboard/settings" style="color:#bbbbbb;">Unsubscribe</a> &nbsp;&middot;&nbsp; support@traffikora.com &nbsp;&middot;&nbsp; <a href="https://www.traffikora.com/privacy" style="color:#bbbbbb;">Privacy Policy</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
          })
        }
      } catch (e) {
        console.error('Welcome email failed:', e)
      }

      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
