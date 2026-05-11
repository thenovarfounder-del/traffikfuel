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
  const [approved, setApproved] = useState<{ instagram: boolean; facebook: boolean; linkedin: boolean }>({
    instagram: false, facebook: false, linkedin: false,
  });
  const [copied, setCopied] = useState<{ instagram: boolean; facebook: boolean; linkedin: boolean }>({
    instagram: false, facebook: false, linkedin: false,
  });
  const [images, setImages] = useState<{ instagram: string | null; facebook: string | null; linkedin: string | null }>({
    instagram: null, facebook: null, linkedin: null,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    loadBusiness();
  }, []);

  async function loadBusiness() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase
      .from('business_profiles')
      .select('id, name, brain')
      .eq('user_id', user.id)
      .single();
    if (data) setBusiness(data);
  }

  async function generateAll() {
    if (!business) { setError('No business profile found. Please set up your Business Brain first.'); return; }
    if (!isAuto && !topic.trim()) { setError('Please enter a topic or promotion for Manual mode.'); return; }
    
    setError('');
    setLoading(true);
    setPosts({ instagram: null, facebook: null, linkedin: null });
    setApproved({ instagram: false, facebook: false, linkedin: false });

    const platforms: Array<'instagram' | 'facebook' | 'linkedin'> = ['instagram', 'facebook', 'linkedin'];

    try {
      const results = await Promise.all(
        platforms.map(async (platform) => {
          const res = await fetch('/api/content/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              businessId: business.id,
              platform,
              // AUTO mode: no topic sent — Claude decides everything itself
              // MANUAL mode: user topic sent as the direction
              mode: isAuto ? 'auto' : 'manual',
              customPrompt: isAuto ? undefined : topic.trim(),
            }),
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
    const full = [p.post, p.cta, p.hashtags].filter(Boolean).join('\\n\\n');
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
    instagram: { label: 'Instagram', icon: '📸', color: 'from-purple-500 to-pink-500' },
    facebook: { label: 'Facebook', icon: '👥', color: 'from-blue-600 to-blue-400' },
    linkedin: { label: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-cyan-500' },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Social Media Generator</h1>
        <p className="text-gray-400 text-sm">One click — generates Instagram, Facebook, and LinkedIn posts simultaneously</p>
      </div>

      {/* Control Panel */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8">

        {/* Brain status */}
        <div className="flex items-center gap-2 mb-5">
          <div className={\`w-2 h-2 rounded-full \${business ? 'bg-green-400' : 'bg-red-400'}\`}></div>
          <span className="text-sm text-gray-400">
            {business ? (
              <><span className="text-white font-medium">{business.name}</span> — Brain loaded</>
            ) : 'No business profile found'}
          </span>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">
              {isAuto ? '⚡ Auto Mode — AI decides everything' : '✏️ Manual Mode — you set the direction'}
            </p>
            <p className="text-gray-500 text-xs">
              {isAuto
                ? 'Click Generate and the AI analyzes your business brain, picks the best angle, keywords, and writes all 3 posts automatically.'
                : 'Type a topic or promotion below. The AI uses your direction plus keyword research to write optimized posts.'}
            </p>
          </div>
          <button
            onClick={() => { setIsAuto(!isAuto); setTopic(''); setError(''); }}
            className={\`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none \${isAuto ? 'bg-orange-500' : 'bg-gray-600'}\`}
          >
            <span className={\`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform \${isAuto ? 'translate-x-8' : 'translate-x-1'}\`} />
          </button>
        </div>

        {/* Topic field — ONLY shown in Manual mode */}
        {!isAuto && (
          <div className="mb-5">
            <label className="block text-sm text-gray-300 font-medium mb-2">
              Topic or Promotion <span className="text-orange-400">*</span>
            </label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. Caribbean citizenship by investment, summer special offer, new service launch..."
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            />
          </div>
        )}

        {/* Auto mode info box */}
        {isAuto && (
          <div className="mb-5 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3">
            <p className="text-orange-300 text-xs leading-relaxed">
              <span className="font-semibold">Auto mode is active.</span> The AI will analyze your Business Brain, choose the highest-impact content angle, research the best keywords for each platform, and write fully optimized posts — with no input needed from you. Just click Generate.
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={generateAll}
          disabled={loading || !business}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-3.5 rounded-xl transition text-sm tracking-wide"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              {isAuto ? 'AI is analyzing your business and writing all 3 posts...' : 'Generating your posts...'}
            </span>
          ) : (
            isAuto ? '⚡ Generate All 3 Posts Automatically' : '✏️ Generate All 3 Posts'
          )}
        </button>
      </div>

      {/* Generated Posts */}
      {(posts.instagram || posts.facebook || posts.linkedin) && (
        <div className="space-y-6">
          {(['instagram', 'facebook', 'linkedin'] as const).map((platform) => {
            const p = posts[platform];
            if (!p) return null;
            const cfg = platformConfig[platform];
            const isApproved = approved[platform];
            const isCopied = copied[platform];

            return (
              <div key={platform} className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
                {/* Platform header */}
                <div className={\`bg-gradient-to-r \${cfg.color} px-6 py-3 flex items-center justify-between\`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{cfg.icon}</span>
                    <span className="text-white font-bold text-sm">{cfg.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Approve toggle */}
                    <button
                      onClick={() => setApproved(prev => ({ ...prev, [platform]: !prev[platform] }))}
                      className={\`px-3 py-1 rounded-full text-xs font-semibold transition \${isApproved ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}\`}
                    >
                      {isApproved ? '✓ Approved' : 'Approve'}
                    </button>
                    {/* Copy button */}
                    <button
                      onClick={() => copyText(platform)}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white hover:bg-white/30 transition"
                    >
                      {isCopied ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Image upload */}
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-xs text-gray-300 transition">
                      <span>📎</span> Add Image
                      <input type="file" accept="image/*" className="hidden"
                        onChange={e => e.target.files?.[0] && handleImage(platform, e.target.files[0])} />
                    </label>
                    {images[platform] && (
                      <img src={images[platform]!} alt="upload" className="h-10 w-10 object-cover rounded-lg border border-gray-600" />
                    )}
                  </div>

                  {/* Post body */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Post</p>
                    <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{p.post}</p>
                  </div>

                  {/* CTA */}
                  {p.cta && (
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Call to Action</p>
                      <p className="text-orange-400 text-sm font-medium">{p.cta}</p>
                    </div>
                  )}

                  {/* Hashtags */}
                  {p.hashtags && (
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Hashtags</p>
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