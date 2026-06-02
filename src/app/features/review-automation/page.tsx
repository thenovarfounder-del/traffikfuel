import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Automated Review Generation Software for Small Business | Traffikora",
  description: "Get more Google reviews automatically. Traffikora sends review requests after every job, monitors your reputation, and helps local businesses build 5-star authority on autopilot.",
}

export default function ReviewAutomationPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>

        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Automated Review Generation for Local Business</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Most customers want to leave a review. They just never get asked. Traffikora sends the ask automatically after every job and turns satisfied customers into 5-star reviews without lifting a finger.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Credit Card Needed</Link>
        </section>

        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Online Reviews</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Sends automated review requests to customers via email and SMS after every transaction</li>
              <li>Directs satisfied customers straight to your Google Business Profile review page</li>
              <li>Monitors new reviews across Google, Yelp, and Facebook in real time</li>
              <li>Alerts you instantly when a negative review is posted so you can respond fast</li>
              <li>Tracks your review count, average rating, and review velocity over time</li>
              <li>Builds the review authority Google uses to rank local businesses in the map pack</li>
            </ul>
          </div>
        </section>

        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Why Reviews Are Your Most Powerful Local SEO Signal</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Google uses review quantity, recency, and average rating as direct ranking signals for local search. Businesses with more recent 5-star reviews consistently outrank competitors in the local map pack -- the three results that appear above all organic search results. If your competitors are collecting reviews and you are not, they are gaining ground on you every single week.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Reviews also drive conversion. Studies show that 93 percent of consumers read online reviews before choosing a local business, and businesses with a rating above 4.5 stars see dramatically higher click-through rates from Google search results. A strong review profile does not just help you rank -- it turns searchers into customers once they find you.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The problem is that asking for reviews manually is time-consuming and inconsistent. Most business owners intend to ask every customer and ask almost none. Traffikora removes the human bottleneck entirely by automating the request the moment a job is complete.</p>
          </div>
        </section>

        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>How Traffikora Automates Your Review Generation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>When a customer completes a purchase or service, Traffikora automatically sends a review request via email or SMS with a direct link to your Google Business Profile review page. The timing, message, and follow-up are all handled automatically. You set it up once and the system runs forever.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora also monitors your reviews across Google, Yelp, and Facebook and sends you an instant alert when a new review is posted. For negative reviews, speed of response is critical -- a fast, professional reply shows potential customers that you care and can often change the outcome of the situation entirely.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Over time, the review dashboard shows you your total review count, average rating, and review velocity so you can see exactly how your reputation is growing and how you compare to local competitors. This is reputation management on autopilot -- no agency required.</p>
          </div>
        </section>

        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What You Get With Traffikora Review Automation</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Automated Review Requests", "Email and SMS review requests sent automatically after every completed job or transaction. No manual follow-up required."],
                ["Direct Google Review Links", "Every request sends customers directly to your Google Business Profile review page -- removing every friction point between happy customer and posted review."],
                ["Multi-Platform Monitoring", "Real-time monitoring of your reviews across Google, Yelp, and Facebook so you never miss what customers are saying about your business."],
                ["Instant Negative Review Alerts", "Get notified the moment a negative review is posted so you can respond quickly, professionally, and turn a bad experience into a recoverable one."],
                ["Review Velocity Tracking", "See how fast your reviews are accumulating over time and measure the direct impact on your local search ranking position."],
                ["Reputation Dashboard", "A single dashboard showing your total reviews, average rating, review trends, and competitive position in your local market."],
                ["Review Response Templates", "Pre-written response templates for both positive and negative reviews that keep your tone professional and your response time fast."],
                ["Ranking Impact Reports", "See the direct correlation between your growing review count and your position in Google Maps and local search results over time."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["How does automated review generation work?", "Traffikora connects to your customer data and automatically sends a review request via email or SMS after every completed job or purchase. The message includes a direct link to your Google Business Profile so customers can leave a review in seconds. The entire process is automated -- you set it up once and it runs continuously."],
              ["Is it against Google policy to ask customers for reviews?", "No. Google explicitly allows and encourages businesses to ask customers for honest reviews. What Google prohibits is incentivizing reviews with discounts or payment, and posting fake reviews. Traffikora sends genuine requests to real customers for their honest feedback -- fully compliant with Google policy."],
              ["How many more reviews will I get?", "Most businesses using automated review requests see a 3x to 5x increase in monthly review volume within the first 60 days. The exact number depends on your transaction volume, but the consistent and timely nature of automated requests significantly outperforms manual asking."],
              ["Which platforms does Traffikora monitor?", "Traffikora monitors your reviews on Google, Yelp, and Facebook. Google reviews carry the most weight for local SEO ranking, but Yelp and Facebook reviews contribute to your overall online reputation and appear in search results as well."],
              ["What happens when I get a negative review?", "Traffikora sends you an instant alert the moment a negative review is posted. You can respond directly from the dashboard using pre-written professional templates or write a custom response. Fast, professional responses to negative reviews demonstrate customer care and can significantly reduce the impact of a bad review on potential customers."],
              ["How does review count affect my Google ranking?", "Google uses review quantity, recency, and average rating as direct signals in its local ranking algorithm. Businesses with more recent positive reviews consistently rank higher in the local map pack. Traffikora builds your review count systematically over time, creating a compounding SEO advantage that grows stronger every month."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Start Getting More 5-Star Reviews Today</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your review requests, monitors your reputation, and builds the Google ranking authority that comes from a steady stream of 5-star reviews.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Credit Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>

      </main>
      <Footer />
    </>
  )
}