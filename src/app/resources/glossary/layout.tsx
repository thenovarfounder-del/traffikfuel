// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"DefinedTermSet\",\"name\":\"Traffikora Marketing Glossary\",\"url\":\"https://www.traffikora.com/resources/glossary\",\"description\":\"Definitions of AI marketing, SEO, AEO, and local business marketing terms used by Traffikora.\"}" }} />
      {children}
    </>
  )
}
