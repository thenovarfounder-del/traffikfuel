// @ts-nocheck
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { name, email, subject, message } = await request.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  try {
    // Notify Randy at Yahoo
    await resend.emails.send({
      from: 'Traffikora Support <eva@traffikora.com>',
      to: 'thenovar.founder@gmail.com',
      subject: `🎟️ Support Request: ${subject || 'No Subject'} — from ${name}`,
      html: `<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
        <h2 style="color:#E8610A;">New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="background:#f9f9f9;border-left:4px solid #E8610A;padding:16px;border-radius:4px;margin-top:8px;">
          <p style="margin:0;color:#333;line-height:1.7;">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:13px;color:#888;">Reply directly to this email to respond to ${name} at ${email}</p>
        <a href="mailto:${email}" style="background:#E8610A;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px;">Reply to ${name} →</a>
      </div>`
    })

    // Confirm to user
    await resend.emails.send({
      from: 'Eva at Traffikora <eva@traffikora.com>',
      to: email,
      replyTo: 'support@traffikora.com',
      subject: `We got your message, ${name.split(' ')[0]}! — Traffikora Support`,
      html: `<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
        <div style="background:#111;padding:28px;border-radius:12px;text-align:center;margin-bottom:24px;">
          <p style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
        </div>
        <h2 style="color:#111;">Hi ${name.split(' ')[0]}, we got your message!</h2>
        <p style="color:#555;line-height:1.7;">Our team will review your request and get back to you within 24 hours at <strong>${email}</strong>.</p>
        <div style="background:#fff;border:1px solid #eee;border-left:4px solid #E8610A;border-radius:6px;padding:16px;margin:20px 0;">
          <p style="margin:0 0 6px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Your message</p>
          <p style="margin:0;color:#333;font-size:14px;line-height:1.7;">${message}</p>
        </div>
        <p style="color:#555;font-size:14px;line-height:1.7;">In the meantime, you can find answers to common questions in our <a href="https://www.traffikora.com/faq" style="color:#E8610A;">FAQ</a> or chat with EVA on the dashboard.</p>
        <p style="color:#888;font-size:12px;margin-top:24px;">Traffikora — support@traffikora.com</p>
      </div>`
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Support email error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
