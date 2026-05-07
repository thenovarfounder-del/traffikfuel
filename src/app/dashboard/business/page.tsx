'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function BusinessProfilePage() {
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [form, setForm] = useState({
    business_name: '',
    industry: '',
    website: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    description: '',
  })

  useEffect(() => {
    loadProfile()
  }, [])

  async function loadProfile() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()
    if (data) {
      setForm({
        business_name: data.business_name || '',
        industry: data.industry || '',
        website: data.website || '',
        phone: data.phone || '',
        email: data.email || '',
        city: data.city || '',
        state: data.state || '',
        zip: data.zip || '',
        description: data.description || '',
      })
      setLogoUrl(data.logo_url || '')
    }
    setLoading(false)
  }

  async function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setMessage('')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const fileExt = file.name.split('.').pop()
    const fileName = user.id + '-logo.' + fileExt
    const { error: uploadError } = await supabase.storage
      .from('logos')
      .upload(fileName, file, { upsert: true })
    if (uploadError) {
      setMessage('Upload failed: ' + uploadError.message)
      setUploading(false)
      return
    }
    const { data: urlData } = supabase.storage
      .from('logos')
      .getPublicUrl(fileName)
    const publicUrl = urlData.publicUrl
    const { error: updateError } = await supabase
      .from('business_profiles')
      .upsert({ user_id: user.id, logo_url: publicUrl }, { onConflict: 'user_id' })
    if (updateError) {
      setMessage('Failed to save logo URL')
    } else {
      setLogoUrl(publicUrl)
      setMessage('Logo uploaded successfully!')
    }
    setUploading(false)
  }

  async function handleSave() {
    setSaving(true)
    setMessage('')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { error } = await supabase
      .from('business_profiles')
      .upsert({ user_id: user.id, ...form }, { onConflict: 'user_id' })
    if (error) {
      setMessage('Error saving: ' + error.message)
    } else {
      setMessage('Business profile saved!')
    }
    setSaving(false)
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">Business Profile</h1>

      {/* Logo Upload */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Business Logo</h2>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-xl bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-gray-600">
            {logoUrl ? (
              <img src={logoUrl} alt="Business logo" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-xs text-center px-2">No logo</span>
            )}
          </div>
          <div>
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              {uploading ? 'Uploading...' : 'Upload Logo'}
              <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} disabled={uploading} />
            </label>
            <p className="text-gray-400 text-xs mt-2">PNG, JPG, or GIF. Max 5MB.</p>
          </div>
        </div>
      </div>

      {/* Business Info Form */}
      <div className="bg-gray-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white mb-2">Business Info</h2>
        {[
          { label: 'Business Name', key: 'business_name' },
          { label: 'Industry', key: 'industry' },
          { label: 'Website', key: 'website' },
          { label: 'Phone', key: 'phone' },
          { label: 'Email', key: 'email' },
          { label: 'City', key: 'city' },
          { label: 'State', key: 'state' },
          { label: 'ZIP', key: 'zip' },
        ].map(({ label, key }) => (
          <div key={key}>
            <label className="block text-sm text-gray-400 mb-1">{label}</label>
            <input
              type="text"
              value={form[key as keyof typeof form]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        {message && <p className="text-sm text-green-400">{message}</p>}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
        >
          {saving ? 'Saving...' : 'Save Business Profile'}
        </button>
      </div>
    </div>
  )
}
