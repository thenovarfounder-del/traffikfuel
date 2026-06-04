// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/how-it-works\",\"description\":\"Traffikora automates local business marketing in 3 steps: connect accounts, set up your business profile, and watch AI publish content daily across 9+ platforms.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"How Traffikora Works\",\"description\":\"Set up AI marketing automation for your local business in under 5 minutes.\",\"step\":[{\"@type\":\"HowToStep\",\"name\":\"Connect your accounts\",\"text\":\"Link your website, social profiles, and Google Business Profile in one click. Takes less than 5 minutes.\"},{\"@type\":\"HowToStep\",\"name\":\"Tell us about your business\",\"text\":\"Answer a few simple questions. The AI learns your industry, city, and target customers.\"},{\"@type\":\"HowToStep\",\"name\":\"Watch it work\",\"text\":\"Traffikora starts generating and publishing content immediately and never stops — 24/7 marketing on autopilot.\"}]}" }} />
      {children}
    </>
  )
}
