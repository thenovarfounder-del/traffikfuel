'use client'

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ScrapePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [brain, setBrain] = useState<Record<string, unknown> | null>(null);
  const [businessId, setBusinessId] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from('business_profiles')
        .select('id, brain')
        .eq('user_id', user.id)
        .maybeSingle();
      if (data) {
        setBusinessId(data.id);
        if (data.brain) setBrain(data.brain);
      }
    };
    load();
  }, []);

  const handleScrape = async () => {
    if (!url || !businessId) return;
    setLoading(true);
    setBrain(null);

    const cleanBusinessId = businessId.replace(/[^\x20-\x7E]/g, '').trim();
    const cleanUrl = url.replace(/[^\x20-\x7E]/g, '').trim();

    console.log('businessId chars:', [...cleanBusinessId].map(c => c.charCodeAt(0)));
    console.log('url chars:', [...cleanUrl].map(c => c.charCodeAt(0)));

    try {
      setStatus('Analyzing with AI...');
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId: cleanBusinessId,
          url: cleanUrl,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setBrain(data.brain);
      setStatus('Done! Business brain saved. 🧠');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setStatus(`Error: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">Business Brain</h1>
      <p className="text-gray-400 mb-6">Enter your website URL and we'll build your AI marketing brain.</p>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="https://yourbusiness.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
        />
        <button
          onClick={handleScrape}
          disabled={loading || !url || !businessId}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          {loading ? 'Analyzing...' : 'Build Brain'}
        </button>
      </div>

      {status && <p className="text-sm text-gray-400 mb-6">{status}</p>}

      {!businessId && (
        <p className="text-yellow-400 text-sm">⚠️ No business profile found. Please create one first.</p>
      )}

      {brain && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-lg font-semibold text-white mb-4">Your Business Brain</h2>
          <div className="space-y-3">
            {Object.entries(brain).map(([key, value]) => (
              <div key={key}>
                <span className="text-orange-400 text-sm font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                <p className="text-gray-300 text-sm mt-1">
                  {Array.isArray(value) ? value.join(', ') : String(value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}