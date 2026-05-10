'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ScrapePage() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [brain, setBrain] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);
  const [businessId, setBusinessId] = useState('');

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      console.log('USER:', user?.id);
      if (!user) return;

      const { data, error } = await supabase
        .from('business_profiles')
        .select('id, website, brain')
        .eq('user_id', user.id)
        .single();

      console.log('PROFILE DATA:', JSON.stringify(data));
      console.log('PROFILE ERROR:', JSON.stringify(error));

      if (data) {
        setBusinessId(data.id);
        setUrl(data.website || '');
        if (data.brain) setBrain(data.brain as Record<string, unknown>);
      }
    };
    load();
  }, []);

  const handleBuild = async () => {
    console.log('businessId:', businessId);
    console.log('url:', url);

    if (!url || !businessId) {
      setStatus('Missing URL or business profile.');
      return;
    }
    setLoading(true);
    setStatus('Building your brain...');
    setBrain(null);

    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId, url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(`Error: ${data.error || 'Unknown error'}`);
      } else {
        setBrain(data.brain);
        setStatus('Brain built successfully!');
      }
    } catch {
      setStatus('Error: Network failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Business Brain</h1>
      <p className="text-gray-400 mb-6">Enter your website URL and we'll build your AI marketing brain.</p>
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://yourwebsite.com"
          className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white"
        />
        <button
          onClick={handleBuild}
          disabled={loading}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold disabled:opacity-50"
        >
          {loading ? 'Building...' : 'Build Brain'}
        </button>
      </div>
      {status && <p className="text-sm mb-4 text-gray-300">{status}</p>}
      {brain && (
        <div className="bg-gray-800 rounded-lg p-4 mt-4">
          <h2 className="text-lg font-bold mb-3 text-orange-400">Your Business Brain</h2>
          <pre className="text-sm text-gray-300 whitespace-pre-wrap">{JSON.stringify(brain, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}