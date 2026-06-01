import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Dentists | Traffikora",
  description: "Traffikora automates social media, Google Business Profile, SEO, and review requests for dental practices -- so you can focus on patients, not marketing.",
};

export default function DentistsPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Dentists</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>New patients are searching for a dentist right now. Traffikora makes sure they find your practice first -- on Google, on social media, and on AI engines -- automatically, every day.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Dental Practice</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded dental health content daily across social platforms</li>
              <li>Keeps your Google Business Profile active with posts, Q&A, and updates</li>
              <li>Sends automated review requests to patients after appointments</li>
              <li>Builds local SEO citations so you rank when patients search for a dentist near them</li>
              <li>Publishes weekly SEO blog posts to your practice website automatically</li>
              <li>Makes your practice visible when people ask ChatGPT or Perplexity for dentist recommendations</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Most Dental Practices Are Losing New Patients to Better Online Presence</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>84% of patients check online reviews before choosing a dentist. When a family moves to a new area or someone loses their dental insurance and needs a new provider, the first thing they do is search Google. They look at star ratings, read reviews, check how recently the practice has been active, and make a decision before they ever call. If your practice does not show up well in that search, you never get the chance.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Dental practices that have automated review request systems get 3x more reviews than those that rely on patients to leave reviews voluntarily. That review gap translates directly into a patient acquisition gap. A practice with 180 reviews and a 4.9 star rating wins the click over a practice with 22 reviews and a 4.3 -- even if the care is identical.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The challenge is that dental teams are focused entirely on patient care. Nobody at the front desk has time to manage Instagram, post on Google Business Profile, and run review campaigns. So it does not get done -- and your practice stays invisible to the wave of new patients searching online every day in your area.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Dental SEO Automation That Fills Your Chair</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your practice profiles and starts delivering immediately. Daily social content -- oral health tips, patient education, service highlights, and practice updates -- published to Facebook, Instagram, and more without anyone on your team writing a word. Your practice looks active, credible, and trustworthy online every single day.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>On reviews, Traffikora sends automated requests to your patients after every appointment. The timing is key -- a patient who just had a great experience is far more likely to leave a review when prompted immediately. Within 90 days, most practices see their review count multiply significantly, which improves both their Google Maps ranking and their conversion rate when new patients compare options.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Dental practice SEO means ranking when someone searches "dentist near me" or "family dentist in [city]." Traffikora builds the local citations, schema markup, and keyword-optimized blog content that pushes your practice up those rankings. Most practices see meaningful increases in new patient inquiries within 60 to 90 days of consistent Traffikora activity.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Your Dental Practice Gets With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Oral health education, service highlights, and practice updates published every day to Facebook, Instagram, and more -- without your front desk writing or scheduling anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A updates, and profile optimization that keeps your listing active and ranking when patients search for a dentist near them."],
                ["Automated Review Requests", "Review campaigns sent to patients after every appointment -- systematically growing your star rating and building the social proof that converts new patient searches into booked appointments."],
                ["Dental Practice SEO", "Local citation building, schema markup, and keyword content targeting searches like dentist near me and family dentist in [city] -- pushing your practice up Google rankings."],
                ["AI Engine Visibility", "Structured content that makes your practice visible when patients ask ChatGPT or Perplexity to recommend a dentist in your area."],
                ["Weekly Blog Content", "Patient education articles and SEO blog posts published to your website automatically -- building organic traffic from people searching for dental services and information."],
                ["New Patient Pipeline", "Consistent visibility across Google, social, and AI engines means a steady flow of new patient inquiries beyond insurance referrals and word of mouth."],
                ["One Dashboard", "Social, SEO, reviews, and Google profile all managed automatically. No agency. No staff time. No ongoing management required."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Dental Marketing Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Patients are using AI engines to find healthcare providers at a growing rate. When someone new to your city asks ChatGPT "who is a good dentist near me," the practices that get recommended are the ones with strong entity signals, consistent citations, and structured content across the web. Most dental practices have zero presence in this channel -- which means first movers own it.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora builds your dental practice visibility across traditional search and AI engines simultaneously. Every social post, every citation, and every blog article strengthens your standing on Google and increases your likelihood of being cited by AI platforms. The practices investing in dental marketing automation now are building a new patient acquisition system that compounds in value every month.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for dentists?", "Marketing automation for dentists means using software to handle the consistent marketing tasks that keep your practice visible and attractive to new patients -- publishing social content, updating your Google Business Profile, requesting patient reviews, and publishing SEO blog posts. Traffikora automates all of it so your practice marketing runs every day without taking time away from patient care."],
              ["How does Traffikora help my practice get more new patients?", "Traffikora increases your visibility across every channel new patients use to find a dentist -- Google search, Google Maps, social media, and AI engines like ChatGPT. More visibility means more calls and appointment requests from patients who were not referred to you but found you because you showed up first when they searched."],
              ["How does the automated review system work?", "Traffikora sends review request messages to your patients after their appointments -- via email or SMS depending on your setup. The message prompts them to share their experience on Google. Because the request comes promptly after a positive appointment, response rates are significantly higher than asking at the desk or hoping patients leave reviews voluntarily. Practices using automated review requests get 3x more reviews than those that do not."],
              ["Will the social content be appropriate for a dental practice?", "Yes. Traffikora generates oral health education content, service highlights, and patient-friendly practice updates that are professional and appropriate for a healthcare audience. The content is designed to build trust and authority with prospective patients, not just fill a posting schedule."],
              ["How does Traffikora help my practice show up on ChatGPT?", "Traffikora builds the structured content, schema markup, citations, and entity signals that AI engines use to identify and recommend local healthcare providers. When a patient asks ChatGPT to recommend a dentist in your city, these signals increase the likelihood your practice appears in the response."],
              ["How is Traffikora different from a dental marketing agency?", "A dental marketing agency typically costs $1,500 to $3,000 per month and requires regular input from your practice for strategy, content approval, and briefings. Traffikora automates the same consistent marketing output for a fraction of that cost with no ongoing time required from you or your staff. You get better consistency and better margins without managing an agency relationship."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>Your Next New Patient Is Searching Right Now</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora makes sure they find your practice first -- on Google, on social, and on AI engines -- automatically, every day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}