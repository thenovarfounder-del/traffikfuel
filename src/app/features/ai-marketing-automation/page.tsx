import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Marketing Automation Platform | Traffikora",
  description: "Traffikora is an AI marketing automation platform for small businesses -- automating social media, SEO, Google Business Profile, blog content, and AI engine visibility from one dashboard.",
};

export default function AIMarketingAutomationPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>AI Marketing Automation Platform</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Small businesses that automate marketing grow 2.5x faster than those doing it manually. Traffikora is the complete AI marketing automation platform built for local business -- social, SEO, Google, blog, and AI engines all running automatically.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Automates For You</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Daily social media content creation and publishing across 9+ platforms</li>
              <li>Google Business Profile management -- posts, Q&A, and review requests</li>
              <li>Local SEO -- citation building, schema markup, and keyword content</li>
              <li>Weekly SEO blog posts published to your website automatically</li>
              <li>AI engine optimization for ChatGPT, Perplexity, and Gemini visibility</li>
              <li>Performance reporting across all channels from one dashboard</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>What Is an AI Marketing Automation Platform?</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>An AI marketing automation platform is software that uses artificial intelligence to handle marketing tasks automatically -- creating content, publishing it across channels, optimizing for search engines, managing online profiles, and generating performance insights -- without requiring manual work from the business owner or their team. For small businesses, it is the equivalent of having a full marketing department running in the background 24 hours a day.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>AI marketing automation for small business is different from enterprise marketing automation tools in its scope and design. Enterprise platforms like HubSpot and Marketo are built for B2B companies with sales teams, marketing operations staff, and complex lead nurturing workflows. Small business AI marketing automation is built for the local business owner who needs consistent output across social media, search, and AI engines -- with zero ongoing input required.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora is an AI marketing automation platform built specifically for local small businesses. It automates the full stack of local marketing -- social content, SEO, Google Business Profile, blog content, review requests, and AI engine optimization -- from a single platform that requires no marketing expertise to use and no ongoing management to maintain.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>How the Traffikora AI Marketing Automation System Works</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your business profiles and starts working immediately. The AI engine analyzes your business type, location, target audience, and brand voice -- then begins generating and publishing content across every channel on a daily and weekly schedule. Social posts go live every day. Blog posts publish every week. Google Business Profile updates happen automatically. Review requests go out after customer interactions. All of it runs without you touching it.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The SEO layer runs in parallel. Traffikora builds your local citations, adds schema markup to your website pages, and publishes keyword-targeted content that builds your organic search rankings over time. The AI engine optimization layer builds on top of the SEO foundation -- adding the structured signals, entity establishment, and citation authority that cause AI engines like ChatGPT and Perplexity to recommend your business when users ask relevant local questions.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The result is a complete, self-running marketing system that covers every channel where your customers search for businesses like yours. You see the results in a single dashboard -- visibility growth, content published, rankings improved, reviews generated. You do not manage the system. You watch it work.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Everything Traffikora Automates For Your Business</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Social Media Automation", "Daily branded content created and published to Facebook, Instagram, TikTok, YouTube, Reddit, and more -- zero writing or scheduling required from you."],
                ["Google Business Profile", "Automated posts, Q&A updates, and review request campaigns that keep your GBP listing active and competitive in Google Maps rankings."],
                ["Local SEO Automation", "Citation building, schema markup, and keyword content that pushes your business up local search rankings for the queries your customers are using."],
                ["Blog Content Automation", "SEO-optimized blog posts written and published to your website every week -- building organic traffic and topical authority without your involvement."],
                ["AI Engine Optimization", "Structured data, entity signals, and citation authority built specifically for ChatGPT, Perplexity, and Gemini visibility -- the fastest-growing local discovery channel."],
                ["Review Automation", "Automated review request campaigns sent to customers at the optimal moment -- growing your star rating and building the social proof that converts new prospects."],
                ["Performance Reporting", "A clear dashboard showing your visibility growth, content published, ranking improvements, and review count -- so you always know the system is working."],
                ["One Platform, Everything Connected", "Social, SEO, GBP, blog, AI engines, and reviews all managed from a single automated system. No juggling tools. No agency to manage."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why AI Marketing for Small Business Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The marketing landscape for local businesses has fundamentally changed. Customers discover businesses through Google search, Google Maps, social media platforms, and increasingly through AI engines like ChatGPT and Perplexity. A business that is not consistently active across all of these channels is invisible to a growing share of its potential customers -- and the gap between visible and invisible businesses compounds every month.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Small businesses that adopt AI marketing automation now are building a compounding visibility advantage over competitors still managing marketing manually or not managing it at all. Every day Traffikora runs, it adds content to your website, activity to your social profiles, citations to your local SEO footprint, and signals to your AI engine visibility. The businesses that start building this foundation today will be significantly harder to displace in 12 months than they are right now.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is AI marketing automation for small business?", "AI marketing automation for small business means using an AI-powered platform to handle all marketing tasks automatically -- creating social content, publishing it daily, managing your Google Business Profile, building local SEO, publishing blog posts, sending review requests, and optimizing for AI engine visibility -- without requiring manual work from the business owner. Traffikora is an AI marketing automation platform built specifically for local small businesses that need full-stack marketing output without the time investment or agency cost."],
              ["How is Traffikora different from other marketing tools?", "Most marketing tools handle one channel -- a social media scheduler handles social, an SEO tool handles search, a review platform handles reviews. Traffikora automates all of these channels simultaneously from a single platform. More importantly, Traffikora does not just help you manage these channels -- it executes them for you. It creates the content, builds the citations, publishes the posts, and manages the profiles automatically. You do not work in the platform. It works for you."],
              ["How much time does Traffikora save per week?", "Most small business owners reclaim 6 or more hours per week that they were previously spending on manual marketing tasks -- writing social posts, updating Google profile, managing reviews, trying to maintain a blog. With Traffikora, all of that runs automatically. Some business owners save significantly more, particularly those who were paying for and coordinating with a marketing agency."],
              ["Do I need any marketing knowledge to use Traffikora?", "No. Traffikora is built for business owners, not marketers. You connect your accounts, confirm your business details, and the platform handles everything from there. You do not need to understand SEO, social media strategy, content marketing, or AI engine optimization. Traffikora applies best practices across all channels automatically based on your business profile."],
              ["How quickly does Traffikora start working?", "Traffikora starts producing output the same day you set up your account. Social content begins publishing immediately. Google Business Profile management starts within the first few days. SEO citation building begins in the first week. Blog content starts publishing on a weekly schedule. AI engine optimization signals build from day one and strengthen over time."],
              ["What results can I expect from AI marketing automation?", "Most businesses see immediate improvements in social media consistency and Google Business Profile activity. Local search ranking improvements typically show meaningful progress within 60 to 90 days. Review count growth depends on customer volume but most businesses see significant increases within the first 90 days of automated review requests. AI engine visibility builds over 60 to 90 days as content and citation signals accumulate. The overall pattern is compounding -- results grow stronger the longer the system runs."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Your Complete Marketing System. Running Automatically.</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Social, SEO, Google, blog, reviews, and AI engines -- all automated from one platform. Start today and watch your visibility grow.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}