const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Add upgrade nudge above the sign out button in desktop sidebar
content = content.replace(
  `                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    âš¡ Upgrade to Pro â€" $97/mo
                  </Link>
                )}`,
  `                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    \u26a1 Upgrade to Pro \u2014 $97/mo
                  </Link>
                )}
                {(userPlan === 'free' || userPlan === 'trial' || userPlan === 'starter') && (
                  <div style={{ background: 'rgba(232,97,10,0.06)', border: '1px solid rgba(232,97,10,0.15)', borderRadius: '8px', padding: '10px 12px', marginBottom: '8px' }}>
                    <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\udd12 Locked Features' : '\ud83d\udd12 Pro Features Locked'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#666', lineHeight: 1.5, marginBottom: '6px', fontFamily: 'DM Sans, sans-serif' }}>
                      {userPlan === 'free' || userPlan === 'trial'
                        ? 'Social Media, Queue, Calendar, AI Agents + more'
                        : 'AI Agents, LLM Engine, Auto Mode'}
                    </div>
                    <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '6px 10px', borderRadius: '5px', fontSize: '10px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 2px 8px rgba(232,97,10,0.3)' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? 'Unlock \u2014 from $47/mo \u2192' : 'Upgrade to Pro \u2014 $97/mo \u2192'}
                    </Link>
                  </div>
                )}`
);

// Add upgrade nudge in mobile nav too
content = content.replace(
  `            {userPlan === 'starter' && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                âš¡ Upgrade to Pro â€" $97/mo
              </Link>
            )}`,
  `            {userPlan === 'starter' && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                \u26a1 Upgrade to Pro \u2014 $97/mo
              </Link>
            )}
            {(userPlan === 'free' || userPlan === 'trial' || userPlan === 'starter') && (
              <div style={{ background: 'rgba(232,97,10,0.06)', border: '1px solid rgba(232,97,10,0.15)', borderRadius: '8px', padding: '10px 12px', marginBottom: '10px' }}>
                <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\udd12 Locked Features' : '\ud83d\udd12 Pro Features Locked'}
                </div>
                <div style={{ fontSize: '10px', color: '#666', lineHeight: 1.5, marginBottom: '6px' }}>
                  {userPlan === 'free' || userPlan === 'trial'
                    ? 'Social Media, Queue, Calendar, AI Agents + more'
                    : 'AI Agents, LLM Engine, Auto Mode'}
                </div>
                <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? 'Unlock \u2014 from $47/mo \u2192' : 'Upgrade to Pro \u2014 $97/mo \u2192'}
                </Link>
              </div>
            )}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Sidebar upgrade nudge added for free, trial and starter users');