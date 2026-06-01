import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses in Los Angeles | Traffikora",
  description: "Traffikora helps Los Angeles small businesses automate social media, SEO, Google Business Profile, and AI engine visibility. Start your free trial today.",
};

export default function LosAngelesPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Small Businesses in Los Angeles</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Los Angeles small businesses compete across one of the largest and most diverse markets in the country. Traffikora automates your marketing so LA customers find you first.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Los Angeles Small Businesses Need Marketing Automation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Los Angeles is a city of neighborhoods -- and every neighborhood has its own competitive local business landscape. Whether you are in Silver Lake, Santa Monica, Koreatown, or the Valley, your customers are searching online before they walk through your door. They are checking Google reviews, scrolling Instagram, and increasingly asking ChatGPT or Perplexity to recommend local businesses near them. If your business is not showing up consistently across all of those channels, you are losing customers to competitors who are.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>LA small business owners are among the busiest in the country. The cost of doing business in Los Angeles is high, margins are tight, and time is the most scarce resource of all. Traffikora automates the full marketing stack -- social content published daily, Google Business Profile managed automatically, local SEO built continuously, blog posts published weekly, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini running from day one -- so your marketing stays consistent without taking hours you do not have.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Los Angeles Small Businesses Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Facebook, Instagram, TikTok, and more -- keeping your Los Angeles business visible without you writing anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A, and review requests that keep your listing active and ranking when Los Angeles customers search for your category."],
                ["Los Angeles Local SEO", "Citation building, schema markup, and keyword content targeting Los Angeles local searches -- pushing your business up Google rankings."],
                ["AI Engine Visibility", "Structured content that gets your business recommended when Los Angeles customers ask ChatGPT or Perplexity for local recommendations."],
                ["Weekly Blog Content", "SEO blog posts published to your website every week -- building organic traffic from Los Angeles customers searching for your services."],
                ["Review Automation", "Automated review requests that grow your star rating and build the social proof that converts Los Angeles customers who compare options online."]
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
          "description": "Marketing automation platform for small businesses in Los Angeles.",
          "url": "https://www.traffikora.com/local-businesses/los-angeles",
          "areaServed": { "@type": "City", "name": "Los Angeles" },
          "serviceType": "Marketing Automation"
        })}} />
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Los Angeles Businesses That Show Up Win</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so your Los Angeles business shows up first -- on Google, on social, and on AI engines -- every single day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}