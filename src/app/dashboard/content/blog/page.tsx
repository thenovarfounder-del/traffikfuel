'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: string;
  topic: string;
  title: string;
  content: string;
  word_count: number;
  status: string;
  created_at: string;
}

interface BusinessProfile {
  id: string;
  business_name: string;
}

export default function BlogGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [userId, setUserId] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [businesses, setBusinesses] = useState<BusinessProfile[]>([]);

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        const { data: profiles } = await supabase
          .from('business_profiles')
          .select('id, business_name')
          .eq('user_id', user.id);
        if (profiles && profiles.length > 0) {
          setBusinesses(profiles);
          setBusinessId(profiles[0].id);
        }
      }
    }
    loadUser();
  }, []);

  async function generateArticle() {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setLoading(true);
    setError('');
    setArticle(null);
    try {
      const res = await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim(), businessId, userId }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || 'Something went wrong.');
        return;
      }
      setArticle(data.article);
    } catch {
      setError('Failed to generate article. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function copyArticle() {
    if (!article) return;
    navigator.clipboard.writeText('# ' + article.title + '\n\n' + article.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function renderContent(content: string) {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-2">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-2xl font-bold text-white mt-6 mb-2">{line.replace('# ', '')}</h1>;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      return <p key={i} className="text-gray-300 leading-relaxed mb-2">{line}</p>;
    });
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Blog / Article Generator</h1>
          <p className="text-gray-400">Generate a full 800-1200 word SEO-optimized article using your Business Brain.</p>
        </div>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 mb-6">
          {businesses.length > 1 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-1">Business Profile</label>
              <select
                value={businessId}
                onChange={(e) => setBusinessId(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
              >
                {businesses.map((b) => (
                  <option key={b.id} value={b.id}>{b.business_name}</option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">Article Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !loading) { generateArticle(); } }}
              placeholder="e.g. How to get a second passport in 2025"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-base"
            />
          </div>
          {error && (
            <div className="mb-4 bg-red-900/30 border border-red-700 rounded-lg px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}
          <button
            onClick={generateArticle}
            disabled={loading || !topic.trim()}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {loading ? 'Generating article...' : 'Generate Article'}
          </button>
        </div>
        {article && (
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs text-orange-400 font-medium uppercase tracking-wide">Generated Article</span>
                <h2 className="text-2xl font-bold text-white mt-1">{article.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{article.word_count} words - Saved to queue as draft</p>
              </div>
              <button
                onClick={copyArticle}
                className="shrink-0 ml-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="border-t border-gray-800 pt-6">
              {renderContent(article.content)}
            </div>
            <div className="border-t border-gray-800 pt-4 mt-6 flex gap-3">
              <button
                onClick={() => { setArticle(null); setTopic(''); }}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg tex