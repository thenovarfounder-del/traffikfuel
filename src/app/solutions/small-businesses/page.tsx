import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses | Traffikora",
  description: "Traffikora automates your marketing so you can run your business. SEO, social media, Google Business Profile, and AI engine visibility -- all done for you.",
};

export default function SmallBusinessesPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>

        {/* HERO */}
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>
            Marketing Automation for Small Businesses
          </h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>
            Stop doing your marketing manually. Traffikora handles your SEO, social media, Google Business Profile, and AI engine visibility -- automatically, every day.
          </p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>
            Start Free — No Card Needed
          </Link>
        </section>

        {/* WHAT TRAFFIKORA DOES */}
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For You</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded social media content daily across 9+ platforms</li>
              <li>Optimizes your Google Business Profile automatically</li>
              <li>Builds local SEO citations and schema markup</li>
              <li>Publishes weekly SEO blog posts to your website</li>
              <li>Makes your business visible on ChatGPT, Perplexity, and Gemini</li>
              <li>Sends automated review request campaigns to past customers</li>
            </ul>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>
              Small Business Owners Are Losing the Marketing War
            </h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>
              You opened your business to do the work you love -- not to spend three hours a day writing Instagram captions, responding to Google reviews, and trying to figure out why your website does not show up on page one. But that is exactly where most small business owners end up. Marketing becomes a second job that never gets done well because you are already stretched thin running everything else.
            </p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>
              The average small business owner spends 6+ hours per week on marketing tasks that could be automated. That is time you are not spending with customers, improving your product, or growing your team. And the painful part -- your competitors who are using automation tools are showing up consistently online while your presence goes quiet for weeks at a time.
            </p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              Hiring a marketing agency costs $1,500 to $3,000 per month and still requires your time for approvals, briefings, and strategy calls. Doing it yourself means inconsistency. Neither option is working. That is the gap Traffikora was built to fill.
            </p>
          </div>
        </section>

        {/* SOLUTION */}
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>
              How Marketing Automation for Small Businesses Actually Works
            </h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>
              Traffikora connects to your business profile and starts working immediately. It generates branded content for your social media channels, publishes it on a consistent schedule, and adjusts based on what performs. You do not write anything. You do not approve anything. It runs in the background while you run your business.
            </p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>
              On the SEO side, Traffikora builds the local citations, schema markup, and keyword-optimized blog content that Google needs to rank your business for local searches. It also keeps your Google Business Profile active with regular posts, updated Q&A, and automated review requests -- the three things that most directly drive calls and foot traffic from local search.
            </p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              Local marketing automation through Traffikora means you get agency-level output at a fraction of the cost, with zero hours of your time required. Most small businesses see their online visibility increase within the first 30 days.
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>
              What You Get With Traffikora
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "AI-generated branded posts published to Facebook, Instagram, TikTok, YouTube, and more -- every single day without you lifting a finger."],
                ["Google Business Profile Management", "Automated posts, Q&A updates, and review request campaigns that keep your GBP active and ranking in the local map pack."],
                ["Local SEO Automation", "Citation building, on-page schema markup, and keyword content that pushes your business up Google rankings for searches in your city."],
                ["Weekly Blog Posts", "SEO-optimized articles published directly to your website every week, building organic traffic without you writing a single word."],
                ["AI Engine Optimization", "Structured content and entity signals that make your business visible when people ask ChatGPT, Perplexity, or Gemini for recommendations near them."],
                ["Review Automation", "Automated campaigns that ask your happy customers for reviews at exactly the right moment -- growing your star rating on autopilot."],
                ["Performance Reporting", "A clear dashboard showing your visibility growth, content published, and rankings improvement -- so you always know it is working."],
                ["One Dashboard, Everything Connected", "Your social, SEO, GBP, blog, and AI visibility all managed from a single platform. No juggling five tools."]
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "#1a1a1a", borderRadius: "8px", padding: "24px", borderLeft: "3px solid #E8610A" }}>
                  <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#cccccc", lineHeight: "1.7", fontSize: "0.95rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY 2026 */}
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>
              Why AI Marketing for Small Business Matters More in 2026
            </h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>
              Search behavior has fundamentally changed. In 2026, 73% of local searches now happen through AI engines like ChatGPT, Perplexity, and Google Gemini -- not just traditional Google search. When someone asks "what is the best auto shop near me" or "find a reliable plumber in [city]," they are asking an AI, not typing into a search bar. If your business is not optimized for AI engine visibility, you are invisible to the fastest-growing segment of local search traffic.
            </p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>
              Traffikora is built for this new reality. While other tools are still focused on traditional SEO and social scheduling, Traffikora combines local SEO automation with AI engine optimization -- making sure your business gets cited and recommended whether a customer is searching on Google or asking ChatGPT. Small businesses that adopt AI marketing automation now are building a compounding visibility advantage that will be very hard for slower competitors to close.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>
              Frequently Asked Questions
            </h2>
            {[
              ["What is marketing automation for small businesses?", "Marketing automation for small businesses means using software to handle repetitive marketing tasks -- publishing social content, updating your Google Business Profile, building SEO citations, sending review requests -- automatically, without you doing them manually. Traffikora is a marketing automation platform built specifically for local small businesses that do not have a dedicated marketing team."],
              ["How much time will Traffikora save me?", "Most small business owners using Traffikora reclaim 6 or more hours per week that they were previously spending on manual marketing tasks. That includes time spent writing social posts, responding to reviews, updating their Google profile, and trying to manage SEO. With Traffikora, all of that runs automatically."],
              ["How is Traffikora different from hiring a marketing agency?", "A marketing agency typically costs $1,500 to $3,000 per month and still requires regular input from you for strategy, approvals, and briefings. Traffikora costs a fraction of that and requires none of your ongoing time. It is not a replacement for every agency service -- but for the consistent, repeatable marketing tasks that agencies charge the most for, Traffikora does them automatically and for less."],
              ["Will Traffikora work for my type of business?", "Traffikora is built for local service businesses -- restaurants, retail shops, professional services, healthcare practices, auto repair, real estate, and more. If your business depends on local customers finding you online, Traffikora is designed for you. See our solutions pages for industry-specific details on how the platform works for your business type."],
              ["How quickly will I see results?", "Most businesses see measurable improvements in their Google Business Profile activity, social media consistency, and local search visibility within the first 30 days. SEO results -- higher keyword rankings and increased organic traffic -- typically build over 60 to 90 days as Google indexes the content Traffikora publishes on your behalf."],
              ["Do I need any technical skills to use Traffikora?", "No. Traffikora is built for business owners, not marketers or developers. Setup takes under 30 minutes. You connect your accounts, confirm your business details, and Traffikora handles everything from there. No coding, no content writing, no ongoing management required."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SCHEMA */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "name": "Traffikora",
              "applicationCategory": "BusinessApplication",
              "description": "Marketing automation platform for small businesses. Automates SEO, social media, Google Business Profile, and AI engine optimization.",
              "url": "https://www.traffikora.com",
              "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is marketing automation for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Marketing automation for small businesses means using software to handle repetitive marketing tasks automatically. Traffikora is built specifically for local small businesses that do not have a dedicated marketing team." } },
                { "@type": "Question", "name": "How much time will Traffikora save me?", "acceptedAnswer": { "@type": "Answer", "text": "Most small business owners using Traffikora reclaim 6 or more hours per week previously spent on manual marketing tasks." } },
                { "@type": "Question", "name": "How quickly will I see results?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses see measurable improvements in Google Business Profile activity and local search visibility within the first 30 days." } }
              ]
            }
          ]
        })}} />

        {/* FINAL CTA */}
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>
            Your Marketing Should Run Without You
          </h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
            Join thousands of small business owners who stopped doing marketing manually. Traffikora handles it -- every day, automatically.
          </p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>
            Start Free — No Card Needed
          </Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>
            No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}