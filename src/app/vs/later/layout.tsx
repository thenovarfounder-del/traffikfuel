// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/vs/later\",\"description\":\"Traffikora vs Later for local small business marketing automation. Traffikora automates SEO content, social media, and AI engine optimization starting at $47/month.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is the difference between Traffikora and Later?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is purpose-built for local business marketing automation — publishing daily SEO content, social media posts, and optimizing for AI engine citations. Later focuses on different aspects of marketing without Traffikora's AI-first local search approach.\"}},{\"@type\":\"Question\",\"name\":\"Is Traffikora cheaper than Later?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora starts at $47/month with a free plan available. For local businesses needing automated content marketing and AI engine optimization, Traffikora delivers more relevant features at a competitive price.\"}}]}" }} />
      {children}
    </>
  )
}
