import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google SEO + AI Engine Optimization for Local Business | Traffikora",
  description: "Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini makes your business visible when people ask ChatGPT, Perplexity, or Gemini for recommendations. Traffikora automates AEO for local businesses.",
};

export default function AEOPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Google SEO + AI Engine Optimization for Local Business</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>73% of local searches now happen on AI engines like ChatGPT, Perplexity, and Gemini. Traffikora makes sure your business gets recommended -- automatically, every day.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your AI Engine Visibility</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Builds structured data and schema markup that AI engines use to identify your business</li>
              <li>Creates citation-ready content that AI engines pull for local recommendations</li>
              <li>Establishes your business entity across platforms AI engines crawl and cite</li>
              <li>Maintains an llms.txt file that signals your business to AI crawlers</li>
              <li>Publishes declarative content written in the format AI engines cite directly</li>
              <li>Builds the citation authority that makes AI engines trust your business data</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>What Is Google SEO + AI Engine Optimization?</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini (AEO) is the process of making a business visible and citable when people ask AI engines -- ChatGPT, Perplexity, Gemini, Claude, and others -- for recommendations, comparisons, or local business suggestions. It is the evolution of traditional SEO for a world where search behavior has shifted from typing queries into Google to asking conversational questions to AI assistants.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>When someone asks ChatGPT "what is the best dentist near me" or asks Perplexity "find a reliable auto repair shop in [city]," the AI engine does not pull results from a ranked list the way Google does. It synthesizes information from sources it trusts -- websites with clear structured data, businesses with consistent citations across the web, entities that appear frequently in reliable sources, and content written in direct declarative statements that answer specific questions.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Generative engine optimization (GEO) is another term used for the same discipline. Whether called AEO or GEO, the goal is the same: building the signals that cause AI engines to include your business in their responses when local users ask relevant questions. Most local businesses have zero presence in this channel. The ones that build it now will own it.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>How Traffikora Automates Google SEO + AI Engine Optimization for Local Business</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora builds AI engine visibility through a systematic combination of structured data, content signals, and entity establishment. Every piece of content published includes clear declarative statements that directly answer the questions AI engines are trained to respond to. Every page includes schema markup that tells AI crawlers exactly what your business is, where it is, and what it does. Every citation built across directories strengthens your entity authority in the data sources AI engines reference.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora also maintains an llms.txt file for your business -- a structured signal file that tells AI crawlers how to interpret and cite your business information. This is the equivalent of a robots.txt for AI engines, and most businesses do not have one. Traffikora builds and maintains it automatically as part of your standard setup.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The FAQ content Traffikora publishes on your website pages is specifically structured to be pulled by AI engines as citation-ready answers. When someone asks an AI engine a question that your FAQ answers, the likelihood of your business being cited in the response increases significantly. This is content written for AI readability, not just human readability -- and it compounds in value as AI engine usage grows.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What You Get With Traffikora Google SEO + AI Engine Optimization</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Structured Data and Schema Markup", "Automated schema markup on every page that tells AI engines exactly what your business is, where it is located, what it offers, and why it is trustworthy."],
                ["Citation-Ready Content", "Blog posts and page content written in clear declarative statements that AI engines can pull and cite directly when answering relevant local queries."],
                ["Entity Establishment", "Your business entity built and consistent across the platforms, directories, and data sources that AI engines reference when forming recommendations."],
                ["llms.txt Maintenance", "A structured AI signal file maintained on your domain that tells AI crawlers how to interpret and use your business information -- the new standard for AI visibility."],
                ["FAQ Optimization", "FAQ sections on every page written specifically to match the conversational queries people ask AI engines -- the format AI engines cite most frequently."],
                ["Citation Authority Building", "Consistent NAP data and citation signals across high-authority directories that AI engines use to verify and trust local business information."],
                ["AI-Readable Blog Content", "Weekly blog posts written with AI engine readability as a primary goal -- specific, factual, and structured to answer the questions your potential customers are asking."],
                ["Cross-Platform Entity Signals", "Your business information consistently published across social platforms, directories, and your website -- building the entity footprint AI engines use to confidently recommend you."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Google SEO + AI Engine Optimization Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The shift to AI-assisted search is not a future trend -- it is happening now. ChatGPT has over 100 million active users. Perplexity is growing rapidly as a primary research and discovery tool. Google's own AI Overviews now appear at the top of search results for a large share of queries. The way people find local businesses is fundamentally changing, and the businesses that adapt now will be the ones that capture the next wave of local customers.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traditional SEO is still important -- Traffikora handles that too. But Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini is the new layer on top of SEO that most local businesses have not addressed yet. Traffikora builds both simultaneously, so your business is visible whether a customer searches on Google, asks ChatGPT, or uses Perplexity to find local recommendations. That is complete local search visibility for 2026 and beyond.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini for local business?", "Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini (AEO) for local business is the process of building the content signals, structured data, entity authority, and citation consistency that cause AI engines like ChatGPT, Perplexity, and Gemini to recommend your business when users ask relevant local questions. It is distinct from traditional SEO in that it focuses on the signals AI language models use to form responses rather than the ranking factors Google uses to order search results."],
              ["How is AEO different from traditional SEO?", "Traditional SEO optimizes for Google's ranking algorithm -- keyword relevance, backlinks, page speed, and structured data. Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini focuses on the signals that language models use to identify trustworthy, citable local businesses -- entity consistency, declarative content, FAQ structure, citation authority, and cross-platform presence. Traffikora builds both simultaneously because local businesses need visibility on both channels."],
              ["How does Traffikora get my business recommended on ChatGPT?", "Traffikora builds the entity signals, structured data, and citation authority that AI engines use to identify reliable local businesses. This includes consistent NAP data across directories, schema markup on your website, an llms.txt file on your domain, FAQ content written in AI-citable format, and blog content structured to answer the exact questions your potential customers are asking AI engines. There is no guaranteed placement -- but these signals significantly increase the likelihood of your business appearing in relevant AI responses."],
              ["What is an llms.txt file and why does it matter?", "An llms.txt file is a structured signal file placed on your website domain that tells AI crawlers how to interpret and use your business information. It is the emerging standard for AI engine visibility, similar to how robots.txt communicates with traditional search crawlers. Most businesses do not have one. Traffikora builds and maintains it as part of your standard setup, giving your business a visibility signal that most local competitors lack entirely."],
              ["How long before my business starts appearing in AI engine responses?", "AI engine visibility builds over time as your entity signals, citations, and content accumulate. Most businesses see their structured data and entity signals in place within the first 30 days. AI engine citation frequency typically increases meaningfully over 60 to 90 days as content indexes and citation authority builds. This is a compounding advantage -- the earlier you start, the stronger your position becomes."],
              ["Does Traffikora handle both SEO and Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini?", "Yes. Traffikora builds traditional local SEO -- citations, schema markup, keyword content, Google Business Profile -- and Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini simultaneously. Every action taken to improve your local SEO also contributes to your AI engine visibility, and the AI-specific signals Traffikora builds add an additional layer on top. You get complete local search visibility from one automated platform."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Get Found on ChatGPT, Perplexity, and Gemini</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini so your business gets recommended wherever your customers are searching.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}