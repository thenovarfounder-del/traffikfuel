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
if (!user) return;
const { data } = await supabase
.from('business_profiles')
.select('id, website, brain')
.eq('user_id', user.id)
.single();
if (data) {
setBusinessId(data.id);
setUrl(data.website || '');
if (data.brain) setBrain(data.brain as Record<string, unknown>);
}
};
load();
}, []);

const handleBuild = async () => {
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
setStatus('Brain built successfully​​​​​​​​​​​​​​​​
