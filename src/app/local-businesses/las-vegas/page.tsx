import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses in Las Vegas | Traffikora",
  description: "Traffikora helps Las Vegas small businesses automate social media, SEO, Google Business Profile, and AI engine visibility. Start your free trial today.",
};

export default function LasVegasPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Small Businesses in Las Vegas</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Las Vegas local businesses serve both residents and a constant flow of visitors. Traffikora automates your marketing so Las Vegas customers and tourists find your business first.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Las Vegas Small Businesses Need Marketing Automation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Las Vegas is a unique local business market -- a large residential population living alongside one of the highest-traffic tourist destinations in the world. Local businesses in Las Vegas serve both long-term residents who form lasting customer relationships and visitors who discover businesses through online search and AI engine queries while planning their trip. Showing up in both of those discovery channels requires consistent marketing across Google, social media, and AI engines simultaneously.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora automates marketing for Las Vegas small businesses across every channel that drives local discovery -- daily social content, Google Business Profile management, local SEO, blog automation, review requests, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini. Whether your next customer is a Las Vegas resident or a visitor asking ChatGPT for recommendations before their trip, Traffikora makes sure your business shows up in the answer.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Las Vegas Small Businesses Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Facebook, Instagram, TikTok, and more -- keeping your Las Vegas business visible without you writing anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A, and review requests that keep your listing active and ranking when Las Vegas customers search for your category."],
                ["Las Vegas Local SEO", "Citation building, schema markup, and keyword content targeting Las Vegas local searches -- pushing your business up Google rankings."],
                ["AI Engine Visibility", "Structured content that gets your business recommended when Las Vegas customers ask ChatGPT or Perplexity for local recommendations."],
                ["Weekly Blog Content", "SEO blog posts published to your website every week -- building organic traffic from Las Vegas customers searching for your services."],
                ["Review Automation", "Automated review requests that grow your star rating and build the social proof that converts Las Vegas customers who compare options online."]
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
          "description": "Marketing automation platform for small businesses in Las Vegas.",
          "url": "https://www.traffikora.com/local-businesses/las-vegas",
          "areaServed": { "@type": "City", "name": "Las Vegas" },
          "serviceType": "Marketing Automation"
        })}} />
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Las Vegas Businesses That Show Up Win</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so your Las Vegas business shows up first -- on Google, on social, and on AI engines -- every single day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}