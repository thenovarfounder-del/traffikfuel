import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <Image src="/icon.png" alt="TraffikFuel" width={60} height={60} />
          <h1 className="text-3xl font-bold">TraffikFuel Privacy Policy</h1>
        </div>

        <p className="mb-6 text-sm text-gray-500">Effective Date: May 6, 2026</p>

        <p className="mb-6">TraffikFuel, Inc. ("TraffikFuel," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at traffikfuel.com. Please read this policy carefully.</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-3">We collect the following types of information:</p>
          <p className="mb-2"><strong>Account Information:</strong> Name, email address, phone number, and password when you register.</p>
          <p className="mb-2"><strong>Business Information:</strong> Business name, website, industry, and logo you provide.</p>
          <p className="mb-2"><strong>Social Media Data:</strong> When you connect third-party accounts such as TikTok, we collect your profile information, account ID, and access tokens as authorized by you.</p>
          <p className="mb-2"><strong>Usage Data:</strong> Pages visited, features used, and actions taken within the platform.</p>
          <p className="mb-2"><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers.</p>
          <p className="mb-2"><strong>Payment Information:</strong> Billing details processed securely through our payment provider. We do not store full card numbers.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <p className="mb-2">• Provide, operate, and improve the TraffikFuel platform</p>
          <p className="mb-2">• Publish content to connected social media accounts on your behalf</p>
          <p className="mb-2">• Process payments and manage your subscription</p>
          <p className="mb-2">• Send transactional emails, security alerts, and platform notifications</p>
          <p className="mb-2">• Respond to support requests and inquiries</p>
          <p className="mb-2">• Comply with legal obligations and enforce our terms</p>
          <p className="mb-2">• Analyze usage patterns to improve user experience</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. TikTok API Data Usage</h2>
          <p className="mb-3">TraffikFuel integrates with the TikTok API. When you connect your TikTok account:</p>
          <p className="mb-2">• We request only the permissions necessary to publish content on your behalf</p>
          <p className="mb-2">• We do not sell, share, or use your TikTok data for advertising purposes</p>
          <p className="mb-2">• We store only the access tokens required to maintain your connection</p>
          <p className="mb-2">• You may revoke TikTok access at any time from your account settings</p>
          <p className="mb-2">• Our use of TikTok data complies with TikTok's Platform Terms and Developer Policies</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Information Sharing and Disclosure</h2>
          <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
          <p className="mb-2"><strong>Service Providers:</strong> Third-party vendors who help operate our platform (hosting, email, payment processing, analytics), bound by confidentiality agreements.</p>
          <p className="mb-2"><strong>Legal Requirements:</strong> When required by law, court order, or government authority.</p>
          <p className="mb-2"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to you.</p>
          <p className="mb-2"><strong>With Your Consent:</strong> Any other sharing with your explicit permission.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us at support@traffikfuel.com.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
          <p>We implement industry-standard security measures including encryption in transit (TLS), encrypted storage, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <p className="mb-2">• Access the personal data we hold about you</p>
          <p className="mb-2">• Request correction of inaccurate data</p>
          <p className="mb-2">• Request deletion of your personal data</p>
          <p className="mb-2">• Opt out of marketing communications</p>
          <p className="mb-2">• Data portability where applicable</p>
          <p className="mt-3">To exercise these rights, contact us at support@traffikfuel.com.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Cookies</h2>
          <p>We use cookies and similar tracking technologies to maintain sessions, remember preferences, and analyze platform usage. You may control cookie settings through your browser.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Children's Privacy</h2>
          <p>TraffikFuel is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us immediately.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our platform. Continued use of TraffikFuel after changes constitutes acceptance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="mb-2">If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <p className="mb-1"><strong>TraffikFuel, Inc.</strong></p>
          <p className="mb-1">Email: support@traffikfuel.com</p>
          <p>Website: https://www.traffikfuel.com</p>
        </section>
      </div>
    </main>
  )
}