// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { scriptId, renderId } = await req.json()

    // POLL MODE: if renderId passed in, check status and return
    if (renderId) {
      const statusRes = await fetch('https://api.creatomate.com/v2/renders/' + renderId, {
        headers: {
          'Authorization': 'Bearer ' + process.env.CREATOMATE_API_KEY
        }
      })

      if (!statusRes.ok) {
        return NextResponse.json({ error: 'Failed to check render status' }, { status: 500 })
      }

      const statusData = await statusRes.json()

      if (statusData.status === 'succeeded') {
        const videoUrl = statusData.url

        if (scriptId) {
          await supabase
            .from('video_scripts')
            .update({ video_url: videoUrl, video_status: 'done' })
            .eq('id', scriptId)
        }

        return NextResponse.json({ success: true, videoUrl, status: 'succeeded' })
      }

      if (statusData.status === 'failed') {
        return NextResponse.json({ error: 'Render failed: ' + (statusData.error_message || 'unknown'), status: 'failed' }, { status: 500 })
      }

      return NextResponse.json({ status: statusData.status, renderId })
    }

    // START MODE: kick off the render
    if (!scriptId) {
      return NextResponse.json({ error: 'scriptId is required' }, { status: 400 })
    }

    const { data: script, error: scriptError } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('id', scriptId)
      .single()

    if (scriptError || !script) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    }

    if (!script.audio_url) {
      return NextResponse.json({ error: 'No audio_url found. Generate voiceover first.' }, { status: 400 })
    }

    const pexelsQuery = encodeURIComponent(script.topic || 'business marketing')
    const pexelsRes = await fetch(
      'https://api.pexels.com/videos/search?query=' + pexelsQuery + '&per_page=3&orientation=landscape',
      {
        headers: { Authorization: process.env.PEXELS_API_KEY! }
      }
    )

    if (!pexelsRes.ok) {
      return NextResponse.json({ error: 'Pexels API failed' }, { status: 500 })
    }

    const pexelsData = await pexelsRes.json()
    const videos = pexelsData.videos || []

    if (videos.length === 0) {
      return NextResponse.json({ error: 'No Pexels videos found for topic: ' + script.topic }, { status: 404 })
    }

    const clipUrls: string[] = videos.slice(0, 3).map((v: any) => {
      const files = v.video_files || []
      const hd = files.find((f: any) => f.quality === 'hd') || files[0]
      return hd ? hd.link : ''
    }).filter(Boolean)

    if (clipUrls.length === 0) {
      return NextResponse.json({ error: 'Could not extract video URLs from Pexels' }, { status: 500 })
    }

    const videoElements = clipUrls.map((url: string, index: number) => {
      const element: any = {
        name: 'Video-' + (index + 1),
        type: 'video',
        track: 1,
        source: url,
        fit: 'cover'
      }
      if (index > 0) {
        element.animations = [
          { time: 0, duration: 1, transition: true, type: 'fade', enable: 'second-only' }
        ]
      }
      return element
    })

    const renderScriptBody = {
      output_format: 'mp4',
      width: 1280,
      height: 720,
      elements: [
        {
          type: 'audio',
          track: 1,
          time: 0,
          duration: null,
          source: script.audio_url,
          audio_fade_out: 1
        },
        {
          type: 'composition',
          track: 2,
          time: 0,
          elements: videoElements
        }
      ]
    }

    const creatomateRes = await fetch('https://api.creatomate.com/v2/renders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.CREATOMATE_API_KEY
      },
      body: JSON.stringify(renderScriptBody)
    })

    if (!creatomateRes.ok) {
      const errText = await creatomateRes.text()
      return NextResponse.json({ error: 'Creatomate API error: ' + errText }, { status: 500 })
    }

    const creatomateData = await creatomateRes.json()
    const render = Array.isArray(creatomateData) ? creatomateData[0] : creatomateData
    const newRenderId = render?.id

    if (!newRenderId) {
      return NextResponse.json({ error: 'No render ID returned from Creatomate' }, { status: 500 })
    }

    return NextResponse.json({ status: 'rendering', renderId: newRenderId })

  } catch (err: any) {
    console.error('Video assemble error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
