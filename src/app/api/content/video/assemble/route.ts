// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { scriptId } = await req.json()
    if (!scriptId) return NextResponse.json({ error: 'Missing scriptId' }, { status: 400 })

    const { data: script } = await supabase.from('video_scripts').select('*').eq('id', scriptId).single()
    if (!script) return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    if (!script.audio_url) return NextResponse.json({ error: 'No audio yet' }, { status: 400 })

    const keyword = script.topic || 'business'
    const pexelsRes = await fetch('https://api.pexels.com/videos/search?query=' + encodeURIComponent(keyword) + '&per_page=3&orientation=portrait', {
      headers: { Authorization: process.env.PEXELS_API_KEY! }
    })
    const pexelsData = await pexelsRes.json()
    const videos = pexelsData.videos || []

    const clips = videos.slice(0, 3).map((v) => {
      const file = v.video_files.find((f) => f.quality === 'sd') || v.video_files[0]
      return {
        asset: { type: 'video', src: file.link },
        start: 0,
        length: 5
      }
    })

    if (clips.length === 0) return NextResponse.json({ error: 'No Pexels videos found' }, { status: 500 })

    const timeline = {
      tracks: [
        { clips },
        { clips: [{ asset: { type: 'audio', src: script.audio_url }, start: 0, length: 60 }] }
      ]
    }

    const output = { format: 'mp4', resolution: 'sd' }

    const shotRes = await fetch('https://api.shotstack.io/stage/render', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.SHOTSTACK_API_KEY!
      },
      body: JSON.stringify({ timeline, output })
    })

    const shotData = await shotRes.json()
    if (!shotData.success) return NextResponse.json({ error: 'Shotstack error', detail: shotData }, { status: 500 })

    const renderId = shotData.response.id
    await supabase.from('video_scripts').update({ video_status: 'rendering' }).eq('id', scriptId)

    return NextResponse.json({ renderId })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { searchParams } = new URL(req.url)
    const renderId = searchParams.get('renderId')
    const scriptId = searchParams.get('scriptId')

    if (!renderId || !scriptId) return NextResponse.json({ status: 'rendering' })

    const shotRes = await fetch('https://api.shotstack.io/stage/render/' + renderId, {
      headers: { 'x-api-key': process.env.SHOTSTACK_API_KEY! }
    })
    const shotData = await shotRes.json()
    const status = shotData.response?.status

    if (status === 'done') {
      const videoUrl = shotData.response.url
      await supabase.from('video_scripts').update({ video_url: videoUrl, video_status: 'done' }).eq('id', scriptId)
      return NextResponse.json({ status: 'done', videoUrl })
    }

    if (status === 'failed') {
      return NextResponse.json({ status: 'failed' })
    }

    return NextResponse.json({ status: 'rendering' })
  } catch (err: any) {
    return NextResponse.json({ status: 'rendering' })
  }
}
