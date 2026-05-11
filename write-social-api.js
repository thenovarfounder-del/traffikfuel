const fs = require('fs');

const content = `import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// STEP 1 — Auto Strategy Engine
// Analyzes the business brain and builds the perfect content strategy before writing
async function generateStrategy(businessContext: string, platform: string): Promise<string> {
  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 600,
    system: 'You are a senior content strategist and SEO specialist. You analyze a business and decide the single best content angle, target keywords, and emotional hook for a social media post. You respond in plain text only — no labels, no JSON, no markdown. Just write the strategy brief.',
    messages: [{
      role: 'user',
      content: \`Analyze this business and create a content strategy brief for a \${platform} post.

BUSINESS CONTEXT:
\${businessContext}

Return a strategy brief that includes:
1. THE ANGLE — the single most compelling content angle for this business right now (pain point, transformation, insight, result, myth-bust, or trend)
2. TARGET KEYWORDS — 6 to 8 high-value keyword phrases this audience searches for — be specific to this industry and niche
3. EMOTIONAL HOOK — the core emotion or desire to tap into (fear, aspiration, frustration, curiosity, urgency)
4. CONTENT FOCUS — one specific topic, story, or insight to build the post around — not generic, make it unique to this business
5. PLATFORM STRATEGY — specific tactics for \${platform} that will maximize reach and engagement for this exact audience

Be specific. Be strategic. Think like someone who charges $500/hour for this work.\`
    }],
  });

  return message.content[0].type === 'text' ? message.content[0].text : '';
}

// STEP 2 — Content Engine
// Takes the strategy brief and writes elite platform-optimized content
async function generateContent(businessContext: string, platform: string, strategy: string, customPrompt?: string): Promise<string> {
  
  const isAuto = !customPrompt;
  const directionBlock = isAuto
    ? \`CONTENT STRATEGY (auto-generated — follow this exactly):
\${strategy}\`
    : \`CUSTOM DIRECTION FROM USER: \${customPrompt}

ALSO USE THIS STRATEGY FOR KEYWORDS AND OPTIMIZATION:
\${strategy}\`;

  let platformPrompt = '';

  if (platform === 'instagram') {
    platformPrompt = \`You are an elite Instagram content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

INSTAGRAM WRITING RULES — ALL MANDATORY:
- Line 1 must be a scroll-stopping hook — bold claim, shocking stat, or direct question to the reader
- Line 2-3 expand the hook — create curiosity or tension that pulls them to read more
- Use short sentences and single line breaks — never paragraphs longer than 2 lines
- Tell a micro-story or share one specific insight — no generic advice
- Naturally weave in 3-4 of the target keywords from the strategy — make them flow, never stuffed
- Use emojis strategically to guide the eye — opening hook, key points, CTA only
- Build emotional momentum toward the CTA — the reader should feel compelled to act
- Caption body: 190-230 words

You MUST respond in EXACTLY this format:

POST:
[Full Instagram caption following all rules]

CTA:
[One punchy action line — urgency or curiosity driven, never generic]

HASHTAGS:
[Exactly 20 hashtags — 3 broad niche (500k+ posts), 8 mid-range (50k-500k posts), 6 specific niche (5k-50k posts), 3 branded or location — all starting with #, space separated]\`;

  } else if (platform === 'facebook') {
    platformPrompt = \`You are an elite Facebook content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

FACEBOOK WRITING RULES — ALL MANDATORY:
- First 2 lines must hook before the "See More" cutoff — use a bold statement or question that speaks to the reader's biggest pain or desire
- Write like a trusted advisor — warm, authoritative, human — not a brand announcement
- Paragraph breaks every 2-3 sentences — never long blocks of text
- Include ONE specific data point, case study result, or real-world example that builds instant credibility
- Naturally weave in 4-5 of the target keywords from the strategy — integrated into sentences, never listed
- End with an open question that invites comments and debate
- Build toward a payoff — every paragraph should make the next one feel necessary
- Post body: 220-260 words
- Minimal emojis — professional but human

You MUST respond in EXACTLY this format:

POST:
[Full Facebook post following all rules]

CTA:
[One direct action line with a clear reason to act — consultation, call, visit, download]

HASHTAGS:
[Exactly 5 hashtags — relevant, searchable, specific to this industry — all starting with #, space separated]\`;

  } else if (platform === 'linkedin') {
    platformPrompt = \`You are an elite LinkedIn content strategist and B2B SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

LINKEDIN WRITING RULES — ALL MANDATORY:
- Line 1 is everything — one sentence that challenges a belief, reveals a truth, or states something counterintuitive that a decision-maker cannot ignore
- Follow the proven structure: Bold hook → Context (2-3 lines) → Core insight or story (4-6 lines) → Key lesson or takeaway (2-3 lines) → Engagement question → CTA
- Write in first person — position the business as the expert voice in the room
- Include ONE concrete result, client transformation, or industry data point — specificity is credibility
- Naturally integrate 4-6 of the target keywords from the strategy — woven into insights, not listed
- Use single-sentence paragraphs and white space — LinkedIn rewards readable formatting
- Close with a question that makes senior professionals want to share their own experience
- Post body: 230-270 words
- Emojis: 0-2 max, only if they genuinely add clarity

You MUST respond in EXACTLY this format:

POST:
[Full LinkedIn post following all rules]

CTA:
[One professional action line — conversation, consultation, connection, or resource]

HASHTAGS:
[Exactly 5 hashtags — 2 broad industry, 2 niche professional, 1 topic-specific — all starting with #, space separated]\`;
  }

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1200,
    system: 'You are an elite social media strategist and SEO copywriter with 15 years of experience. You write content that ranks, converts, and builds real authority. You ALWAYS respond using the exact labeled format: POST:, CTA:, and HASHTAGS:. You NEVER skip a section. Every word earns its place.',
    messages: [{ role: 'user', content: platformPrompt }],
  });

  return message.content[0].type === 'text' ? message.content[0].text : '';
}

export async function POST(request: NextRequest) {
  try {
    const { businessId, platform, mode, customPrompt } = await request.json();

    const { data: business, error } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('id', businessId)
      .single();

    if (error || !business) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    const brain = business.brain || {};
    const businessContext = \`
Business Name: \${brain.businessName || business.name || 'Unknown'}
Description: \${brain.description || ''}
Services: \${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services || ''}
Target Audience: \${brain.targetAudience || ''}
Tone: \${brain.tone || 'professional'}
Unique Value: \${brain.uniqueValue || ''}
Location: \${brain.location || ''}
\`.trim();

    // Always run the strategy engine — auto mode uses it fully, manual mode uses it for keyword optimization
    const strategy = await generateStrategy(businessContext, platform);

    // Then generate the content using the strategy
    const responseText = await generateContent(businessContext, platform, strategy, mode === 'manual' ? customPrompt : undefined);

    // Parse the three sections
    const postMatch = responseText.match(/POST:\\s*([\\s\\S]*?)(?=CTA:|$)/i);
    const ctaMatch = responseText.match(/CTA:\\s*([\\s\\S]*?)(?=HASHTAGS:|$)/i);
    const hashtagsMatch = responseText.match(/HASHTAGS:\\s*([\\s\\S]*?)$/i);

    const post = postMatch ? postMatch[1].trim() : responseText;
    const cta = ctaMatch ? ctaMatch[1].trim() : '';
    const hashtags = hashtagsMatch ? hashtagsMatch[1].trim() : '';

    return NextResponse.json({ post, cta, hashtags, strategy });

  } catch (error) {
    console.error('Social API error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
`;

fs.writeFileSync('src/app/api/content/social/route.ts', content);
console.log('Done!');