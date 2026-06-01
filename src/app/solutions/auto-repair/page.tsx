import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Auto Repair Shops | Traffikora",
  description: "Traffikora automates social media, Google Business Profile, SEO, and review requests for auto repair shops -- so you can focus on cars, not marketing.",
};

export default function AutoRepairPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Auto Repair Shops</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Compete with the chains and dealerships without a marketing team. Traffikora builds your online presence automatically -- so local drivers find your shop first when they need repairs.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Auto Repair Shop</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded content daily across Facebook, Instagram, and more</li>
              <li>Keeps your Google Business Profile active with posts, updates, and Q&A</li>
              <li>Sends automated review requests to customers after every service</li>
              <li>Builds local SEO citations so you rank when drivers search for shops near them</li>
              <li>Publishes weekly SEO blog posts to your website automatically</li>
              <li>Makes your shop visible when people ask ChatGPT or Perplexity for auto repair recommendations</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Independent Shops Are Losing to Chains -- Not on Quality, But on Visibility</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>72% of car owners search online before choosing a repair shop. They are looking at Google reviews, checking social media, and comparing star ratings before they ever pick up the phone. Jiffy Lube and Firestone have marketing departments running this 24 hours a day. Your independent shop has you -- and you are already busy fixing cars.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Reviews are the number one deciding factor for choosing an auto repair shop. A shop with 200 reviews and a 4.8 star rating will get the call over a shop with 12 reviews and a 4.2 -- even if your work is better and your prices are lower. Building that review count takes a consistent system for asking, and most shops never ask at all.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>New residents are one of the highest-value customer segments for auto repair shops -- they have not chosen a shop yet and they are actively searching. But they find whoever shows up first online. If your Google Business Profile is not optimized and your social media has not been updated in months, that new customer is going to the chain every time.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Automotive Marketing Automation That Drives Real Customers</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your shop profiles and runs your marketing automatically. Daily social content -- maintenance tips, seasonal reminders, shop highlights, and promotions -- published to Facebook, Instagram, and more without anyone on your team writing anything. Your shop looks active and trustworthy online every single day, even during your busiest weeks in the bay.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>On reviews, Traffikora sends automated requests to every customer after their service is complete. Most satisfied customers will leave a review if asked at the right time -- they just never get asked. Within 90 days, most shops using Traffikora see their review count increase significantly, which directly improves their ranking in Google Maps and their conversion rate when new customers compare options.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Auto repair shop SEO means ranking when someone searches "oil change near me" or "brake repair in [city]." Traffikora builds the local citations, schema markup, and keyword blog content that pushes your shop up those rankings. Combined with an active Google Business Profile, most shops see measurable increases in calls from new customers within the first 60 days.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Your Auto Repair Shop Gets With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Automotive tips, seasonal reminders, and shop updates published every day to Facebook, Instagram, and more -- keeping your shop visible without your staff writing a word."],
                ["Google Business Profile Automation", "Regular GBP posts, Q&A updates, and profile optimization that keeps your listing active and ranking when local drivers search for a shop near them."],
                ["Automated Review Requests", "Review campaigns sent to customers after every service -- systematically growing your star rating and building the social proof that wins new customers over chains."],
                ["Auto Repair SEO", "Local citation building, schema markup, and keyword blog content targeting searches like oil change near me and auto repair in [city] -- pushing your shop up Google rankings."],
                ["AI Engine Visibility", "Structured content that gets your shop recommended when drivers ask ChatGPT or Perplexity to find a trustworthy auto repair shop in your area."],
                ["Weekly Blog Content", "Maintenance guides and automotive SEO articles published to your website automatically -- building organic traffic from drivers searching for the services you offer."],
                ["New Resident Targeting", "Consistent online presence means you are the first shop new residents in your area find when they search for a repair shop in their new city."],
                ["One Dashboard", "Social, SEO, reviews, and Google profile all managed automatically in one place. No agency fees. No staff time. Just more customers."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Auto Repair Marketing Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Drivers are increasingly using AI engines to find service providers. When someone asks ChatGPT "where should I get my brakes done near me," the shops that get recommended are the ones with strong entity signals, consistent citations, and structured content across the web. Most independent shops have zero presence in this channel -- which means the ones who build it now own it.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora builds your auto repair shop visibility across traditional search and AI engines at the same time. Every social post, every citation, and every blog article compounds your online authority. Independent shops that invest in automated marketing now are building a customer acquisition advantage that chains cannot easily replicate at the local level.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for auto repair shops?", "Marketing automation for auto repair shops means using software to handle the consistent marketing tasks that keep your shop visible online -- publishing social content, updating your Google Business Profile, requesting customer reviews, and publishing SEO blog posts. Traffikora automates all of it so your marketing runs every day without taking time away from the work in your bays."],
              ["How does Traffikora help me compete with chains like Jiffy Lube or Firestone?", "Chains win on marketing consistency, not necessarily on quality. Traffikora gives your independent shop the same daily social presence, active Google profile, and growing review count that chains maintain with full marketing teams -- at a fraction of the cost. When a driver compares you to a chain online, you can show up looking just as established and trustworthy."],
              ["How quickly will my review count grow?", "Most shops see meaningful review growth within 60 to 90 days of using Traffikora automated review requests. The key is consistency -- asking every customer after every service. Most satisfied customers will leave a review when asked promptly and directly. Shops that go from 15 reviews to 80 reviews in 90 days typically see a measurable increase in new customer calls."],
              ["What kind of social content will Traffikora post for my shop?", "Traffikora generates automotive content relevant to your shop -- seasonal maintenance reminders, car care tips, service highlights, and local community content. It is branded to your business, not generic content. The goal is to keep your shop top of mind with existing customers and build trust with new ones who check your social media before calling."],
              ["How does Traffikora help me get found on ChatGPT?", "Traffikora builds the structured content, schema markup, citations, and entity signals that AI engines use to identify and recommend local businesses. When a driver asks ChatGPT to find a trustworthy auto repair shop in your city, these signals increase the likelihood your shop gets cited in the response."],
              ["Do I need any technical knowledge to use Traffikora?", "No. Traffikora is built for business owners, not marketers or developers. You connect your accounts, confirm your shop details, and Traffikora handles everything from there. Setup takes under 30 minutes and requires no ongoing management from you or your staff."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Your Shop Does Great Work. Make Sure People Find It.</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so local drivers find your shop first -- on Google, on social, and on AI engines.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}