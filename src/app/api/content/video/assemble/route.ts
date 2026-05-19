// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { scriptId } = await req.json()
    if (!scriptId) return NextResponse.json({ error: 'Missing scriptId' }, { status: 400 })

    const { data: script } = await supabase.from('video_scripts').select('*').eq('id', scriptId).single()
    if (!script) return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    if (!script.audio_url) return NextResponse.json({ error: 'No voiceover yet. Generate voiceover first.' }, { status: 400 })

    const pexelsRes = await fetch('https://api.pexels.com/videos/search?query=' + encodeURIComponent(script.topic) + '&per_page=6&orientation=portrait', {
      headers: { Authorization: process.env.PEXELS_API_KEY! }
    })
    const pexelsData = await pexelsRes.json()
    const videoClips = pexelsData.videos.map((v: any) => {
      const file = v.video_files.find((f: any) => f.quality === 'hd') || v.video_files[0]
      return { url: file.link, duration: Math.min(v.duration, 15) }
    })

    const totalDuration = videoClips.reduce((sum: number, c: any) => sum + c.duration, 0)

    const timeline = {
      soundtrack: {
        src: script.audio_url,
        effect: 'fadeOut'
      },
      tracks: [
        {
          clips: videoClips.map((clip: any, i: number) => ({
            asset: { type: 'video', src: clip.url },
            start: videoClips.slice(0, i).reduce((sum: number, c: any) => sum + c.duration, 0),
            length: clip.duration,
            fit: 'crop'
          }))
        }
      ]
    }

    const output = { format: 'mp4', resolution: 'hd' }

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

    return NextResponse.json({ success: true, renderId, message: 'Video rendering started' })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { searchParams } = new URL(req.url)
    const renderId = searchParams.get('renderId')
    const scriptId = searchParams.get('scriptId')
    if (!renderId || !scriptId) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

    const shotRes = await fetch('https://api.shotstack.io/stage/render/' + renderId, {
      headers: { 'x-api-key': process.env.SHOTSTACK_API_KEY! }
    })
    const shotData = await shotRes.json()
    const status = shotData.response.status
    const videoUrl = shotData.response.url

    if (status === 'done' && videoUrl) {
      await supabase.from('video_scripts').update({ video_url: videoUrl, video_status: 'done' }).eq('id', scriptId)
      return NextResponse.json({ status: 'done', videoUrl })
    }

    if (status === 'failed') {
      await supabase.from('video_scripts').update({ video_status: 'failed' }).eq('id', scriptId)
      return NextResponse.json({ status: 'failed' })
    }

    return NextResponse.json({ status: 'rendering' })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
