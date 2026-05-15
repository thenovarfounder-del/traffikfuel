
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const PLATFORMS = ['Facebook','Instagram','Google Search','LinkedIn','TikTok','YouTube'];
const AD_TYPES = ['Awareness','Traffic','Lead Generation','Conversion','Retargeting','Product Launch'];

export default function AdCopyGeneratorPage() {
  const [adPlatform, setAdPlatform] = useState('Facebook');
  const [adType, setAdType] = useState('Conversion');
  const [topic, setTopic] = useState('');
  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');
  const [cta, setCta] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userId, setUserId] = useState('');
  const [businessId, setBusinessId] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        const { data: profile } = await supabase.from('business_profiles').select('id').eq('user_id', user.id).single();
        if (profile) setBusinessId(profile.id);
      }
    };
    getUser();
  }, []);

  const handleGenerate = async () => {
    if (!topic.trim()) { setError('Please enter a topic.'); return; }
    setLoading(true); setError(''); setSaved(false); setCopied(false); setHeadline(''); setBody(''); setCta('');
    try {
      const res = await fetch('/api/content/ads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ adPlatform, adType, topic, userId, businessId }) });
      const data = await res.json();
      if (data.error) { setError(data.error); } else { setHeadline(data.headline); setBody(data.body); setCta(data.cta); setSaved(true); }
    } catch { setError('Something went wrong.'); } finally { setLoading(false); }
  };

  const handleCopy = async () => {
    const text = 'Headline: ' + headline + '\n\nBody: ' + body + '\n\nCTA: ' + cta;
    try { await navigator.clipboard.writeText(text); } catch { const el = document.createElement('textarea'); el.value = text; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-1">Ad Copy Generator</h1>
      <p className="text-gray-400 mb-6">Generate high-converting ad copy for any platform.</p>
      <div className="bg-gray-900 rounded-xl p-6 mb-6 space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Platform</label><select value={adPlatform} onChange={e => setAdPlatform(e.target.value)} className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700">{PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}</select></div>
        <div><label className="block text-sm text-gray-400 mb-1">Ad Type</label><select value={adType} onChange={e => setAdType(e.target.value)} className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700">{AD_TYPES.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
        <div><label className="block text-sm text-gray-400 mb-1">Topic / Goal</label><input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Get leads for second passport consultation" className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700" /></div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button onClick={handleGenerate} disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition">{loading ? 'Generating...' : 'Generate Ad Copy'}</button>
      </div>
      {headline && (
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {saved && <p className="text-green-400 text-sm">Saved to your content queue</p>}
          <div><label className="block text-sm text-gray-400 mb-1">Headline</label><div className="bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 font-medium">{headline}</div></div>
          <div><label className="block text-sm text-gray-400 mb-1">Ad Body</label><textarea value={body} onChange={e => setBody(e.target.value)} rows={6} className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 resize-none text-sm" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Call to Action</label><div className="bg-gray-800 text-orange-400 rounded-lg px-4 py-3 border border-gray-700 font-medium">{cta}</div></div>
          <button onClick={handleCopy} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition">{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
        </div>
      )}
    </div>
  );
}