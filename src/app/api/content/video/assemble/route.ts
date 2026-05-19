// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { script_id } = await req.json()

  if (!script_id) {
    return NextResponse.json({ error: 'script_id required' }, { status: 400 })
  }

  const { data: script, error } = await supabase
    .from('video_scripts')
    .select('*')
    .eq('id', script_id)
    .single()

  if (error || !script) {
    return NextResponse.json({ error: 'Script not found' }, { status: 404 })
  }

  const keywords = [script.topic, script.platform, 'business', 'marketing']
    .filter(Boolean)
    .join(' ')

  const pexelsRes = await fetch(
    'https://api.pexels.com/videos/search?query=' + encodeURIComponent(keywords) + '&per_page=6&orientation=landscape',
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY!
      }
    }
  )

  const pexelsData = await pexelsRes.json()

  const videoClips = (pexelsData.videos || []).map((v: any) => {
    const file = v.video_files.find((f: any) => f.quality === 'hd') || v.video_files[0]
    return {
      id: v.id,
      url: file?.link || '',
      duration: v.duration,
      thumbnail: v.image,
      width: file?.width,
      height: file?.height
    }
  })

  const videoUrl = JSON.stringify({
    type: 'pexels_assembly',
    clips: videoClips,
    audio_url: script.audio_url,
    topic: script.topic,
    platform: script.platform,
    hook: script.hook,
    cta: script.cta
  })

  await supabase
    .from('video_scripts')
    .update({
      video_url: videoUrl,
      video_status: 'ready'
    })
    .eq('id', script_id)

  return NextResponse.json({
    success: true,
    video_clips: videoClips,
    audio_url: script.audio_url,
    message: 'Video assembled with ' + videoClips.length + ' Pexels clips'
  })
}
