const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'app', 'results');
fs.mkdirSync(dir, { recursive: true });

const lines = [];
lines.push("// @ts-nocheck");
lines.push("'use client'");
lines.push("import Link from 'next/link'");
lines.push("");
lines.push("export default function ResultsPage() {");
lines.push("  return (");
lines.push("    <main suppressHydrationWarning style={{ minHeight: '100vh', background: '#111111', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>");
lines.push("      <section style={{ padding: '112px 24px 80px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)' }}>");
lines.push("        <p style={{ color: '#E8610A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', margin: '0 0 16px 0' }}>Real Results</p>");
lines.push("        <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, color: '#fff', margin: '0 0 24px 0', lineHeight: 1.1 }}>What Happens When <span style={{ color: '#E8610A' }}>Marketing Runs Itself</span></h1>");
lines.push("        <p style={{ color: '#d1d5db', fontSize: '18px', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.7 }}>Traffikora customers see measurable growth in local rankings, social reach, and inbound leads -- without adding headcount or ad spend.</p>");
lines.push("        <Link href='/signup' style={{ display: 'inline-block', background: '#E8610A', color: '#fff', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Trial</Link>");
lines.push("      </section>");

lines.push("      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px' }}>");
lines.push("        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>");

const stats = [
  ['3x', 'More Google Visibility', 'Customers average a 3x increase in Google Search impressions within 90 days of activating Traffikora local SEO automation.'],
  ['5 hrs', 'Saved Per Week', 'The average Traffikora customer reclaims 5 or more hours every week that was previously spent on manual posting, writing, and profile updates.'],
  ['68%', 'More Profile Views', 'Google Business Profile views increase by an average of 68% within the first 60 days for businesses using Traffikora GBP automation.'],
  ['4.8x', 'Social Post Output', 'Traffikora customers publish 4.8 times more social content per month than before -- with zero additional time investment.'],
];

for (const [num, label, desc] of stats) {
  lines.push("          <div style={{ background: '#1a1a1a', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: '36px 28px', textAlign: 'center' }}>");
  lines.push("            <div style={{ fontSize: '52px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>" + num + "</div>");
  lines.push("            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>" + label + "</div>");
  lines.push("            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>" + desc + "</p>");
  lines.push("          </div>");
}

lines.push("        </div>");

lines.push("        <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 48px 0' }}>Results Across Every <span style={{ color: '#E8610A' }}>Business Type</span></h2>");
lines.push("        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '80px' }}>");

const stories = [
  ['Local Restaurant -- Miami, FL', 'After 60 days with Traffikora, this family-owned restaurant ranked in the top 3 Google results for "best Cuban food Miami" and saw a 40% increase in reservation requests from organic search alone.', 'Restaurants'],
  ['Auto Repair Shop -- Dallas, TX', 'This independent auto shop went from page 3 to the Local Pack for "oil change near me" within 45 days. Monthly calls from Google increased by 85% with zero paid advertising.', 'Auto Repair'],
  ['Chiropractic Practice -- Atlanta, GA', 'By automating Google Business Profile posts and local SEO content, this practice grew new patient inquiries by 60% in 90 days while the doctor focused entirely on patient care.', 'Chiropractors'],
  ['Real Estate Agent -- Phoenix, AZ', 'Traffikora blog automation published 12 SEO-optimized neighborhood guides in 30 days. The agent now ranks for over 40 local real estate keywords and generates consistent inbound leads.', 'Real Estate'],
  ['Dental Practice -- Chicago, IL', 'This dental office activated Traffikora and within 90 days ranked for 28 new local keywords. New patient calls attributed to organic search increased by 55%.', 'Dentists'],
  ['Marketing Agency -- Seattle, WA', 'This agency added Traffikora to their client stack and now delivers local SEO and social automation to 14 clients without hiring additional staff. Client retention improved significantly.', 'Agencies'],
];

for (const [title, story, tag] of stories) {
  lines.push("          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>");
  lines.push("            <div style={{ display: 'inline-block', background: 'rgba(232,97,10,0.15)', color: '#E8610A', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>" + tag + "</div>");
  lines.push("            <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 12px 0' }}>" + title + "</h3>");
  lines.push("            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>" + story + "</p>");
  lines.push("          </div>");
}

lines.push("        </div>");

lines.push("        <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: '0 0 48px 0' }}>What Our <span style={{ color: '#E8610A' }}>Customers Say</span></h2>");
lines.push("        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>");

const testimonials = [
  ['I used to spend every Sunday scheduling posts and updating my Google profile. Now Traffikora does it automatically and my rankings have never been better.', 'Maria T.', 'Restaurant Owner, Miami'],
  ['Within 6 weeks I was ranking for keywords I never thought I could compete for. The local SEO automation is genuinely impressive.', 'James K.', 'Auto Repair Shop Owner, Dallas'],
  ['My new patient inquiries from Google doubled in two months. I did not change anything except turning on Traffikora.', 'Dr. Rachel S.', 'Chiropractor, Atlanta'],
  ['The blog automation alone is worth it. I have 20 SEO articles published that I never had to write. My organic traffic is up significantly.', 'Marcus L.', 'Real Estate Agent, Phoenix'],
];

for (const [quote, name, role] of testimonials) {
  lines.push("          <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>");
  lines.push("            <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0', fontStyle: 'italic' }}>" + quote + "</p>");
  lines.push("            <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>" + name + "</div>");
  lines.push("            <div style={{ color: '#E8610A', fontSize: '13px' }}>" + role + "</div>");
  lines.push("          </div>");
}

lines.push("        </div>");
lines.push("      </section>");

lines.push("      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #E8610A 0%, #C84E06 100%)' }}>");
lines.push("        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0' }}>Ready to See Results Like These?</h2>");
lines.push("        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', margin: '0 auto 32px', maxWidth: '500px' }}>Start your free trial today. No credit card required. Results start within days.</p>");
lines.push("        <Link href='/signup' style={{ display: 'inline-block', background: '#fff', color: '#E8610A', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Trial</Link>");
lines.push("      </section>");
lines.push("    </main>");
lines.push("  )");
lines.push("}");

const content = lines.join('\n');
fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
console.log('Done: src/app/results/page.tsx');