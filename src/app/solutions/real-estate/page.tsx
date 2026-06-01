import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Real Estate Agents | Traffikora",
  description: "Traffikora automates social media, SEO, Google Business Profile, and AI engine visibility for real estate agents -- so you can focus on closing deals, not creating content.",
};

export default function RealEstatePage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Real Estate Agents</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Stop paying for leads that go nowhere. Traffikora builds your online presence automatically -- so buyers and sellers find you first on Google, ChatGPT, and everywhere they search.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Real Estate Agents</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded social content daily across Facebook, Instagram, YouTube, and more</li>
              <li>Optimizes your Google Business Profile with regular posts and updates</li>
              <li>Builds local SEO citations so you rank for agent searches in your market</li>
              <li>Publishes weekly SEO blog content to your website automatically</li>
              <li>Makes you visible when buyers ask ChatGPT or Perplexity to recommend an agent</li>
              <li>Sends automated review requests to past clients to build your reputation</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>The Real Estate Marketing Problem No One Talks About</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>97% of buyers use the internet during their home search -- but most of them never find the best agent in their area because that agent is too busy closing deals to build a consistent online presence. You are either working deals or working on marketing. You cannot do both well at the same time, and marketing always loses.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The result is a feast-or-famine cycle. When you are busy, marketing stops. When the pipeline dries up, you scramble to post on social media and hope something sticks. Meanwhile the agents who show up consistently online -- with active Google profiles, regular content, and strong review counts -- are getting the calls from buyers and sellers who search before they ever ask for a referral.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Paying for Zillow leads is not the answer either. Zillow leads are expensive, shared with multiple agents, and typically low intent. The agents winning in 2026 are building owned visibility -- organic search rankings, social presence, and AI engine citations -- that generate inbound leads without a cost-per-click.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Real Estate SEO Automation That Builds Your Pipeline</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your profiles and starts publishing immediately. Daily social content showcasing listings, market updates, neighborhood guides, and your expertise -- posted automatically to every platform without you writing anything. Your brand stays visible and active even during your busiest closing weeks.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>On the SEO side, Traffikora builds the citations, schema markup, and keyword-optimized content that pushes your name to the top of local searches like "real estate agent in [city]" and "homes for sale in [neighborhood]." Weekly blog posts go live on your website automatically -- building the organic authority that generates inbound leads over time.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>AI engine referrals for real estate agents tripled in 2025. When buyers ask ChatGPT to recommend a trusted agent in your city, Traffikora makes sure your name and business are part of that answer. That is the new referral channel -- and most agents have zero presence there right now.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Real Estate Agents Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts about your listings, market insights, and local expertise published every day to Facebook, Instagram, YouTube, and more -- without you writing a word."],
                ["Google Business Profile Management", "Automated GBP posts, Q&A updates, and profile optimization that keeps your listing active and ranking when buyers search for agents near them."],
                ["Local SEO for Realtors", "Citation building, schema markup, and keyword content targeting your specific market -- pushing your name up Google rankings for high-intent buyer and seller searches."],
                ["Google SEO + AI Engine Optimization", "Structured content and entity signals that get your name recommended when buyers ask ChatGPT, Perplexity, or Gemini to suggest a real estate agent in your city."],
                ["Weekly Blog Content", "SEO blog posts about your market, neighborhoods, and buying process published to your website automatically -- building long-term organic traffic and authority."],
                ["Automated Review Requests", "Review campaigns sent to past clients at the right moment -- growing your star rating and building the social proof that converts new prospects into signed clients."],
                ["Consistent Presence During Busy Periods", "Your marketing keeps running even when you are in back-to-back closings. No more feast-or-famine visibility cycles."],
                ["One Dashboard", "Social, SEO, GBP, blog, and AI visibility all in one place. No juggling tools. No agency to manage. Just results."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why AI Marketing for Realtors Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The home search now starts with an AI conversation as often as it starts with a Google search. Buyers are asking ChatGPT questions like "what should I know about buying a home in [city]" and "can you recommend a trustworthy real estate agent near me." Agents who have structured content, strong citations, and consistent entity signals across the web are the ones getting recommended. Agents who do not are invisible.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora builds both your traditional SEO and your AI engine visibility simultaneously. Every blog post, every social update, and every citation strengthens your presence across Google and AI platforms alike. The agents who invest in this now are building a compounding lead generation machine that will outperform paid leads for years.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for real estate agents?", "Marketing automation for real estate agents means using software to handle the consistent marketing tasks that build your online presence -- publishing social content, updating your Google Business Profile, requesting client reviews, and publishing SEO blog posts. Traffikora automates all of it so your marketing runs continuously even when you are fully focused on active deals."],
              ["How does Traffikora help me compete with large brokerages?", "Large brokerages have marketing teams. Traffikora gives individual agents and small teams the same consistent output -- daily social content, active SEO, and regular GBP updates -- without the headcount. You show up online with the same frequency and polish as a brokerage with a full marketing department, at a fraction of the cost."],
              ["Will the content be relevant to my specific market?", "Yes. Traffikora generates content based on your location, market, and brand voice. Posts reference your specific city and neighborhoods, and blog content targets the keywords buyers and sellers in your market are actually searching for."],
              ["How does Traffikora help me get found on ChatGPT?", "Traffikora builds the structured content, schema markup, citations, and entity signals that AI engines use to identify and recommend local professionals. When a buyer asks ChatGPT to recommend a real estate agent in your city, these signals increase the likelihood your name appears in the response."],
              ["How is this different from paying for Zillow leads?", "Zillow leads are paid, shared with multiple agents, and often low intent. Traffikora builds owned visibility -- organic search rankings, social presence, and AI engine citations -- that generate inbound interest without a cost per lead. The upfront investment compounds over time instead of stopping the moment you stop paying."],
              ["How quickly will I see results?", "Most agents see immediate improvements in social media consistency and Google Business Profile activity. Local SEO ranking improvements -- showing up for searches like real estate agent in [city] -- typically build meaningfully within 60 to 90 days as Google and AI engines index your growing content footprint."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Stop Chasing Leads. Start Attracting Them.</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora builds your online presence automatically so buyers and sellers find you first -- on Google, on social, and on AI engines.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}