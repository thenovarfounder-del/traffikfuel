'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
type Platform = 'instagram' | 'facebook' | 'linkedin';
interface Post { post: string; cta: string; hashtags: string; }
interface Business { id: string; name: string; brain?: Record<string, unknown>; }
const PLATFORMS: Platform[] = ['instagram', 'facebook', 'linkedin'];
const CFG = {
instagram: { label: 'Instagram', gradient: 'from-purple-600 to-pink-500' },
facebook: { label: 'Facebook', gradient: 'from-blue-700 to-blue-500' },
linkedin: { label: 'LinkedIn', gradient: 'from-sky-700 to-cyan-500' },
};
export default function SocialMediaPage() {
const [isAuto, setIsAuto] = useState(true);
const [topic, setTopic] = useState('');
const [loading, setLoading] = useState(false);
const [step, setStep] = useState('');
const [error, setError] = useState('');
const [business, setBusiness] = useState<Business | null>(null);
const [bizReady, setBizReady] = useState(false);
const [posts, setPosts] = useState<Record<Platform, Post | null>>({ instagram: null, facebook: null, linkedin: null });
const [approved, setApproved] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
const [copied, setCopied] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false });
useEffect(() => { loadBusiness(); }, []);
async function loadBusiness() {
try {
const { data: { user } } = await supabase.auth.getUser();
if (!user) return;
const { data } = await supabase.from('business_profiles').select('id, name, brain').eq('user_id', user.id).single();
if (data) setBusiness(data);
} catch (e) { console.error(e); } finally { setBizReady(true); }
}
async function generate() {
if (!business?.id) { setError('No business profile found.'); return; }
if (!isAuto && !topic.trim()) { setError('Please enter a topic for Manual mode.'); return; }
setError(''); setLoading(true);
setPosts({ instagram: null, facebook: null, linkedin: null });
setApproved({ instagram: false, facebook: false, linkedin: false });
try {
setStep('Analyzing your Business Brain...');
await new Promise(r => setTimeout(r, 400));
setStep('Writing posts for all 3 platforms...');
const results = await Promise.all(
PLATFORMS.map(platform =>
fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
businessId: business.id,
platform,
mode: isAuto ? 'auto' : 'manual',
...(isAuto ? {} : { customPrompt: topic.trim() }),
}),
}).then(r => r.json()).then(data => ({ platform, data​​​​​​​​​​​​​​​​
