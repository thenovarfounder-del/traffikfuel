// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/compare/traffikora-vs-vendasta\",\"description\":\"Traffikora vs Vendasta for local business marketing automation. Traffikora offers simpler setup and AI-first content automation.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Is Traffikora better than Vendasta for local businesses?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For local small businesses needing automated SEO content, social media, and AI engine optimization, Traffikora is purpose-built versus Vendasta which serves broader or enterprise markets. Traffikora starts at $47/month with no contracts.\"}},{\"@type\":\"Question\",\"name\":\"How does Traffikora compare to Vendasta on price?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora starts at $47/month with a free plan available. It includes AI content generation, social media automation, local SEO, and AI engine optimization — features that would cost significantly more with Vendasta.\"}},{\"@type\":\"Question\",\"name\":\"Does Traffikora have AI engine optimization that Vendasta lacks?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora is built to optimize your business for citation by ChatGPT, Google Gemini, Perplexity, and other AI engines — a capability most competing platforms do not offer.\"}}]}" }} />
      {children}
    </>
  )
}
