// @ts-nocheck
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function day2Html(firstName) {
  return `<!DOCTYPE html>
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
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Day 2 Update</p>
          <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:34px;font-weight:700;color:#111111;line-height:1.2;">Your AI ran for the<br/><em style="color:#E8610A;">first time, ${firstName}.</em></h1>
          <p style="margin:0 auto;font-size:16px;color:#555555;line-height:1.8;max-width:460px;">While you were busy, Traffikora was working. Your AI agents have already started building content for your business.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:10px;padding:28px 32px;">
            <tr><td>
              <p style="margin:0 0 20px;font-size:16px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">Here’s what your AI did:</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Generated your first AI blog post</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Created social posts for your platforms</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;Queued content to your calendar</p>
              <p style="margin:0;font-size:14px;color:#cccccc;"><span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;All 4 AI agents are running 24/7</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://www.traffikora.com/dashboard" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;">See What Was Created &rarr;</a>
          <p style="margin:16px 0 0;font-size:13px;color:#999999;">Your content is waiting in your dashboard.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff9f5;border:2px solid #E8610A;border-radius:8px;padding:24px 28px;">
            <tr><td>
              <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#111111;font-family:Georgia,serif;">Ready to go fully automatic?</p>
              <p style="margin:0 0 16px;font-size:13px;color:#555555;line-height:1.7;">Upgrade to Starter at $47/mo and your AI publishes content every single day &mdash; no manual work required.</p>
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
}

function day5Html(firstName) {
  return `<!DOCTYPE html>
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
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Day 5 Check-In</p>
          <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:34px;font-weight:700;color:#111111;line-height:1.2;">5 days in &mdash; here’s how to<br/><em style="color:#E8610A;">get more from Traffikora.</em></h1>
          <p style="margin:0 auto;font-size:16px;color:#555555;line-height:1.8;max-width:460px;">You’ve been with us for 5 days. Your AI has been running. Here’s what to do next to get maximum results.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:10px;border:1px solid #eeeeee;overflow:hidden;">
            <tr><td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Tip 1</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Check Your Content Calendar</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Your AI has been creating content daily. Review what’s been queued and approve posts for publishing.</p>
            </td></tr>
            <tr><td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Tip 2</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Update Your Business Brain</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">The more your AI knows about your business, the better the content. Add your services, specialties, and target customers.</p>
            </td></tr>
            <tr><td style="padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Tip 3</p>
              <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Share Your Referral Link</p>
              <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Earn 20% recurring commission every month for every person you refer. Find your link in the dashboard.</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://www.traffikora.com/dashboard" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;">Go to My Dashboard &rarr;</a>
        </td>
      </tr>
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff9f5;border:2px solid #E8610A;border-radius:8px;padding:24px 28px;">
            <tr><td>
              <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#111111;font-family:Georgia,serif;">Unlock full automation today</p>
              <p style="margin:0 0 16px;font-size:13px;color:#555555;line-height:1.7;">Upgrade to Starter at $47/mo &mdash; unlimited content, social posts, and your AI runs every day on autopilot.</p>
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
}

export async function POST(req) {
  try {
    const { email, firstName, day } = await req.json()
    if (!email || !day) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    const name = firstName || 'there'
    const subject = day === 2
      ? `Your AI just ran for the first time — here’s what it created`
      : `You’re 5 days in — here’s how to get more from Traffikora`
    const html = day === 2 ? day2Html(name) : day5Html(name)

    await resend.emails.send({
      from: 'Eva at Traffikora <eva@traffikora.com>',
      to: email,
      subject,
      html
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
