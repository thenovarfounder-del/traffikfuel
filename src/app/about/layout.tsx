// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Traffikora\",\"url\":\"https://www.traffikora.com\",\"description\":\"Traffikora is an AI marketing automation company built to help local small businesses compete online without agencies or manual work.\",\"foundingDate\":\"2025\",\"sameAs\":[\"https://www.facebook.com/profile.php?id=61590075525966\",\"https://www.instagram.com/traffikora/\",\"https://x.com/traffikora\"]}" }} />
      {children}
    </>
  )
}
