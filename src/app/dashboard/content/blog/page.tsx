'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const BLOG_TYPES = ['How-To Guide','Listicle','Opinion Piece','Case Study','Industry News','Product Review','Thought Leadership','SEO Article'];

export default function BlogGeneratorPage() {
  const [blogType, setBlogType] = useState('How-To Guide');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [userId, setUserId] = useState('');
  const [businessId, setBusinessId] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        const { data: profile } = await supabase
          .from('business_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single();
        if (profile) setBusinessId(profile.id);
      }
    };
    getUser();
  }, []);

  const handleGenerate = async () => {
    if (!topic.trim()) { setError('Please enter a topic.'); return; }
    setLoading(true);
    setError('');
    setSaved(false);
    setTitle('');
    setContent('');
    try {
      const res = await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogType, topic, userId, businessId }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); } else {
        setTitle(data.title);
        setContent(data.content);
        setSaved(true);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-1">Blog Generator</h1>
      <p className="text-gray-400 mb-6">Generate professional blog articles for your business.</p>
      <div className="bg-gray-900 rounded-xl p-6 mb-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Blog Type</label>
          <select value={blogType} onChange={e => setBlogType(e.target.value)} className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-orange-500">
            {BLOG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Topic / Goal</label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. How to get a second passport, top 5 tax havens" className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-orange-500" />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button onClick={handleGenerate} disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition">
          {loading ? 'Generating...' : 'Generate Article'}
        </button>
      </div>
      {title && (
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {saved && <p className="text-green-400 text-sm">Saved to your content queue</p>}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Title</label>
            <div className="bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 font-medium">{title}</div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Article</label>
            <textarea value={content} onChange={e => setContent(e.target.value)} rows={20} className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:border-orange-500 resize-none text-sm" />
          </div>
          <button onClick={() => navigator.clipboard.writeText(title + '\n\n' + content)} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition">
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}
