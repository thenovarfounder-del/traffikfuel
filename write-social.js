const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Add upgrade nudge right before the Sign Out button in desktop sidebar
content = content.replace(
`                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    \u00e2\u009a\u00a1 Upgrade to Pro \u00e2\u0080\u0094 $97/mo
                  </Link>
                )}`,
`                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    \u26a1 Upgrade to Pro \u2014 $97/mo
                  </Link>
                )}
                {(userPlan === 'free' || userPlan === 'trial' || userPlan === 'starter') && (
                  <Link href="/pricing" style={{ display: 'block', textDecoration: 'none', marginBottom: '8px' }}>
                    <div style={{ background: '#E8610A', borderRadius: '10px', padding: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(232,97,10,0.6)' }}>
                      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                      <div style={{ fontSize: '18px', marginBottom: '4px' }}>{userPlan === 'starter' ? '\u26a1' : '\ud83d\ude80'}</div>
                      <div style={{ fontSize: '12px', color: '#fff', fontWeight: 900, marginBottom: '3px', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>
                        {userPlan === 'starter' ? 'AI Agents 24/7' : 'Competitors pulling ahead'}
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.85)', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>
                        {userPlan === 'starter' ? 'Go fully hands-off from $97/mo' : 'Automate everything from $47/mo'}
                      </div>
                      <div style={{ background: '#fff', color: '#E8610A', padding: '7px', borderRadius: '6px', fontSize: '11px', fontWeight: 900, textAlign: 'center', fontFamily: 'DM Sans, sans-serif' }}>
                        {userPlan === 'starter' ? 'Go Pro Now \u2192' : 'Unlock Now \u2192'}
                      </div>
                    </div>
                  </Link>
                )}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Upgrade nudge added');