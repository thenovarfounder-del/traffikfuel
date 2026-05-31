// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: NextRequest) {
  try {
    const { site_url, username, app_password, user_id } = await req.json();

    if (!site_url || !username || !app_password || !user_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const cleanUrl = site_url.replace(/\/+$/, '');
    const testUrl = cleanUrl + '/wp-json/wp/v2/users/me';
    const credentials = Buffer.from(username + ':' + app_password).toString('base64');

    const wpResponse = await fetch(testUrl, {
      headers: {
        'Authorization': 'Basic ' + credentials,
        'Content-Type': 'application/json',
      },
    });

    if (!wpResponse.ok) {
      return NextResponse.json({ error: 'Could not connect to WordPress. Check your URL, username and app password.' }, { status: 400 });
    }

    const wpData = await wpResponse.json();
    const siteName = wpData.name || cleanUrl;

    const { error } = await supabase
      .from('wordpress_connections')
      .upsert({
        user_id,
        site_url: cleanUrl,
        username,
        app_password,
        site_name: siteName,
        connected: true,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, site_name: siteName });
  } catch (err) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get('user_id');

    if (!user_id) {
      return NextResponse.json({ error: 'Missing user_id' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('wordpress_connections')
      .select('*')
      .eq('user_id', user_id)
      .single();

    if (error || !data) {
      return NextResponse.json({ connected: false });
    }

    return NextResponse.json({ connected: true, site_url: data.site_url, site_name: data.site_name });
  } catch (err) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}
