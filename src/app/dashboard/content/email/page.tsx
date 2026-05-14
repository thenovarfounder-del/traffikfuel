'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const EMAIL_TYPES = ['Newsletter','Promotional','Welcome Email','Follow-Up','Re-engagement','Announcement','Educational','Cold Outreach'];

export default function EmailGeneratorPage() {
  const [emailType, setEmailType] = useState('Newsletter');
  const [topic, setTopic] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
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
    setCopied(false);
    setSubject('');
    setBody('');
    try {
      const res = await fetch('/api/content/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailType, topic, userId, businessId }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); } else {
        setSubject(data.subject);
        setBody(data.body);
        setSaved(true);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    const text = 'Subject: ' + subject + '\n\n' + body;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-1">Email Generator</h1>
      <p className="text-gray-400 mb-6">Generate professional marketing emails for your business.</p>
      <div className="bg-gray-900 rounded-xl p-6 mb-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email Type</label>
          <select value={emailType} onChange={e => setEmailType(e.target.value)} className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-orange-500">
            {EMAIL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Topic / Goal</label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Summer sale, new product launch, client check-in" className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-orange-500" />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button onClick={handleGenerate} disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition">
          {loading ? 'Generating...' : 'Generate Email'}
        </button>
      </div>
      {subject && (
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {saved && <p className="text-green-400 text-sm">Saved to your content queue</p>}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Subject Line</label>
            <div className="bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 font-medium">{subject}</div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email Body</label>
            <textarea value={body} onChange={e => setBody(e.target.value)} rows={16} className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:border-orange-500 resize-none text-sm" />
          </div>
          <button onClick={handleCopy} className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition">
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      )}
    </div>
  );
}
