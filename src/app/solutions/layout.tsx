// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"url\":\"https://www.traffikora.com/solutions\",\"description\":\"Traffikora AI marketing automation solutions for 12+ local business industries including HVAC, dental, law firms, salons, restaurants, real estate, gyms, and more.\"}" }} />
      {children}
    </>
  )
}
