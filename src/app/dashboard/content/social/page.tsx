'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface BusinessProfile {
id: string;
name: string;
brain: string | null;
}

interface GeneratedPost {
platform: string;
post: string;
cta: string;
hashtags: string[];
strategy: string;
}

export default function SocialMediaPage() {
const [business, setBusiness] = useState<BusinessProfile | null>(null);
const [loading, setLoading] = useState(true);
const [generating, setGenerating] = useState(false);
const [topic, setTopic] = useState('');
const [mode, setMode] = useState<'auto' | 'manual'>('auto');
const [platforms, setPlatforms] = useState<string[]>(['instagram', 'facebook', 'linkedin']);
const [results, setResults] = useState<GeneratedPost[]>([]);
const [error, setError] = useState('');
const [copied, setCopied] = useState<string | null>(null);

useEffect(() => {
loadBusiness();
}, []);

async function loadBusiness() {
set​​​​​​​​​​​​​​​​
