// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/features\",\"description\":\"Traffikora features: AI blog automation, social media publishing, local SEO, AI engine optimization, Google Business Profile automation, review automation, and more.\"}" }} />
      {children}
    </>
  )
}
