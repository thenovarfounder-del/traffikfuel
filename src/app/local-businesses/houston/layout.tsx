// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/local-businesses/houston\",\"description\":\"Traffikora AI marketing automation for small businesses in Houston, TX. Automates SEO content, social media, and AI engine optimization for local businesses.\",\"areaServed\":{\"@type\":\"City\",\"name\":\"Houston\",\"containedInPlace\":{\"@type\":\"State\",\"name\":\"TX\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does Traffikora help small businesses in Houston?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora automates daily SEO blog content, social media posts, and AI engine optimization for small businesses in Houston — helping them rank on Google and get recommended by ChatGPT and Gemini for local searches.\"}},{\"@type\":\"Question\",\"name\":\"What types of businesses in Houston use Traffikora?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora serves local businesses in Houston including HVAC companies, dental offices, law firms, salons, restaurants, real estate agents, gyms, auto repair shops, med spas, plumbers, and chiropractors.\"}},{\"@type\":\"Question\",\"name\":\"How much does Traffikora cost for Houston businesses?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora has a free plan with no credit card required. Paid plans start at $47/month — far less than hiring a local marketing agency in Houston.\"}}]}" }} />
      {children}
    </>
  )
}
