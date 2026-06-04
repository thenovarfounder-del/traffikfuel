const fs = require('fs')
const path = require('path')

const filePath = path.join('src', 'app', 'page.tsx')
let content = fs.readFileSync(filePath, 'utf8')

// ─── CHANGE 1: Hero right column ─────────────────────────────
const oldHeroRight = `<div class="hero-right"><div class="hero-stats"><div class="hstat"><div class="hstat-num">9+</div><div class="hstat-lbl">Platforms automated simultaneously</div></div><div class="hstat"><div class="hstat-num">24/7</div><div class="hstat-lbl">Marketing running while you sleep</div></div><div class="hstat"><div class="hstat-num">6x</div><div class="hstat-lbl">More platforms than the average competitor</div></div></div><div class="hplat"><div class="hplat-lbl">Platforms covered</div><div class="hchips"><span class="hchip">Google</span><span class="hchip">TikTok</span><span class="hchip">YouTube</span><span class="hchip">ChatGPT</span><span class="hchip">Claude</span><span class="hchip">Gemini</span><span class="hchip">Instagram</span><span class="hchip">Facebook</span><span class="hchip">Reddit</span></div></div></div>`

const newHeroRight = `<div class="hero-right">
<div style="background:#0f0f0f;border:1px solid #2a2a2a;border-radius:14px;overflow:hidden;box-shadow:0 0 40px rgba(232,97,10,0.12)">
  <div style="background:#1a1a1a;border-bottom:1px solid #2a2a2a;padding:10px 16px;display:flex;align-items:center;gap:8px">
    <div style="width:8px;height:8px;border-radius:50%;background:#ff5f56"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#ffbd2e"></div>
    <div style="width:8px;height:8px;border-radius:50%;background:#27c93f"></div>
    <div style="flex:1;background:#111;border-radius:4px;padding:3px 10px;font-size:10px;color:#555;margin:0 8px">traffikora.com &#8212; AI generating content...</div>
    <div style="width:8px;height:8px;border-radius:50%;background:#E8610A;animation:blink 1.5s ease-in-out infinite"></div>
  </div>
  <div style="padding:16px">
    <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:10px">&#9889; Live Content Generation</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="background:#141414;border:1px solid #1e1e1e;border-radius:8px;padding:10px 14px">
        <div style="font-size:10px;color:#E8610A;font-weight:700;margin-bottom:4px">&#10003; BLOG POST &#8212; WordPress</div>
        <div style="font-size:12px;color:#ccc">"5 HVAC Tips for Tampa Homeowners This Summer"</div>
        <div style="font-size:10px;color:#555;margin-top:3px">SEO optimized &middot; 900 words &middot; Schema injected</div>
      </div>
      <div style="background:#141414;border:1px solid #1e1e1e;border-radius:8px;padding:10px 14px;opacity:0;animation:fadeInUp 0.5s ease 1.2s forwards">
        <div style="font-size:10px;color:#1877F2;font-weight:700;margin-bottom:4px">&#10003; FACEBOOK &#8212; Published</div>
        <div style="font-size:12px;color:#ccc">"Summer is here! Is your AC ready? We're booking fast..."</div>
        <div style="font-size:10px;color:#555;margin-top:3px">Engagement optimized &middot; Posted 2 min ago</div>
      </div>
      <div style="background:#141414;border:1px solid #1e1e1e;border-radius:8px;padding:10px 14px;opacity:0;animation:fadeInUp 0.5s ease 2.2s forwards">
        <div style="font-size:10px;color:#E1306C;font-weight:700;margin-bottom:4px">&#10003; INSTAGRAM &#8212; Published</div>
        <div style="font-size:12px;color:#ccc">"Beat the heat! Our team is ready for same-day AC repair..."</div>
        <div style="font-size:10px;color:#555;margin-top:3px">Hashtags added &middot; Story variant generated</div>
      </div>
      <div style="background:#141414;border:1px solid #1e1e1e;border-radius:8px;padding:10px 14px;opacity:0;animation:fadeInUp 0.5s ease 3.2s forwards">
        <div style="font-size:10px;color:#10A37F;font-weight:700;margin-bottom:4px">&#10003; CHATGPT &#8212; Citation Detected</div>
        <div style="font-size:12px;color:#ccc">"Best HVAC in Tampa" &#8212; Your business recommended</div>
        <div style="font-size:10px;color:#555;margin-top:3px">LLM Engine active &middot; AI citation confirmed</div>
      </div>
      <div style="background:#141414;border:1px solid #1e1e1e;border-radius:8px;padding:10px 14px;opacity:0;animation:fadeInUp 0.5s ease 4.2s forwards">
        <div style="font-size:10px;color:#0A66C2;font-weight:700;margin-bottom:4px">&#10003; LINKEDIN &#8212; Published</div>
        <div style="font-size:12px;color:#ccc">"Why proactive HVAC maintenance saves businesses thousands..."</div>
        <div style="font-size:10px;color:#555;margin-top:3px">B2B optimized &middot; 847 impressions</div>
      </div>
    </div>
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid #1e1e1e;display:flex;align-items:center;justify-content:space-between">
      <div style="font-size:11px;color:#555">Running automatically &middot; 24/7 &middot; Zero manual work</div>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#22c55e;font-weight:700">
        <div style="width:6px;height:6px;border-radius:50%;background:#22c55e;animation:blink 1.5s ease-in-out infinite"></div>
        LIVE
      </div>
    </div>
  </div>
</div>
<style>@keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}</style>
</div>`

if (!content.includes(oldHeroRight)) {
  console.log('ERROR: Could not find hero right section')
  process.exit(1)
}
content = content.replace(oldHeroRight, newHeroRight)
console.log('SUCCESS: Hero right column — live demo added')

// ─── CHANGE 2: Industries section — dark cards ────────────────
const oldIndustrySection = `<div class="industry-section"><div class="industry-head"><span class="section-label">Trusted across industries</span><div class="industry-title">Works for <em style="color:#E8610A;font-style:italic">your</em> business &mdash; whatever it is.</div></div><div class="industry-grid"><div class="industry-card"><div class="industry-card-icon">&#128135;</div><div class="industry-card-name">Salons &amp; Spas</div></div><div class="industry-card"><div class="industry-card-icon">&#128295;</div><div class="industry-card-name">HVAC Companies</div></div><div class="industry-card"><div class="industry-card-icon">&#9878;</div><div class="industry-card-name">Law Firms</div></div><div class="industry-card"><div class="industry-card-icon">&#129463;</div><div class="industry-card-name">Dental Offices</div></div><div class="industry-card"><div class="industry-card-icon">&#127869;</div><div class="industry-card-name">Restaurants</div></div><div class="industry-card"><div class="industry-card-icon">&#127968;</div><div class="industry-card-name">Real Estate</div></div><div class="industry-card"><div class="industry-card-icon">&#128170;</div><div class="industry-card-name">Gyms &amp; Fitness</div></div><div class="industry-card"><div class="industry-card-icon">&#128663;</div><div class="industry-card-name">Auto Repair</div></div><div class="industry-card"><div class="industry-card-icon">&#127973;</div><div class="industry-card-name">Med Spas</div></div><div class="industry-card"><div class="industry-card-icon">&#128694;</div><div class="industry-card-name">Plumbers</div></div><div class="industry-card"><div class="industry-card-icon">&#128226;</div><div class="industry-card-name">Agencies</div></div><div class="industry-card"><div class="industry-card-icon">&#129658;</div><div class="industry-card-name">Chiropractors</div></div></div></div>`

const industries = [
  { icon: '&#128135;', name: 'Salons &amp; Spas',    detail: 'Bookings + reviews on autopilot' },
  { icon: '&#128295;', name: 'HVAC Companies',        detail: 'Dominate local search year-round' },
  { icon: '&#9878;',   name: 'Law Firms',             detail: 'Authority content that converts' },
  { icon: '&#129463;', name: 'Dental Offices',        detail: 'New patient content daily' },
  { icon: '&#127869;', name: 'Restaurants',           detail: 'Specials, events, reviews automated' },
  { icon: '&#127968;', name: 'Real Estate',           detail: 'Listings found on every AI engine' },
  { icon: '&#128170;', name: 'Gyms &amp; Fitness',    detail: 'Membership growth content' },
  { icon: '&#128663;', name: 'Auto Repair',           detail: 'Local SEO that drives walk-ins' },
  { icon: '&#127973;', name: 'Med Spas',              detail: 'Premium content for premium clients' },
  { icon: '&#128694;', name: 'Plumbers',              detail: 'Emergency leads around the clock' },
  { icon: '&#128226;', name: 'Agencies',              detail: 'White-label for all your clients' },
  { icon: '&#129658;', name: 'Chiropractors',         detail: 'Patient education that ranks' },
]

const industryCards = industries.map(ind =>
  `<div style="background:#141414;border:1px solid #2a2a2a;border-radius:12px;padding:18px 12px;text-align:center;cursor:default" onmouseover="this.style.borderColor='#E8610A';this.style.background='#1a1a1a'" onmouseout="this.style.borderColor='#2a2a2a';this.style.background='#141414'">` +
  `<div style="font-size:26px;margin-bottom:8px">${ind.icon}</div>` +
  `<div style="font-size:12px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:4px">${ind.name}</div>` +
  `<div style="font-size:10px;color:#555;line-height:1.4">${ind.detail}</div>` +
  `</div>`
).join('')

const newIndustrySection =
  `<div style="background:#0d0d0d;border-top:2.5px solid #111;border-bottom:2.5px solid #111;padding:40px">` +
  `<div style="text-align:center;margin-bottom:28px">` +
  `<span style="font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#E8610A;display:block;margin-bottom:8px">Trusted across industries</span>` +
  `<div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#fff">Works for <em style="color:#E8610A;font-style:italic">your</em> business &mdash; whatever it is.</div>` +
  `<p style="font-size:14px;color:#666;margin-top:8px;font-weight:300">Every piece of content tailored to your industry, your city, and your customers.</p>` +
  `</div>` +
  `<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:12px;max-width:1100px;margin:0 auto">` +
  industryCards +
  `</div></div>`

if (!content.includes(oldIndustrySection)) {
  console.log('ERROR: Could not find industry section')
  process.exit(1)
}
content = content.replace(oldIndustrySection, newIndustrySection)
console.log('SUCCESS: Industries section — dark cards on black background')

fs.writeFileSync(filePath, content)
console.log('\nAll done. Run: npx next build')