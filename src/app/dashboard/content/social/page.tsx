'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Platform = 'instagram' | 'facebook' | 'linkedin';
interface Post { post: string; cta: string; hashtags: string; }
interface Business { id: string; name: string; brain?: Record<string, unknown>; }

const PLATFORMS: Platform[] = ['instagram', 'facebook', 'linkedin'];
const CFG = {
instagram: { label: 'Instagram', emoji: '📸', gradient: 'from-purple-600 to-pink-500' },
facebook: { label: 'Facebook', emoji: '👥', gradient: 'from-blue-700 to-blue-500' },
linkedin: { label: 'LinkedIn', emoji: '💼', gradient: 'from-sky-700 to-cyan-500' },
};

export default function SocialMediaPage() {
const [isAuto, setIsAuto] = useState(true);
const [topic, setTopic] = useState('');
const [loading, setLoading] = useState(false);
const [step, setStep] = useState('');
const [error, setError] = useState('');
const [business, setBusiness] = useState<Business | null>(null);
const [bizReady, setBizReady] = useState(false);
const [posts, setPosts] = useState<Record<Platform, Post | null>>({ instagram: null, facebook: null, linkedin: null });
const [approved, setApproved] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
const [copied, setCopied] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
const [images, setImages] = useState<Record<Platform, string | null>>({ instagram: null, facebook: null, linkedin: null });

useEffect(() => { loadBusiness(); }, []);

async function loadBusiness() {
try {
const { data: { user } } = await supabase.auth.getUser();
if (!user) return;
const { data } = await supabase
.from('business_profiles')
.select('id, name, brain')
.eq('user_id', user.id)
.single();
if (data) setBusiness(data);
} catch (e) {
console.error(e);
} finally {
setBizReady(true);
}
}

const hasBrain = !!(business?.brain && Object.keys(business.brain).length > 0);

async function generate() {
if (!business?.id) { setError('No business profile found.'); return; }
if (!isAuto && !topic.trim()) { setError('Please enter a topic for Manual mode.'); return; }
setError('');
setLoading(true);
setPosts({ instagram: null, facebook: null, linkedin: null });
setApproved({ instagram: false, facebook: false, linkedin: false });
try {
setStep('Analyzing your Business Brain...');
await new Promise(r => setTimeout(r, 400));
setStep('Choosing content angles and keywords...');
const results = await Promise.all(
PLATFORMS.map(platform =>
fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
businessId: business.id,
platform,
mode: isAuto ? 'auto' : 'manual',
...(isAuto ? {} : { customPrompt: topic.trim() }),
}),
})
.then(r => r.json())
.then(data => ({ platform, data }))
.catch(err => ({ platform, data: { error: err.message } }))
)
);
setStep('Finalizing your posts...');
const newPosts = { instagram: null, facebook: null, linkedin: null } as Record<Platform, Post | null>;
for (const { platform, data } of results) {
if (data?.error) { setError('Error: ' + data.error); }
else { newPosts[platform as Platform] = { post: data.post || '', cta: data.cta || '', hashtags: data.hashtags || '' }; }
}
setPosts(newPosts);
} catch (e) {
console.error(e);
setError('Something went wrong. Please try again.');
} finally {
setLoading(false);
setStep('');
}
}

function copyText(platform: Platform) {
const p = posts[platform];
if (!p) return;
const text = [p.post, p.cta, p.hashtags].filter(Boolean).join('\n\n');
try { navigator.clipboard.writeText(text); } catch {
const ta = document.createElement('textarea');
ta.value = text;
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
document.body.removeChild(ta);
}
setCopied(prev => ({ ...prev, [platform]: true }));
setTimeout(() => setCopied(prev => ({ ...prev, [platform]: false })), 2000);
}

return (
<div className="max-w-4xl mx-auto px-4 py-8">
<div className="mb-8">
<h1 className="text-3xl font-bold text-white mb-1">Social Media Generator</h1>
<p className="text-gray-400 text-sm">Generates optimized posts for Instagram, Facebook, and LinkedIn simultaneously</p>
</div>

<div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8 space-y-5">

<div className="flex items-center gap-2">
<div className={`w-2.5 h-2.5 rounded-full ${hasBrain ? 'bg-green-400' : 'bg-red-400'}`} />
<span className="text-sm text-gray-400">
{!bizReady ? 'Loading...' : hasBrain
? <><span className="text-white font-semibold">{business!.name}</span> — Brain loaded</>
: <span className="text-yellow-400">Brain not loaded — <a href="/dashboard/scr​​​​​​​​​​​​​​​​

