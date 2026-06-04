// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Traffikora\",\"url\":\"https://www.traffikora.com/support\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"email\":\"support@traffikora.com\",\"contactType\":\"customer support\",\"availableLanguage\":\"English\"}}" }} />
      {children}
    </>
  )
}
