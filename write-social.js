const fs = require('fs');
const path = require('path');

// First create the API route
const apiDir = 'C:\\Users\\randy\\traffikfuel\\src\\app\\api\\contact';
if (!fs.existsSync(apiDir)) { fs.mkdirSync(apiDir, { recursive: true }); }

const apiContent = `// @ts-nocheck
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.RESEND_API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Traffikora Contact <support@traffikora.com>',
      to: ['support@traffikora.com'],
      reply_to: email,
      subject: \`New Contact Form Message from \${name}\`,
      html: \`
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Message:</strong></p>
        <p>\${message.replace(/\\n/g, '<br>')}</p>
      \`
    })
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
`;

fs.writeFileSync(path.join(apiDir, 'route.ts'), apiContent, 'utf8');
console.log('SUCCESS: contact API route created');

// Now update the contact page to call the API
const pagePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\contact\\page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

content = content.replace(
  `async function handleSubmit() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }`,
  `async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setSent(true)
      }
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }`
);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('SUCCESS: contact page wired to API');