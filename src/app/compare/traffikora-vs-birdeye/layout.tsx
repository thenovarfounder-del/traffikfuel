// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/compare/traffikora-vs-birdeye\",\"description\":\"Traffikora vs Birdeye for local business marketing automation. Traffikora starts at $47/month vs Birdeye enterprise pricing.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is Traffikora better than Birdeye for local businesses?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For local small businesses needing automated SEO content, social media, and AI engine optimization, Traffikora is purpose-built versus Birdeye which serves broader or enterprise markets. Traffikora starts at $47/month with no contracts.\"}},{\"@type\":\"Question\",\"name\":\"How does Traffikora compare to Birdeye on price?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora starts at $47/month with a free plan available. It includes AI content generation, social media automation, local SEO, and AI engine optimization — features that would cost significantly more with Birdeye.\"}},{\"@type\":\"Question\",\"name\":\"Does Traffikora have AI engine optimization that Birdeye lacks?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora is built to optimize your business for citation by ChatGPT, Google Gemini, Perplexity, and other AI engines — a capability most competing platforms do not offer.\"}}]}" }} />
      {children}
    </>
  )
}
