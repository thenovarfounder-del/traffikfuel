'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface BusinessProfile {
id: string;
name: string;
brain: string | null;
}

interface GeneratedPost {
platform: string;
post: string;
cta: string;
hashtags: string[];
strategy: string;
}

export default function SocialMediaPage() {
const [business, setBusiness] = useState<BusinessProfile | null>(null);
const [loading, setLoading] = useState(true);
const [generating, setGenerating] = useState(false);
const [topic, setTopic] = useState('');
const [mode, setMode] = useState<'auto' | 'manual'>('auto');
const [platforms, setPlatforms] = useState<string[]>(['instagram', 'facebook', 'linkedin']);
const [results, setResults] = useState<GeneratedPost[]>([]);
const [error, setError] = useState('');
const [copied, setCopied] = useState<string | null>(null);

useEffect(() => {
loadBusiness();
}, []);

async function loadBusiness() {
setLoading(true);
try {
const { data: sessionData } = await supabase.auth.getSession();
const session = sessionData?.session;

if (!session?.user?.id) {
setLoading(false);
return;
}

const { data, error: dbError } = await supabase
.from('business_profiles')
.select('id, name, brain')
.eq('user_id', session.user.id)
.order('created_at', { ascending: true })
.limit(1);

if (dbError) {
console.error('DB error:', dbError);
} else if (data && data.length > 0) {
setBusiness(data[0]);
}
} catch (err) {
console.error('Load error:', err);
} finally {
setLoading(false);
}
}

function togglePlatform(p: string) {
setPlatforms(prev =>
prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
);
}

async function generate() {
if (!business) return;
setGenerating(true);
setError('');
setResults([]);

try {
const res = await fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
businessId: business.id,
brain: business.brain || '',
platforms,
mode,
topic: mode === 'manual' ? topic : undefined,
}),
});

const json = await res.json();
if (!res.ok) throw new Error(json.error || 'Generation failed');
setResults(json.posts || []);
} catch (err: unknown) {
setError(err instanceof Error ? err.message : 'Something went wrong');
} finally {
setGenerating(false);
}
}

async function copyPost(text: string, id: string) {
await navigator.clipboard.writeText(text);
setCopied(id);
setTimeout(() => setCopied(null), 2000);
}

const platformLabels: Record<string, string> = {
instagram: '📸 Instagram',
facebook: '👥 Facebook',
linkedin: '💼 LinkedIn',
tiktok: '🎵 TikTok',
twitter: '🐦 Twitter/X',
};

if (loading) {
return (
<div className="flex items-center justify-center min-h-96">
<div className="text-gray-400 text-lg">Loading your business profile...</div>
</div>
);
}

if (!business) {
return (
<div className="flex items-center justify-center min-h-96">
<div className="text-center">
<p className="text-gray-400 text-lg mb-4">No business profile found.</p>
<a href="/dashboard/business" className="text-orange-500 underline">
Create your business profile first →
</a>
</div>
</div>
);
}

return (
<div className="max-w-4xl mx-auto p-6 space-y-8">
<div>
<h1 className="text-3xl font-bold text-white">Social Media Generator</h1>
<p className="text-gray-400 mt-1">
AI-powered posts for <span className="text-orange-500 font-semibold">{business.name}</span>
</p>
</div>

{!business.brain && (
<div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 text-yellow-400">
Your Business Brain is empty.{' '}
<a href="/dashboard/scrape" className="underline font-semibold">
Set it up here
</a>{' '}
for best results. You can still generate posts below.
</div>
)}

<div className="flex gap-3">
<button
onClick={() => setMode('auto')}
className={`px-5 py-2 rounded-lg font-medium transition-all ${
mode === 'auto' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
}`}
>
Auto Mode
</button>
<button
onClick={() => setMode('manual')}
className={`px-5 py-2 rounded-lg font-medium transition-all ${
mode === 'manual' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
}`}
>
Manual Mode
</button>
</div>

{mode === 'manual' && (
<div>
<label className="block text-gray-300 text-sm font-medium mb-2">
What do you want to post about?
</label>
<input
type="text"
value={topic}
onChange={e => setTopic(e.target.value)}
placeholder="e.g. second citizenship benefits..."
className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
/>
</div>
)}

<div>
<label className="block text-gray-300 text-sm font-medium mb-3">Select Platforms</label>
<div className="flex flex-wrap gap-3">
{Object.entries(platformLabels).map(([key, label]) => (
<button
key={key}
onClick={() => togglePlatform(key)}
className={`px-4 py-2 rounded-lg font-medium transition-all ${
platforms.includes(key) ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
}`}
>
{label}
</button>
))}
</div>
</div>

<button
onClick={generate}
disabled={generating || platforms.length === 0}
className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
generating || platforms.length === 0
? 'bg-gray-700 text-gray-500 cursor-not-allowed'
: 'bg-orange-500 hover:bg-orange-600 text-white'
}`}
>
{generating ? 'Generating...' : 'Generate Posts'}
</button>

{error && (
<div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-400">{error}</div>
)}

{results.length > 0 && (
<div className="space-y-6">
<h2 className="text-xl font-bold text-white">Generated Posts</h2>
{results.map((post, i) => (
<div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
<div className="flex items-center justify-between">
<span className="text-orange-500 font-semibold text-lg">
{platformLabels[post.platform] || post.platform}
</span>
<span className="text-gray-500 text-sm italic">{post.strategy}</span>
</div>
<p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{post.post}</p>
{post.cta && <p className="text-orange-400 font-medium">{post.cta}</p>}
{post.hashtags?.length > 0 && (
<div className="flex flex-wrap gap-2">
{post.hashtags.map((tag, j) => (
<span key={j} className="text-blue-400 text-sm">#{tag.replace(/^#/, '')}</span>
))}
</div>
)}
<button
onClick={() => copyPost(`${post.post}\n\n${post.cta}\n\n${post.hashtags.map(t => '#' + t.replace(/^#/, '')).join(' ')}`, `${i}`)}
className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm"
>
{copied === `${i}` ? 'Copied!' :
