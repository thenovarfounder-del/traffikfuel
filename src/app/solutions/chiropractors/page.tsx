import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Chiropractors | Traffikora",
  description: "Traffikora automates social media, Google Business Profile, SEO, and AI engine visibility for chiropractic practices -- so you can focus on patients, not marketing.",
};

export default function ChiropractorsPage() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Chiropractors</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>Your practice grows on referrals and trust. Traffikora builds your online presence automatically -- so new patients find you on Google, ChatGPT, and everywhere they search for care.</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Free — No Card Needed</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "1.5rem", marginBottom: "16px" }}>What Traffikora Does For Your Chiropractic Practice</h2>
            <ul style={{ color: "#cccccc", lineHeight: "2", paddingLeft: "20px" }}>
              <li>Publishes branded health and wellness content daily across social platforms</li>
              <li>Keeps your Google Business Profile active with posts, Q&A, and updates</li>
              <li>Builds local SEO citations so you rank when patients search for chiropractors near them</li>
              <li>Sends automated review requests to patients after their appointments</li>
              <li>Publishes weekly SEO blog posts to your website automatically</li>
              <li>Makes your practice visible when people ask ChatGPT for chiropractor recommendations</li>
            </ul>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "24px" }}>Most Chiropractic Practices Are Invisible Online</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>77% of patients search online before booking a healthcare appointment. They are checking Google reviews, looking at your website, and scrolling your social media before they ever call your front desk. If your online presence is thin -- outdated Google profile, no recent social posts, fewer than 20 reviews -- you are losing new patients to the practice down the street that looks more established online, even if your care is better.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Chiropractic practices have always relied on referrals, and referrals still matter. But in 2026, referred patients still Google you before they book. If what they find does not reinforce the trust that referral created, they hesitate. A strong online presence does not replace referrals -- it converts them at a much higher rate.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>The challenge is time. You are treating patients all day. Your front desk is managing appointments and insurance. Nobody in a chiropractic practice has time to consistently post on Instagram, update Google Business Profile, and publish blog content. So it does not get done -- and your practice stays invisible to everyone who is not already a patient.</p>
          </div>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Chiropractic Marketing Automation That Fills Your Schedule</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Traffikora connects to your practice profiles and handles every marketing task automatically. Daily social content about spinal health, posture tips, patient education, and your services -- published across Facebook, Instagram, and more without anyone on your team touching it. Your practice looks active, professional, and trustworthy online every single day.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Google Business Profile optimization is where chiropractors see the fastest results. A fully optimized and regularly updated GBP listing gets 5x more calls than a neglected one. Traffikora posts to your GBP automatically, keeps your information current, and manages your Q&A section -- the three factors that most directly drive new patient calls from Google Maps searches.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Local SEO for chiropractors means ranking when someone in your city searches "chiropractor near me" or "back pain relief in [city]." Traffikora builds the citations, schema markup, and keyword content that moves your practice up those rankings. Combined with automated review requests sent to patients after each visit, your practice builds the online authority that sustains a full appointment book.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What Your Chiropractic Practice Gets With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Health and wellness posts published every day to Facebook, Instagram, and more -- educating your audience and keeping your practice top of mind without your staff writing anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A updates, and profile optimization that drives more calls and bookings from patients searching for a chiropractor near them."],
                ["Local SEO for Chiropractors", "Citation building, schema markup, and keyword content targeting searches like chiropractor in [city] and back pain relief near me -- pushing your practice up local rankings."],
                ["Automated Review Requests", "Review campaigns sent to patients after appointments -- growing your star rating, building trust with prospective patients, and improving your local search rankings."],
                ["AI Engine Visibility", "Structured content that makes your practice visible when patients ask ChatGPT or Perplexity to recommend a chiropractor in your area."],
                ["Weekly Blog Content", "Patient education articles and SEO blog posts published to your website automatically -- building organic traffic from people searching for solutions to the problems you treat."],
                ["New Patient Pipeline", "Consistent visibility across Google, social media, and AI engines means a steady flow of new patient inquiries instead of relying solely on referrals."],
                ["One Dashboard", "Every marketing channel managed in one place. No agency. No staff time required. No monthly strategy calls."]
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
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why Chiropractic SEO Automation Matters More in 2026</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>Patients are increasingly turning to AI engines to find healthcare providers. When someone wakes up with neck pain and asks ChatGPT "who is a good chiropractor near me," the practices that get recommended are the ones with strong entity signals, consistent citations, and structured content across the web. This is a new patient acquisition channel that most chiropractic practices have not optimized for at all.</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>Traffikora builds your chiropractic practice visibility across both traditional search and AI engines simultaneously. Every post, citation, and blog article strengthens your standing on Google and increases the likelihood of being cited by AI platforms. The practices that build this foundation now will have a significant and durable advantage over those that wait.</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>Frequently Asked Questions</h2>
            {[
              ["What is marketing automation for chiropractors?", "Marketing automation for chiropractors means using software to handle the consistent marketing tasks that keep your practice visible online -- publishing social content, updating your Google Business Profile, requesting patient reviews, and publishing SEO blog posts. Traffikora automates all of it so your practice marketing runs continuously without taking time away from patient care."],
              ["How does Traffikora help me get more new patients?", "Traffikora increases your visibility across every channel new patients use to find a chiropractor -- Google search, Google Maps, social media, and AI engines like ChatGPT. More visibility means more calls and appointment requests from people who were not referred to you but found you because you showed up where they were searching."],
              ["Will the content be appropriate for a healthcare practice?", "Yes. Traffikora generates patient education content, wellness tips, and practice updates that are professional, accurate in tone, and appropriate for a healthcare audience. The content is designed to build trust and authority, not just fill a posting schedule."],
              ["How does Google Business Profile optimization help my practice?", "Your Google Business Profile is often the first thing a potential patient sees when they search for a chiropractor near them. A fully optimized and regularly updated GBP listing gets significantly more calls and direction requests than a neglected one. Traffikora keeps your profile active with regular posts, updated Q&A, and review management -- the factors that most directly drive new patient calls from Google Maps."],
              ["How long before I see more new patient inquiries?", "Most practices see their Google Business Profile activity and social media presence improve immediately. Increases in new patient inquiries from organic search typically build over 60 to 90 days as Google and AI engines index the growing content footprint Traffikora builds on your behalf."],
              ["How is Traffikora different from a healthcare marketing agency?", "A healthcare marketing agency typically costs $1,500 to $3,000 per month and requires regular input from your practice for strategy and approvals. Traffikora automates the same consistent marketing output -- social content, GBP management, SEO, blog posts, and review requests -- for a fraction of the cost with no ongoing time required from you or your staff."]
            ].map(([q, a]) => (
              <div key={q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "24px", marginBottom: "24px" }}>
                <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{q}</h3>
                <p style={{ color: "#cccccc", lineHeight: "1.8" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>A Full Appointment Book Starts With Being Found</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora builds your chiropractic practice visibility automatically -- so new patients find you first, trust what they see, and book.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Free — No Card Needed</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No no credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}