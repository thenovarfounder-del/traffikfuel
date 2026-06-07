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

  const { applicationId, email, name, action } = await request.json()
  const firstName = name ? name.split(' ')[0] : 'there'

  if (action === 'approve') {
    // Find or create their Traffikora account referral code with 30% rate
    const { data: userRows } = await supabase.auth.admin.listUsers()
    const matchedUser = userRows?.users?.find(u => u.email === email)

    let referralLink = 'https://www.traffikora.com/signup?ref=YOUR_CODE'
    if (matchedUser) {
      const { data: refCode } = await supabase.from('referral_codes').select('*').eq('user_id', matchedUser.id).single()
      if (refCode) {
        // Upgrade to affiliate tier with 30% commission
        await supabase.from('referral_codes').update({
          tier: 'affiliate',
          commission_rate: 0.30,
          status: 'active'
        }).eq('user_id', matchedUser.id)
        referralLink = `https://www.traffikora.com/signup?ref=${refCode.code}`
      }
    }

    await resend.emails.send({
      from: 'Randy at Traffikora <eva@traffikora.com>',
      to: email,
      subject: `🎉 Welcome to the Traffikora Affiliate Program, ${firstName}!`,
      html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
      <tr><td style="background:#111;padding:36px 40px;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-size:30px;font-weight:700;color:#fff;">Traffik<span style="color:#E8610A;">ora</span></p>
        <p style="margin:8px 0 0;font-size:12px;color:#888;letter-spacing:2px;text-transform:uppercase;">Affiliate Program</p>
      </td></tr>
      <tr><td style="padding:48px 40px 32px;text-align:center;">
        <p style="margin:0 0 16px;font-size:48px;">\ud83c\udf89</p>
        <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:32px;font-weight:700;color:#111;">You\u2019re approved, ${firstName}!</h1>
        <p style="margin:0 auto;font-size:15px;color:#555;line-height:1.8;max-width:460px;">Welcome to the Traffikora Affiliate Program. You now earn <strong style="color:#E8610A;">30% recurring commission</strong> every month for every business you refer.</p>
      </td></tr>
      <tr><td style="padding:0 40px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;padding:28px;">
          <tr><td>
            <p style="margin:0 0 8px;font-size:11px;color:#E8610A;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Affiliate Link</p>
            <p style="margin:0 0 16px;font-size:15px;color:#fff;font-family:monospace;background:#0a0a0a;padding:12px 16px;border-radius:8px;word-break:break-all;">${referralLink}</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="text-align:center;padding:12px;background:#1a1a1a;border-radius:8px;">
                  <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Commission Rate</p>
                  <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:28px;font-weight:700;color:#E8610A;">30%</p>
                  <p style="margin:4px 0 0;font-size:11px;color:#555;">recurring monthly</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 32px;">
        <p style="margin:0 0 16px;font-size:16px;font-weight:700;color:#111;font-family:Georgia,serif;">What you earn per referral:</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
          <tr style="background:#f9f9f9;">
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Starter $47/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$14.10/mo</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Pro $97/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$29.10/mo</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Agency $297/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$89.10/mo</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Enterprise $997/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$299.10/mo</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 40px;text-align:center;">
        <a href="${referralLink}" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#fff;padding:16px 40px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;">Start Sharing Your Link \u2192</a>
        <p style="margin:16px 0 0;font-size:13px;color:#999;">Questions? Reply to this email anytime.</p>
      </td></tr>
      <tr><td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eee;">
        <p style="margin:0;font-size:12px;color:#999;text-align:center;">Traffikora \u2014 Set it once. It markets forever. &nbsp;&middot;&nbsp; support@traffikora.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
    })

    return NextResponse.json({ success: true, action: 'approved' })
  }

  if (action === 'reject') {
    await resend.emails.send({
      from: 'Randy at Traffikora <eva@traffikora.com>',
      to: email,
      subject: `Traffikora Affiliate Application Update`,
      html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
      <tr><td style="background:#111;padding:36px 40px;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-size:30px;font-weight:700;color:#fff;">Traffik<span style="color:#E8610A;">ora</span></p>
      </td></tr>
      <tr><td style="padding:48px 40px;">
        <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#111;">Hi ${firstName},</h1>
        <p style="font-size:15px;color:#555;line-height:1.8;">Thank you for applying to the Traffikora Affiliate Program. After reviewing your application we\u2019re unable to move forward at this time.</p>
        <p style="font-size:15px;color:#555;line-height:1.8;">This doesn\u2019t mean you can\u2019t earn with Traffikora. You can still share your referral link as a standard user and earn <strong>20% recurring commission</strong> for every paying customer you refer.</p>
        <p style="font-size:15px;color:#555;line-height:1.8;">You\u2019re welcome to reapply in the future as your platform grows.</p>
        <a href="https://www.traffikora.com/dashboard/referral" style="display:inline-block;background:#111;color:#fff;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;margin-top:8px;">View Your Referral Dashboard \u2192</a>
      </td></tr>
      <tr><td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eee;">
        <p style="margin:0;font-size:12px;color:#999;text-align:center;">Traffikora \u2014 support@traffikora.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
    })

    return NextResponse.json({ success: true, action: 'rejected' })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
