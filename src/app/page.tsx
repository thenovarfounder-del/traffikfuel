// @ts-nocheck
import Footer from '@/components/Footer'
import ProofWall from '@/components/ProofWall'
import Nav from '@/components/Nav'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import LiveDemo from '@/components/LiveDemo'
import ConversionBooster from '@/components/ConversionBooster'

const industries = [
  { icon: '💅', name: 'Salons & Spas', desc: 'Bookings + reviews on autopilot', href: '/solutions/salons' },
  { icon: '🔧', name: 'HVAC Companies', desc: 'Dominate local search year-round', href: '/solutions/hvac' },
  { icon: '⚖️', name: 'Law Firms', desc: 'Authority content that converts', href: '/solutions/lawyers' },
  { icon: '🦷', name: 'Dental Offices', desc: 'New patient content daily', href: '/solutions/dentists' },
  { icon: '🍽️', name: 'Restaurants', desc: 'Specials, events, reviews automated', href: '/solutions/restaurants' },
  { icon: '🏠', name: 'Real Estate', desc: 'Listings found on every AI engine', href: '/solutions/real-estate' },
  { icon: '💪', name: 'Gyms & Fitness', desc: 'Membership growth content', href: '/solutions/gyms' },
  { icon: '🚗', name: 'Auto Repair', desc: 'Local SEO that drives walk-ins', href: '/solutions/auto-repair' },
  { icon: '🏥', name: 'Med Spas', desc: 'Premium content for premium clients', href: '/solutions/med-spas' },
  { icon: '🚰', name: 'Plumbers', desc: 'Emergency leads around the clock', href: '/solutions/plumbers' },
  { icon: '📢', name: 'Agencies', desc: 'White-label for all your clients', href: '/solutions/marketing-agencies' },
  { icon: '🦴', name: 'Chiropractors', desc: 'Patient education that ranks', href: '/solutions/chiropractors' },
]

const plans = [
  { name: 'Free', price: '0', sub: '/forever', desc: 'Try Traffikora with no credit card. Get a real taste of AI content before you commit.', features: ['3 AI blog posts per month', 'Preview content before publish', 'Access to content dashboard', 'No credit card required', 'Upgrade anytime'], btn: 'Start Free — No Card', href: '/signup?plan=free', featured: false },
  { name: 'Starter', price: '47', sub: '/mo', desc: 'Automate your marketing and show up online every single day.', features: ['Unlimited AI blog posts', 'AI social content for Facebook, Instagram, LinkedIn & X', 'One-Push Publish to WordPress', 'Content Calendar & Queue', 'Manual publishing controls', '1 website connected'], btn: 'Get Started', href: '/signup?plan=starter', featured: false },
  { name: 'Pro', price: '97', sub: '/mo', desc: 'Fully hands-off. AI agents run every morning and handle everything.', features: ['Everything in Starter', 'AI Agents run daily automatically', 'Auto Mode — fully hands-off', 'TikTok + YouTube Shorts publishing', 'Google SEO + AI Engine Optimization', 'Advanced analytics'], btn: 'Start Pro', href: '/signup?plan=pro', featured: true },
  { name: 'Agency', price: '297', sub: '/mo', desc: 'Manage up to 10 clients. White-label it and bill whatever you want.', features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label dashboard', 'Client management portal', 'Bulk content generation', 'Agency analytics overview'], btn: 'Start Agency Plan', href: '/signup?plan=agency', featured: false },
  { name: 'Enterprise', price: '997', sub: '/mo', desc: 'Unlimited clients, custom AI training, dedicated account manager.', features: ['Everything in Agency', 'Unlimited client accounts', 'Custom AI voice per client', 'Google Search Console integration', 'SLA uptime guarantee', 'Dedicated account manager'], btn: 'Contact Us', href: '/contact', featured: false },
]

export default function HomePage() {
  return (
    <main>
      <Nav />
      <ConversionBooster />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#fff;color:#111;font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden}
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap");@keyframes shimmer{0%{left:-60%}60%,100%{left:130%}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes ringpulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(2.6);opacity:0}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .btn-cta{display:inline-flex;align-items:center;gap:12px;background:linear-gradient(135deg,#E8610A,#c94e08);color:#fff;border:none;padding:16px 30px;border-radius:8px;font-size:15px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden;letter-spacing:.01em;box-shadow:0 4px 20px rgba(232,97,10,.35);text-decoration:none}
        .btn-cta::before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:rgba(255,255,255,.15);transform:skewX(-20deg);animation:shimmer 3s ease-in-out infinite}
        .btn-cta-dark{display:inline-flex;align-items:center;gap:12px;background:#111;color:#fff;border:none;padding:16px 30px;border-radius:8px;font-size:15px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.25);text-decoration:none}
        .section-label{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E8610A;display:block;margin-bottom:8px}
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-right-col{display:none!important}
          .hero-h1{font-size:36px!important}
          .industry-grid{grid-template-columns:repeat(3,1fr)!important}
          .ba-grid{grid-template-columns:1fr!important}
          .pricing-grid{grid-template-columns:1fr!important}
          .timeline-grid{grid-template-columns:1fr 1fr!important}
          .roi-inner{grid-template-columns:1fr!important}
          .obj-grid{grid-template-columns:1fr!important}
          .features-grid{grid-template-columns:repeat(2,1fr)!important}
          .how-grid{grid-template-columns:1fr!important}
          .testi-grid{grid-template-columns:1fr!important}
          .faq-grid{grid-template-columns:1fr!important}
          .mission-stats{grid-template-columns:1fr!important}
          .comp-th3,.comp-th4,.comp-td3,.comp-td4{display:none!important}
          .pricing-trust{flex-direction:column!important}
          .pt-item{border-right:none!important;border-bottom:1px solid #111!important}
          .limited-offer{flex-direction:column!important}
          .stat-bar-inner{flex-direction:column!important;gap:8px!important}
        }
        @media(max-width:480px){
          .hero-h1{font-size:30px!important}
          .industry-grid{grid-template-columns:repeat(2,1fr)!important}
          .cta-h{font-size:32px!important}
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: '#111', padding: '40px 40px 0' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: '32px', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              {/* FUTURISTIC AI BADGE */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0', background: 'linear-gradient(135deg, #0a0a0a, #1a0800)', border: '1px solid rgba(232,97,10,0.6)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 0 30px rgba(232,97,10,0.15), inset 0 0 30px rgba(232,97,10,0.03)', marginBottom: '12px' }}>
                {/* Left accent block */}
                <div style={{ background: '#E8610A', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span style={{ position: 'relative', width: '8px', height: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #fff', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 1.5s ease-out infinite', opacity: 0, display: 'block' }} />
                  </span>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', fontWeight: 900, color: '#fff', letterSpacing: '.2em', textTransform: 'uppercase' }}>LIVE</span>
                </div>
                {/* Center text */}
                <div style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, color: '#E8610A', letterSpacing: '.15em', textTransform: 'uppercase' }}>AI MARKETING</span>
                  <span style={{ width: '1px', height: '14px', background: 'rgba(232,97,10,0.3)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#aaa', letterSpacing: '.05em' }}>The Future of Local Business is Here</span>
                </div>
                {/* Right corner accent */}
                <div style={{ padding: '10px 14px', borderLeft: '1px solid rgba(232,97,10,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '.1em' }}>v2.0</span>
                </div>
              </div>

              {/* STATS ROW */}
              <div style={{ display: 'flex', gap: '0', marginTop: '8px' }}>
                {[
                  { num: '9+', label: 'Platforms' },
                  { num: '24/7', label: 'Automated' },
                  { num: '$0', label: 'To Start' },
                ].map((s, i) => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    <div style={{ padding: '6px 16px', textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(232,97,10,0.2)' : 'none' }}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '16px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '2px' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="hero-h1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: .96, letterSpacing: '-1.5px', marginBottom: '16px' }}>
              Set it once.<br /><em style={{ fontStyle: 'italic', color: '#E8610A' }}>It markets<br />forever.</em>
            </h1>
            <p style={{ fontSize: '15px', color: '#ccc', lineHeight: 1.85, marginBottom: '20px', maxWidth: '420px', fontWeight: 300 }}>
              Every day you don’t automate, your competitors get further ahead. Traffikora runs Google, TikTok, YouTube, and every AI engine for you — 24/7, no agency, no manual work. Set it once.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
              <Link href="/signup" className="btn-cta">
                Start Free &mdash; No Credit Card Needed
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', padding: '16px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                See How It Works →
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
              {[
                { icon: '🛡️', title: 'Zero Risk Guarantee', sub: 'Free plan — no credit card needed · Cancel in one click' },
                { icon: '⚡', title: 'Live in 5 Minutes', sub: 'No tech skills required' },
              ].map(g => (
                <div key={g.title} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '8px', padding: '9px 14px' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{g.icon}</span>
                  <div style={{ fontSize: '11px', color: '#ccc', lineHeight: 1.5 }}>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '12px' }}>{g.title}</strong>
                    {g.sub}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', borderTop: '1px solid #2a2a2a', marginTop: '14px', flexWrap: 'wrap' }}>
              {['No agency needed', 'Free to start', 'Free plan available'].map((t, i) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {i > 0 && <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#555', display: 'inline-block' }} />}
                  <span style={{ fontSize: '13px', color: '#aaa', fontWeight: 500 }}>{t}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="hero-right-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '40px' }}>
            <LiveDemo />
          </div>
        </div>
        <div style={{ background: '#090909', borderTop: '1px solid #1a1a1a', padding: '10px 40px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.12em', whiteSpace: 'nowrap' }}>Powered by</span>
          <div style={{ display: 'flex', gap: '7px' }}>
            {['Google', 'Stripe', 'Supabase', 'Anthropic'].map(p => (
              <span key={p} style={{ fontSize: '10px', color: '#ccc', padding: '4px 10px', border: '1px solid #555', borderRadius: '3px' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES TICKER */}
      <div style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', padding: '12px 0', overflow: 'hidden', position: 'relative' }}>
        <style>{`
          @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .ticker-inner { display:flex; animation:ticker 25s linear infinite; width:max-content; }
          .ticker-inner:hover { animation-play-state:paused; }
        `}</style>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg,#0a0a0a,transparent)', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg,#0a0a0a,transparent)', zIndex: 1 }} />
        <div className="ticker-inner">
          {['Tampa, FL','Atlanta, GA','Dallas, TX','Miami, FL','Chicago, IL','Houston, TX','Los Angeles, CA','New York, NY','Phoenix, AZ','Denver, CO','Seattle, WA','Boston, MA','Nashville, TN','Orlando, FL','Austin, TX','Tampa, FL','Atlanta, GA','Dallas, TX','Miami, FL','Chicago, IL','Houston, TX','Los Angeles, CA','New York, NY','Phoenix, AZ','Denver, CO','Seattle, WA','Boston, MA','Nashville, TN','Orlando, FL','Austin, TX'].map((city, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '12px', color: '#ffffff', fontWeight: 600, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E8610A', display: 'inline-block', flexShrink: 0 }} />
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <section style={{ background: '#0d0d0d', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span className="section-label">Trusted across industries</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#fff' }}>Works for <em style={{ color: '#E8610A', fontStyle: 'italic' }}>your</em> business &mdash; whatever it is.</h2>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px', fontWeight: 300 }}>Every piece of content tailored to your industry, your city, and your customers.</p>
        </div>
        <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '12px', maxWidth: '1100px', margin: '0 auto' }}>
          {industries.map(ind => (
            <Link key={ind.name} href={ind.href} style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '18px 12px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '26px', marginBottom: '8px' }} role="img" aria-label={ind.name}>{ind.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '4px' }}>{ind.name}</div>
              <div style={{ fontSize: '10px', color: '#555', lineHeight: 1.4 }}>{ind.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <ProofWall />

      {/* PAIN */}
      <section style={{ background: '#0d0d0d', padding: '40px', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <span className="section-label">The problem</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '14px' }}>
          You&rsquo;re posting manually.<br />Your competitor hired an <em style={{ color: '#E8610A', fontStyle: 'italic' }}>agency.</em>
        </h2>
        <p style={{ fontSize: '16px', color: '#bbb', maxWidth: '520px', margin: '0 auto', lineHeight: 1.85, fontWeight: 300 }}>Every day you do it yourself, they pull further ahead. There&rsquo;s a smarter way &mdash; and it costs less than a single hour of agency time.</p>
      </section>

      {/* STAT BAR */}
      <div style={{ background: '#E8610A', padding: '20px 40px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '20px' }} className="stat-bar-inner">
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>73%</span>
          <span style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,.4)', display: 'inline-block' }} />
          <span style={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, textAlign: 'left', maxWidth: '400px', fontWeight: 400 }}>of local searches now happen on AI engines &mdash; most businesses are completely invisible. Traffikora fixes that.</span>
        </div>
      </div>

      {/* BEFORE/AFTER */}
      <section style={{ padding: '40px', background: '#fff', borderBottom: '2.5px solid #111' }}>
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <span className="section-label">The difference</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111', lineHeight: 1.15 }}>Without Traffikora vs <em style={{ color: '#E8610A', fontStyle: 'italic' }}>With Traffikora</em></h2>
        </div>
        <div className="ba-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { head: '✗ Without Traffikora', bg: '#111', items: ['Posting manually every day — or not at all','Invisible on ChatGPT, Claude and Gemini','Paying $2,000+/mo for an agency','No time to focus on the actual business','Stuck on page 3 of Google'], check: '✗', color: '#cc0000' },
            { head: '✓ With Traffikora', bg: '#E8610A', items: ['Content published automatically, every day','Found on every AI engine that matters','Full automation from $97/mo','Marketing runs while you sleep','Climbing to page 1 in weeks'], check: '✓', color: '#E8610A' },
          ].map(col => (
            <div key={col.head} style={{ border: '2px solid #111', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ padding: '13px 18px', fontSize: '13px', fontWeight: 700, textAlign: 'center', letterSpacing: '.06em', textTransform: 'uppercase', background: col.bg, color: '#fff' }}>{col.head}</div>
              <div style={{ padding: '16px 18px' }}>
                {col.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px', fontSize: '13px', color: '#444', lineHeight: 1.55, fontWeight: 400 }}>
                    <span style={{ color: col.color, fontWeight: 700, flexShrink: 0 }}>{col.check}</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ background: '#f7f7f7', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <span className="section-label">Why Traffikora wins</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111' }}>Traffikora vs <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Every Alternative</em></h2>
        </div>
        <table style={{ width: '100%', maxWidth: '900px', margin: '0 auto', border: '2px solid #111', borderRadius: '12px', overflow: 'hidden', borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr>
              <th style={{ padding: '14px 16px', fontSize: '12px', fontWeight: 700, textAlign: 'left', borderBottom: '2px solid #111', borderRight: '2px solid #111', background: '#f7f7f7', width: '34%' }}></th>
              <th style={{ padding: '14px 16px', fontSize: '12px', fontWeight: 700, textAlign: 'center', borderBottom: '2px solid #111', borderRight: '2px solid #1a1a1a', background: '#111', color: '#fff', letterSpacing: '.05em', textTransform: 'uppercase' }}>Traffikora</th>
              <th className="comp-th3" style={{ padding: '14px 16px', fontSize: '12px', fontWeight: 700, textAlign: 'center', borderBottom: '2px solid #111', borderRight: '2px solid #eee', background: '#f7f7f7', color: '#555', letterSpacing: '.05em', textTransform: 'uppercase' }}>Hiring an Agency</th>
              <th className="comp-th4" style={{ padding: '14px 16px', fontSize: '12px', fontWeight: 700, textAlign: 'center', borderBottom: '2px solid #111', background: '#f7f7f7', color: '#555', letterSpacing: '.05em', textTransform: 'uppercase' }}>Doing It Yourself</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Monthly cost','Free to start','$2,000–$10,000/mo','$0 but hours of time'],
              ['Time required from you','5 min setup only','Weekly meetings','3+ hrs/day'],
              ['All AI engines','✓ All platforms','✗ Rarely offered','✗ Almost impossible'],
              ['Publishes 24/7 automatically','✓ Always on','Weekdays only','✗ Only when you do it'],
              ['9+ platforms simultaneously','✓ All included','Usually 2–3','✗ One at a time'],
              ['Cancel anytime','✓ One click','✗ Contracts required','✓'],
              ['Free trial','✓ Free plan forever','✗ No','✓'],
            ].map((row, i) => (
              <tr key={i}>
                <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid #eee', borderRight: '2px solid #111', textAlign: 'left', fontWeight: 600, color: '#111', background: '#fff' }}>{row[0]}</td>
                <td style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid #eee', borderRight: '2px solid #111', textAlign: 'center', fontWeight: 700, color: '#E8610A', background: '#fff9f5' }}>{row[1]}</td>
                <td className="comp-td3" style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid #eee', borderRight: '1.5px solid #eee', textAlign: 'center', color: '#333' }}>{row[2]}</td>
                <td className="comp-td4" style={{ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid #eee', textAlign: 'center', color: '#333' }}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* TIMELINE */}
      <section style={{ background: '#111', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span className="section-label" style={{ display: 'inline-block' }}>Your first 30 days</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>What happens after you <em style={{ color: '#E8610A', fontStyle: 'italic' }}>start today</em></h2>
        </div>
        <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { num: '1', day: 'Day 1', title: 'You’re live in 5 minutes', desc: 'Connect your accounts. Our AI learns your business. Content starts generating immediately.' },
            { num: '7', day: 'Day 7', title: 'First content wave published', desc: 'Blog posts, social content, schema markup all live. Google starts indexing. AI engines start noticing.' },
            { num: '14', day: 'Day 14', title: 'Rankings begin moving', desc: 'Search Console shows impressions climbing. TikTok and YouTube content gaining real traction.' },
            { num: '30', day: 'Day 30', title: 'You’re findable everywhere', desc: 'Google rankings up. AI engines recommending you. New leads coming in. You haven’t touched a thing.' },
          ].map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 12px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 700, color: '#fff', background: i === 0 ? '#E8610A' : '#1e1e1e', border: i === 0 ? '3px solid #111' : '3px solid #2a2a2a', flexShrink: 0 }}>{step.num}</div>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '7px' }}>{step.day}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>{step.title}</div>
              <div style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.65, fontWeight: 300 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ background: '#0d0d0d', padding: '44px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '2.5px solid #111' }}>
        <span className="section-label" style={{ position: 'relative', zIndex: 1 }}>Every platform. One machine.</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, color: '#fff', letterSpacing: '-1px', lineHeight: 1, marginBottom: '6px', position: 'relative', zIndex: 1 }}>9+ platforms.<br /><span style={{ color: '#E8610A', fontStyle: 'italic' }}>Zero extra work.</span></h2>
        <p style={{ fontSize: '15px', color: '#aaa', marginBottom: '28px', position: 'relative', zIndex: 1, fontWeight: 300 }}>Your content reaches everywhere &mdash; automatically &mdash; every single day.</p>
        <div style={{ display: 'flex', gap: '9px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          {[{name:'Google',color:'#4285F4'},{name:'TikTok',color:'#fff'},{name:'YouTube',color:'#FF0000'},{name:'ChatGPT',color:'#10A37F'},{name:'Claude',color:'#D97757'},{name:'Gemini',color:'#4285F4'},{name:'Instagram',color:'#E1306C'},{name:'Facebook',color:'#1877F2'},{name:'Reddit',color:'#FF4500'}].map(p => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#141414', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '12px 20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#ddd' }}>{p.name}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '13px', color: '#aaa', fontStyle: 'italic' }}>Every other platform covers <span style={{ color: '#E8610A', fontWeight: 700 }}>1 channel</span>. Traffikora covers <span style={{ color: '#E8610A', fontWeight: 700 }}>all of them</span>.</p>
        </div>
      </section>

      {/* LIMITED OFFER */}
      <div style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 100%)', borderTop: '2.5px solid #111', padding: '22px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }} className="limited-offer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ background: '#E8610A', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '5px', whiteSpace: 'nowrap', flexShrink: 0 }}>&#128293; Limited Offer</span>
          <div style={{ fontSize: '14px', color: '#ccc', lineHeight: 1.55, fontWeight: 300 }}>
            <strong style={{ fontSize: '16px', color: '#E8610A', display: 'block', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 700, marginBottom: '2px' }}>Start free today &mdash; no credit card ever needed.</strong>
            Free plan available forever. Paid plans from $47/mo.
          </div>
        </div>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '12px 22px', borderRadius: '7px', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none', flexShrink: 0 }}>Claim Offer &rarr;</Link>
      </div>

      {/* TRUST BAR */}
      <div style={{ display: 'flex', alignItems: 'stretch', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', background: '#f7f7f7' }} className="pricing-trust">
        {[
          { icon: '🛡️', label: 'Free Plan — No Credit Card Needed', sub: 'No credit card required' },
          { icon: '⚡', label: 'Cancel Any Time', sub: 'One click — no questions asked' },
          { icon: '🔒', label: 'Secure Checkout', sub: '256-bit SSL · Powered by Stripe' },
          { icon: '💬', label: 'Live Support Included', sub: 'Real humans — not bots' },
        ].map((item, i) => (
          <div key={item.label} className="pt-item" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', borderRight: i < 3 ? '2px solid #111' : 'none' }}>
            <span style={{ fontSize: '26px', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', lineHeight: 1.3 }}>{item.label}</div>
              <div style={{ fontSize: '12px', color: '#666', fontWeight: 400, marginTop: '2px' }}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* PRICING */}
      <section style={{ background: '#0a0a0a', padding: '70px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px', position: 'relative', zIndex: 1 }}>
          <span className="section-label">Simple pricing</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '58px', fontWeight: 700, color: '#fff', lineHeight: 1.0, letterSpacing: '-1.5px' }}>Stop losing leads.<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>Start growing today.</em></h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '12px', padding: '12px 24px', marginTop: '20px' }}>
            <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em' }}>🔥 Free plan spots filling up fast</span>
          </div>
        </div>
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{ background: plan.featured ? 'linear-gradient(160deg,#1c1208 0%,#111 60%)' : '#111', padding: '28px 20px', position: 'relative', borderRadius: '14px', border: plan.featured ? '1px solid #E8610A' : '1px solid rgba(255,255,255,0.35)', display: 'flex', flexDirection: 'column', transform: plan.featured ? 'translateY(-10px)' : 'none', boxShadow: plan.featured ? '0 0 50px rgba(232,97,10,0.18)' : 'none' }}>
              {plan.featured && <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#E8610A,#ff8c42)', color: '#fff', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: '20px', marginBottom: '12px', fontWeight: 700 }}>Most Popular</span>}
              <div style={{ fontSize: '10px', letterSpacing: '.2em', color: '#888', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 700 }}>{plan.name}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                <sup style={{ fontSize: '16px', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, verticalAlign: 'super', color: '#E8610A' }}>$</sup>{plan.price}<sub style={{ fontSize: '11px', color: '#444', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>{plan.sub}</sub>
              </div>
              <p style={{ fontSize: '12px', color: '#bbb', margin: '10px 0 16px', lineHeight: 1.7, fontWeight: 300 }}>{plan.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '20px', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: '12px', color: '#ddd', padding: '7px 0', borderBottom: '1px solid #2a2a2a', display: 'flex', alignItems: 'flex-start', gap: '7px', lineHeight: 1.5, fontWeight: 400 }}>
                    <span style={{ color: '#E8610A', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{ width: '100%', padding: '13px', borderRadius: '8px', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.2)', background: plan.featured ? 'linear-gradient(135deg,#E8610A,#ff8c42)' : 'transparent', color: plan.featured ? '#fff' : '#ccc', marginTop: 'auto', display: 'block', textAlign: 'center', textDecoration: 'none', boxShadow: plan.featured ? '0 4px 20px rgba(232,97,10,0.4)' : 'none' }}>{plan.btn}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section style={{ borderTop: '2.5px solid #111' }}>
        <div className="roi-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: '#111', padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="section-label">The math is simple</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-.5px', marginBottom: '14px' }}>2 extra clients pays<br />for a <em style={{ color: '#E8610A', fontStyle: 'italic' }}>full year.</em></h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.85, fontWeight: 300 }}>Most businesses spend $2,000&ndash;$5,000/mo on agencies and get mediocre results. Traffikora starts at $97/mo &mdash; and never stops working.</p>
          </div>
          <div style={{ background: '#fff', padding: '44px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderLeft: '2.5px solid #111' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '96px', fontWeight: 700, color: '#111', lineHeight: 1, letterSpacing: '-3px' }}>10<span style={{ color: '#E8610A' }}>x</span></div>
            <p style={{ fontSize: '14px', color: '#555', textAlign: 'center', lineHeight: 1.65, maxWidth: '220px', marginTop: '8px', fontWeight: 300 }}>Just 2 extra clients/month pays for itself 10 times over &mdash; every single month.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '2.5px solid #111', borderRadius: '9px', overflow: 'hidden', width: '100%', marginTop: '22px' }}>
              {[{num:'$47',lbl:'Starting price per month'},{num:'2',lbl:'Clients needed to break even'},{num:'∞',lbl:'Return on investment after that'}].map((item,i) => (
                <div key={item.num} style={{ padding: '13px 9px', textAlign: 'center', borderRight: i < 2 ? '2.5px solid #111' : 'none' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#E8610A' }}>{item.num}</div>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '4px', lineHeight: 1.4, fontWeight: 300 }}>{item.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section style={{ background: '#0d0d0d', padding: '44px 40px' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Every question answered</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '22px' }}>We know what you&rsquo;re thinking.</h2>
        <div className="obj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { q: '“Is this complicated to set up?”', a: 'No tech skills needed. You’re live in under 5 minutes. We walk you through every step of the way.' },
            { q: '“Will it work for my industry?”', a: 'We support 16+ industries — dentists, salons, HVAC, law firms, restaurants, real estate and more.' },
            { q: '“What if I don’t like it?”', a: 'Free plan available forever. Upgrade anytime. Cancel with one click. Zero risk, no questions asked.' },
          ].map(obj => (
            <div key={obj.q} style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '9px', padding: '22px 20px' }}>
              <div style={{ width: '22px', height: '2px', background: '#E8610A', marginBottom: '14px' }} />
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.45 }}>{obj.q}</h3>
              <p style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>{obj.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#fff', padding: '44px 40px', borderBottom: '2.5px solid #111' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Everything included</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '20px' }}>One platform. Every channel.</h2>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { icon: '🔍', name: 'Google SEO', desc: 'Rank higher with automated SEO content and schema markup' },
            { icon: '✏️', name: 'Blog Automation', desc: 'Publish SEO blog posts to WordPress automatically every day' },
            { icon: '🎬', name: 'TikTok Publishing', desc: 'Push videos directly to TikTok with zero manual effort' },
            { icon: '▶️', name: 'YouTube Shorts', desc: 'Auto-upload your videos to YouTube Shorts automatically' },
            { icon: '🤖', name: 'AI Engine Optimization', desc: 'Rank on Google, Bing, and every AI engine — ChatGPT, Claude, Gemini, Copilot, Perplexity' },
            { icon: '💬', name: 'Reddit Amplifier', desc: 'Build authority through strategic Reddit presence' },
            { icon: '📋', name: 'Schema Markup', desc: 'Structured data injected automatically into your site' },
            { icon: '📊', name: 'Search Console', desc: 'Direct Google Search Console integration and reporting' },
          ].map((f, i) => (
            <div key={f.name} style={{ padding: '20px 18px', borderRight: (i+1)%4!==0?'1px solid #111':'none', borderBottom: i<4?'1px solid #111':'none' }}>
              <div style={{ fontSize: '22px', marginBottom: '9px' }} role="img" aria-label={f.name}>{f.icon}</div>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#111', marginBottom: '6px' }}>{f.name}</h3>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#f7f7f7', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', padding: '44px 40px' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>How it works</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '20px' }}>Up and running <em style={{ color: '#E8610A', fontStyle: 'italic' }}>in minutes.</em></h2>
        <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { num: 1, color: '#E8610A', title: 'Connect your accounts', desc: 'Link your website, social profiles, and Google in one click. Takes less than 5 minutes total.' },
            { num: 2, color: '#111', title: 'Tell us about your business', desc: 'Answer a few simple questions. Our AI learns everything about what you do and who you serve.' },
            { num: 3, color: '#111', title: 'Watch it work', desc: 'Traffikora starts generating and publishing content immediately and never stops.' },
          ].map((step, i) => (
            <div key={step.num} style={{ background: '#fff', padding: '24px 20px', textAlign: 'center', borderRight: i<2?'2.5px solid #111':'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff', background: step.color }}>{step.num}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI */}
      <section style={{ background: '#111', padding: '44px 40px', textAlign: 'center' }}>
        <span className="section-label">Our #1 differentiator</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '12px' }}>The only platform that<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>optimizes for AI search</em></h2>
        <p style={{ fontSize: '15px', color: '#bbb', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.85, fontWeight: 300 }}>When someone asks ChatGPT or Claude to recommend a business like yours, Traffikora makes sure your name comes up. No other platform does this.</p>
        <div style={{ display: 'flex', gap: '9px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
          {['Claude','ChatGPT','Gemini','Copilot','Perplexity','Google'].map(ai => (
            <div key={ai} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid #333', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', color: '#ccc', fontWeight: 500 }}>{ai}</div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: '#aaa', fontStyle: 'italic' }}>Every other platform optimizes for Google only. We optimize for Google, Bing, and every AI engine that matters.</p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#f7f7f7', borderTop: '2.5px solid #111', padding: '44px 40px' }}>
        <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>What clients say</span>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '22px' }}>Real businesses. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Real results.</em></h2>
        <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { text: 'My competitors have full marketing teams. I’m a solo agent. Traffikora levels the playing field completely. Closed 4 extra deals last month I can directly trace back to Traffikora.', name: 'Andrew Stevenson', role: 'Tampa, FL — Real Estate Agent', avatar: 'A' },
            { text: 'As an attorney I don’t have time to think about social media. Traffikora handles all of it. Three of my last five clients told me they found me online in ways I never would have reached them before.', name: 'Sebastian Lewis', role: 'Atlanta, GA — Law Firm', avatar: 'S' },
            { text: 'I was spending $3,200 a month on a marketing agency. Three weeks into Traffikora, I’m getting 11 leads a week. My Google ranking jumped from page 4 to page 1. I cancelled the agency the same day.', name: 'Jonathan Anderson', role: 'Dallas, TX — HVAC Owner', avatar: 'J' },
          ].map(t => (
            <div key={t.name} style={{ background: '#fff', border: '2px solid #111', borderRadius: '14px', padding: '24px 22px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#E8610A' }} />
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '64px', color: '#e8e8e8', lineHeight: .8, display: 'block', marginBottom: '4px' }}>&ldquo;</span>
              <div style={{ color: '#E8610A', fontSize: '15px', marginBottom: '10px', letterSpacing: '3px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p style={{ fontSize: '14px', color: '#222', lineHeight: 1.9, fontStyle: 'italic', marginBottom: '16px', fontWeight: 300 }}>{t.text}</p>
              <div style={{ height: '1px', background: '#e8e8e8', marginBottom: '13px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', padding: '44px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <span className="section-label">FAQ</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111' }}>Everything you need to <em style={{ color: '#E8610A', fontStyle: 'italic' }}>know before you start</em></h2>
        </div>
        <FaqAccordion />
      </section>

      {/* MISSION */}
      <section style={{ background: '#111', borderTop: '2.5px solid #111', padding: '44px 40px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Why we built this</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>Built for the business owner<br />who can&rsquo;t afford to <em style={{ color: '#E8610A', fontStyle: 'italic' }}>fall behind.</em></h2>
          <div style={{ position: 'relative', padding: '26px 30px', background: '#141414', border: '1px solid #2a2a2a', borderRadius: '13px', textAlign: 'left' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: '#E8610A', borderRadius: '3px 0 0 3px' }} />
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', color: '#1e1e1e', lineHeight: 1, display: 'block', marginBottom: '-5px' }}>&ldquo;</span>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontStyle: 'italic', color: '#ccc', lineHeight: 1.95, fontWeight: 400 }}>We built Traffikora because small business owners deserve the same marketing firepower as the big guys &mdash; without the agency price tag. Every day you wait is a day your competitor pulls further ahead. That&rsquo;s why we made it automatic.</p>
          </div>
          <div className="mission-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid #2a2a2a', borderRadius: '9px', overflow: 'hidden', marginTop: '22px' }}>
            {[{num:'Free',lbl:'To start — no credit card needed'},{num:'9+',lbl:'Platforms covered simultaneously'},{num:'$97',lbl:'Less than 1 hour of agency time'}].map((s,i) => (
              <div key={s.num} style={{ padding: '18px 12px', textAlign: 'center', borderRight: i<2?'1px solid #2a2a2a':'none' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#E8610A', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '12px', color: '#aaa', marginTop: '4px', lineHeight: 1.45, fontWeight: 300 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#fff', borderTop: '2.5px solid #111', padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#111,#E8610A,#111)' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff9f5', border: '1px solid rgba(232,97,10,.25)', borderRadius: '30px', padding: '7px 18px', marginBottom: '22px', fontSize: '13px', color: '#E8610A', fontWeight: 600 }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8610A', animation: 'blink 1.5s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }} />
          Live now &mdash; AI marketing running for businesses like yours right now
        </div>
        <h2 className="cta-h" style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: '14px' }}>
          While you read this,<br />your competitor&rsquo;s Traffikora<br />is <em style={{ color: '#E8610A', fontStyle: 'italic' }}>already running.</em>
        </h2>
        <p style={{ fontSize: '15px', color: '#555', margin: '0 auto 28px', lineHeight: 1.85, maxWidth: '440px', fontWeight: 300 }}>Start your free trial before they do. Free plan &mdash; no credit card needed. One click to cancel. Zero risk.</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', borderRadius: '50%', border: '2.5px solid #111', textAlign: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#E8610A' }}>Free</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 700, color: '#111', lineHeight: 1, marginTop: '3px' }}>Plan</span>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '.05em' }}>No Card</span>
          </div>
          <div>
            <Link href="/signup" className="btn-cta-dark">
              Start Free &mdash; No Credit Card Needed
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>&rarr;</span>
            </Link>
            <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', marginTop: '13px', flexWrap: 'wrap' }}>
              {['Free plan available','Paid plans from $47/mo','Cancel anytime'].map(note => (
                <span key={note} style={{ fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: '#E8610A', fontWeight: 700 }}>✓</span> {note}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', borderRadius: '50%', border: '2.5px solid #111', textAlign: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#E8610A' }}>Zero</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 700, color: '#111', lineHeight: 1, marginTop: '3px' }}>Risk</span>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '.05em' }}>Guaranteed</span>
          </div>
        </div>
        <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic', marginTop: '20px' }}>Still not sure? <span style={{ color: '#111', fontWeight: 700, fontStyle: 'normal' }}>Start free. You have nothing to lose and everything to gain.</span></p>
      </section>

      {/* SOCIAL BAR */}
      <div style={{ background: '#0d0d0d', padding: '18px 40px', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '11px', color: '#555', letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: '11px' }}>Follow Traffikora</div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { href: 'https://www.facebook.com/profile.php?id=61590075525966', bg: '#1877f2', label: 'Traffikora on Facebook', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
            { href: 'https://www.instagram.com/traffikora/', bg: '#c13584', label: 'Traffikora on Instagram', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
            
            { href: 'https://www.youtube.com/@traffikora', bg: '#ff0000', label: 'Traffikora on YouTube', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black"/></svg> },
            { href: 'https://www.tiktok.com/@traffikora', bg: '#010101', label: 'Traffikora on TikTok', svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg> },
            { href: 'https://www.linkedin.com/company/traffikora', bg: '#0a66c2', label: 'Traffikora on LinkedIn', svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.bg, border: s.bg==='#000'||s.bg==='#010101'?'1px solid #333':'none', flexShrink: 0, textDecoration: 'none' }}>
              {s.svg}
            </a>
          ))}
        </div>
      </div>

      <ProofWall />
      <Footer />
    </main>
  )
}
