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

    if (!scriptId) {
      return NextResponse.json({ error: 'scriptId is required' }, { status: 400 })
    }

    // Step 1: Get script + audio_url from Supabase
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

    // Step 2: Search Pexels for 3 stock video clips matching the topic
    const pexelsQuery = encodeURIComponent(script.topic || 'business marketing')
    const pexelsRes = await fetch(
      'https://api.pexels.com/videos/search?query=' + pexelsQuery + '&per_page=3&orientation=landscape',
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY!
        }
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

    // Get best quality video file URL for each clip (prefer HD)
    const clipUrls: string[] = videos.slice(0, 3).map((v: any) => {
      const files = v.video_files || []
      const hd = files.find((f: any) => f.quality === 'hd') || files[0]
      return hd ? hd.link : ''
    }).filter(Boolean)

    if (clipUrls.length === 0) {
      return NextResponse.json({ error: 'Could not extract video URLs from Pexels' }, { status: 500 })
    }

    // Step 3: Build Creatomate RenderScript — video clips + voiceover audio
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
          {
            time: 0,
            duration: 1,
            transition: true,
            type: 'fade',
            enable: 'second-only'
          }
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

    // Step 4: Send to Creatomate API
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

    // Creatomate returns an array of renders
    const render = Array.isArray(creatomateData) ? creatomateData[0] : creatomateData
    const renderId = render?.id

    if (!renderId) {
      return NextResponse.json({ error: 'No render ID returned from Creatomate' }, { status: 500 })
    }

    // Step 5: Poll Creatomate for completion (max 3 minutes, check every 5 seconds)
    let videoUrl = ''
    let attempts = 0
    const maxAttempts = 36 // 36 * 5s = 180s = 3 minutes

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 5000))
      attempts++

      const statusRes = await fetch('https://api.creatomate.com/v2/renders/' + renderId, {
        headers: {
          'Authorization': 'Bearer ' + process.env.CREATOMATE_API_KEY
        }
      })

      if (!statusRes.ok) continue

      const statusData = await statusRes.json()
      const status = statusData.status

      if (status === 'succeeded') {
        videoUrl = statusData.url
        break
      }

      if (status === 'failed') {
        return NextResponse.json({ error: 'Creatomate render failed: ' + (statusData.error_message || 'unknown error') }, { status: 500 })
      }
    }

    if (!videoUrl) {
      return NextResponse.json({ error: 'Creatomate render timed out after 3 minutes' }, { status: 504 })
    }

    // Step 6: Save final video URL to Supabase
    const { error: updateError } = await supabase
      .from('video_scripts')
      .update({
        video_url: videoUrl,
        video_status: 'done'
      })
      .eq('id', scriptId)

    if (updateError) {
      console.error('Supabase update error:', updateError)
    }

    return NextResponse.json({ success: true, videoUrl })

  } catch (err: any) {
    console.error('Video assemble error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
