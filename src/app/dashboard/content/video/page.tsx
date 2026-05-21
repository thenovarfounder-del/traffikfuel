// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORMS = ['TikTok', 'YouTube Shorts', 'Instagram Reels', 'Facebook', 'LinkedIn']

const PLATFORM_COLORS = {
  'TikTok': '#010101',
  'YouTube Shorts': '#FF0000',
  'Instagram Reels': '#E1306C',
  'Facebook': '#1877F2',
  'LinkedIn': '#0A66C2',
}

export default function VideoHubPage() {
  const [user, setUser] = useState(null)
  const [businessId, setBusinessId] = useState(null)
  const [videos, setVideos] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [platform, setPlatform] = useState(PLATFORMS[0])
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)
      const { data: bp } = await supabase
        .from('business_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single()
      if (bp) setBusinessId(bp.id)
      loadVideos(user.id)
    }
    init()
  }, [])

  const loadVideos = async (uid) => {
    const { data } = await supabase
      .from('client_videos')
      .select('*')
      .eq('user_id', uid)
      .order('created_at', { ascending: false })
    if (data) setVideos(data)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (!['video/mp4', 'video/quicktime'].includes(file.type)) {
      setError('Only MP4 and MOV files are supported.')
      return
    }
    setError('')
    setSelectedFile(file)
  }

  const handleUpload = async () => {
    if (!selectedFile || !title || !platform) {
      setError('Please fill in title, platform, and select a video file.')
      return
    }
    setError('')
    setSuccess('')
    setUploading(true)
    setUploadProgress('Uploading video...')

    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('user_id', user.id)
    formData.append('business_id', businessId || '')
    formData.append('title', title)
    formData.append('description', description)
    formData.append('platform', platform)

    try {
      const res = await fetch('/api/content/video/upload', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      setSuccess('Video uploaded successfully!')
      setTitle('')
      setDescription('')
      setPlatform(PLATFORMS[0])
      setSelectedFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
      loadVideos(user.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      setUploadProgress('')
    }
  }

  const toggleVideo = async (id, current) => {
    await supabase.from('client_videos').update({ enabled: !current }).eq('id', id)
    setVideos(v => v.map(x => x.id === id ? { ...x, enabled: !current } : x))
  }

  const deleteVideo = async (id) => {
    if (!confirm('Delete this video?')) return
    await supabase.from('client_videos').delete().eq('id', id)
    setVideos(v => v.filter(x => x.id !== id))
  }

  return (
    <div style={{ padding: '32px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>Video Hub</h1>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>Upload your videos. TraffikFuel handles the rest — titles, descriptions, hashtags, and captions optimized for each platform.</p>

      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Upload a Video</h2>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Title *</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Behind the scenes at our shop"
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Description (optional)</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Brief description of the video..."
            rows={3}
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Target Platform *</label>
          <select
            value={platform}
            onChange={e => setPlatform(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
          >
            {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Video File * (MP4 or MOV)</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/quicktime"
            onChange={handleFileChange}
            style={{ fontSize: '14px' }}
          />
          {selectedFile && (
            <div style={{ marginTop: '8px', fontSize: '13px', color: '#6b7280' }}>
              Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(1)} MB)
            </div>
          )}
        </div>

        {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}
        {success && <div style={{ background: '#dcfce7', color: '#16a34a', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>{success}</div>}

        <button
          onClick={handleUpload}
          disabled={uploading}
          style={{ background: uploading ? '#9ca3af' : '#E8610A', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: uploading ? 'not-allowed' : 'pointer' }}
        >
          {uploading ? uploadProgress || 'Uploading...' : 'Upload Video'}
        </button>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Your Video Library</h2>

      {videos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px', color: '#9ca3af', border: '2px dashed #e5e7eb', borderRadius: '12px' }}>
          No videos uploaded yet. Upload your first video above!
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {videos.map(v => (
            <div key={v.id} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
              <video src={v.video_url} style={{ width: '100%', height: '160px', objectFit: 'cover', background: '#000' }} muted />
              <div style={{ padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ background: PLATFORM_COLORS[v.platform] || '#6b7280', color: 'white', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px' }}>{v.platform}</span>
                </div>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>{v.title}</div>
                {v.description && <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '10px' }}>{v.description}</div>}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => toggleVideo(v.id, v.enabled)}
                    style={{ background: v.enabled ? '#dcfce7' : '#f3f4f6', color: v.enabled ? '#16a34a' : '#6b7280', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
                  >
                    {v.enabled ? 'ON' : 'OFF'}
                  </button>
                  <button
                    onClick={() => deleteVideo(v.id)}
                    style={{ background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
