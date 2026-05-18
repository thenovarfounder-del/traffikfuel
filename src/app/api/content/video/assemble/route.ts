// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  try {
    const { scriptId, audioUrl } = await req.json()
    if (!scriptId || !audioUrl) {
      return NextResponse.json({ error: 'Missing scriptId or audioUrl' }, { status: 400 })
    }
    const { data: script, error } = await supabase.from('video_scripts').select('*').eq('id', scriptId).single()
    if (error || !script) return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    const shotstackKey = process.env.SHOTSTACK_API_KEY!
    const duration = parseInt(script.duration) || 60
    const timeline = {
      tracks: [
        {
          clips: [
            {
              asset: { type: 'audio', src: audioUrl },
              start: 0,
              length: duration
            }
          ]
        },
        {
          clips: [
            {
              asset: { type: 'video', src: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/earth.mp4', volume: 0 },
              start: 0,
              length: duration
            }
          ]
        }
      ]
    }
    const output = { format: 'mp4', resolution: 'hd' }
    const renderRes = await fetch('https://api.shotstack.io/stage/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': shotstackKey },
      body: JSON.stringify({ timeline, output })
    })
    const renderData = await renderRes.json()
    if (!renderData.success) throw new Error('Shotstack error: ' + JSON.stringify(renderData))
    const renderId = renderData.response.id
    await supabase.from('video_scripts').update({ video_status: 'rendering' }).eq('id', scriptId)
    return NextResponse.json({ renderId })
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
    const shotstackKey = process.env.SHOTSTACK_API_KEY!
    const statusRes = await fetch('https://api.shotstack.io/stage/render/' + renderId, {
      headers: { 'x-api-key': shotstackKey }
    })
    const statusData = await statusRes.json()
    const status = statusData.response.status
    if (status === 'done') {
      const videoUrl = statusData.response.url
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
