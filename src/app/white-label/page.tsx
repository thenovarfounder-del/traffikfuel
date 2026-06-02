import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata = {
  title: "White Label Marketing Automation for Agencies | Traffikora",
  description: "Offer AI marketing automation under your own brand. Traffikora white label lets agencies resell local SEO, social media, reviews, and AI engine optimization to unlimited clients.",
}

export default function WhiteLabelPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>

        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>White Label Marketing Automation for Agencies</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Add a fully automated AI marketing platform to your agency under your own brand. Traffikora white label gives you everything you need to serve local business clients at scale -- without building anything from scratch.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Credit Card Needed</Link>
        </section>

        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What You Get With Traffikora White Label</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Full Traffikora platform rebranded with your agency name and logo</li>
              <li>Manage up to 10 client accounts from a single agency dashboard</li>
              <li>Every client gets automated local SEO, social media, reviews, and AI engine optimization</li>
              <li>Client-facing reports branded with your agency identity</li>
              <li>Set your own pricing and keep 100 percent of what you charge clients</li>
              <li>No technical setup -- clients are onboarded and running in minutes</li>
            </ul>
          </div>
        </section>

        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Why Agencies Choose Traffikora White Label</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Building a marketing automation platform from scratch costs hundreds of thousands of dollars and takes years. Most agencies that try end up with an unreliable tool that requires a full-time engineering team to maintain. Traffikora white label gives you a battle-tested, fully automated platform that is already live and working -- on day one, under your brand.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The local business market is massive and underserved. Every restaurant, contractor, dentist, and retailer in your city needs exactly what Traffikora delivers -- Google Business Profile management, review generation, local SEO content, and AI engine visibility. With white label, you can offer all of it as a premium monthly service and keep every dollar of margin.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The Agency plan at $297 per month supports up to 10 clients. If you charge each client $500 per month -- a conservative rate for the value delivered -- that is $5,000 per month in revenue from a $297 investment. That is the white label opportunity.</p>
          </div>
        </section>

        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>How Traffikora White Label Works</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Sign up for the Agency plan and connect your branding. Your agency name, logo, and colors replace all Traffikora branding in the client-facing dashboard and reports. From your clients perspective, they are using your platform -- not Traffikora.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>You onboard each client by connecting their Google Business Profile, social accounts, and business information. Traffikora handles the rest automatically -- publishing weekly content, generating review requests, building local citations, and optimizing for AI engine visibility. You get credit for the results.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Your agency dashboard shows you every client account in one place -- their ranking progress, review counts, content published, and performance trends. Branded monthly reports are generated automatically and ready to send to clients with one click. You deliver professional results without doing the work manually.</p>
          </div>
        </section>

        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Everything Included in Traffikora White Label</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Full Platform Rebranding", "Your agency name, logo, and colors on every client-facing screen and report. Your clients see your brand -- not Traffikora."],
                ["Multi-Client Dashboard", "Manage all client accounts from a single agency dashboard. See every client performance metric in one place without logging in and out."],
                ["Automated Client Results", "Every client gets weekly Google Business Profile posts, review requests, local SEO content, and AI engine optimization -- all delivered automatically."],
                ["Branded Client Reports", "Professional monthly performance reports generated automatically with your agency branding. Send to clients in one click -- no manual reporting required."],
                ["Custom Pricing Control", "Set your own monthly rate for each client. Traffikora charges you $297 per month for up to 10 clients. What you charge them is entirely up to you."],
                ["Fast Client Onboarding", "Connect a new client in minutes. No technical setup, no developer needed. Clients are live and generating results the same day they sign up."],
                ["Agency Priority Support", "Agency plan subscribers get priority support with faster response times. When you have a client issue, you get to the front of the line."],
                ["Scalable to Enterprise", "Start with the Agency plan at 10 clients. Need more? The Enterprise plan at $997 per month supports unlimited clients with custom AI training."]
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "#1a1a1a", borderRadius: "8px", padding: "24px", borderLeft: "3px solid #E8610A" }}>
                  <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#cccccc", lineHeight: "1.7", fontSize: "0.95rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is white label marketing automation?", "White label marketing automation is a platform built by one company that another company -- in this case your agency -- resells under its own brand. Your clients use the platform thinking it is your proprietary tool. You get all the credit for the results and keep all the margin between what you pay Traffikora and what you charge your clients."],
              ["How many clients can I manage on the Agency plan?", "The Agency plan at $297 per month supports up to 10 client accounts. For agencies with more than 10 clients, the Enterprise plan at $997 per month supports unlimited clients with custom AI training tailored to your client base."],
              ["Can I set my own pricing for clients?", "Yes. Traffikora charges you a flat monthly rate for the Agency plan. What you charge each client is entirely up to you. Most agencies charge between $300 and $800 per month per client for the services Traffikora delivers, creating significant margin at the $297 Agency plan cost."],
              ["Will my clients know they are using Traffikora?", "No. The client-facing dashboard and all reports are rebranded with your agency name and logo. Traffikora branding is removed from everything your clients see. This is a true white label arrangement."],
              ["What services does each client get?", "Every client account gets the full Traffikora platform -- automated Google Business Profile posts, review request campaigns, local SEO blog content, AI engine optimization signals, citation building, and reputation monitoring. Everything runs automatically once their accounts are connected."],
              ["How do I onboard a new client?", "Log into your agency dashboard, create a new client account, and connect their Google Business Profile and social accounts. The onboarding process takes less than 15 minutes per client. Traffikora begins generating and publishing content automatically from day one."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Add AI Marketing Automation to Your Agency Today</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora white label gives your agency a fully automated marketing platform to offer local business clients under your own brand -- starting at $297 per month for up to 10 clients.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Credit Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>

      </main>
      <Footer />
    </>
  )
}