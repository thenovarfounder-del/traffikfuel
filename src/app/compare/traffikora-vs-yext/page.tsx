import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Traffikora vs Yext | Traffikora",
  description: "Yext charges $500+/mo to sync your business listings. Traffikora does that AND creates content, manages your Google profile, and optimizes for AI engines -- for a fraction of the cost.",
};

export default function VsYextPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Traffikora vs Yext</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Yext keeps your listings consistent across directories. Traffikora does that AND creates your content, manages your Google profile, builds your SEO, and optimizes for AI engines -- all for a fraction of the cost.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For You</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Builds and maintains local citations across directories automatically</li>
              <li>Creates and publishes branded social content daily across 9+ platforms</li>
              <li>Manages your Google Business Profile with posts, Q&A, and updates</li>
              <li>Publishes weekly SEO blog posts to your website</li>
              <li>Optimizes your business for ChatGPT, Perplexity, and Gemini visibility</li>
              <li>Sends automated review request campaigns to grow your star rating</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Yext Is Passive Listing Management. Traffikora Is Active Marketing Automation.</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Yext is a listing management platform that syncs your business name, address, phone number, and hours across a network of directories and data partners. It solves a real problem -- NAP inconsistency across the web is a genuine local SEO issue -- and it does that job well. But listing management is a passive, defensive function. It keeps your existing information accurate. It does not build new visibility, create content, or drive new customers to your business.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Yext pricing starts around $500 per month for meaningful coverage and scales up significantly for multi-location businesses. For that price, you get accurate listings -- and nothing else. No social media content. No Google Business Profile posts. No blog content. No review automation. No AI engine optimization. You are paying a premium for data synchronization while all the active marketing work still falls on you.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The deeper issue is that listing consistency is table stakes in 2026 -- it is the floor, not the ceiling. Having your NAP consistent across directories is necessary but not sufficient for local visibility. The businesses showing up at the top of local search results and getting recommended by AI engines are the ones with active Google profiles, consistent content, strong review counts, and structured data signals. Yext handles one piece of that puzzle at a very high price point.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Traffikora vs Yext -- Feature Comparison</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", color: "#cccccc", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8610A" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#ffffff", fontFamily: "Playfair Display, serif" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#E8610A", fontFamily: "Playfair Display, serif" }}>Traffikora</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", color: "#ffffff", fontFamily: "Playfair Display, serif" }}>Yext</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starting Price", "$97/mo", "$500+/mo"],
                    ["Local Citation Building", "Yes -- automated", "Yes -- listing sync"],
                    ["Social Media Content Creation", "Yes -- daily automated", "No"],
                    ["Google Business Profile Management", "Yes -- fully automated", "Basic sync only"],
                    ["AI Engine Optimization", "Yes -- built in", "No"],
                    ["Automated Blog Content", "Yes -- weekly SEO posts", "No"],
                    ["Review Request Automation", "Yes", "Limited"],
                    ["Active Content Marketing", "Yes -- daily execution", "No -- passive data sync"],
                    ["Built for Local Business Growth", "Yes", "Yes -- listing management only"],
                    ["SEO Content and Schema", "Yes -- automated", "Basic structured data"]
                  ].map(([feature, traffikora, yext], i) => (
                    <tr key={feature} style={{ borderBottom: "1px solid #2a2a2a", background: i % 2 === 0 ? "#111111" : "#1a1a1a" }}>
                      <td style={{ padding: "12px 16px", color: "#ffffff" }}>{feature}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: "#E8610A" }}>{traffikora}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>{yext}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Listing Management Plus Active Marketing -- At a Fraction of the Cost</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora includes local citation building as part of its full marketing automation platform. Your business information gets built and maintained across the directories that matter for local SEO -- the same core function Yext provides -- plus Traffikora layers active marketing on top. Daily social content. Weekly blog posts. Google Business Profile management. Review request campaigns. AI engine optimization. All automated. All from one platform.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The price difference is significant. Yext starts at $500 per month for meaningful local listing coverage. Traffikora starts at $97 per month and delivers citation management plus the active marketing execution that Yext does not include at any price point. For local small businesses evaluating the two options, the value comparison is not close.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The scenario where Yext still makes sense is for large enterprises or multi-location brands with hundreds of locations that need centralized listing management at scale with enterprise-level controls and compliance. For a single-location or small multi-location local business, Traffikora delivers more total marketing value at a dramatically lower cost.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why This Comparison Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>AI engines are now a primary channel for local business discovery -- and they do not rely on directory listing consistency to make recommendations. They rely on content signals, entity establishment, structured data, and citation authority across the web. Yext optimizes for directory sync. Traffikora optimizes for the full spectrum of signals that drive both traditional local search rankings and AI engine recommendations.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>For local businesses that want to be visible everywhere their customers are searching in 2026 -- Google, Google Maps, social media, ChatGPT, Perplexity, Gemini -- Traffikora is the more complete solution. Listing management is one component of that. Traffikora includes it, and builds everything else on top of it automatically.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is the main difference between Traffikora and Yext?", "Yext is a listing management platform -- it syncs your business name, address, phone number, and hours across a network of directories. Traffikora includes local citation building as part of a complete marketing automation platform that also handles social media content creation, Google Business Profile management, SEO blog posts, review requests, and AI engine optimization. Yext is passive data management. Traffikora is active marketing automation."],
              ["Is Traffikora really cheaper than Yext?", "Yes, significantly. Yext starts around $500 per month for meaningful directory coverage, with enterprise plans running much higher. Traffikora starts at $97 per month and includes citation management plus active marketing automation that Yext does not offer at any price point. For a local small business, Traffikora delivers more total value at roughly one-fifth the cost."],
              ["Does Traffikora build citations across the same directories as Yext?", "Traffikora builds local citations across the high-value directories that matter most for local SEO authority -- Google, Bing, Apple Maps, Yelp, and major data aggregators. Yext has a larger proprietary publisher network. For most local businesses, the citation coverage Traffikora provides covers the directories that have meaningful SEO impact."],
              ["Can I use Traffikora instead of Yext?", "For most local small businesses, yes. Traffikora covers the core local citation function Yext provides and adds the active marketing automation that Yext does not include. The exception is large enterprises with hundreds of locations that need Yext's enterprise-grade listing management controls and compliance features."],
              ["How does Traffikora handle AI engine optimization that Yext does not?", "Traffikora builds the structured content, schema markup, entity signals, and citation authority that AI engines use to identify and recommend local businesses. When someone asks ChatGPT or Perplexity to recommend a business in your category and city, these signals increase the likelihood your business appears in the response. Yext focuses on directory data sync and does not optimize for AI engine visibility."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Listings Plus Everything Else. At $97/mo.</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora handles your citations, social media, Google profile, SEO, and AI engine optimization -- automatically, every day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}