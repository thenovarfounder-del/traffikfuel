import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 })
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
    })
    const html = await res.text()
    return NextResponse.json({ html })
  } catch {
    return NextResponse.json({ error: 'Could not fetch' }, { status: 400 })
  }
}