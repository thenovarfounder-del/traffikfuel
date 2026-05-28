import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Restaurants | Traffikora",
  description: "Traffikora automates social media, Google Business Profile, SEO, and review requests for restaurants -- so you can focus on the food, not the marketing.",
};

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Restaurants</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Your food is great. Your marketing should match. Traffikora automates your social media, Google presence, SEO, and reviews -- every day, without you touching it.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Your Free 7-Day Trial</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Restaurant</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Posts branded content to Instagram, Facebook, TikTok, and more every day</li>
              <li>Keeps your Google Business Profile active with regular posts and updates</li>
              <li>Sends automated review requests to diners after their visit</li>
              <li>Builds local SEO citations so you rank for searches in your area</li>
              <li>Publishes weekly blog content that drives organic traffic to your site</li>
              <li>Makes your restaurant visible when people ask ChatGPT or Perplexity for dining recommendations</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Restaurants Live and Die by Their Online Presence</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>90% of diners check reviews and social media before choosing where to eat. If your Instagram has not been updated in three weeks, your Google Business Profile has no recent posts, and your review response rate is zero -- you are losing tables to the restaurant down the street that is showing up consistently online. The food does not matter if they never walk in the door.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>The problem is not that restaurant owners do not care about marketing. It is that running a restaurant leaves no time for it. You are managing staff, handling inventory, dealing with suppliers, and making sure every table has a great experience. Sitting down to write social posts at 11pm is not sustainable -- and it shows in the inconsistency most restaurants have online.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Slow seasons hit harder when your online presence is weak. When foot traffic drops, the restaurants that recover fastest are the ones with active social channels, strong Google rankings, and a steady stream of fresh reviews. The restaurants that struggle are the ones who only think about marketing when business is already slow.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Restaurant Social Media Automation That Actually Works</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your restaurant profiles and publishes branded content every single day. Food shots, specials, seasonal promotions, behind-the-scenes content -- generated and posted automatically in your brand voice across Instagram, Facebook, TikTok, and more. 46% of all Google searches have local intent, and consistent social activity directly improves how Google ranks your restaurant in local results.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>TikTok now drives 30% of restaurant discovery for diners under 40. Traffikora keeps you present on TikTok and YouTube without you filming or editing a thing. The platform handles content creation across every channel so your restaurant stays visible where your next customers are already spending their time.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>On the review side, Traffikora sends automated review requests to your customers at exactly the right moment. More reviews mean higher star ratings. Higher star ratings mean more diners choosing you over the competition. It is a compounding advantage that builds every single week.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Your Restaurant Gets With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Instagram, Facebook, TikTok, and YouTube -- showcasing your food, specials, and story without you writing a word."],
                ["Google Business Profile Automation", "Regular GBP posts, updated hours, Q&A management, and photo optimization that keeps your listing active and ranking in Google Maps."],
                ["Automated Review Requests", "Timely review request campaigns sent to your diners automatically -- growing your star rating and building the social proof that fills seats."],
                ["Restaurant SEO", "Local citation building, schema markup, and keyword content that pushes your restaurant to page one for searches like best [cuisine] in [city]."],
                ["AI Engine Visibility", "Optimized content that gets your restaurant recommended when diners ask ChatGPT or Perplexity for the best places to eat near them."],
                ["Weekly Blog Content", "SEO articles about your menu, your story, and your neighborhood published to your website automatically -- building long-term organic traffic."],
                ["Slow Season Defense", "Consistent marketing presence year-round means your slow seasons are shorter and your recovery is faster when foot traffic dips."],
                ["One Dashboard", "Your social media, SEO, reviews, and Google profile all managed in one place. No agency. No multiple tools. No monthly briefing calls."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Restaurant Marketing Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Diners are not just searching Google anymore. In 2026, a growing share of restaurant discovery happens through AI engines -- people asking ChatGPT what is a good Italian restaurant near me or asking Perplexity for highly rated spots for a date night. If your restaurant does not have the structured content, citations, and entity signals that AI engines use to make recommendations, you are invisible to this entire channel.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora builds your restaurant SEO and AI engine visibility at the same time. Every piece of content published, every citation built, and every profile update strengthens both your Google rankings and your presence in AI-generated recommendations. Restaurants that get this right now will own their local market online for years.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for restaurants?", "Marketing automation for restaurants means using software to handle the daily marketing tasks that most restaurant owners never have time to do consistently -- posting on social media, updating Google Business Profile, requesting reviews, and publishing SEO content. Traffikora automates all of it so your restaurant stays visible and competitive online without taking any of your time."],
              ["Will Traffikora create content that actually looks like my restaurant?", "Yes. Traffikora generates content based on your restaurant profile, cuisine type, brand voice, and location. The posts are branded to your business, not generic filler content. Over time the platform learns what performs best for your specific audience and adjusts accordingly."],
              ["How does Traffikora help with slow seasons?", "The best defense against slow seasons is a consistent marketing presence year-round. Traffikora keeps your social channels active, your Google profile updated, and your review count growing even when you are too busy to think about marketing. When slow periods hit, restaurants with strong online presence recover faster because they are already top of mind for local diners."],
              ["Can Traffikora help my restaurant get more Google reviews?", "Yes. Traffikora sends automated review request campaigns to your customers at the right time. Businesses that actively request reviews get significantly more of them. More reviews improve your star rating, which directly impacts how many new customers choose your restaurant over competitors in local search results."],
              ["How is Traffikora different from just hiring a social media manager?", "A social media manager typically handles one channel, costs $1,500 to $3,000 per month, and still requires your ongoing input for content direction. Traffikora covers social media across 9+ platforms, Google Business Profile, SEO, blog content, and AI engine optimization -- all automatically, for a fraction of that cost, with no management required from you."],
              ["How long before I see results?", "Most restaurants see their Google Business Profile activity increase immediately and social media consistency improve from day one. Local SEO improvements typically show meaningful results within 60 to 90 days as Google indexes the content Traffikora publishes on your behalf."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Your Restaurant Deserves to Be Found</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Stop losing diners to restaurants with better online presence. Traffikora automates your marketing so you can focus on what you do best.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Your Free 7-Day Trial</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}