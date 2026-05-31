// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: NextRequest) {
  try {
    const { user_id, title, content, status } = await req.json();

    const { data: wp, error } = await supabase
      .from('wordpress_connections')
      .select('*')
      .eq('user_id', user_id)
      .single();

    if (error || !wp) {
      return NextResponse.json({ error: 'No WordPress connection found' }, { status: 400 });
    }

    const credentials = Buffer.from(wp.username + ':' + wp.app_password).toString('base64');

    const response = await fetch(wp.site_url + '/wp-json/wp/v2/posts', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + credentials,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        status: status || 'publish',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: result.message || 'WordPress publish failed' }, { status: 400 });
    }

    return NextResponse.json({ success: true, url: result.link, id: result.id });
  } catch (err) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}
