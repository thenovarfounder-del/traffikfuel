// @ts-nocheck
'use client'
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function VsHubspotPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Traffikora vs HubSpot for Small Business</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>HubSpot is a powerful platform built for enterprise B2B sales teams. Traffikora is built for local small businesses that need automated marketing -- not a CRM that requires a dedicated team to run.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Credit Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For You</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded social content daily across 9+ platforms automatically</li>
              <li>Optimizes your Google Business Profile with zero manual effort</li>
              <li>Builds local SEO citations and schema markup automatically</li>
              <li>Publishes weekly SEO blog posts to your website</li>
              <li>Delivers AI engine optimization for ChatGPT, Perplexity, and Gemini visibility</li>
              <li>Sends automated review request campaigns to grow your star rating</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>HubSpot Was Not Built for Your Business</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>HubSpot is one of the most powerful marketing and sales platforms in the world. It is also built entirely for B2B companies with dedicated sales teams, marketing managers, and developers. The starter plan begins around $800 per month and most businesses need $1,600 to $3,200 per month or more to access the features they actually need.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>For a local restaurant, auto repair shop, chiropractic practice, or real estate agent, HubSpot is the wrong tool entirely. It has no Google Business Profile automation, no local SEO citation building, and no AI engine optimization. It is a CRM built for enterprise sales pipelines -- not local business marketing.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Most small businesses that try HubSpot end up using 10 percent of its features, paying for 100 percent of its cost, and spending hours every week trying to make an enterprise tool fit a local business use case it was never designed for.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Traffikora vs HubSpot -- Feature Comparison</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", color: "#cccccc", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8610A" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#ffffff", fontFamily: "Playfair Display, serif" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#E8610A", fontFamily: "Playfair Display, serif" }}>Traffikora</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#ffffff", fontFamily: "Playfair Display, serif" }}>HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starting Price", "$47/mo", "$800+/mo"],
                    ["Automated Social Media Publishing", "Yes -- daily, 9+ platforms", "Manual only"],
                    ["Google Business Profile Automation", "Yes -- fully automated", "No"],
                    ["Local SEO Citation Building", "Yes -- automated", "No"],
                    ["AI Engine Optimization", "Yes -- built in", "No"],
                    ["Automated Blog Content", "Yes -- weekly SEO posts", "No"],
                    ["Review Request Automation", "Yes -- automated", "Limited"],
                    ["Setup Time", "Under 30 minutes", "Weeks to months"],
                    ["Built for Local Business", "Yes", "No -- built for B2B enterprise"]
                  ].map(([feature, traffikora, hubspot], i) => (
                    <tr key={feature} style={{ borderBottom: "1px solid #2a2a2a", background: i % 2 === 0 ? "#111111" : "#1a1a1a" }}>
                      <td style={{ padding: "12px 16px", color: "#ffffff" }}>{feature}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: "#E8610A" }}>{traffikora}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            <div style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
              <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>Is Traffikora really a HubSpot alternative for small business?</h3>
              <p style={{ color: "#cccccc", lineHeight: "1.8" }}>For local small businesses, yes. HubSpot is designed for B2B companies with dedicated marketing and sales teams. Traffikora is designed specifically for local businesses that need automated marketing output without the complexity or cost of an enterprise platform.</p>
            </div>
            <div style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
              <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>How much cheaper is Traffikora than HubSpot?</h3>
              <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora starts at $47 per month. HubSpot Marketing Hub starts at around $800 per month for basic features. For a local business, Traffikora delivers more relevant features at a fraction of the cost.</p>
            </div>
            <div style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
              <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>Does Traffikora have a CRM like HubSpot?</h3>
              <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora is a marketing automation platform, not a CRM. It automates content publishing, SEO, Google Business Profile, reviews, and AI engine visibility. If your primary need is a sales pipeline CRM, HubSpot serves that use case. If you need local marketing that runs automatically, Traffikora is the right tool.</p>
            </div>
            <div style={{ paddingBottom: "24px", marginBottom: "24px" }}>
              <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>How long does Traffikora take to set up?</h3>
              <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Under 30 minutes. You connect your accounts and Traffikora starts publishing immediately. No implementation process, no onboarding consultant, no weeks-long setup. Your marketing starts the same day you sign up.</p>
            </div>
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Built for Local Business. Not Enterprise.</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your local marketing starting at $47/mo -- no implementation fees, no required staff, no complexity.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Credit Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}