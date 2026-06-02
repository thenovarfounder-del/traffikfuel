import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Local SEO Automation Software | Traffikora",
  description: "Traffikora automates local SEO -- citation building, schema markup, keyword content, and Google Business Profile -- so your business ranks higher in local search without the manual work.",
};

export default function LocalSEOPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Local SEO Automation Software</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>46% of all Google searches have local intent. Traffikora automates the local SEO work that gets your business to page one -- citations, schema, keyword content, and Google profile -- without you touching any of it.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Local SEO</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Builds and maintains local citations across high-authority directories automatically</li>
              <li>Adds schema markup to your website pages for local search relevance</li>
              <li>Publishes weekly keyword-optimized blog content to your website</li>
              <li>Keeps your Google Business Profile active with regular posts and updates</li>
              <li>Builds the entity signals that Google uses to rank local businesses</li>
              <li>Tracks your local keyword rankings and visibility growth over time</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>What Is Local SEO Automation?</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Local SEO automation is the use of software to execute the ongoing local search optimization tasks that improve a business's visibility in Google search results and Google Maps for location-based queries. These tasks include building and maintaining local citations, adding structured schema markup to website pages, publishing keyword-targeted content, managing Google Business Profile activity, and building the entity signals that Google uses to determine which local businesses rank for relevant searches in a given area.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Local SEO is different from general SEO in that it focuses specifically on searches with geographic intent -- queries like "plumber near me," "best Italian restaurant in [city]," or "chiropractor [neighborhood]." These searches represent 46% of all Google queries and they have extremely high commercial intent. A business that ranks on page one for its core local keywords captures a disproportionate share of the customers actively searching for exactly what it offers.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The challenge for most small businesses is that local SEO requires consistent, ongoing execution -- not a one-time setup. Citations need to be built and maintained. Content needs to be published regularly. Google Business Profile needs weekly activity. Schema markup needs to be current. Doing all of this manually requires either significant time investment or an agency relationship. Traffikora automates all of it.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>How Traffikora Automates Local SEO for Small Business</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora executes local SEO across four core areas simultaneously. First, citation building -- your business name, address, and phone number gets built and maintained consistently across Google, Bing, Apple Maps, Yelp, and major data aggregators. Citation consistency is a foundational local ranking factor and one that most small businesses have never properly addressed.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Second, on-page schema markup -- Traffikora adds LocalBusiness, FAQPage, and SoftwareApplication schema to your website pages automatically. Schema markup tells Google exactly what your business is, where it is located, what it offers, and what customers say about it. Pages with proper schema markup consistently outperform those without it in local search results.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Third, keyword content -- Traffikora publishes weekly blog posts and page content targeting the local search queries your potential customers are using. This content builds your website's topical authority in your service area over time, driving organic traffic from searches at every stage of the customer decision process. Fourth, Google Business Profile management -- regular posts, Q&A, and review requests that keep your listing active and competitive in the local map pack.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What You Get With Traffikora Local SEO Automation</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Local Citation Building", "Your business built and maintained across Google, Bing, Apple Maps, Yelp, and major data aggregators -- the citation consistency that is foundational to local search rankings."],
                ["Schema Markup Automation", "LocalBusiness and FAQPage schema added to your website pages automatically -- telling Google exactly what your business is and making your listings more competitive in search results."],
                ["Weekly Keyword Content", "SEO blog posts targeting your local search keywords published to your website every week -- building the topical authority and organic traffic that compounds over time."],
                ["Google Business Profile Management", "Regular posts, Q&A updates, and review request campaigns that keep your GBP listing active and competitive in the Google Maps local pack."],
                ["Entity Signal Building", "Your business entity consistently established across the web -- the signals Google uses to confidently rank a local business for relevant geographic queries."],
                ["Rank Tracking", "Your local keyword rankings tracked over time so you can see the visibility growth Traffikora is building for your most valuable search terms."],
                ["Review Growth", "Automated review request campaigns that grow your star rating -- a direct local ranking factor and the primary conversion driver when new customers compare options."],
                ["AI Engine Visibility", "The same local SEO signals that improve your Google rankings also strengthen your visibility in AI engine recommendations -- complete local search coverage from one platform."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Local SEO Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Local search competition has intensified significantly. The businesses ranking in the top 3 map pack positions for valuable local keywords are capturing 70% or more of the clicks for those searches. The gap between page one and page two is not a small disadvantage -- it is near-invisibility. Consistent local SEO execution is what separates the businesses in those top positions from the ones that never appear.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>At the same time, local search is expanding beyond Google. AI engines now handle a growing share of local queries, and the local SEO signals Traffikora builds -- citations, schema, entity consistency, and content authority -- are the same signals that drive AI engine visibility. Investing in local SEO automation now builds compounding visibility across both traditional search and the AI engine channel that is growing fastest.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is local SEO automation software?", "Local SEO automation software handles the ongoing execution tasks that improve a business's visibility in local search results -- building citations, adding schema markup, publishing keyword content, managing Google Business Profile activity, and building entity signals -- automatically, without requiring manual work from the business owner or an SEO specialist. Traffikora is a local SEO automation tool built specifically for small businesses that need these results without the time investment or agency cost."],
              ["What are local citations and why do they matter?", "Local citations are mentions of your business name, address, and phone number (NAP) on directories, data aggregators, and websites across the web. Consistent citations across high-authority sources are a foundational local SEO ranking factor. Google uses citation consistency to verify that a business is legitimate and accurately located, and businesses with more consistent citations across more authoritative sources rank higher in local search results than those with few or inconsistent citations."],
              ["How does schema markup help my local search rankings?", "Schema markup is structured data added to your website pages that tells Google exactly what your business is, where it is, what it offers, and what customers say about it. Pages with LocalBusiness schema markup consistently perform better in local search results because Google can confidently understand and display the business information. Traffikora adds schema markup to your website pages automatically as part of its local SEO automation."],
              ["How long does it take to see local SEO results?", "Local SEO improvements typically show meaningful progress within 60 to 90 days as Google indexes the citations, content, and structured data Traffikora builds. Google Business Profile improvements -- more views, calls, and direction requests -- typically show within the first 30 days of consistent activity. SEO is a compounding investment -- results grow stronger over time as your citation authority, content footprint, and entity signals accumulate."],
              ["Do I need to know SEO to use Traffikora?", "No. Traffikora is built for business owners, not SEO specialists. You connect your accounts, confirm your business details, and Traffikora handles all the SEO execution automatically. You do not need to understand keyword research, citation audits, schema markup, or any other technical SEO concept to get the results. The platform manages all of that on your behalf."],
              ["How is Traffikora different from an SEO agency?", "An SEO agency typically costs $1,000 to $3,000 per month and still requires your ongoing input for strategy, content approval, and reporting reviews. Traffikora automates the consistent local SEO execution -- citations, schema, content, and GBP management -- for a fraction of that cost with no ongoing time required from you. For the repeatable, execution-heavy tasks that most local SEO agencies charge the most for, Traffikora delivers the same results automatically."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Rank Higher in Local Search -- Automatically</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora handles your local SEO execution -- citations, schema, content, and Google profile -- every week without you touching it.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}