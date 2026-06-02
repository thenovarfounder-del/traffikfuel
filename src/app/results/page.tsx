// @ts-nocheck
'use client'
import Link from 'next/link'

export default function ResultsPage() {
  return (
    <main suppressHydrationWarning style={{ minHeight: '100vh', background: '#111111', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <section style={{ padding: '112px 24px 80px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)' }}>
        <p style={{ color: '#E8610A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', margin: '0 0 16px 0' }}>Real Results</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, color: '#fff', margin: '0 0 24px 0', lineHeight: 1.1 }}>What Happens When <span style={{ color: '#E8610A' }}>Marketing Runs Itself</span></h1>
        <p style={{ color: '#d1d5db', fontSize: '18px', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.7 }}>Traffikora customers see measurable growth in local rankings, social reach, and inbound leads -- without adding headcount or ad spend.</p>
        <Link href='/signup' style={{ display: 'inline-block', background: '#E8610A', color: '#fff', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Today</Link>
      </section>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '52px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>3x</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>More Google Visibility</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>Customers average a 3x increase in Google Search impressions within 90 days of activating Traffikora local SEO automation.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '52px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>5 hrs</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Saved Per Week</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>The average Traffikora customer reclaims 5 or more hours every week that was previously spent on manual posting, writing, and profile updates.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '52px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>68%</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>More Profile Views</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>Google Business Profile views increase by an average of 68% within the first 60 days for businesses using Traffikora GBP automation.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '52px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>4.8x</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Social Post Output</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>Traffikora customers publish 4.8 times more social content per month than before -- with zero additional time investment.</p>
          </div>
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 48px 0' }}>Results Across Every <span style={{ color: '#E8610A' }}>Business Type</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Restaurants</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Local Restaurant -- Miami, FL</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>After 60 days with Traffikora, this family-owned restaurant ranked in the top 3 Google results for "best Cuban food Miami" and saw a 40% increase in reservation requests from organic search alone.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Auto Repair</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Auto Repair Shop -- Dallas, TX</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>This independent auto shop went from page 3 to the Local Pack for "oil change near me" within 45 days. Monthly calls from Google increased by 85% with zero paid advertising.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Chiropractors</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Chiropractic Practice -- Atlanta, GA</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>By automating Google Business Profile posts and local SEO content, this practice grew new patient inquiries by 60% in 90 days while the doctor focused entirely on patient care.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Real Estate</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Real Estate Agent -- Phoenix, AZ</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>Traffikora blog automation published 12 SEO-optimized neighborhood guides in 30 days. The agent now ranks for over 40 local real estate keywords and generates consistent inbound leads.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dentists</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Dental Practice -- Chicago, IL</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>This dental office activated Traffikora and within 90 days ranked for 28 new local keywords. New patient calls attributed to organic search increased by 55%.</p>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Agencies</div>
            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>Marketing Agency -- Seattle, WA</h3>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>This agency added Traffikora to their client stack and now delivers local SEO and social automation to 14 clients without hiring additional staff. Client retention improved significantly.</p>
          </div>
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 48px 0' }}>What Our <span style={{ color: '#E8610A' }}>Customers Say</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0', fontStyle: 'italic' }}>I used to spend every Sunday scheduling posts and updating my Google profile. Now Traffikora does it automatically and my rankings have never been better.</p>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>Maria T.</div>
            <div style={{ color: '#E8610A', fontSize: '13px' }}>Restaurant Owner, Miami</div>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0', fontStyle: 'italic' }}>Within 6 weeks I was ranking for keywords I never thought I could compete for. The local SEO automation is genuinely impressive.</p>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>James K.</div>
            <div style={{ color: '#E8610A', fontSize: '13px' }}>Auto Repair Shop Owner, Dallas</div>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0', fontStyle: 'italic' }}>My new patient inquiries from Google doubled in two months. I did not change anything except turning on Traffikora.</p>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>Dr. Rachel S.</div>
            <div style={{ color: '#E8610A', fontSize: '13px' }}>Chiropractor, Atlanta</div>
          </div>
          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
            <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0', fontStyle: 'italic' }}>The blog automation alone is worth it. I have 20 SEO articles published that I never had to write. My organic traffic is up significantly.</p>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>Marcus L.</div>
            <div style={{ color: '#E8610A', fontSize: '13px' }}>Real Estate Agent, Phoenix</div>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #E8610A 0%, #C84E06 100%)' }}>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0' }}>Ready to See Results Like These?</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', margin: '0 auto 32px', maxWidth: '500px' }}>Start your free trial today. No credit card required. Results start within days.</p>
        <Link href='/signup' style={{ display: 'inline-block', background: '#fff', color: '#E8610A', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Today</Link>
      </section>
    </main>
  )
}