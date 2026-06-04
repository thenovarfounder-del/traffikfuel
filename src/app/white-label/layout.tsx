// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora White Label\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/white-label\",\"description\":\"Traffikora white label AI marketing platform for agencies. Resell AI content automation under your own brand with up to 10 client accounts.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can I white label Traffikora for my agency clients?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora's Agency plan includes white label capabilities so you can deliver AI content marketing under your own brand.\"}},{\"@type\":\"Question\",\"name\":\"How many clients can I manage with Traffikora white label?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The Agency plan supports up to 10 clients. The Enterprise plan supports unlimited clients with custom AI training.\"}}]}" }} />
      {children}
    </>
  )
}
