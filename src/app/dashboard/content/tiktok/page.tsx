// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface ClientVideo {
  id: string
  title: string
  description: string
  video_url: string
  enabled: boolean
  created_at: string
}

interface TikTokCardState {
  caption: string
  hashtags: string
  privacy: 'public' | 'friends_only' | 'private'
  status: 'idle' | 'pushing' | 'posted' | 'failed'
}

export default function TikTokPage() {
  const [videos, setVideos] = useState<ClientVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [cardStates, setCardStates] = useState<Record<string, TikTokCardState>>({})
  const [tiktokConnected] = useState(false)

  useEffect(() => {
    fetchVideos()
  }, [])

  async function fetchVideos() {
    setLoading(true)
    const { data, error } = await supabase
      .from('client_videos')
      .select('*')
      .eq('enabled', true)
      .order('created_at', { ascending: false })

    if (!error && data) {
      setVideos(data)
      const initial: Record<string, TikTokCardState> = {}
      data.forEach((v) => {
        initial[v.id] = {
          caption: v.description || '',
          hashtags: '#smallbusiness #marketing #local',
          privacy: 'public',
          status: 'idle',
        }
      })
      setCardStates(initial)
    }
    setLoading(false)
  }

  function updateCard(id: string, field: keyof TikTokCardState, value: string) {
    setCardStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }))
  }

  async function pushToTikTok(videoId: string) {
    updateCard(videoId, 'status', 'pushing')
    try {
      const res = await fetch('/api/tiktok/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoId,
          caption: cardStates[videoId]?.caption,
          hashtags: cardStates[videoId]?.hashtags,
          privacy: cardStates[videoId]?.privacy,
        }),
      })
      if (res.ok) {
        updateCard(videoId, 'status', 'posted')
      } else {
        updateCard(videoId, 'status', 'failed')
      }
    } catch {
      updateCard(videoId, 'status', 'failed')
    }
  }

  const statusBadge = (status: string) => {
    if (status === 'posted') return (
      <span style={{
        position: 'absolute', top: 10, right: 10,
        fontSize: 11, fontWeight: 500, padding: '3px 9px',
        borderRadius: 20, background: 'rgba(16,185,129,0.18)',
        color: '#10b981', border: '0.5px solid rgba(16,185,129,0.35)',
      }}>✓ Posted</span>
    )
    if (status === 'failed') return (
      <span style={{
        position: 'absolute', top: 10, right: 10,
        fontSize: 11, fontWeight: 500, padding: '3px 9px',
        borderRadius: 20, background: 'rgba(239,68,68,0.18)',
        color: '#ef4444', border: '0.5px solid rgba(239,68,68,0.35)',
      }}>✗ Failed</span>
    )
    return (
      <span style={{
        position: 'absolute', top: 10, right: 10,
        fontSize: 11, fontWeight: 500, padding: '3px 9px',
        borderRadius: 20, background: 'rgba(0,0,0,0.45)', color: '#999',
      }}>Not posted</span>
    )
  }

  const pushButton = (video: ClientVideo) => {
    const state = cardStates[video.id]
    if (!state) return null

    if (state.status === 'pushing') return (
      <button disabled style={{
        width: '100%', padding: '10px', borderRadius: 8,
        border: 'none', background: '#E8610A', color: '#fff',
        fontSize: 13, fontWeight: 500, cursor: 'not-allowed', opacity: 0.7,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
        Pushing to TikTok...
      </button>
    )

    if (state.status === 'posted') return (
      <button disabled style={{
        width: '100%', padding: '10px', borderRadius: 8,
        border: '0.5px solid rgba(16,185,129,0.4)',
        background: 'rgba(16,185,129,0.1)', color: '#10b981',
        fontSize: 13, fontWeight: 500, cursor: 'default',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        ✓ Posted successfully
      </button>
    )

    if (state.status === 'failed') return (
      <button
        onClick={() => pushToTikTok(video.id)}
        style={{
          width: '100%', padding: '10px', borderRadius: 8,
          border: '0.5px solid rgba(239,68,68,0.4)',
          background: 'rgba(239,68,68,0.1)', color: '#ef4444',
          fontSize: 13, fontWeight: 500, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}
      >
        ↺ Retry push
      </button>
    )

    return (
      <button
        onClick={() => pushToTikTok(video.id)}
        style={{
          width: '100%', padding: '10px', borderRadius: 8,
          border: 'none', background: '#E8610A', color: '#fff',
          fontSize: 13, fontWeight: 500, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <TikTokIcon /> Push to TikTok
      </button>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .tk-input:focus { outline: none; border-color: #E8610A !important; }
        .tk-card { transition: box-shadow 0.2s; }
        .tk-card:hover { box-shadow: 0 0 0 1px rgba(232,97,10,0.25); }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '2rem' }}>
        <div style={{
          width: 42, height: 42, borderRadius: 10, background: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <TikTokIcon size={22} color="#fff" />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: '#fff' }}>
            Push to TikTok
          </h1>
          <p style={{ margin: '2px 0 0', fontSize: 13, color: '#888' }}>
            Select a video from your library and push it live to TikTok
          </p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {tiktokConnected ? (
            <span style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 12, color: '#10b981',
              background: 'rgba(16,185,129,0.1)',
              border: '0.5px solid rgba(16,185,129,0.3)',
              padding: '5px 12px', borderRadius: 20,
            }}>
              ● TikTok connected
            </span>
          ) : (
            <button style={{
              fontSize: 12, color: '#E8610A',
              background: 'rgba(232,97,10,0.08)',
              border: '0.5px solid rgba(232,97,10,0.3)',
              padding: '5px 14px', borderRadius: 20, cursor: 'pointer',
            }}>
              Connect TikTok →
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: '#666', fontSize: 14 }}>
          Loading your videos...
        </div>
      ) : videos.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '4rem',
          border: '0.5px dashed #333', borderRadius: 12,
        }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🎬</div>
          <p style={{ color: '#888', fontSize: 15, margin: '0 0 6px' }}>No videos in your library yet</p>
          <p style={{ color: '#555', fontSize: 13, margin: 0 }}>
            Go to <strong style={{ color: '#E8610A' }}>Video Hub</strong> to upload your first video
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 18,
        }}>
          {videos.map((video) => {
            const state = cardStates[video.id]
            if (!state) return null
            return (
              <div key={video.id} className="tk-card" style={{
                background: '#111',
                border: '0.5px solid #222',
                borderRadius: 12,
                overflow: 'hidden',
              }}>
                <div style={{
                  width: '100%', height: 168,
                  background: '#0a0a0a',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {video.video_url ? (
                    <video
                      src={video.video_url}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      muted
                      playsInline
                      onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0 }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', color: '#444' }}>
                      <div style={{ fontSize: 32, marginBottom: 6 }}>🎬</div>
                      <div style={{ fontSize: 12 }}>No preview</div>
                    </div>
                  )}
                  {statusBadge(state.status)}
                </div>

                <div style={{ padding: '14px 16px 16px' }}>
                  <p style={{
                    margin: '0 0 14px', fontSize: 14, fontWeight: 600,
                    color: '#fff', whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {video.title || 'Untitled Video'}
                  </p>

                  <label style={{ fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>
                    Caption
                  </label>
                  <textarea
                    className="tk-input"
                    rows={2}
                    value={state.caption}
                    onChange={e => updateCard(video.id, 'caption', e.target.value)}
                    placeholder="Write your TikTok caption..."
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: '#1a1a1a', border: '0.5px solid #2a2a2a',
                      borderRadius: 8, color: '#fff', fontSize: 13,
                      padding: '8px 10px', marginBottom: 10, resize: 'none',
                      fontFamily: 'inherit',
                    }}
                  />

                  <label style={{ fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>
                    Hashtags
                  </label>
                  <input
                    type="text"
                    className="tk-input"
                    value={state.hashtags}
                    onChange={e => updateCard(video.id, 'hashtags', e.target.value)}
                    placeholder="#hashtag1 #hashtag2"
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: '#1a1a1a', border: '0.5px solid #2a2a2a',
                      borderRadius: 8, color: '#fff', fontSize: 13,
                      padding: '8px 10px', marginBottom: 10,
                      fontFamily: 'inherit',
                    }}
                  />

                  <label style={{ fontSize: 11, color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 4 }}>
                    Privacy
                  </label>
                  <select
                    value={state.privacy}
                    onChange={e => updateCard(video.id, 'privacy', e.target.value as 'public' | 'friends_only' | 'private')}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: '#1a1a1a', border: '0.5px solid #2a2a2a',
                      borderRadius: 8, color: '#fff', fontSize: 13,
                      padding: '8px 10px', marginBottom: 14,
                      fontFamily: 'inherit', appearance: 'none', cursor: 'pointer',
                    }}
                  >
                    <option value="public">Public</option>
                    <option value="friends_only">Friends only</option>
                    <option value="private">Private</option>
                  </select>

                  {pushButton(video)}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function TikTokIcon({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.18 8.18 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z"
        fill={color}
      />
    </svg>
  )
}