const fs = require('fs');
const cities = [
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    desc: 'Los Angeles small businesses compete across one of the largest and most diverse markets in the country. Traffikora automates your marketing so LA customers find you first.',
    body1: 'Los Angeles is a city of neighborhoods -- and every neighborhood has its own competitive local business landscape. Whether you are in Silver Lake, Santa Monica, Koreatown, or the Valley, your customers are searching online before they walk through your door. They are checking Google reviews, scrolling Instagram, and increasingly asking ChatGPT or Perplexity to recommend local businesses near them. If your business is not showing up consistently across all of those channels, you are losing customers to competitors who are.',
    body2: 'LA small business owners are among the busiest in the country. The cost of doing business in Los Angeles is high, margins are tight, and time is the most scarce resource of all. Traffikora automates the full marketing stack -- social content published daily, Google Business Profile managed automatically, local SEO built continuously, blog posts published weekly, and AI engine optimization running from day one -- so your marketing stays consistent without taking hours you do not have.',
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    desc: 'Chicago small businesses need consistent marketing to compete in one of the most loyal and community-driven local markets in the US. Traffikora automates it all.',
    body1: 'Chicago is a city of neighborhoods where local loyalty runs deep -- but that loyalty has to be earned online first. When a new family moves to Lincoln Park or Wicker Park and searches for a dentist, restaurant, or auto shop, they are going to Google and ChatGPT before they ask a neighbor. If your business does not show up in those results, the referral never comes. Your online presence has to do the work before word of mouth can take over.',
    body2: 'Chicago small businesses face the same challenge as local businesses everywhere -- not enough time to maintain the consistent marketing presence that drives online visibility. Traffikora automates social media, local SEO, Google Business Profile, blog content, review requests, and AI engine optimization for Chicago businesses -- so your marketing runs every day regardless of how busy your season gets or how much the city demands of you.',
  },
  {
    slug: 'houston',
    name: 'Houston',
    desc: 'Houston is one of the fastest-growing cities in the US. Traffikora helps Houston small businesses capture new residents and local customers through automated marketing.',
    body1: 'Houston is growing faster than almost any major city in the United States -- which means a constant wave of new residents who need every local service and do not have existing relationships with any local businesses yet. New Houstonians are going straight to Google, ChatGPT, and social media to find restaurants, doctors, mechanics, and every other local service. The businesses that show up first in those searches capture customers who will potentially stay for years.',
    body2: 'For established Houston small businesses, the challenge is competing with this growth while managing an already demanding operation. Traffikora automates the consistent marketing output that makes your business visible to Houston customers old and new -- daily social content, Google Business Profile management, local SEO, weekly blog posts, and AI engine optimization -- all running automatically so you can focus on serving the customers it brings in.',
  },
  {
    slug: 'miami',
    name: 'Miami',
    desc: 'Miami small businesses operate in a fast-moving, trend-driven market. Traffikora automates your marketing so Miami customers find your business first across every channel.',
    body1: 'Miami is one of the most dynamic local business markets in the country -- fast-moving, trend-sensitive, and increasingly driven by AI-assisted discovery. Miami customers are highly social-media-active and among the earliest adopters of AI engine search behavior. When a Miami customer asks ChatGPT for the best restaurant in Brickell or the top chiropractor in Coral Gables, the businesses that appear in those responses are capturing high-intent customers that traditional marketing alone would never reach.',
    body2: 'Miami small businesses also face intense competition and a transient customer base with new residents and visitors arriving constantly. Traffikora automates your entire marketing presence -- social content published daily across 9+ platforms, Google Business Profile updated automatically, local SEO built consistently, blog posts published weekly, and AI engine signals built from day one -- so your Miami business stays visible to every customer searching for what you offer.',
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    desc: 'Dallas is one of the fastest-growing metro areas in the US. Traffikora helps Dallas small businesses capture new residents and compete across one of the most active local markets in Texas.',
    body1: 'Dallas is growing rapidly, with new residents arriving every month who need local businesses for every service they require. These new Dallas residents have no existing loyalties -- they are going to Google, ChatGPT, and social media to find businesses in their new city. The local businesses that have built consistent online visibility are the ones capturing these customers. The ones that have not are invisible to an entire wave of high-intent new customers.',
    body2: 'For existing Dallas small businesses, staying competitive means maintaining the kind of consistent marketing presence that Google, AI engines, and social platforms reward. Traffikora automates daily social content, Google Business Profile management, local SEO, blog automation, review requests, and AI engine optimization for Dallas businesses -- so your marketing runs continuously and your visibility compounds over time.',
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    desc: 'Atlanta is one of the most competitive and fastest-growing business markets in the Southeast. Traffikora automates marketing for Atlanta small businesses across every channel that matters.',
    body1: 'Atlanta has transformed into one of the most competitive business markets in the Southeast -- with a rapidly growing population, a strong entrepreneurial culture, and customers who are highly active online. Atlanta customers check Google reviews, follow local businesses on Instagram, and increasingly ask AI engines for recommendations before choosing a local service provider. Showing up consistently across all of these channels is what separates the businesses that grow from those that stay invisible.',
    body2: 'Traffikora automates the full marketing stack for Atlanta small businesses -- social content published daily, Google Business Profile managed automatically, local SEO citations built and maintained, weekly SEO blog posts, automated review requests, and AI engine optimization that makes your business visible when Atlanta customers ask ChatGPT or Perplexity for local recommendations in your category.',
  },
  {
    slug: 'phoenix',
    name: 'Phoenix',
    desc: 'Phoenix is one of the fastest-growing cities in America. Traffikora helps Phoenix small businesses capture new residents and compete for local customers through automated marketing.',
    body1: 'Phoenix consistently ranks among the fastest-growing cities in the United States -- which means a constant influx of new residents who are actively searching for local businesses across every category. New Phoenix residents have no established loyalties and are going straight to Google, ChatGPT, and social media to find the businesses that will serve them. The local businesses with consistent online visibility capture these customers at the exact moment they are ready to choose.',
    body2: 'Traffikora automates the marketing that makes Phoenix small businesses visible to new and existing customers -- daily social content across 9+ platforms, automated Google Business Profile management, local SEO citation building, weekly blog content, review request campaigns, and AI engine optimization -- all running automatically so your Phoenix business stays competitive without adding to your workload.',
  },
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    desc: 'Las Vegas local businesses serve both residents and a constant flow of visitors. Traffikora automates your marketing so Las Vegas customers and tourists find your business first.',
    body1: 'Las Vegas is a unique local business market -- a large residential population living alongside one of the highest-traffic tourist destinations in the world. Local businesses in Las Vegas serve both long-term residents who form lasting customer relationships and visitors who discover businesses through online search and AI engine queries while planning their trip. Showing up in both of those discovery channels requires consistent marketing across Google, social media, and AI engines simultaneously.',
    body2: 'Traffikora automates marketing for Las Vegas small businesses across every channel that drives local discovery -- daily social content, Google Business Profile management, local SEO, blog automation, review requests, and AI engine optimization. Whether your next customer is a Las Vegas resident or a visitor asking ChatGPT for recommendations before their trip, Traffikora makes sure your business shows up in the answer.',
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    desc: 'Seattle small businesses operate in one of the most tech-savvy and digitally active markets in the US. Traffikora automates your marketing so Seattle customers find you first.',
    body1: 'Seattle is one of the most digitally sophisticated local markets in the United States -- home to a tech-savvy population that is among the earliest adopters of AI engine search behavior. Seattle customers are actively using ChatGPT and Perplexity to find local business recommendations at higher rates than most other markets. For Seattle small businesses, AI engine optimization is not a future consideration -- it is a present competitive necessity.',
    body2: 'Traffikora automates the full marketing stack for Seattle small businesses -- daily social content across 9+ platforms, automated Google Business Profile management, local SEO built continuously, weekly blog posts, review request campaigns, and AI engine optimization that makes your business visible when Seattle customers ask AI engines for recommendations in your category. In a market this digitally active, consistent automated marketing is the only way to keep up.',
  },
];

cities.forEach(city => {
  const dir = `src/app/local-businesses/${city.slug}`;
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }
  const content = `import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marketing Automation for Small Businesses in ${city.name} | Traffikora",
  description: "Traffikora helps ${city.name} small businesses automate social media, SEO, Google Business Profile, and AI engine visibility. Start your free trial today.",
};

export default function ${city.name.replace(' ', '')}Page() {
  return (
    <>
      <Nav />
      <main suppressHydrationWarning>
        <section style={{ background: "#111111", padding: "80px 24px 60px", textAlign: "center" }} suppressHydrationWarning>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#ffffff", marginBottom: "20px" }}>Marketing Automation for Small Businesses in ${city.name}</h1>
          <p style={{ color: "#cccccc", fontSize: "1.15rem", maxWidth: "640px", margin: "0 auto 32px" }}>${city.desc}</p>
          <Link href="/signup" style={{ background: "#E8610A", color: "#ffffff", padding: "14px 32px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Start Your Free 7-Day Trial</Link>
        </section>
        <section style={{ background: "#1a1a1a", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#E8610A", fontSize: "2rem", marginBottom: "24px" }}>Why ${city.name} Small Businesses Need Marketing Automation</h2>
            <p style={{ color: "#cccccc", lineHeight: "1.8", marginBottom: "16px" }}>${city.body1}</p>
            <p style={{ color: "#cccccc", lineHeight: "1.8" }}>${city.body2}</p>
          </div>
        </section>
        <section style={{ background: "#111111", padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "32px" }}>What ${city.name} Small Businesses Get With Traffikora</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {[
                ["Daily Social Content", "Branded posts published every day to Facebook, Instagram, TikTok, and more -- keeping your ${city.name} business visible without you writing anything."],
                ["Google Business Profile Automation", "Automated GBP posts, Q&A, and review requests that keep your listing active and ranking when ${city.name} customers search for your category."],
                ["${city.name} Local SEO", "Citation building, schema markup, and keyword content targeting ${city.name} local searches -- pushing your business up Google rankings."],
                ["AI Engine Visibility", "Structured content that gets your business recommended when ${city.name} customers ask ChatGPT or Perplexity for local recommendations."],
                ["Weekly Blog Content", "SEO blog posts published to your website every week -- building organic traffic from ${city.name} customers searching for your services."],
                ["Review Automation", "Automated review requests that grow your star rating and build the social proof that converts ${city.name} customers who compare options online."]
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "#1a1a1a", borderRadius: "8px", padding: "24px", borderLeft: "3px solid #E8610A" }}>
                  <h3 style={{ color: "#E8610A", fontFamily: "Playfair Display, serif", fontSize: "1.1rem", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#cccccc", lineHeight: "1.7", fontSize: "0.95rem" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Traffikora",
          "description": "Marketing automation platform for small businesses in ${city.name}.",
          "url": "https://www.traffikora.com/local-businesses/${city.slug}",
          "areaServed": { "@type": "City", "name": "${city.name}" },
          "serviceType": "Marketing Automation"
        })}} />
        <section style={{ background: "#E8610A", padding: "60px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", color: "#ffffff", fontSize: "2rem", marginBottom: "16px" }}>${city.name} Businesses That Show Up Win</h2>
          <p style={{ color: "#ffffff", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px" }}>Traffikora automates your marketing so your ${city.name} business shows up first -- on Google, on social, and on AI engines -- every single day.</p>
          <Link href="/signup" style={{ background: "#ffffff", color: "#E8610A", padding: "16px 36px", borderRadius: "6px", fontWeight: "700", textDecoration: "none", fontSize: "1.05rem" }}>Start Your Free 7-Day Trial</Link>
          <p style={{ color: "#ffffff", marginTop: "16px", fontSize: "0.9rem", opacity: 0.85 }}>No credit card required. See <Link href="/pricing" style={{ color: "#ffffff", textDecoration: "underline" }}>pricing</Link> or explore <Link href="/features" style={{ color: "#ffffff", textDecoration: "underline" }}>all features</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}`;
  fs.writeFileSync(`src/app/local-businesses/${city.slug}/page.tsx`, content);
  console.log(`Done: ${city.name}`);
});