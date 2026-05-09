import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const businessId = String(body.businessId || '').trim();
    const url = String(body.url || '').trim();

    if (!businessId || !url) {
      return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
    }

    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const raw = await res.text();

    const text = raw
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[^\x20-\x7E]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 5000);

    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{ role: 'user', content: `Extract a business brain from this website text as JSON with fields: business_name, industry, tagline, services (array), target_audience, tone, unique_value_proposition, location, keywords (array of 10). Respond ONLY with valid JSON.\n\n${text}` }],
      }),
    });

    const claudeData = await claudeRes.json();
    const rawJson = claudeData.content?.[0]?.text || '{}';

    let brain;
    try {
      brain = JSON.parse(rawJson);
    } catch {
      brain = { raw_summary: rawJson };
    }

    const safeStr = JSON.stringify(brain).replace(/[^\x20-\x7E]/g, '');
    const safeBrain = JSON.parse(safeStr);

    const { error } = await supabase
      .from('business_profiles')
      .update({ brain: safeBrain, brain_updated_at: new Date().toISOString() })
      .eq('id', businessId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ brain: safeBrain });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}