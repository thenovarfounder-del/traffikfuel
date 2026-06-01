// @ts-nocheck
'use client'
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function WordPressConnect() {
  const [siteUrl, setSiteUrl] = useState('');
  const [username, setUsername] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [lastPublished, setLastPublished] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [testResult, setTestResult] = useState(null);

  useEffect(() => { checkConnection(); }, []);

  async function checkConnection() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const res = await fetch('/api/wordpress?user_id=' + user.id);
    const data = await res.json();
    if (data.connected) {
      setConnected(true);
      setSiteName(data.site_name);
      setSiteUrl(data.site_url);
    }
    const { data: lastPost } = await supabase
      .from('content_calendar')
      .select('published_at, title')
      .eq('user_id', user.id)
      .eq('content_type', 'blog')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(1)
      .single();
    if (lastPost) setLastPublished(lastPost);
  }

  async function handleConnect() {
    setLoading(true);
    setError('');
    setSuccess('');
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError('Not logged in'); setLoading(false); return; }
    const res = await fetch('/api/wordpress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site_url: siteUrl, username, app_password: appPassword, user_id: user.id }),
    });
    const data = await res.json();
    if (data.success) {
      setConnected(true);
      setSiteName(data.site_name);
      setSuccess('WordPress connected successfully!');
    } else {
      setError(data.error || 'Connection failed');
    }
    setLoading(false);
  }

  async function handleTest() {
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch('/api/wordpress?user_id=' + (await supabase.auth.getUser()).data.user?.id);
      const data = await res.json();
      if (data.connected) {
        setTestResult({ success: true, message: 'Connection is working! WordPress site is reachable.' });
      } else {
        setTestResult({ success: false, message: 'Connection test failed. Please reconnect.' });
      }
    } catch(e) {
      setTestResult({ success: false, message: 'Connection test failed: ' + e.message });
    }
    setTesting(false);
  }

  async function handleDisconnect() {
    setDisconnecting(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setDisconnecting(false); return; }
    await supabase.from('wordpress_settings').delete().eq('user_id', user.id);
    setConnected(false);
    setSiteName('');
    setSiteUrl('');
    setUsername('');
    setAppPassword('');
    setSuccess('WordPress disconnected.');
    setDisconnecting(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '40px 24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '8px' }}>Connect WordPress</h1>
        <p style={{ color: '#666', marginBottom: '32px', fontSize: '15px' }}>Connect your WordPress site to publish blog posts directly from Traffikora.</p>

        {connected && (
          <div style={{ background: '#f0fff4', border: '1px solid #86efac', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>✅</span>
                <div>
                  <div style={{ fontWeight: '600', color: '#166534' }}>Connected to {siteName}</div>
                  <div style={{ fontSize: '13px', color: '#166534' }}>{siteUrl}</div>
                  {lastPublished && (
                    <div style={{ fontSize: '12px', color: '#166534', marginTop: '4px' }}>
                      Last published: {new Date(lastPublished.published_at).toLocaleDateString()} — {lastPublished.title}
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={handleTest} disabled={testing} style={{ padding: '8px 16px', background: '#fff', border: '1px solid #86efac', borderRadius: '8px', color: '#166534', fontWeight: '600', fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  {testing ? 'Testing...' : 'Test Connection'}
                </button>
                <button onClick={handleDisconnect} disabled={disconnecting} style={{ padding: '8px 16px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', color: '#dc2626', fontWeight: '600', fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  {disconnecting ? 'Disconnecting...' : 'Disconnect'}
                </button>
              </div>
            </div>
            {testResult && (
              <div style={{ marginTop: '12px', padding: '10px 14px', background: testResult.success ? '#dcfce7' : '#fef2f2', borderRadius: '8px', fontSize: '13px', color: testResult.success ? '#166534' : '#dc2626' }}>
                {testResult.message}
              </div>
            )}
          </div>
        )}

        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>WordPress Site URL</label>
            <input type="text" placeholder="https://yoursite.com" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>WordPress Username</label>
            <input type="text" placeholder="Your WordPress username" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Application Password</label>
            <input type="password" placeholder="xxxx xxxx xxxx xxxx xxxx xxxx" value={appPassword} onChange={e => setAppPassword(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
            <p style={{ fontSize: '12px', color: '#888', marginTop: '6px' }}>In WordPress: Users → Profile → Application Passwords → Add New</p>
          </div>

          {error && <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#dc2626', fontSize: '14px' }}>{error}</div>}
          {success && <div style={{ background: '#f0fff4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#166534', fontSize: '14px' }}>{success}</div>}

          <button onClick={handleConnect} disabled={loading || !siteUrl || !username || !appPassword} style={{ width: '100%', padding: '12px', background: loading ? '#ccc' : '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Connecting...' : connected ? 'Update Connection' : 'Connect WordPress'}
          </button>
        </div>

        <div style={{ marginTop: '24px', background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
          <h3 style={{ fontWeight: '700', marginBottom: '12px', fontSize: '15px' }}>How to get your Application Password</h3>
          <ol style={{ paddingLeft: '20px', color: '#555', fontSize: '14px', lineHeight: '1.8' }}>
            <li>Log into your WordPress admin</li>
            <li>Go to Users then Your Profile</li>
            <li>Scroll down to Application Passwords</li>
            <li>Type a name like Traffikora and click Add New</li>
            <li>Copy the generated password and paste it above</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
