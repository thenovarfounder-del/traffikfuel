import Image from 'next/image'

export default function TermsPage() {
return (
<main className="min-h-screen bg-white text-gray-800">
<div className="max-w-3xl mx-auto px-6 py-12">
<div className="flex items-center gap-4 mb-10">
<Image src="/icon.png" alt="TraffikFuel" width={60} height={60} />
<h1 className="text-3xl font-bold">TraffikFuel Terms of Service</h1>
</div>

<p className="mb-4 text-sm text-gray-500">Last updated: May 6, 2026</p>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
<p>By using TraffikFuel, you agree to these Terms of Service. If you do not agree, please do not use our platform.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
<p>You may use TraffikFuel for lawful business purposes only. You are responsible for all content published through our platform on your behalf.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">3. TikTok Integration</h2>
<p>By connecting your TikTok account, you authorize TraffikFuel to publish content on your behalf using TikTok's API. You may revoke this access at any time from your settings.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">4. Payments</h2>
<p>Subscriptions are billed monthly. You may cancel anytime. Refunds are handled on a case-by-case basis.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">5. Termination</h2>
<p>We reserve the right to terminate accounts that violate these terms or engage in abusive behavior on our platform.</p>
</section>

<section className="mb-8">
<h2 className="text-xl font-semibold mb-2">6. Contact</h2>
<p>Email us at support@traffikfuel.com with any questions about these terms.</p>
</section>
</div>
</main>
)
}
