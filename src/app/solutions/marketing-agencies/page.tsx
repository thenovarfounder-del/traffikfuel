import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Agencies | Traffikora",
  description: "Traffikora gives marketing agencies a white-label automation platform to scale client results across SEO, social media, Google Business Profile, and AI engine optimization.",
};

export default function MarketingAgenciesPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Agencies</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Stop managing every client account manually. Traffikora gives your agency the automation platform to scale output, increase margins, and deliver better results -- without adding headcount.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Agency</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Automates daily social content creation and publishing across all client accounts</li>
              <li>Manages Google Business Profile optimization for every client automatically</li>
              <li>Builds local SEO citations and schema markup at scale</li>
              <li>Publishes weekly SEO blog content to client websites automatically</li>
              <li>Delivers AI engine optimization across your entire client portfolio</li>
              <li>Provides white-label reporting your clients see as your own work</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Agencies Cannot Scale When Everything Is Done Manually</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The agency model has a fundamental scaling problem. Every new client means more content to write, more profiles to manage, more reports to produce, and more hours billed to cover it. Your team is already stretched. Adding clients means adding staff, and adding staff eats the margin that made growth worth pursuing in the first place.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Clients expect consistent output -- daily social posts, active Google profiles, regular blog content, and measurable SEO progress. Delivering that manually across 20 or 30 accounts requires a team size that most agencies cannot sustain profitably. The result is either underdelivering on client expectations or burning out the team trying to keep up.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Agencies using automation tools grow revenue 3x faster than those relying on manual execution. The agencies winning right now are not the ones with the biggest teams -- they are the ones that have systematized the repeatable work so their team can focus on strategy, relationships, and the high-value work that actually requires human judgment.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>White-Label Marketing Automation That Scales With Your Agency</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora is built for agencies managing multiple local business clients. Connect each client account and Traffikora handles the daily execution -- social content published, Google profiles updated, SEO citations built, blog posts live -- automatically across your entire portfolio. Your team stops doing the repetitive work and starts focusing on the strategy that justifies your retainer.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>White-label tools command 40% higher margins because you are selling a system, not just hours. Traffikora lets you package automation as part of your agency offering -- delivering more consistent results than manual execution while increasing the profitability of every client account. Clients stay longer when results are consistent. Consistent results require consistent execution. Traffikora makes that execution automatic.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The agency marketing platform also covers AI engine optimization -- the fastest-growing channel in local search that most agencies are not yet delivering for clients. Adding AI engine visibility to your service offering differentiates your agency from competitors still focused only on traditional SEO and social scheduling.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Your Agency Gets With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Multi-Account Management", "Manage every client account from a single dashboard. Social content, SEO, GBP, blog posts, and AI visibility all automated across your entire portfolio simultaneously."],
                ["Automated Content at Scale", "Daily branded social content generated and published for every client automatically -- without your team writing, scheduling, or approving each post individually."],
                ["Google Business Profile at Scale", "Automated GBP posts, Q&A updates, and profile optimization across all client accounts -- delivering consistent local search results without manual execution."],
                ["Local SEO Automation", "Citation building, schema markup, and keyword content deployed across every client account -- scaling the SEO work that takes the most time when done manually."],
                ["AI Engine Optimization", "Structured content and entity signals built for every client -- making your agency one of the few delivering AI engine visibility as a standard service offering."],
                ["White-Label Reporting", "Clear performance reports showing visibility growth, content published, and ranking improvements -- branded as your agency output for client-facing presentations."],
                ["Higher Margins Per Client", "Automation reduces the hours required to deliver results. Less execution time per client means higher margin per retainer without reducing the quality of output."],
                ["Faster Client Onboarding", "Connect a new client account and Traffikora starts delivering immediately. No long setup processes. No content calendars to build from scratch."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Agency Marketing Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Clients are asking about AI engine optimization. They are hearing about ChatGPT and Perplexity and they want to know if their business shows up there. Agencies that can deliver AI engine visibility alongside traditional SEO and social are winning new clients and retaining existing ones at higher rates. Agencies that cannot are losing to competitors who can.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora puts AI engine optimization inside your standard agency offering without adding complexity to your workflow. Every client account automatically gets the structured content, citations, and entity signals that drive AI engine recommendations -- delivered as part of the same automated system handling their social media and SEO. Your agency delivers more value. Your clients get better results. Your margins improve.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for agencies?", "Marketing automation for agencies means using software to handle the repeatable execution work across client accounts -- publishing social content, managing Google Business Profiles, building SEO citations, and delivering AI engine optimization -- automatically, without your team doing it manually for each client. Traffikora is built specifically for agencies managing multiple local business clients."],
              ["How does Traffikora help my agency scale without adding staff?", "Traffikora automates the daily execution work that currently requires staff hours -- content creation, social publishing, GBP management, citation building, and blog posts. When that work runs automatically across all client accounts, your team can manage more clients without working more hours. Most agencies using Traffikora can handle 2 to 3x more clients with the same team size."],
              ["Can I white-label Traffikora for my clients?", "Yes. Traffikora is designed to be part of your agency offering. The reporting and output can be presented as your agency service. Clients see consistent results delivered under your brand. You get the margin improvement that comes from automation without clients needing to know the underlying platform."],
              ["How does Traffikora handle different client industries?", "Traffikora generates content and SEO strategy based on each client account profile -- their industry, location, target keywords, and brand voice. A restaurant client gets food and hospitality content. A dental practice gets healthcare and patient education content. Each account is treated individually even though the execution is automated."],
              ["What makes Traffikora different from other agency tools?", "Most agency tools are either social schedulers or SEO reporting dashboards -- they require your team to create the content and execute the strategy. Traffikora automates the actual execution -- creating content, publishing it, building citations, optimizing profiles, and delivering AI engine visibility -- across every client account simultaneously. It replaces execution hours, not just reporting."],
              ["How quickly can I onboard a new client?", "New client accounts can be connected and producing automated output within the same day. There is no long setup process or content calendar to build from scratch. Connect the client profiles, confirm their business details, and Traffikora starts delivering immediately."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Scale Your Agency Without Scaling Your Headcount</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates the execution so your team can focus on strategy, relationships, and growth.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}