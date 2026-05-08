'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const tiers = [
{ name: 'Starter', price: 97, priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID, description: 'Get your business publishing everywhere.', features: ['1 business profile', 'All 8 AI content engines', 'Publish to 3 social platforms', 'Content calendar', 'Basic analytics', '7-day free trial'], highlight: false },
{ name: 'Pro', price: 197, priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID, description: 'The full TraffikFuel experience.', features: ['3 business profiles', 'All 8 AI engines', 'Publish to all 8 platforms', 'Cruise Control', 'Full analytics', 'Rankings tracker', 'Backlink monitor', '7-day free trial'], highlight: true },
{ name: 'Agency', price: 797, priceId: process.env.NEXT_PUBLIC_STRIPE_AGENCY_PRICE_ID, description: 'Built for agencies.', features: ['10 business profiles', 'Everything in Pro', 'White-label dashboard', 'Team seats', 'Priority support', '7-day free trial'], highlight: false },
{ name: 'Enterprise', price: 1497, priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID, description: 'Unlimited scale.', features: ['Unlimited profiles', 'Everything in Agency', 'Custom integrations', 'Dedicated manager', 'SLA guarantee', '7-day free trial'], highlight: false },
];

export default function PricingPage() {
const router = useRouter();
const [loadingTier, setLoadingTier] = useState<string | null>(null);
const [error, setError] = useState<string | null>(null);

async function handleStartTrial(tierName: string, priceId: string | undefined) {
if (!priceId) { setError('Price configuration error.'); return; }
setLoadingTier(tierName);
setError(null);
try {
const { data: { user } } = await supabase.auth.getUser();
if (!user) { router.push('/login?redirect=/pricing'); return; }
const res = await fetch('/api/stripe/create-checkout', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ priceId, tierName }),
});
const data = await res.json();
if (!res.ok) throw new Error(data.error || 'Failed');
window.location.href = data.url;
} catch (err: unknown) {
setError(err instanceof Error ? err.message : 'Something went wrong.');
setLoadingTier(null);
}
}

return (
<div className="min-h-screen bg-gray-950 text-white py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
<p className="text-gray-400 text-lg">Start free for 7 days. Cancel anytime.</p>
</div>
{error && <div className="max-w-md mx-auto mb-8 bg-red-900/30 border border-red-500 text-red-300 rounded-lg p-4 text-center">{error}</div>}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
{tiers.map((tier) => (
<div key={tier.name} className={tier.highlight ? 'relative rounded-2xl p-6 flex flex-col bg-orange-500/10 border-2 border-orange-500' : 'relative rounded-2xl p-6 flex flex-col bg-gray-900 border border-gray-700'}>
{tier.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span></div>}
<h2 className="text-xl font-bold mb-1">{tier.name}</h2>
<p className="text-gray-400 text-sm mb-2">{tier.description}</p>
<div className="flex items-end gap-1 mb-1">
<span className="text-4xl font-bold">${tier.price}</span>
<span className="text-gray-400 mb-1">/mo</span>
</div>
<p className="text-orange-400 text-sm mb-4">7-day free trial</p>
<ul className="space-y-2 mb-6 flex-1">
{tier.features.map((f) => (
<li key={f} className="flex gap-2 text-sm">
<span className="text-orange-400">✓</span>
<span className="text-gray-300">{f}</span>
</li>
))}
</ul>
<button onClick={() => handleStartTrial(tier.name, tier.priceId)} disabled={loadingTier !== null} className={tier.highlight ? 'w-full py-3 rounded-xl font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50' : 'w-full py-3 rounded-xl font-semibold text-sm bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 disabled:opacity-50'}>
{loadingTier === tier.name ? 'Loading...' : 'Start Free Trial'}
</button>
</div>
))}
</div>
</div>
</div>
);
}