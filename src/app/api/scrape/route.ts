import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { businessId, url } = await req.json();

    if (!businessId || !url) {
      return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
    }

    // Fetch website HTML server-side (no CORS issues here)
    let rawText = '';
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
        signal: AbortSignal.timeout(7000),
      });
      const html = await res.text();
      // Strip HTML tags, collapse whitespace
      rawText = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 4000);
    } catch {
      return NextResponse.json({ error: 'Could not fetch website. Check the URL.' }, { status: 400 });
    }

    if (!rawText) {
      return NextResponse.json({ error: 'No readable content found on that page.' }, { status: 400 });
    }

    // Call Claude
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `You are a marketing AI. Extract business info from this website text and return ONLY valid JSON with these exact keys: businessName, description, services, targetAudience, tone, uniqueValue, location. Website text: ${rawText}`,
          },
        ],
      }),
    });

    const claudeData = await claudeRes.json();
    const rawContent = claudeData?.content?.[0]?.text || '';

    let brain;
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      brain = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: rawContent };
    } catch {
      brain = { raw: rawContent };
    }

    // Save to Supabase via REST
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    const dbRes = await fetch(
      `${supabaseUrl}/rest/v1/business_profiles?id=eq.${businessId}`,
      {
        method: 'PATCH',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          brain: brain,
          brain_updated_at: new Date().toISOString(),
        }),
      }
    );

    if (!dbRes.ok) {
      const err = await dbRes.text();
      return NextResponse.json({ error: 'DB save failed', detail: err }, { status: 500 });
    }

    return NextResponse.json({ success: true, brain });
  } catch (err) {
    console.error('Scrape error:', err);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}