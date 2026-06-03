const fs = require('fs')
const path = require('path')

const filePath = path.join('src', 'app', 'signup', 'page.tsx')
let content = fs.readFileSync(filePath, 'utf8')

const oldCode = `      if (data.user) {
        await supabase.from('business_profiles').insert({
          user_id: data.user.id,
          business_name: form.businessName,
          industry: form.industry,
          city: form.city,
          phone: form.phone
        })`

const newCode = `      if (data.user) {
        // Insert into users table — this is what the app reads for plan/status
        await supabase.from('users').upsert({
          id: data.user.id,
          full_name: form.fullName,
          email: form.email,
          status: 'free',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' })

        await supabase.from('business_profiles').insert({
          user_id: data.user.id,
          business_name: form.businessName,
          industry: form.industry,
          city: form.city,
          phone: form.phone
        })`

if (!content.includes(oldCode)) {
  console.log('ERROR: Could not find target code. Content may have changed.')
  process.exit(1)
}

content = content.replace(oldCode, newCode)
fs.writeFileSync(filePath, content)
console.log('SUCCESS: signup/page.tsx updated — users table insert added')