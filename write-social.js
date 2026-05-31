const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

cal = cal.replace(
  `  async function loadConnectedPlatforms() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('social_accounts')
      .select('platform')
      .eq('user_id', user.id)
    const platforms = data ? data.map(d => d.platform.toLowerCase()) : []
    const { data: wp } = await supabase
      .from('wordpress_connections')
      .select('id')
      .eq('user_id', user.id)
      .single()
    if (wp) platforms.push('wordpress')
    setConnectedPlatforms(platforms)
  }`,
  `  async function loadConnectedPlatforms() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('business_profiles')
      .select('platforms')
      .eq('user_id', user.id)
      .single()
    setConnectedPlatforms(data?.platforms || [])
  }`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- calendar reads from business_profiles platforms');