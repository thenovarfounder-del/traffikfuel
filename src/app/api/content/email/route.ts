import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { emailType, topic, userId, businessId } = await req.json();
    if (!emailType || !topic || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const { data: profile } = await supabase
      .from('business_profiles')
      .select('business_name, brain')
      .eq('user_id', userId)
      .single();
    const businessName = profile?.business_name || 'our business';
    const brain = profile?.brain || '';
    const promptText = 'You are a professional email copywriter for ' + businessName + '. Business context: ' + brain + '. Write a complete marketing email. Email type: ' + emailType + '. Topic: ' + topic + '. Return in this exact format: SUBJECT: [subject line here] BODY: [full email body here]. Requirements: subject under 60 characters, professional and persuasive, clear call to action, sign off with business name.';
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: promptText }],
    });
    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    const subjectMatch = responseText.match(/SUBJECT:\s*(.+)/);
    const bodyMatch = responseText.match(/BODY:\s*([\s\S]+)/);
    const subject = subjectMatch ? subjectMatch[1].trim() : 'Your Email Subject';
    const body = bodyMatch ? bodyMatch[1].trim() : responseText;
    const { error: saveError } = await supabase.from('email_drafts').insert({
      user_id: userId,
      business_id: businessId,
      email_type: emailType,
      topic: topic,
      subject: subject,
      body: body,
      status: 'draft',
    });
    if (saveError) { console.error('Save error:', saveError); }
    return NextResponse.json({ subject, body });
  } catch (error) {
    console.error('Email generation error:', error);
    return NextResponse.json({ error: 'Failed to generate email' }, { status: 500 });
  }
}
