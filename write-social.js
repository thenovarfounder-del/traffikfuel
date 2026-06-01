const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\auth\\confirm\\route.ts';

const content = `// @ts-nocheck
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as any
  const next = searchParams.get('next') || '/onboarding'

  if (token_hash && type) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { error } = await supabase.auth.verifyOtp({ type, token_hash })
    if (!error) {
      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: auth confirm route fixed');