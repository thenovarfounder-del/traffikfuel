// @ts-nocheck
export const dynamic = 'force-dynamic'

const industryData = {
  salon: { label:'Salon / Spa', headline:'Here’s How Traffikora Fills Your Chair Every Week', opener:'your salon is competing for attention every single day — on Instagram, Google, and now AI search. Most salon owners spend hours posting manually. The ones winning locally have automated it.', stat:'340+ salons and spas are already on Traffikora', competitor:'While you’re reading this, salons in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Your Instagram, Facebook, and Google presence runs itself — no more manual posting', benefit2:'AI agents publish fresh content every morning at 6am while you focus on clients', benefit3:'Show up when people search “salon near me” on Google AND ChatGPT', testimonial:'I set it up on a Monday. By Thursday I had 4 new booking requests from Google.', testimonialAuthor:'Melissa R., Salon Owner, Nashville', plan:'Starter at $47/mo', planDetail:'Unlimited posts across every platform. Review before anything goes live.', ctaText:'Start My Free Salon Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  hvac: { label:'HVAC / Plumbing', headline:'Here’s How Traffikora Gets Your Phone Ringing', opener:'when someone’s heat goes out at midnight and they ask Google or ChatGPT for an emergency HVAC company — the business that shows up first gets the call. Traffikora makes sure that’s you.', stat:'210+ HVAC and plumbing companies are already on Traffikora', competitor:'While you’re reading this, HVAC companies in your market are publishing hyperlocal SEO content every single day. Traffikora is how they do it.', benefit1:'Show up first when someone searches emergency HVAC near me on Google or ChatGPT', benefit2:'AI agents publish hyperlocal SEO content every morning — no work on your end', benefit3:'Outrank competitors who are spending thousands on ads — organically', testimonial:'We went from page 3 to page 1 on Google in 6 weeks. Phone has not stopped.', testimonialAuthor:'Dave K., HVAC Owner, Phoenix', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization covers Google, ChatGPT, Gemini, Claude and Perplexity. Fully hands-off.', ctaText:'Start My Free HVAC Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  law: { label:'Law Firm', headline:'Here’s How Traffikora Keeps Your Firm Visible 24/7', opener:'clients research lawyers online before ever picking up the phone. If your firm is not showing up on Google AND AI assistants like ChatGPT and Gemini, you are invisible to the clients who are ready to hire.', stat:'180+ law firms are already on Traffikora', competitor:'While you’re reading this, competing firms in your market are publishing SEO content automatically every day. Traffikora is how they do it.', benefit1:'Clients find your firm first — on Google AND ChatGPT, Gemini, Claude and Perplexity', benefit2:'Daily content published automatically — never think about marketing again', benefit3:'Build authority and trust before a client ever calls you', testimonial:'We rank on page 1 for 14 keywords now. Traffikora did that in 90 days.', testimonialAuthor:'James T., Personal Injury Attorney, Atlanta', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus Auto Mode. Your marketing runs itself while you focus on cases.', ctaText:'Start My Free Law Firm Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  dental: { label:'Dental Office', headline:'Here’s How Traffikora Fills Your Patient Schedule', opener:'your schedule is full — you should not have to think about marketing. But patients are searching for dentists online every day, and the practices showing up consistently are the ones getting the calls.', stat:'220+ dental offices are already on Traffikora', competitor:'While you’re reading this, dental practices in your area are publishing SEO content automatically every morning. Traffikora is how they do it.', benefit1:'Daily SEO content published automatically — zero time investment from you', benefit2:'Show up when patients search for dentists on Google and AI assistants', benefit3:'Consistent content drives new patient inquiries every single month', testimonial:'I had 11 new patient inquiries in my first 60 days. I did not touch a thing.', testimonialAuthor:'Dr. Sarah M., Dentist, Chicago', plan:'Pro at $97/mo', planDetail:'Auto Mode means you never touch it. AI runs every morning at 6am.', ctaText:'Start My Free Dental Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  restaurant: { label:'Restaurant', headline:'Here’s How Traffikora Brings More Diners Through Your Door', opener:'people decide where to eat based on what they see online. Restaurants that post consistently — daily specials, events, behind the scenes — win the local crowd. Traffikora does all of that automatically.', stat:'290+ restaurants are already on Traffikora', competitor:'While you’re reading this, restaurants near you are posting daily content automatically across every platform. Traffikora is how they do it.', benefit1:'Daily specials, events, and promos posted automatically across every platform', benefit2:'Build a loyal local following without spending hours on social media', benefit3:'Show up when hungry customers search locally on Google and AI engines', testimonial:'Our Instagram following doubled in 8 weeks. Foot traffic is up 30%.', testimonialAuthor:'Tony R., Restaurant Owner, Miami', plan:'Starter at $47/mo', planDetail:'Unlimited posts across Facebook, Instagram, LinkedIn and X. Upgrade to Pro for full automation.', ctaText:'Start My Free Restaurant Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  realestate: { label:'Real Estate', headline:'Here’s How Traffikora Makes You the Go-To Agent in Your Market', opener:'buyers and sellers research agents online before ever reaching out. The agents who publish consistently — market updates, neighborhood guides, listing spotlights — are the ones who get called first.', stat:'195+ real estate agents are already on Traffikora', competitor:'While you’re reading this, agents in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Listings, market updates, and neighborhood guides published automatically every day', benefit2:'Get recommended when buyers ask ChatGPT for a local agent', benefit3:'Build organic leads without paid ads — content works for you 24/7', testimonial:'I closed 2 deals last quarter from clients who found me through Google. Never ran an ad.', testimonialAuthor:'Lisa P., Realtor, Dallas', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus fully automated daily content. Focus on closing, not posting.', ctaText:'Start My Free Real Estate Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  gym: { label:'Gym / Fitness', headline:'Here’s How Traffikora Grows Your Membership', opener:'your gym is competing against big box chains with massive marketing budgets. The way to win is consistency — showing up online every single day with content that builds your community and drives new members.', stat:'260+ gyms and fitness studios are already on Traffikora', competitor:'While you’re reading this, gyms in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Workout tips, class schedules, and challenges posted automatically every day', benefit2:'TikTok and YouTube Shorts publishing included — huge for fitness brands', benefit3:'Build an online community that drives consistent new member signups', testimonial:'I set it up on a Tuesday. By Friday I had 3 new membership inquiries from Google.', testimonialAuthor:'Marcus T., Gym Owner, Atlanta', plan:'Pro at $97/mo', planDetail:'TikTok plus YouTube Shorts plus Auto Mode. Your gym stays active online around the clock.', ctaText:'Start My Free Gym Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'TikTok + YouTube Shorts', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  medspa: { label:'Med Spa', headline:'Here’s How Traffikora Helps Your Med Spa Compete and Win', opener:'med spa clients do serious research before booking. They are reading reviews, watching content, and asking AI assistants for recommendations. Traffikora makes sure your practice is what they find.', stat:'150+ med spas are already on Traffikora', competitor:'While you’re reading this, competing med spas are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Treatment spotlights, promotions, and educational content published automatically', benefit2:'Rank above larger competitors with daily, consistent, SEO-optimized content', benefit3:'Get recommended when someone asks ChatGPT or Gemini for med spas nearby', testimonial:'We outrank two larger med spas in our city now. Our bookings are up 40%.', testimonialAuthor:'Dr. Amanda K., Med Spa Owner, Scottsdale', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization makes you visible everywhere your clients are searching.', ctaText:'Start My Free Med Spa Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  agency: { label:'Marketing Agency', headline:'Here’s How Traffikora Lets You Scale Without Adding Headcount', opener:'you are doing content manually for every client — and it is eating your margins. Traffikora automates the content work so you can take on more clients, deliver better results, and actually grow.', stat:'120+ marketing agencies are already on Traffikora', competitor:'While you’re reading this, competing agencies are using Traffikora to manage more clients with less work. Do not let them get further ahead.', benefit1:'Manage up to 10 clients from one white-label dashboard — your brand, not ours', benefit2:'Bulk content generation across all clients — the AI does the work', benefit3:'Agencies on Traffikora typically 3x their client capacity without hiring', testimonial:'I went from 6 clients to 14 in 3 months without hiring anyone. Traffikora is the reason.', testimonialAuthor:'Kevin M., Agency Owner, Austin', plan:'Agency at $297/mo', planDetail:'10 client accounts, white-label dashboard, bulk generation, separate calendars per client.', ctaText:'Start My Free Agency Trial →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'10 white-label client accounts', proFeature2:'Bulk content generation', proFeature3:'Client management portal' },
  chiro: { label:'Chiropractic Practice', headline:'Here’s How Traffikora Brings New Patients to Your Practice', opener:'patients search for chiropractors online before ever booking. If you are not showing up consistently on Google and AI assistants, you are losing those patients to practices that are.', stat:'170+ chiropractic practices are already on Traffikora', competitor:'While you’re reading this, chiropractic practices in your area are publishing SEO content automatically every day. Traffikora is how they do it.', benefit1:'Show up when patients search for a chiropractor near them on Google and ChatGPT', benefit2:'Daily content published automatically — no time investment required', benefit3:'Build trust and authority in your local market with consistent SEO content', testimonial:'New patient calls went up 60% in 90 days. I have not touched the marketing once.', testimonialAuthor:'Dr. Ryan S., Chiropractor, Denver', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus Auto Mode. Set it up once, it runs forever.', ctaText:'Start My Free Chiropractic Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  auto: { label:'Auto Repair Shop', headline:'Here’s How Traffikora Keeps Your Bays Full', opener:'when someone’s car breaks down and they search for a trustworthy shop nearby — the shop that shows up first gets the job. Traffikora makes sure that is you, not the dealership down the street.', stat:'140+ auto repair shops are already on Traffikora', competitor:'While you’re reading this, auto shops in your area are publishing hyperlocal SEO content automatically every day. Traffikora is how they do it.', benefit1:'Show up when someone searches for a trusted shop nearby on Google or ChatGPT', benefit2:'Outrank dealerships and chains with hyperlocal SEO content published daily', benefit3:'Get recommended on AI assistants — your competitors probably are not there yet', testimonial:'We outrank the dealership two miles away on Google now. Bays are booked out 2 weeks.', testimonialAuthor:'Frank D., Auto Shop Owner, Houston', plan:'Pro at $97/mo', planDetail:'Hyperlocal SEO plus AI Engine Optimization. Fully hands-off once set up.', ctaText:'Start My Free Auto Shop Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Hyperlocal SEO content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' },
  other: { label:'Business', headline:'Here’s Your Personalized Traffikora Plan', opener:'whatever your business does, consistent online visibility is what drives growth. Traffikora automates your entire content marketing — blogs, social media, SEO — so you can focus on running your business.', stat:'1,000+ local businesses are already on Traffikora', competitor:'While you’re reading this, businesses in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'AI writes and publishes your blogs, social content, and SEO automatically every day', benefit2:'Show up on Google AND AI engines like ChatGPT, Gemini, and Perplexity', benefit3:'Set it up in 5 minutes — the AI handles everything from there', testimonial:'I had no marketing strategy before Traffikora. Now I rank on page 1 and get leads every week.', testimonialAuthor:'Sandra W., Small Business Owner, Orlando', plan:'Free Plan to start', planDetail:'No card needed. 3 blogs a month. See exactly how it works before spending a cent.', ctaText:'Start My Free Marketing Plan →', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode — fully hands-off' }
}

function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '' }

export async function POST(request) {
  try {
    const { visitorEmail, businessType, visitorName } = await request.json()
    const biz = industryData[businessType] || industryData.other
    const firstName = visitorName ? cap(visitorName.split(' ')[0]) : ''
    const greeting = firstName || 'there'

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<tr><td style="background:linear-gradient(135deg,#1a0800,#0d0400);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;border:1px solid #2a1500;border-bottom:none;">
  <table cellpadding="0" cellspacing="0" style="margin:0 auto 20px;"><tr><td style="width:60px;height:60px;background:#111;border-radius:12px;border:2px solid #E8610A;text-align:center;vertical-align:middle;">
    <span style="font-family:Georgia,serif;font-size:36px;font-weight:900;color:#E8610A;line-height:60px;">T</span>
  </td></tr></table>
  <div style="color:#E8610A;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">From Eva at Traffikora</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:700;margin:0;line-height:1.3;">${biz.headline}</h1>
</td></tr>

<tr><td style="background:#111111;padding:36px 40px;border:1px solid #1e1e1e;border-top:none;border-bottom:none;">
  <p style="color:#cccccc;font-size:16px;line-height:1.7;margin:0 0 6px;">Hey ${greeting},</p>
  <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 24px;">I want to be straight with you — ${biz.opener}</p>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:linear-gradient(135deg,#0d0500,#1a0800);border:1px solid #3a1a00;border-radius:10px;padding:14px 20px;text-align:center;">
      <span style="color:#E8610A;font-size:14px;font-weight:700;">⚡ ${biz.stat}</span>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#1a1a1a;border-left:3px solid #E8610A;border-radius:0 8px 8px 0;padding:14px 18px;">
      <p style="color:#aaaaaa;font-size:14px;line-height:1.6;margin:0;font-style:italic;">${biz.competitor}</p>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:24px;">
      <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px;">What Traffikora Does For Your ${biz.label}</div>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding-bottom:12px;"><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">${biz.benefit1}</td>
        </tr></table></td></tr>
        <tr><td style="padding-bottom:12px;"><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">${biz.benefit2}</td>
        </tr></table></td></tr>
        <tr><td><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">${biz.benefit3}</td>
        </tr></table></td></tr>
      </table>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr>
      <td width="48%" valign="top" style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:18px;">
        <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Free Plan</div>
        <div style="color:#fff;font-size:17px;font-weight:700;margin-bottom:12px;">$0 / forever</div>
        <div style="color:#aaa;font-size:13px;line-height:1.8;">${biz.freeFeature1}<br>${biz.freeFeature2}<br>${biz.freeFeature3}</div>
      </td>
      <td width="4%"></td>
      <td width="48%" valign="top" style="background:linear-gradient(135deg,#1a0800,#0d0500);border:2px solid #E8610A;border-radius:12px;padding:18px;">
        <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Pro Plan ★ Popular</div>
        <div style="color:#fff;font-size:17px;font-weight:700;margin-bottom:12px;">$97 / month</div>
        <div style="color:#e0e0e0;font-size:13px;line-height:1.8;">${biz.proFeature1}<br>${biz.proFeature2}<br>${biz.proFeature3}</div>
      </td>
    </tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:linear-gradient(135deg,#1a0800,#0d0500);border:1px solid #E8610A;border-radius:12px;padding:22px;">
      <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Eva’s Recommendation For You</div>
      <div style="color:#ffffff;font-size:20px;font-weight:700;margin-bottom:6px;">${biz.plan}</div>
      <div style="color:#cccccc;font-size:14px;line-height:1.6;">${biz.planDetail}</div>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#161616;border:1px solid #222;border-radius:12px;padding:20px 22px;">
      <div style="color:#E8610A;font-size:22px;margin-bottom:8px;">&ldquo;</div>
      <p style="color:#cccccc;font-size:14px;line-height:1.7;margin:0 0 10px;font-style:italic;">${biz.testimonial}</p>
      <div style="color:#666;font-size:12px;">${biz.testimonialAuthor}</div>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr><td align="center">
      <a href="https://traffikora.com/signup" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:18px 36px;border-radius:12px;">${biz.ctaText}</a>
    </td></tr>
  </table>

  <p style="color:#555;font-size:12px;text-align:center;margin:0 0 24px;">No credit card required &nbsp;&bull;&nbsp; Cancel anytime &nbsp;&bull;&nbsp; Setup in 5 minutes</p>

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:16px 18px;">
      <p style="color:#aaaaaa;font-size:14px;line-height:1.7;margin:0;">Have questions? Just hit reply — I read every message personally. No bots, no tickets. Just me.</p>
      <p style="color:#E8610A;font-size:14px;font-weight:600;margin:6px 0 0;">Eva, Traffikora AI Guide</p>
    </td></tr>
  </table>
</td></tr>

<tr><td style="background:#0d0d0d;border:1px solid #1e1e1e;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;">
  <p style="color:#666;font-size:13px;line-height:1.7;margin:0 0 16px;"><strong style="color:#888;">P.S.</strong> The free plan takes 5 minutes to set up and requires no credit card. Your competitors are not waiting — and neither should you.</p>
  <p style="color:#333;font-size:11px;margin:0;">Traffikora — AI-Powered Marketing for Local Businesses &nbsp;&bull;&nbsp; <a href="https://traffikora.com" style="color:#E8610A;text-decoration:none;">traffikora.com</a> &nbsp;&bull;&nbsp; <a href="mailto:support@traffikora.com" style="color:#E8610A;text-decoration:none;">support@traffikora.com</a></p>
  <p style="color:#222;font-size:11px;margin:8px 0 0;">No spam, ever. You received this because you chatted with Eva on Traffikora.com.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`

    const notifyHtml = `<!DOCTYPE html>
<html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px 20px;">
<table width="600" style="background:#fff;border-radius:12px;padding:32px;margin:0 auto;border:1px solid #e0e0e0;">
<tr><td>
  <div style="color:#E8610A;font-size:22px;font-weight:700;margin-bottom:6px;">&#128293; New Lead from Eva</div>
  <div style="color:#555;font-size:15px;margin-bottom:24px;">Someone just gave Eva their email on Traffikora.com. Eva already sent them a personalized plan summary. Follow up fast.</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;padding:20px;border:1px solid #eee;margin-bottom:20px;">
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</span><br><a href="mailto:${visitorEmail}" style="color:#E8610A;font-size:17px;font-weight:700;text-decoration:none;">${visitorEmail}</a></td></tr>
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Industry</span><br><span style="color:#111;font-size:16px;font-weight:700;">${biz.label}</span></td></tr>
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Recommended Plan</span><br><span style="color:#E8610A;font-size:16px;font-weight:700;">${biz.plan}</span></td></tr>
    ${greeting !== 'there' ? `<tr><td><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</span><br><span style="color:#111;font-size:16px;font-weight:700;">${greeting}</span></td></tr>` : ''}
  </table>
  <a href="mailto:${visitorEmail}" style="display:inline-block;background:#E8610A;color:#fff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:8px;">Reply to This Lead</a>
</td></tr>
</table>
</body></html>`

    const r1 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: [visitorEmail],
        subject: `Hey ${greeting}, here is your personalized Traffikora plan`,
        html
      })
    })
    const d1 = await r1.json()
    console.log('Visitor email:', JSON.stringify(d1))

    await new Promise(resolve => setTimeout(resolve, 500))

    const r2 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: ['support@traffikora.com'],
        subject: `New Lead: ${biz.label} - ${visitorEmail}`,
        html: notifyHtml
      })
    })
    const d2 = await r2.json()
    console.log('Notify email:', JSON.stringify(d2))

    return Response.json({ success: true })
  } catch (err) {
    console.error('Lead error:', err)
    return Response.json({ success: false }, { status: 500 })
  }
}