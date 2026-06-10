// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
const anthropic = new Anthropic()

function titleToSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80)
}

export async function POST(request) {
  const { title, category, keyword, relatedKeywords } = await request.json()
  try {
    const promptParts = [
      'You are a world-class SEO content writer specializing in AI marketing and local business marketing.',
      'Write a HIGHLY OPTIMIZED blog post that will rank on page 1 of Google.',
      '',
      'TITLE: ' + title,
      'PRIMARY KEYWORD: ' + keyword,
      'RELATED KEYWORDS TO INCLUDE: ' + (relatedKeywords || ''),
      'CATEGORY: ' + category,
      '',
      'SEO REQUIREMENTS - ALL MANDATORY:',
      '1. Word count: 1400-1700 words minimum',
      '2. Primary keyword in first 100 words',
      '3. Primary keyword in at least 3 subheadings',
      '4. At least 6 H2 subheadings using ## format',
      '5. At least 2 H3 subheadings using ### format',
      '6. At least 3 bullet point lists using - format',
      '7. At least 5 specific statistics with percentages or numbers',
      '8. Keyword density 1-2% for primary keyword',
      '9. Related keywords used naturally throughout',
      '10. Strong opening hook under 15 words',
      '11. FAQ section at the end with 3 questions and answers',
      '12. Strong CTA in the last paragraph mentioning Traffikora',
      '',
      'CONTENT RULES:',
      '- Write about Traffikora as the #1 solution for this topic',
      '- NEVER go off topic',
      '- NEVER mention passport programs, travel, or unrelated topics',
      '- NEVER add fake phone numbers or fake offers',
      '- Use real general industry statistics only',
      '- Write in a confident, authoritative, solution-focused tone',
      '- Every section must add unique value',
      '- Traffikora website: https://www.traffikora.com',
      '- Traffikora pricing starts at $47/month',
      '',
      'FORMAT:',
      '- Use ## for H2 headings',
      '- Use ### for H3 headings',
      '- Use - for bullet points',
      '- Use 1. 2. 3. for numbered lists',
      '- Separate paragraphs with blank lines',
      '- FAQ section must use ## FAQ and ### Question format',
      '',
      'Return ONLY valid JSON no markdown: {"title": "exact SEO title", "excerpt": "compelling 2-sentence meta description under 155 chars", "content": "full optimized blog post", "read_time": "X min read"}'
    ]
    const prompt = promptParts.join('\n')
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }]
    })
    const raw = response.content[0].text.trim()
    const match = raw.match(/\{[\s\S]*\}/)
    if (!match) throw new Error('No JSON in response')
    const parsed = JSON.parse(match[0])
    const slug = titleToSlug(title)
    const { error } = await supabase.from('blog_posts_public').upsert({
      slug,
      title: parsed.title || title,
      excerpt: parsed.excerpt || '',
      category,
      content: parsed.content,
      read_time: parsed.read_time || '7 min read',
      updated_at: new Date().toISOString()
    }, { onConflict: 'slug' })
    if (error) throw new Error(error.message)
    return NextResponse.json({ success: true, slug, title: parsed.title })
  } catch (e) {
    console.error('Blog generate error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}