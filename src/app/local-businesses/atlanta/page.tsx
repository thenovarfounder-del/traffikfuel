import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses in Atlanta | Traffikora",
  description: "Traffikora helps Atlanta small businesses automate social media, SEO, Google Business Profile, and AI engine visibility. Start your free trial today.",
};

export default function AtlantaPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Small Businesses in Atlanta</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Atlanta is one of the most competitive and fastest-growing business markets in the Southeast. Traffikora automates marketing for Atlanta small businesses across every channel that matters.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Atlanta Small Businesses Need Marketing Automation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Atlanta has transformed into one of the most competitive business markets in the Southeast -- with a rapidly growing population, a strong entrepreneurial culture, and customers who are highly active online. Atlanta customers check Google reviews, follow local businesses on Instagram, and increasingly ask AI engines for recommendations before choosing a local service provider. Showing up consistently across all of these channels is what separates the businesses that grow from those that stay invisible.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora automates the full marketing stack for Atlanta small businesses -- social content published daily, Google Business Profile managed automatically, local SEO citations built and maintained, weekly SEO blog posts, automated review requests, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini that makes your business visible when Atlanta customers ask ChatGPT or Perplexity for local recommendations in your category.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Atlanta Small Businesses Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Facebook, Instagram, TikTok, and more -- keeping your Atlanta business visible without you writing anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A, and review requests that keep your listing active and ranking when Atlanta customers search for your category."],
                ["Atlanta Local SEO", "Citation building, schema markup, and keyword content targeting Atlanta local searches -- pushing your business up Google rankings."],
                ["AI Engine Visibility", "Structured content that gets your business recommended when Atlanta customers ask ChatGPT or Perplexity for local recommendations."],
                ["Weekly Blog Content", "SEO blog posts published to your website every week -- building organic traffic from Atlanta customers searching for your services."],
                ["Review Automation", "Automated review requests that grow your star rating and build the social proof that converts Atlanta customers who compare options online."]
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "#1a1a1a", borderRadius: "8px", padding: "24px", borderLeft: "3px solid #E8610A" }}>
                  <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#cccccc", lineHeight: "1.7", fontSize: "0.95rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Traffikora",
          "description": "Marketing automation platform for small businesses in Atlanta.",
          "url": "https://www.traffikora.com/local-businesses/atlanta",
          "areaServed": { "@type": "City", "name": "Atlanta" },
          "serviceType": "Marketing Automation"
        })}} />
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Atlanta Businesses That Show Up Win</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so your Atlanta business shows up first -- on Google, on social, and on AI engines -- every single day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}