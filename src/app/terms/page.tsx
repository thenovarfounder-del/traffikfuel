import Image from 'next/image'

export default function TermsPage() {
return (
<main className="min-h-screen bg-white text-gray-800">
<div className="max-w-3xl mx-auto px-6 py-12">
<div className="flex items-center gap-4 mb-10">
<Image src="/icon.png" alt="TraffikFuel" width={60} height={60} />
<h1 className="text-3xl font-bold">TraffikFuel Terms of Service</h1>
</div>

<p className="mb-6 text-sm text-gray-500">Effective Date: May 6, 2026</p>

<p className="mb-6">These Terms of Service ("Terms") govern your access to and use of TraffikFuel, Inc. ("TraffikFuel," "we," "our," or "us") and our platform at traffikfuel.com. By creating an account or using our services, you agree to be bound by these Terms.</p>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
<p>By accessing or using TraffikFuel, you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be legally bound by them. If you are using TraffikFuel on behalf of a business, you represent that you have authority to bind that business to these Terms.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
<p className="mb-3">TraffikFuel is a marketing automation platform that enables businesses to publish content across social media platforms, search engines, and AI answer engines. Our services include:</p>
<p className="mb-2">• AI-powered content creation and publishing</p>
<p className="mb-2">• Multi-platform social media management</p>
<p className="mb-2">• Analytics and performance tracking</p>
<p className="mb-2">• Lead generation and affiliate marketing tools</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
<p className="mb-3">To use TraffikFuel, you must create an account. You agree to:</p>
<p className="mb-2">• Provide accurate and complete registration information</p>
<p className="mb-2">• Maintain the security of your password and account</p>
<p className="mb-2">• Notify us immediately of any unauthorized account access</p>
<p className="mb-2">• Accept responsibility for all activity that occurs under your account</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">4. TikTok Integration</h2>
<p className="mb-3">TraffikFuel integrates with TikTok's API to enable content publishing on your behalf. By connecting your TikTok account:</p>
<p className="mb-2">• You authorize TraffikFuel to publish content to TikTok on your behalf</p>
<p className="mb-2">• You confirm that all content you publish complies with TikTok's Community Guidelines and Terms of Service</p>
<p className="mb-2">• You may revoke this authorization at any time from your TraffikFuel account settings</p>
<p className="mb-2">• TraffikFuel is not responsible for content moderation decisions made by TikTok</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">5. Acceptable Use</h2>
<p className="mb-3">You agree not to use TraffikFuel to:</p>
<p className="mb-2">• Publish spam, misleading, or deceptive content</p>
<p className="mb-2">• Violate any applicable laws or third-party platform policies</p>
<p className="mb-2">• Infringe on intellectual property rights of others</p>
<p className="mb-2">• Attempt to gain unauthorized access to our systems</p>
<p className="mb-2">• Engage in any activity that disrupts or damages the platform</p>
<p className="mb-2">• Collect or harvest user data without authorization</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">6. Subscription and Billing</h2>
<p className="mb-3">TraffikFuel offers subscription-based access to our platform:</p>
<p className="mb-2">• Subscriptions are billed monthly or annually in advance</p>
<p className="mb-2">• A free trial period may be offered at our discretion</p>
<p className="mb-2">• You may cancel your subscription at any time from your billing settings</p>
<p className="mb-2">• Cancellations take effect at the end of the current billing period</p>
<p className="mb-2">• We reserve the right to modify pricing with 30 days notice</p>
<p className="mb-2">• Refunds are handled on a case-by-case basis at our discretion</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
<p className="mb-3">All content, features, and functionality of TraffikFuel — including but not limited to software, text, graphics, logos, and icons — are owned by TraffikFuel, Inc. and protected by intellectual property laws. You retain ownership of all content you create and publish through our platform.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">8. Disclaimers</h2>
<p>TraffikFuel is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the platform will be uninterrupted, error-free, or that results from using the platform will meet your expectations. Social media platforms may change their APIs or policies at any time, which may affect platform functionality.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
<p>To the maximum extent permitted by law, TraffikFuel, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability shall not exceed the amount you paid to us in the three months preceding the claim.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">10. Termination</h2>
<p>We reserve the right to suspend or terminate your account at any time for violation of these Terms, abusive behavior, or fraudulent activity. You may terminate your account at any time by contacting support@traffikfuel.com. Upon termination, your right to access the platform ceases immediately.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
<p>These Terms are governed by the laws of the State of Florida, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Florida.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">12. Changes to Terms</h2>
<p>We may update these Terms at any time. We will notify you of material changes via email or platform notification. Continued use of TraffikFuel after changes constitutes your acceptance of the updated Terms.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
<p className="mb-2">For questions about these Terms, please contact us:</p>
<p className="mb-1"><strong>TraffikFuel, Inc.</strong></p>
<p className="mb-1">Email: support@traffikfuel.com</p>
<p>Website: https://www.traffikfuel.com</p>
</section>
</div>
</main>
)
}

