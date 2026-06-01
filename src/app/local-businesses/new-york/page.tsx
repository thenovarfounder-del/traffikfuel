import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses in New York | Traffikora",
  description: "Traffikora helps New York small businesses automate social media, SEO, Google Business Profile, and AI engine visibility. Start your free trial today.",
};

export default function NewYorkPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Small Businesses in New York</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>New York small businesses compete in one of the most crowded markets in the world. Traffikora automates your social media, SEO, Google Business Profile, and AI engine visibility -- so you show up first when New York customers search for what you offer.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why New York Small Businesses Need Marketing Automation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>New York is one of the most competitive local business markets in the United States. Every neighborhood has multiple competitors in every category. Every customer searching for a local service has dozens of options. In that environment, visibility is everything -- and visibility requires consistent marketing output that most small business owners simply do not have time to produce manually while running their business in one of the most demanding cities in the world.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>New York customers are also among the most digitally active in the country. They check Google reviews before choosing a restaurant in their neighborhood. They search Instagram before visiting a local shop. They ask ChatGPT for recommendations when they move to a new borough and need a dentist or chiropractor. If your business is not showing up consistently across all of these channels, you are losing customers to competitors who are.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora automates the full marketing stack for New York small businesses -- social media content published daily, Google Business Profile managed automatically, local SEO citations built and maintained, weekly blog posts published to your website, review requests sent after every customer interaction, and AI engine optimization that makes your business visible when New York customers ask ChatGPT or Perplexity for local recommendations.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What New York Small Businesses Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Facebook, Instagram, TikTok, and more -- keeping your New York business visible and active online without you writing a word."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A, and review requests that keep your listing active and ranking in Google Maps when New York customers search for your category."],
                ["New York Local SEO", "Citation building, schema markup, and keyword content targeting New York local searches -- pushing your business up Google rankings for the searches that matter in your market."],
                ["AI Engine Visibility", "Structured content that gets your business recommended when New York customers ask ChatGPT or Perplexity to find local businesses in your category."],
                ["Weekly Blog Content", "SEO blog posts published to your website every week -- building organic traffic from New York customers searching for the services you offer."],
                ["Review Automation", "Automated review requests sent to your customers -- growing your star rating and building the social proof that converts New York customers who compare options online."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Marketing Automation New York -- Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for small businesses in New York?", "Marketing automation for New York small businesses means using AI-powered software to handle your social media, SEO, Google Business Profile, blog content, review requests, and AI engine optimization automatically -- without taking time away from running your business. Traffikora is a marketing automation platform built for local small businesses that delivers consistent marketing output across every channel New York customers use to find local businesses."],
              ["How does Traffikora help New York businesses rank higher on Google?", "Traffikora improves Google rankings for New York businesses by building consistent local citations across directories, adding LocalBusiness schema markup to your website, publishing weekly keyword-targeted blog content, and keeping your Google Business Profile active with regular posts and review campaigns. These are the core local SEO ranking factors for New York local searches, automated and running continuously."],
              ["How can my New York business get recommended on ChatGPT?", "Getting recommended on ChatGPT requires building the entity signals, structured data, and citation authority that AI engines use to identify trustworthy local businesses. Traffikora builds all of these signals automatically -- including consistent citations, schema markup, an llms.txt file, and FAQ content written specifically to be cited by AI engines when New York customers ask for local business recommendations."],
              ["How much does marketing automation cost for a New York small business?", "Traffikora starts at $97 per month -- a fraction of the $1,500 to $3,000 per month that New York marketing agencies typically charge for similar marketing output. For a New York small business competing in one of the most expensive markets in the country, Traffikora delivers agency-level marketing consistency at a price point that makes sense for a small business budget."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Traffikora",
          "description": "Marketing automation platform for small businesses in New York. Automates social media, SEO, Google Business Profile, and AI engine optimization.",
          "url": "https://www.traffikora.com/local-businesses/new-york",
          "areaServed": { "@type": "City", "name": "New York" },
          "serviceType": "Marketing Automation"
        })}} />
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>New York Businesses That Show Up Win</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so your New York business shows up first -- on Google, on social, and on AI engines -- every single day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}