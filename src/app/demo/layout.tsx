// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/demo\",\"description\":\"See Traffikora AI marketing automation in action. Live demo of blog content, social media, and AI engine optimization running automatically for local businesses.\"}" }} />
      {children}
    </>
  )
}
