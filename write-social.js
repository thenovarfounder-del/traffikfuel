const fs = require('fs');

// Fix 1 — Settings page: read and save city from bp.city not bp.phone
let settings = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', 'utf8');

settings = settings.replace(
  `setCity(data.phone || '')`,
  `setCity(data.city || data.phone || '')`
);

settings = settings.replace(
  `const { error: upsertError } = await supabase.from('business_profiles').upsert({ user_id: user.id, business_name: businessName, industry, website, phone: city, auto_mode: autoMode, platforms }, { onConflict: 'user_id' })`,
  `const { error: upsertError } = await supabase.from('business_profiles').upsert({ user_id: user.id, business_name: businessName, industry, website, city: city, phone: city, auto_mode: autoMode, platforms }, { onConflict: 'user_id' })`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', settings, 'utf8');
console.log('SUCCESS: Settings page — city now reads and saves to bp.city');

// Fix 2 — Blog generator reads city from bp.city not bp.phone
let boost = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', 'utf8');
boost = boost.replace(
  `const city = bp?.phone || 'your local area'`,
  `const city = bp?.city || bp?.phone || 'your local area'`
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', boost, 'utf8');
console.log('SUCCESS: Boost API — city reads from bp.city');

// Fix 3 — Blog API reads city from bp.city
let blogApi = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\blog\\route.ts', 'utf8');
if (blogApi.includes("bp?.phone")) {
  blogApi = blogApi.replace(/bp\?\.phone/g, "bp?.city || bp?.phone");
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\blog\\route.ts', blogApi, 'utf8');
  console.log('SUCCESS: Blog API — city reads from bp.city');
} else {
  console.log('SKIPPED: Blog API — phone not found, may already be correct');
}