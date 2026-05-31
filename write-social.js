const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

cal = cal.replace(
  `  async function addEvent() {
    if (!newTitle || !newDate) return
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setSaving(false); return }

    const platformsToSave = newType === 'social' ? newPlatforms.join(',') : newType
    const { data } = await supabase.from('content_calendar').insert({
      user_id: user.id,
      title: newTitle,
      content_type: newType,
      platform: platformsToSave,
      status: newStatus,
      scheduled_at: new Date(newDate).toISOString(),
    })

    setNewTitle('')
    setNewType('blog')
    setNewPlatforms([])
    setNewStatus('scheduled')
    setNewDate('')
    setShowAddModal(false)
    setSaving(false)
    loadEvents()
  }`,
  `  async function addEvent() {
    if (!newTitle || !newDate) return
    setSaving(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setSaving(false); return }

      const platformsToSave = newType === 'social' ? newPlatforms.join(',') : newType
      const parts = newDate.split('-')
      const scheduledDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0)

      const { error } = await supabase.from('content_calendar').insert({
        user_id: user.id,
        title: newTitle,
        content_type: newType,
        platform: platformsToSave,
        status: newStatus,
        scheduled_at: scheduledDate.toISOString(),
      })

      if (error) { console.error('Save error:', error); setSaving(false); return }

      setNewTitle('')
      setNewType('blog')
      setNewPlatforms([])
      setNewStatus('scheduled')
      setNewDate('')
      setShowAddModal(false)
      loadEvents()
    } catch(e) {
      console.error('addEvent error:', e)
    }
    setSaving(false)
  }`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- addEvent fixed');