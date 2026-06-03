// @ts-nocheck
export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()
    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.RESEND_API_KEY
      },
      body: JSON.stringify({
        from: 'CYRA at Traffikora <support@traffikora.com>',
        to: ['support@traffikora.com'],
        reply_to: email,
        subject: 'Support Request: ' + (subject || 'New Message') + ' - from ' + name,
        html: `
          <div style="font-family: DM Sans, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #111; padding: 32px; border-radius: 12px;">
              <h1 style="color: #E8610A; font-size: 24px; margin-bottom: 8px;">New Support Request</h1>
              <p style="color: #888; margin-bottom: 24px;">From the Traffikora dashboard support form</p>
              <div style="background: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                <p style="color: #aaa; font-size: 12px; margin-bottom: 4px;">FROM</p>
                <p style="color: #fff; font-size: 16px; font-weight: 700; margin: 0;">${name}</p>
                <p style="color: #E8610A; font-size: 14px; margin: 4px 0 0;">${email}</p>
              </div>
              <div style="background: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                <p style="color: #aaa; font-size: 12px; margin-bottom: 4px;">SUBJECT</p>
                <p style="color: #fff; font-size: 15px; margin: 0;">${subject || 'No subject provided'}</p>
              </div>
              <div style="background: #1a1a1a; border-radius: 8px; padding: 20px;">
                <p style="color: #aaa; font-size: 12px; margin-bottom: 8px;">MESSAGE</p>
                <p style="color: #ccc; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
        `
      })
    })
    if (!response.ok) {
      const error = await response.json()
      return Response.json({ success: false, error: JSON.stringify(error) }, { status: 500 })
    }
    return Response.json({ success: true })
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}
