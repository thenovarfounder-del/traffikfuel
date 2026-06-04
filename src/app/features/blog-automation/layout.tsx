// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora — Blog Automation\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/features/blog-automation\",\"description\":\"Traffikora blog automation publishes keyword-optimized SEO blog posts to your WordPress website daily — building search authority without any manual writing.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is Traffikora Blog Automation?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora blog automation publishes keyword-optimized SEO blog posts to your WordPress website daily — building search authority without any manual writing.\"}},{\"@type\":\"Question\",\"name\":\"How does Traffikora Blog Automation work?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora Blog Automation runs automatically after a one-time setup. Connect your accounts once and the system handles all blog automation tasks daily without any manual work from you.\"}},{\"@type\":\"Question\",\"name\":\"How much does Traffikora Blog Automation cost?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora Blog Automation is included in paid plans starting at $47/month. A free plan is also available with no credit card required.\"}}]}" }} />
      {children}
    </>
  )
}
