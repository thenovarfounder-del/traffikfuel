'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
type Platform = 'instagram' | 'facebook' | 'linkedin';
interface Post { post: string; cta: string; hashtags: string; }
interface Business { id: string; name: string; brain?: Record<string, unknown>; }
const PLATFORMS: Platform[] = ['instagram', 'facebook', 'linkedin'];
const CFG = {
instagram: { label: 'Instagram', gradient: 'from-purple-600 to-pink-500' },
facebook: { label: 'Facebook', gradient: 'from-blue-700 to-blue-500' },
linkedin: { label: 'LinkedIn', gradient: 'from-sky-700 to-cyan-500' },
};
export default function SocialMediaPage() {
const [isAuto, setIsAuto] = useState(true);
const [topic, setTopic] = useState('');
const [loading, setLoading] = useState(false);
const [step, setStep] = useState('');
const [error, setError] = useState('');
const [business, setBusiness] = useState<Business | null>(null);
const [ready, setReady] = useState(false);
const [posts, setPosts] = useState<Record<Platform, Post | null>>({ instagram: null, facebook: null, linkedin: null });
const [approved, setApproved] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
const [copied, setCopied] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
useEffect(() => {
supabase.auth.getUser().then(({ data: { user } }) => {
if (!user) { setReady(true); return; }
supabase.from('business_profiles').select('id, name, brain').eq('user_id', user.id).single().then(({ data }) => {
if (data) setBusiness(data);
setReady(true);
});
});
}, []);
async function generate() {
if (!business) { setError('No business found.'); return; }
if (!isAuto && !topic.trim()) { setError('Enter a topic.'); return; }
setError(''); setLoading(true);
setPosts({ instagram: null, facebook: null, linkedin: null });
setStep('Analyzing Business Brain...');
try {
const results = await Promise.all(
PLATFORMS.map(p =>
fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ businessId: business.id, platform: p, mode: isAuto ? 'auto' : 'manual', ...(isAuto ? {} : { customPrompt: topic }) }),
}).then(r => r.json()).then(d => ({ p, d })).catch(e => ({ p, d: { error: e.message } }))
)
);
const np = { instagram: null, facebook: null, linkedin: null } as Record<Platform, Post | null>;
for (const { p, d } of results) {
if (d.error) setError(d.error);
else np[p] = { post: d.post || '', cta: d.cta || '', hashtags: d.hashtags || '' };
}
setPosts(np);
} catch (e) { setError('Something went wrong.'); console.error(e); }
finally { setLoading(false); setStep(''); }
}
function copy(platform: Platform) {
const p = posts[platform];
if (!p) return;
const t = [p.post, p.cta, p.hashtags].filter(Boolean).join('\n\n');
try { navigator.clipboard.writeText(t); } catch {
const ta = document.createElement('textarea');
ta.value = t; document.body.appendChild(ta); ta.select();
document.execCommand('copy'); document.body.removeChild(ta);
}
setCopied(prev => ({ ...prev, [platform]: true }));
setTimeout(() => setCopied(prev => ({ ...prev, [platform]: false })), 2000);
}
return (
<div className="max-w-4xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-white mb-2">Social Media Generator</h1>
<div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6 space-y-4">
<div className="flex items-center gap-2">
<div className={`w-2.5 h-2.5 rounded-full ${business ? 'bg-green-400' : ready ? 'bg-red-400' : 'bg-yellow-400'}`} />
<span className="text-sm text-gray-400">
{!ready ? 'Loading...' : business ? <><span className="text-white font-semibold">{business.name}</span> - Ready to generate</> : 'No business profile found'}
</span>
</div>
<div className="flex items-center justify-between bg-gray-800 rounded-xl p-4">
<div>
<p className="text-white font-bold text-sm">{isAuto ? 'Auto Mode - AI handles everything' : 'Manual Mode - you set the direction'}</p>
<p className="text-gray-500 text-xs">{isAuto ? 'No input needed. Just click Generate.' : 'Type your topic below.'}</p>
</div>
<div className="flex items-center gap-2">
<span className={`text-xs font-semibold ${!isAuto ? 'text-white' : 'text-gray-600'}`}>Manual</span>
<button onClick={() => { setIsAuto(!isAuto); setTopic(''); setError(''); }} className={`relative inline-flex h-7 w-14 rounded-full ${isAuto ? 'bg-orange-500' : 'bg-gray-600'}`}>
<span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${isAuto ? 'left-8' : 'left-1'}`} />
</button>
<span className={`text-xs font-semibold ${isAuto​​​​​​​​​​​​​​​​
