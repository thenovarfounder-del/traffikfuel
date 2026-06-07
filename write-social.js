const fs = require('fs')
const path = require('path')

const filePath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts')
const content = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Traffikora Support <eva@traffikora.com>',
      to: 'traffikoratest@yahoo.com',
      subject: \`Support Ticket: \${subject || 'No subject'} \u2014 from \${name}\`,
      html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
        <h2 style="color:#E8610A;">New Support Ticket</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Subject:</strong> \${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f4f4f4;padding:16px;border-radius:8px;line-height:1.7;">\${message}</p>
      </div>\`
    })

    await resend.emails.send({
      from: 'Eva at Traffikora <eva@traffikora.com>',
      to: email,
      subject: \`We received your message, \${name.split(' ')[0]}!\`,
      html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
        <div style="background:#111;padding:32px;border-radius:12px;text-align:center;margin-bottom:24px;">
          <p style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
        </div>
        <h2 style="color:#111;">We got your message!</h2>
        <p style="color:#555;line-height:1.7;">Hi \${name.split(' ')[0]}, thanks for reaching out. Our team will get back to you within 24 hours.</p>
        <p style="color:#555;line-height:1.7;"><strong>Your message:</strong><br/>\${message}</p>
        <p style="color:#888;font-size:13px;margin-top:32px;">Questions? Reply to this email or visit traffikora.com</p>
      </div>\`
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Support email error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}`

fs.writeFileSync(filePath, content, 'utf8')
console.log('Written:', filePath)