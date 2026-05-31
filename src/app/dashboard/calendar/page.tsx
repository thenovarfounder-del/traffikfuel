// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const COLORS = {
  blog: '#E8610A',
  facebook: '#1877F2',
  instagram: '#E1306C',
  tiktok: '#010101',
  twitter: '#000000',
  linkedin: '#0A66C2',
  google: '#4285F4',
  social: '#8B5CF6',
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

export default function ContentCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selected, setSelected] = useState(null)
  const [events, setEvents] = useState({})
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newType, setNewType] = useState('blog')
  const [newPlatform, setNewPlatform] = useState('')
  const [newStatus, setNewStatus] = useState('scheduled')
  const [newDate, setNewDate] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadEvents()
  }, [currentMonth, currentYear])

  async function loadEvents() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }

    const startDate = new Date(currentYear, currentMonth, 1).toISOString()
    const endDate = new Date(currentYear, currentMonth + 1, 0, 23, 59, 59).toISOString()

    const { data } = await supabase
      .from('content_calendar')
      .select('*')
      .eq('user_id', user.id)
      .gte('scheduled_at', startDate)
      .lte('scheduled_at', endDate)
      .order('scheduled_at', { ascending: true })

    const grouped = {}
    if (data) {
      data.forEach(item => {
        const day = new Date(item.scheduled_at).getDate()
        if (!grouped[day]) grouped[day] = []
        grouped[day].push(item)
      })
    }
    setEvents(grouped)
    setLoading(false)
  }

  async function addEvent() {
    if (!newTitle || !newDate) return
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setSaving(false); return }

    await supabase.from('content_calendar').insert({
      user_id: user.id,
      title: newTitle,
      content_type: newType,
      platform: newPlatform || newType,
      status: newStatus,
      scheduled_at: new Date(newDate).toISOString(),
    })

    setNewTitle('')
    setNewType('blog')
    setNewPlatform('')
    setNewStatus('scheduled')
    setNewDate('')
    setShowAddModal(false)
    setSaving(false)
    loadEvents()
  }

  async function deleteEvent(id) {
    await supabase.from('content_calendar').delete().eq('id', id)
    loadEvents()
    setSelected(null)
  }

  async function updateStatus(id, status) {
    await supabase.from('content_calendar').update({ status, published_at: status === 'published' ? new Date().toISOString() : null }).eq('id', id)
    loadEvents()
  }

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
    setSelected(null)
  }

  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
    setSelected(null)
  }

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const selectedEvents = selected ? (events[selected] || []) : []

  const totalEvents = Object.values(events).flat().length
  const publishedCount = Object.values(events).flat().filter(e => e.status === 'published').length
  const scheduledCount = Object.values(events).flat().filter(e => e.status === 'scheduled').length

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '32px 24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '4px' }}>Content Calendar</h1>
            <p style={{ color: '#666', fontSize: '15px' }}>Plan, schedule and track all your content in one place.</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            style={{ background: '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
          >
            + Schedule Content
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Total This Month', value: totalEvents, color: '#111' },
            { label: 'Published', value: publishedCount, color: '#166534' },
            { label: 'Scheduled', value: scheduledCount, color: '#92400e' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px', fontWeight: '600' }}>{stat.label}</p>
              <p style={{ fontSize: '32px', fontWeight: '800', color: stat.color, margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {Object.entries(COLORS).map(([type, color]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', padding: '5px 12px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#444', textTransform: 'capitalize' }}>{type}</span>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid #f0f0f0' }}>
            <button onClick={prevMonth} style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', fontSize: '16px', color: '#555' }}>←</button>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111' }}>{MONTHS[currentMonth]} {currentYear}</h2>
            <button onClick={nextMonth} style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', fontSize: '16px', color: '#555' }}>→</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #f0f0f0' }}>
            {DAYS.map(d => (
              <div key={d} style={{ padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d}</div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={'empty-' + i} style={{ minHeight: '90px', borderRight: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5', background: '#fafafa' }} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
              const isSelected = selected === day
              const dayEvents = events[day] || []
              return (
                <div
                  key={day}
                  onClick={() => setSelected(isSelected ? null : day)}
                  style={{ minHeight: '90px', borderRight: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5', padding: '8px', cursor: 'pointer', background: isSelected ? '#fff8f5' : '#fff', transition: 'background 0.1s' }}
                >
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: isToday ? '#E8610A' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: isToday ? '700' : '400', color: isToday ? '#fff' : '#333' }}>{day}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {dayEvents.slice(0, 2).map((ev, j) => (
                      <div key={j} style={{ background: COLORS[ev.platform] || COLORS[ev.content_type] || '#888', borderRadius: '3px', padding: '2px 5px', fontSize: '10px', color: '#fff', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: ev.status === 'scheduled' ? 0.65 : 1 }}>
                        {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && <div style={{ fontSize: '10px', color: '#888', paddingLeft: '2px' }}>+{dayEvents.length - 2} more</div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {selected && (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#111' }}>
              {MONTHS[currentMonth]} {selected}, {currentYear}
            </h3>
            {selectedEvents.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px', color: '#888' }}>
                <p style={{ fontSize: '15px', marginBottom: '12px' }}>No content scheduled for this day.</p>
                <button onClick={() => { setNewDate(currentYear + '-' + String(currentMonth + 1).padStart(2,'0') + '-' + String(selected).padStart(2,'0')); setShowAddModal(true) }} style={{ background: '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 18px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  + Schedule Content
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedEvents.map((ev, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1px solid #f0f0f0', borderRadius: '10px', borderLeft: '4px solid ' + (COLORS[ev.platform] || COLORS[ev.content_type] || '#888') }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: '600', color: '#111', marginBottom: '2px', fontSize: '14px' }}>{ev.title}</p>
                      <p style={{ fontSize: '12px', color: '#888', textTransform: 'capitalize', margin: 0 }}>{ev.content_type} {ev.platform ? '-- ' + ev.platform : ''}</p>
                      {ev.post_url && <a href={ev.post_url} target='_blank' style={{ fontSize: '12px', color: '#E8610A', textDecoration: 'none' }}>View post</a>}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {ev.status !== 'published' && (
                        <button onClick={() => updateStatus(ev.id, 'published')} style={{ background: '#f0fff4', color: '#166534', border: '1px solid #86efac', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Mark Published</button>
                      )}
                      <span style={{ background: ev.status === 'published' ? '#f0fff4' : '#fff8f0', color: ev.status === 'published' ? '#166534' : '#92400e', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                        {ev.status}
                      </span>
                      <button onClick={() => deleteEvent(ev.id)} style={{ background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showAddModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '480px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px', color: '#111' }}>Schedule Content</h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Title</label>
                <input type='text' value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='e.g. Top 10 SEO Tips' style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Content Type</label>
                <select value={newType} onChange={e => setNewType(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
                  <option value='blog'>Blog Post</option>
                  <option value='social'>Social Media</option>
                  <option value='google'>Google Business Post</option>
                </select>
              </div>

              {newType === 'social' && (
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Platform</label>
                  <select value={newPlatform} onChange={e => setNewPlatform(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
                    <option value=''>All Platforms</option>
                    <option value='facebook'>Facebook</option>
                    <option value='instagram'>Instagram</option>
                    <option value='tiktok'>TikTok</option>
                    <option value='twitter'>X / Twitter</option>
                    <option value='linkedin'>LinkedIn</option>
                  </select>
                </div>
              )}

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Status</label>
                <select value={newStatus} onChange={e => setNewStatus(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
                  <option value='scheduled'>Scheduled</option>
                  <option value='draft'>Draft</option>
                  <option value='published'>Published</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Date</label>
                <input type='date' value={newDate} onChange={e => setNewDate(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '11px', background: '#f5f5f5', color: '#333', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Cancel</button>
                <button onClick={addEvent} disabled={saving || !newTitle || !newDate} style={{ flex: 1, padding: '11px', background: saving ? '#ccc' : '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  {saving ? 'Saving...' : 'Schedule'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
