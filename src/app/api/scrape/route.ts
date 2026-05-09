import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function stripHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 8000);
}

export async function POST(req: NextRequest) {
  try {
    const { businessId, html } = await req.json();

    if (!businessId || !html) {
      return NextResponse.json({ error: 'Missing businessId or html' }, { status: 400 });
    }

    const text = stripHtml(html);

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a marketing analyst. Read this website text and extract a business brain summary in JSON format with these fields:
- business_name
- industry
- tagline
- services (array of strings)
- target_audience
- tone (e.g. professional, friendly, casual)
- unique_value_proposition
- location (if mentioned)
- keywords (array of 10 SEO keywords)

Website text:
${text}

Respond ONLY with valid JSON. No markdown, no explanation.`,
        },
      ],
    });

    const raw = message.content[0].type === 'text' ? message.content[0].text : '';
    let brain;
    try {
      brain = JSON.parse(raw);
    } catch {
      brain = { raw_summary: raw };
    }

    const { error } = await supabase
      .from('business_profiles')
      .update({ brain: brain, brain_updated_at: new Date().toISOString() })
      .eq('id', businessId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ brain });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}