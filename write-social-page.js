const fs = require('fs');
const path = require('path');

// Make sure the directory exists
const dir = 'src/app/dashboard/content/social';
fs.mkdirSync(dir, { recursive: true });

const content = `'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface GeneratedPost {
post: string;
cta: string;
hashtags: string;
}

interface Business {
id: string;
name: string;
brain?: Record<string, unknown>;
}

type Platform = 'instagram' | 'facebook' | 'linkedin';

const PLATFORMS: Platform[] = ['instagram', 'facebook', 'linkedin'];

const PLATFORM_CONFIG = {
instagram: { label: 'Instagram', emoji: '📸', gradient: 'from-purple-600 to-pink-500' },
facebook: { label: 'Facebook', emoji: '👥', gradient: 'from-blue-700 to-blue-500' },
linkedin: { label: 'LinkedIn', emoji: '💼', gradient: 'from-sky-700 to-cyan-500' },
};

export default function SocialMediaPage() {
const [isAuto, setIsAuto] = useState(true);
const [topic, setTopic] = useState('');
const [loading, setLoading] = useState(false);
const [loadingStep, setLoadingStep] = useState('');
const [business, setBusiness] = useState<Business | null>(null);
const [bizLoading, setBizLoading] = useState(true);
const [error, setError] = useState('');
const [posts, setPosts] = useState<Record<Platform, GeneratedPost | null>>({
instagram: null, facebook: null, linkedin: null,
});
const [approved, setApproved] = useState<Record<Platform, boolean>>({
instagram: false, facebook: false, linkedin: false,
});
const [copied, setCopied] = useState<Record<Platform, boolean>>({
instagram: false, facebook: false, linkedin: false,
});
const [images, setImages] = useState<Record<Platform, string | null>>({
instagram: null, facebook: null, linkedin: null,
});

useEffect(() => { loadBusiness(); }, []);

async function loadBusiness() {
setBizLoading(true);
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
console.error('Failed to load business', e);
} finally {
setBizLoading(false);
}
}

async function generateAll() {
// Guard checks
if (!business?.id) {
setError('No business profile found. Please set up your Business Brain first.');
return;
}
if (!isAuto && !topic.trim()) {
setError('Please enter a topic or promotion for Manual mode.');
return;
}

// Reset everything
setError('');
setLoading(true);
setLoadingStep('Analyzing your Business Brain...');
setPosts({ instagram: null, facebook: null, linkedin: null });
setApproved({ instagram: false, facebook: false, linkedin: false });

try {
setLoadingStep(isAuto
? 'AI is choosing the best content angle and keywords...'
: 'AI is building your posts from your topic...'
);

// Fire all 3 platforms in parallel
const requests = PLATFORMS.map(platform =>
fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
businessId: business.id,
platform,
mode: isAuto ? 'auto' : 'manual',
// AUTO: no customPrompt — AI decides everything from the brain
// MANUAL: user topic passed as direction
...((!isAuto && topic.trim()) ? { customPrompt: topic.trim() } : {}),
}),
}).then(r => r.json()).then(data => ({ platform, data }))
);

setLoadingStep('Writing Instagram, Facebook, and LinkedIn posts...');
const results = await Promise.all(requests);

const newPosts = { instagram: null, facebook: null, linkedin: null } as Record<Platform, GeneratedPost | null>;
let hasError = false;

for (const { platform, data } of results) {
if (data?.error) {
setError('Error on ' + platform + ': ' + data.error);
hasError = true;
} else if (data?.post) {
newPosts[platform as Platform] = {
post: data.post || '',
cta: data.cta || '',
hashtags: data.hashtags || '',
};
}
}

if (!hasError) setPosts(newPosts);
setLoadingStep('');

} catch (err) {
console.error('Generate error:', err);
setError('Something went wrong. Check your connection and try again.');
setLoadingStep('');
} finally {
setLoading(false);
}
}

function copyText(platform: Platform) {
const p = posts[platform];
if (!p) return;
const full = [p.post, p.cta, p.hashtags].filter(Boolean).join('\\n\\n');
try { navigator.clipboard.writeText(full); } catch {
const ta = document.createElement('textarea');
ta.value = full;
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
document.body.removeChild(ta);
}
setCopied(prev => ({ ...prev, [platform]: true }));
setTimeout(() => setCopied(prev => ({ ...prev, [platform]: false })), 2000);
}

function handleImage(platform: Platform, file: File) {
setImages(prev => ({ ...prev, [platform]: URL.createObjectURL(file) }));
}

function switchMode(auto: boolean) {
setIsAuto(auto);
setTopic('');
setError('');
setPosts({ instagram: null, facebook: null, linkedin: null });
}

const hasBrain = !!(business?.brain && Object.keys(business.brain).length > 0);
const canGenerate = hasBrain && !loading;

return (
<div className="max-w-4xl mx-auto px-4 py-8">

{/* Header */}
<div className="mb-8">
<h1 className="text-3xl font-bold text-white mb-1">Social Media Generator</h1>
<p className="text-gray-400 text-sm">Generates optimized posts for Instagram, Facebook, and LinkedIn simultaneously</p>
</div>

{/* Control Card */}
<div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8 space-y-5">

{/* Brain Status */}
<div className="flex items-center gap-2">
<div className={\`w-2.5 h-2.5 rounded-full \${hasBrain ? 'bg-green-400' : 'bg-red-400'}\`} />
<span className="text-sm text-gray-400">
{bizLoading ? 'Loading...' :
hasBrain ? <><span className="text-white font-semibold">{business!.name}</span> — Brain ready</> :
business ? <span className="text-yellow-400">Brain not loaded — <a href="/dashboard/scrape" className="underline">run Business Brain first</a></span> :
<span className="text-red-400">No business found — <a href="/dashboard/business" className="underline text-orange-400">create one</a></span>
}
</span>
</div>

{/* Mode Toggle */}
<div className="flex items-center justify-between gap-4 p-4 bg-gray-800 rounded-xl">
<div>
<p className="text-white font-bold text-sm mb-0.5">
{isAuto ? '⚡ Auto Mode — AI handles everything' : '✏️ Manual Mode — you set the direction'}
</p>
<p className="text-gray-500 text-xs">
{isAuto
? 'No​​​​​​​​​​​​​​​​
