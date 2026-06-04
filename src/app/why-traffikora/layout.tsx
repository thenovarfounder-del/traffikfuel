// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/why-traffikora\",\"description\":\"Traffikora is the only AI marketing platform that automates both Google SEO and AI engine optimization for local businesses simultaneously.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Why choose Traffikora over a marketing agency?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora automates what agencies do manually at a fraction of the cost — starting at $47/month versus $2,000-$10,000/month for agencies — with no contracts and instant setup.\"}},{\"@type\":\"Question\",\"name\":\"What makes Traffikora different from other marketing tools?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is the only platform that simultaneously automates Google SEO, social media, and AI engine optimization for local businesses — getting you found on Google, ChatGPT, Gemini, and Perplexity automatically.\"}}]}" }} />
      {children}
    </>
  )
}
