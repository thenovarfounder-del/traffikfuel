// @ts-nocheck
export const dynamic = 'force-dynamic'

const industryData = {
  salon: {
    label: 'Salon / Spa',
    headline: 'Here’s How Traffikora Works for Salons & Spas',
    benefit1: 'Your Instagram, Facebook, and Google presence runs itself — no more manual posting',
    benefit2: 'AI agents publish fresh content every morning at 6am while you focus on clients',
    benefit3: 'Show up when people search “salon near me” on Google AND ChatGPT',
    plan: 'Starter at $47/mo',
    planDetail: 'Unlimited posts across every platform. Review before anything goes live.'
  },
  hvac: {
    label: 'HVAC / Plumbing',
    headline: 'Here’s How Traffikora Gets HVAC Companies More Calls',
    benefit1: 'Show up first when someone searches “emergency HVAC near me” on Google or ChatGPT',
    benefit2: 'AI agents publish hyperlocal SEO content every morning — no work on your end',
    benefit3: 'Outrank competitors who are spending thousands on ads — organically',
    plan: 'Pro at $97/mo',
    planDetail: 'AI Engine Optimization covers Google, ChatGPT, Gemini, Claude & Perplexity. Fully hands-off.'
  },
  law: {
    label: 'Law Firm',
    headline: 'Here’s How Traffikora Keeps Your Firm Visible 24/7',
    benefit1: 'Clients research lawyers before calling — Traffikora makes sure they find you first',
    benefit2: 'Rank on Google AND get recommended by ChatGPT, Gemini, and Perplexity',
    benefit3: 'Daily content published automatically — never think about marketing again',
    plan: 'Pro at $97/mo',
    planDetail: 'AI Engine Optimization + Auto Mode. Your marketing runs itself while you focus on cases.'
  },
  dental: {
    label: 'Dental Office',
    headline: 'Here’s How Traffikora Fills Your Patient Schedule',
    benefit1: 'Daily SEO content published automatically — no time investment from you',
    benefit2: 'Show up when patients search for dentists on Google and AI assistants',
    benefit3: 'Consistent content builds trust and drives new patient inquiries every month',
    plan: 'Pro at $97/mo',
    planDetail: 'Auto Mode means you never touch it. AI runs every morning at 6am.'
  },
  restaurant: {
    label: 'Restaurant',
    headline: 'Here’s How Traffikora Brings More Diners Through Your Door',
    benefit1: 'Daily specials, events, and promotions posted automatically across every platform',
    benefit2: 'Build a loyal local following without spending hours on social media',
    benefit3: 'Show up when hungry customers search locally on Google and AI engines',
    plan: 'Starter at $47/mo',
    planDetail: 'Unlimited posts across Facebook, Instagram, LinkedIn & X. Upgrade to Pro for full automation.'
  },
  realestate: {
    label: 'Real Estate',
    headline: 'Here’s How Traffikora Builds Your Authority in Your Market',
    benefit1: 'Listings, market updates, and neighborhood guides published automatically every day',
    benefit2: 'Get recommended when buyers ask ChatGPT for a local agent',
    benefit3: 'Build organic leads without paid ads — content works for you 24/7',
    plan: 'Pro at $97/mo',
    planDetail: 'AI Engine Optimization + fully automated daily content. Focus on closing, not posting.'
  },
  gym: {
    label: 'Gym / Fitness',
    headline: 'Here’s How Traffikora Grows Your Membership',
    benefit1: 'Workout tips, class schedules, and challenges posted automatically every day',
    benefit2: 'TikTok and YouTube Shorts publishing included — huge for fitness brands',
    benefit3: 'Build an online community that drives consistent new member signups',
    plan: 'Pro at $97/mo',
    planDetail: 'TikTok + YouTube Shorts + Auto Mode. Your gym stays active online around the clock.'
  },
  medspa: {
    label: 'Med Spa',
    headline: 'Here’s How Traffikora Helps Your Med Spa Compete & Win',
    benefit1: 'Treatment spotlights, promotions, and educational content published automatically',
    benefit2: 'Rank above larger competitors with daily, consistent, SEO-optimized content',
    benefit3: 'Get recommended when someone asks ChatGPT or Gemini for med spas nearby',
    plan: 'Pro at $97/mo',
    planDetail: 'AI Engine Optimization makes you visible everywhere your clients are searching.'
  },
  agency: {
    label: 'Marketing Agency',
    headline: 'Here’s How Traffikora Lets You Scale Without Adding Headcount',
    benefit1: 'Manage up to 10 clients from one white-label dashboard — your brand, not ours',
    benefit2: 'Bulk content generation across all clients — the AI does the work',
    benefit3: 'Agencies on Traffikora typically 3x their client capacity without hiring',
    plan: 'Agency at $297/mo',
    planDetail: '10 client accounts, white-label dashboard, bulk generation, separate calendars per client.'
  },
  chiro: {
    label: 'Chiropractic Practice',
    headline: 'Here’s How Traffikora Brings New Patients to Your Practice',
    benefit1: 'Show up when patients search “chiropractor near me” on Google and ChatGPT',
    benefit2: 'Daily content published automatically — no time investment required',
    benefit3: 'Build trust and authority in your local market with consistent SEO content',
    plan: 'Pro at $97/mo',
    planDetail: 'AI Engine Optimization + Auto Mode. Set it up once, it runs forever.'
  },
  auto: {
    label: 'Auto Repair Shop',
    headline: 'Here’s How Traffikora Keeps Your Bays Full',
    benefit1: 'Show up when someone’s car breaks down and they search for a trusted shop nearby',
    benefit2: 'Outrank dealerships and chains with hyperlocal SEO content published daily',
    benefit3: 'Get recommended on Google AND AI assistants — your competitors probably aren’t there yet',
    plan: 'Pro at $97/mo',
    planDetail: 'Hyperlocal SEO + AI Engine Optimization. Fully hands-off once set up.'
  },
  other: {
    label: 'Business',
    headline: 'Here’s Your Personalized Traffikora Plan Summary',
    benefit1: 'AI writes and publishes your blogs, social content, and SEO automatically every day',
    benefit2: 'Show up on Google AND AI engines like ChatGPT, Gemini, and Perplexity',
    benefit3: 'Set it up in 5 minutes — the AI handles everything from there',
    plan: 'Free Plan to start',
    planDetail: 'No card needed. 3 blogs a month. See exactly how it works before spending a cent.'
  }
}

export async function POST(request) {
  try {
    const { visitorEmail, businessType, visitorName } = await request.json()

    const biz = industryData[businessType] || industryData.other
    const name = visitorName || 'there'
    const firstName = name.split(' ')[0]

    const visitorEmailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:DM Sans,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1a0800,#0d0400);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;border:1px solid #2a1500;border-bottom:none;">
          <div style="width:56px;height:56px;background:#111;border-radius:12px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;border:2px solid #E8610A;">
            <span style="font-family:Georgia,serif;font-size:36px;font-weight:900;color:#E8610A;line-height:1;">T</span>
          </div>
          <div style="color:#E8610A;font-family:Georgia,serif;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">From Eva at Traffikora</div>
          <h1 style="color:#ffffff;font-size:26px;font-weight:700;margin:0;line-height:1.3;">${biz.headline}</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#111111;padding:36px 40px;border:1px solid #1e1e1e;border-top:none;border-bottom:none;">
          <p style="color:#cccccc;font-size:16px;line-height:1.7;margin:0 0 24px;">Hey ${firstName},</p>
          <p style="color:#cccccc;font-size:16px;line-height:1.7;margin:0 0 28px;">It was great chatting with you. I put this together personally so you can see exactly what Traffikora would do for your ${biz.label} business — and why hundreds of businesses just like yours are already on the platform.</p>

          <!-- Benefits -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:24px;">
              <div style="color:#E8610A;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:20px;">What Traffikora Does For You</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding-bottom:16px;">
                  <table cellpadding="0" cellspacing="0"><tr>
                    <td style="width:28px;vertical-align:top;padding-top:2px;"><span style="color:#E8610A;font-size:18px;">&#10003;</span></td>
                    <td style="color:#e0e0e0;font-size:15px;line-height:1.6;">${biz.benefit1}</td>
                  </tr></table>
                </td></tr>
                <tr><td style="padding-bottom:16px;">
                  <table cellpadding="0" cellspacing="0"><tr>
                    <td style="width:28px;vertical-align:top;padding-top:2px;"><span style="color:#E8610A;font-size:18px;">&#10003;</span></td>
                    <td style="color:#e0e0e0;font-size:15px;line-height:1.6;">${biz.benefit2}</td>
                  </tr></table>
                </td></tr>
                <tr><td>
                  <table cellpadding="0" cellspacing="0"><tr>
                    <td style="width:28px;vertical-align:top;padding-top:2px;"><span style="color:#E8610A;font-size:18px;">&#10003;</span></td>
                    <td style="color:#e0e0e0;font-size:15px;line-height:1.6;">${biz.benefit3}</td>
                  </tr></table>
                </td></tr>
              </table>
            </td></tr>
          </table>

          <!-- Plan recommendation -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:linear-gradient(135deg,#1a0800,#0d0500);border:1px solid #E8610A;border-radius:12px;padding:24px;">
              <div style="color:#E8610A;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">My Recommendation For You</div>
              <div style="color:#ffffff;font-size:20px;font-weight:700;margin-bottom:8px;">${biz.plan}</div>
              <div style="color:#cccccc;font-size:14px;line-height:1.6;">${biz.planDetail}</div>
            </td></tr>
          </table>

          <!-- Urgency -->
          <p style="color:#888;font-size:14px;line-height:1.7;margin:0 0 32px;font-style:italic;">Your competitors may already be using Traffikora. Every day without consistent content is ground you’re giving them. The free plan takes 5 minutes to set up — no card, no commitment.</p>

          <!-- CTA -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td align="center">
              <a href="https://traffikora.com/signup" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;font-size:17px;font-weight:700;text-decoration:none;padding:18px 48px;border-radius:12px;letter-spacing:0.3px;">Start Free — No Card Needed &rarr;</a>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#0d0d0d;border:1px solid #1e1e1e;border-top:none;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;">
          <p style="color:#555;font-size:13px;margin:0 0 8px;">Questions? Reply to this email or reach us at <a href="mailto:support@traffikora.com" style="color:#E8610A;text-decoration:none;">support@traffikora.com</a></p>
          <p style="color:#444;font-size:12px;margin:0;">Traffikora — AI-Powered Marketing for Local Businesses</p>
          <p style="color:#333;font-size:11px;margin:8px 0 0;">Eva, Your Traffikora AI Guide</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    const notifyHtml = `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px 20px;">
  <table width="600" style="background:#fff;border-radius:12px;padding:32px;margin:0 auto;border:1px solid #e0e0e0;">
    <tr><td>
      <div style="color:#E8610A;font-size:20px;font-weight:700;margin-bottom:8px;">&#128293; New Lead from Eva</div>
      <div style="color:#333;font-size:15px;margin-bottom:24px;">Someone just gave Eva their email on Traffikora.com</div>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;padding:20px;border:1px solid #eee;">
        <tr><td style="padding-bottom:12px;"><span style="color:#888;font-size:13px;">EMAIL</span><br><span style="color:#111;font-size:16px;font-weight:700;">${visitorEmail}</span></td></tr>
        <tr><td style="padding-bottom:12px;"><span style="color:#888;font-size:13px;">INDUSTRY</span><br><span style="color:#111;font-size:16px;font-weight:700;">${biz.label}</span></td></tr>
        <tr><td><span style="color:#888;font-size:13px;">RECOMMENDED PLAN</span><br><span style="color:#E8610A;font-size:16px;font-weight:700;">${biz.plan}</span></td></tr>
      </table>
      <div style="margin-top:24px;color:#555;font-size:14px;">Eva already sent them a personalized plan summary. This is a warm lead — follow up fast.</div>
    </td></tr>
  </table>
</body>
</html>`

    // Send to visitor
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: [visitorEmail],
        subject: `${firstName}, here’s your personalized Traffikora plan ⚡`,
        html: visitorEmailHtml
      })
    })

    // Notify Randy
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: ['support@traffikora.com'],
        subject: `🔥 New Lead: ${biz.label} — ${visitorEmail}`,
        html: notifyHtml
      })
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Lead email error:', err)
    return Response.json({ success: false }, { status: 500 })
  }
}
