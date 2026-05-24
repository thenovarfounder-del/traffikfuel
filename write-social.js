const fs = require('fs')

const additions = `
NEXT_PUBLIC_SUPABASE_URL=https://ehjhsbrcbtqcvmgzjzkm.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoamhzYnJjYnRxY3ZtZ3pqemttIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzkwNzAyNCwiZXhwIjoyMDkzNDgzMDI0fQ.JooyTIK4dPUsLoFw-l-delBU9DtSvBC1_-srK4kp4co
`

const envPath = '.env.local'
const current = fs.readFileSync(envPath, 'utf8')
let updated = current

if (!current.includes('NEXT_PUBLIC_SUPABASE_URL')) {
  updated += '\nNEXT_PUBLIC_SUPABASE_URL=https://ehjhsbrcbtqcvmgzjzkm.supabase.co'
  console.log('Added: NEXT_PUBLIC_SUPABASE_URL')
} else {
  console.log('NEXT_PUBLIC_SUPABASE_URL already exists')
}

if (!current.includes('SUPABASE_SERVICE_ROLE_KEY')) {
  updated += '\nSUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoamhzYnJjYnRxY3ZtZ3pqemttIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzkwNzAyNCwiZXhwIjoyMDkzNDgzMDI0fQ.JooyTIK4dPUsLoFw-l-delBU9DtSvBC1_-srK4kp4co'
  console.log('Added: SUPABASE_SERVICE_ROLE_KEY')
} else {
  console.log('SUPABASE_SERVICE_ROLE_KEY already exists')
}

fs.writeFileSync(envPath, updated)
console.log('Written: .env.local')