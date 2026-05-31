const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

cal = cal.replace(
  `  async function deleteEvent(id) {
    await supabase.from('content_calendar').delete().eq('id', id)
    loadEvents(); setSelected(null)
  }`,
  `  async function deleteEvent(id) {
    await supabase.from('content_calendar').delete().eq('id', id)
    await loadEvents()
  }`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- delete fix applied');