export default function PrivacyPage() { return (<main style={{padding:'40px',maxWidth:'800px',margin:'0 auto'}}><h1>Privacy Policy</h1><p>Last updated: May 2026</p><h2>Information We Collect</h2><p>We collect email, usage data, and TikTok profile info when you connect your account.</p><h2>How We Use It</h2><p>We use your data to provide TraffikFuel services and improve your experience.</p><h2>Data Security</h2><p>All data is encrypted and stored securely.</p><h2>Contact</h2><p>Email us at support@traffikfuel.com</p></main>) }
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <Image src="/icon.png" alt="TraffikFuel" width={60} height={60} />
          <h1 className="text-3xl font-bold">TraffikFuel Privacy Policy</h1>
        </div>

        <p className="mb-4 text-sm text-gray-500">Last updated: May 6, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name, email address, phone number, and business information when you create an account or use our services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send notifications, and comply with legal obligations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our platform, subject to confidentiality agreements.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. TikTok Integration</h2>
          <p>When you connect your TikTok account, we access only the data you authorize. We use TikTok's API to publish content on your behalf. We do not store your TikTok credentials.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at support@traffikfuel.com.</p>
        </section>
      </div>
    </main>
  )
}