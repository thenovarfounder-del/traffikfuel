const fs = require('fs');
const path = 'src/app/onboarding/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add businessName and city state variables
content = content.replace(
  "const [error, setError] = useState('')",
  "const [error, setError] = useState('')\n  const [businessName, setBusinessName] = useState('')\n  const [city, setCity] = useState('')"
);

// 2. Load businessName and city from existing profile
content = content.replace(
  "setWebsiteUrl(bp.website || '')",
  "setWebsiteUrl(bp.website || '')\n        setBusinessName(bp.business_name && bp.business_name !== 'My Business' ? bp.business_name : '')\n        setCity(bp.city || '')"
);

// 3. Add name/city fields above website URL input in Step 2
content = content.replace(
  `{!analyzeDone && (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Website URL</label>
                  <input type="text" className="ob-input" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourbusiness.com"
                    style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }} />
                  {analyzeError && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '8px' }}>{analyzeError}</p>}
                </div>
              )}`,
  `{!analyzeDone && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Business Name</label>
                      <input type="text" className="ob-input" value={businessName} onChange={e => setBusinessName(e.target.value)}
                        placeholder="Joe\u2019s Plumbing"
                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>City & State</label>
                      <input type="text" className="ob-input" value={city} onChange={e => setCity(e.target.value)}
                        placeholder="Tampa, FL"
                        style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Website URL</label>
                  <input type="text" className="ob-input" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourbusiness.com"
                    style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }} />
                  {analyzeError && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '8px' }}>{analyzeError}</p>}
                </div>
              )}`
);

// 4. Save businessName and city in handleAnalyze upsert
content = content.replace(
  `const { data: bp } = await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl,
      business_name: 'My Business',
      industry: 'Business',
      platforms: [],
      auto_mode: true,
    }, { onConflict: 'user_id' }).select().single()`,
  `const { data: bp } = await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl,
      business_name: businessName || 'My Business',
      city: city || '',
      industry: 'Business',
      platforms: [],
      auto_mode: true,
    }, { onConflict: 'user_id' }).select().single()`
);

// 5. Save businessName and city in savePlatformsAndGenerate upsert
content = content.replace(
  `await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl || '',
      business_name: 'My Business',
      industry: 'Business',
      platforms,
      auto_mode: true,
    }, { onConflict: 'user_id' })`,
  `await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl || '',
      business_name: businessName || 'My Business',
      city: city || '',
      industry: 'Business',
      platforms,
      auto_mode: true,
    }, { onConflict: 'user_id' })`
);

fs.writeFileSync(path, content);
console.log('SUCCESS - business name and city fields added to onboarding');