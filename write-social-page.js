const fs = require('fs');

const content = `'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface GeneratedPost {
  post: string;
  cta: string;
  hashtags: string;
}

interface AllPosts {
  instagram: GeneratedPost | null;
  facebook: GeneratedPost | null;
  linkedin: GeneratedPost | null;
}

interface Business {
  id: string;
  name: string;
  brain?: Record<string, unknown>;
}

export default function SocialMediaPage() {
  const [isAuto, setIsAuto] = useState(true);
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<AllPosts>({ instagram: null, facebook: null, linkedin: null });
  const [business, setBusiness] = useState<Business | null>(null);
  const [loadingBusiness, setLoadingBusiness] = useState(true);
  const [approved, setApproved] = useState({ instagram: false, facebook: false, linkedin: false });
  const [copied, setCopied] = useState({ instagram: false, facebook: false, linkedin: false });
  const [images, setImages] = useState<{ instagram: string | null; facebook: string | null; linkedin: string | null }>({
    instagram: null, facebook: null, linkedin: null,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    loadBusiness();
  }, []);

  async function loadBusiness() {
    setLoadingBusiness(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoadingBusiness(false); return; }
    const { data } = await supabase
      .from('business_profiles')
      .select('id, name, brain')
      .eq('user_id', user.id)
      .single();
    if (data) setBusiness(data);
    setLoadingBusiness(false);
  }

  // Called when user clicks Generate
  async function generateAll() {
    if (!business) {
      setError('No business profile found. Please complete your Business Brain first.');
      return;
    }

    // Manual mode requires a topic
    if (!isAuto && !topic.trim()) {
      setError('Manual mode requires a topic or promotion. Switch to Auto if you want AI to decide.');
      return;
    }

    setError('');
    setLoading(true);
    setPosts({ instagram: null, facebook: null, linkedin: null });
    setApproved({ instagram: false, facebook: false, linkedin: false });
    setCopied({ instagram: false, facebook: false, linkedin: false });

    const platforms: Array<'instagram' | 'facebook' | 'linkedin'> = ['instagram', 'facebook', 'linkedin'];

    try {
      const results = await Promise.all(
        platforms.map(async (platform) => {
          const body: Record<string, string> = {
            businessId: business.id,
            platform,
            mode: isAuto ? 'auto' : 'manual',
          };

          // AUTO MODE: no customPrompt sent at all — AI decides everything from brain
          // MANUAL MODE: user topic sent as the direction
          if (!isAuto && topic.trim()) {
            body.customPrompt = topic.trim();
          }

          const res = await fetch('/api/content/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });

          const data = await res.json();
          return { platform, data };
        })
      );

      const newPosts: AllPosts = { instagram: null, facebook: null, linkedin: null };
      for (const { platform, data } of results) {
        if (data.error) {
          setError('Error generating ' + platform + ': ' + data.error);
        } else {
          newPosts[platform] = { post: data.post, cta: data.cta, hashtags: data.hashtags };
        }
      }
      setPosts(newPosts);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function copyText(platform: 'instagram' | 'facebook' | 'linkedin') {
    const p = posts[platform];
    if (!p) return;
    const full = [p.post, p.cta ? '\\n' + p.cta : '', p.hashtags ? '\\n' + p.hashtags : ''].filter(Boolean).join('\\n');
    try {
      navigator.clipboard.writeText(full);
    } catch {
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

  function handleImage(platform: 'instagram' | 'facebook' | 'linkedin', file: File) {
    const url = URL.createObjectURL(file);
    setImages(prev => ({ ...prev, [platform]: url }));
  }

  const platformConfig = {
    instagram: { label: 'Instagram', emoji: '📸', gradient: 'from-purple-600 to-pink-500' },
    facebook: { label: 'Facebook', emoji: '👥', gradient: 'from-blue-700 to-blue-500' },
    linkedin: { label: 'LinkedIn', emoji: '💼', gradient: 'from-sky-700 to-cyan-500' },
  };

  const hasBrain = business && business.brain && Object.keys(business.brain).length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Social Media Generator</h1>
        <p className="text-gray-400 text-sm">Generates optimized Instagram, Facebook, and LinkedIn posts simultaneously</p>
      </div>

      {/* Main Control Card */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8 space-y-6">

        {/* Business Brain status */}
        <div className="flex items-center gap-3">
          <div className={\`w-2.5 h-2.5 rounded-full flex-shrink-0 \${hasBrain ? 'bg-green-400' : business ? 'bg-yellow-400' : 'bg-red-400'}\`} />
          <p className="text-sm text-gray-400">
            {loadingBusiness ? 'Loading business...' :
              hasBrain ? <><span className="text-white font-semibold">{business!.name}</span> — Brain loaded and ready</> :
              business ? <><span className="text-yellow-400 font-semibold">{business.name}</span> — Brain not loaded yet. <a href="/dashboard/scrape" className="text-orange-400 underline">Run Business Brain first</a></> :
              <span className="text-red-400">No business profile found. <a href="/dashboard/business" className="text-orange-400 underline">Create one here</a></span>
            }
          </p>
        </div>

        {/* Mode Toggle Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-white font-bold text-base mb-1">
              {isAuto ? '⚡ Auto Mode' : '✏️ Manual Mode'}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isAuto
                ? 'AI reads your Business Brain and handles everything — content angle, keywords, writing. Just click Generate.'
                : 'You set the direction. Type a topic or promotion and AI writes optimized posts around it.'}
            </p>
          </div>
          {/* Toggle switch */}
          <div className="flex items-center gap-3 flex-shrink-0 pt-1">
            <span className={\`text-sm font-medium \${!isAuto ? 'text-white' : 'text-gray-500'}\`}>Manual</span>
            <button
              onClick={() => { setIsAuto(!isAuto); setTopic(''); setError(''); setPosts({ instagram: null, facebook: null, linkedin: null }); }}
              className={\`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none \${isAuto ? 'bg-orange-500' : 'bg-gray-600'}\`}
              aria-label="Toggle auto/manual mode"
            >
              <span className={\`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 \${isAuto ? 'translate-x-8' : 'translate-x-1'}\`} />
            </button>
            <span className={\`text-sm font-medium \${isAuto ? 'text-orange-400' : 'text-gray-500'}\`}>Auto</span>
          </div>
        </div>

        {/* AUTO MODE — info banner, no input needed */}
        {isAuto && (
          <div className="bg-orange-500/10 border border-orange-500/25 rounded-xl px-4 py-4">
            <p className="text-orange-300 text-sm font-semibold mb-1">⚡ Auto mode is active — no input needed</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              The AI will analyze your Business Brain for <span className="text-white">{business?.name || 'your business'}</span>, 
              choose the highest-impact content angle for today, research the best keywords for each platform, 
              and write fully optimized posts for Instagram, Facebook, and LinkedIn — completely automatically.
            </p>
          </div>
        )}

        {/* MANUAL MODE — topic input */}
        {!isAuto && (
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Topic or Promotion <span className="text-orange-400">*</span>
            </label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && generateAll()}
              placeholder="e.g. Caribbean citizenship by investment, Turkish passport program, new office opening..."
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            />
            <p className="text-gray-600 text-xs mt-1.5">AI will use this direction plus keyword research to write optimized posts for all 3 platforms.</p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={generateAll}
          disabled={loading || !hasBrain}
          className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all text-sm tracking-wide shadow-lg"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              {isAuto
                ? 'AI is analyzing your business brain and writing all 3 posts...'
                : 'Writing your posts...'}
            </span>
          ) : (
            isAuto
              ? '⚡ Generate All 3 Posts Automatically'
              : '✏️ Generate All 3 Posts from Your Topic'
          )}
        </button>

        {!hasBrain && !loadingBusiness && (
          <p className="text-center text-yellow-400 text-xs">
            You need to run your <a href="/dashboard/scrape" className="underline">Business Brain</a> before generating posts.
          </p>
        )}
      </div>

      {/* Generated Posts */}
      {(posts.instagram || posts.facebook || posts.linkedin) && (
        <div className="space-y-5">
          <h2 className="text-white font-bold text-lg">
            {isAuto ? '⚡ Auto-Generated Posts' : '✏️ Your Posts'}
          </h2>
          {(['instagram', 'facebook', 'linkedin'] as const).map(platform => {
            const p = posts[platform];
            if (!p) return null;
            const cfg = platformConfig[platform];
            const isApproved = approved[platform];
            const isCopied = copied[platform];

            return (
              <div key={platform} className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
                {/* Platform Header */}
                <div className={\`bg-gradient-to-r \${cfg.gradient} px-5 py-3 flex items-center justify-between\`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{cfg.emoji}</span>
                    <span className="text-white font-bold text-sm tracking-wide">{cfg.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setApproved(prev => ({ ...prev, [platform]: !prev[platform] }))}
                      className={\`px-3 py-1.5 rounded-full text-xs font-bold transition-all \${isApproved ? 'bg-green-500 text-white shadow-md' : 'bg-white/20 text-white hover:bg-white/30'}\`}
                    >
                      {isApproved ? '✓ Approved' : 'Approve & Post'}
                    </button>
                    <button
                      onClick={() => copyText(platform)}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white hover:bg-white/30 transition"
                    >
                      {isCopied ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-5 space-y-4">

                  {/* Image Upload */}
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-xs text-gray-300 transition">
                      <span>📎</span> Attach Photo
                      <input type="file" accept="image/*" className="hidden"
                        onChange={e => e.target.files?.[0] && handleImage(platform, e.target.files[0])} />
                    </label>
                    {images[platform] && (
                      <img src={images[platform]!} alt="Attached" className="h-10 w-10 object-cover rounded-lg border border-gray-600" />
                    )}
                  </div>

                  {/* Post */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Post Content</p>
                    <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{p.post}</p>
                  </div>

                  {/* CTA */}
                  {p.cta && (
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Call to Action</p>
                      <p className="text-orange-400 text-sm font-semibold">{p.cta}</p>
                    </div>
                  )}

                  {/* Hashtags */}
                  {p.hashtags && (
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Hashtags</p>
                      <p className="text-blue-400 text-sm leading-relaxed">{p.hashtags}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync('src/app/dashboard/content/social/page.tsx', content);
console.log('Done!');