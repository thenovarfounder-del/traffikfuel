const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Fix 1 — More powerful upgrade nudge desktop
content = content.replace(
  `                  <div style={{ background: 'rgba(232,97,10,0.06)', border: '1px solid rgba(232,97,10,0.15)', borderRadius: '8px', padding: '10px 12px', marginBottom: '8px' }}>
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
                )}`,
  `                  <div style={{ background: 'linear-gradient(135deg,#1a0800,#0d0600)', border: '1px solid rgba(232,97,10,0.5)', borderRadius: '10px', padding: '12px', marginBottom: '8px' }}>
                    <div style={{ fontSize: '11px', color: '#fff', fontWeight: 800, marginBottom: '2px', fontFamily: 'DM Sans, sans-serif' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\ude80 Unlock Full Power' : '\u26a1 Go Pro Today'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 600, lineHeight: 1.5, marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>
                      {userPlan === 'free' || userPlan === 'trial'
                        ? 'AI posts daily to all platforms automatically'
                        : 'AI Agents run 24/7 \u2014 fully hands-off'}
                    </div>
                    <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 800, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 12px rgba(232,97,10,0.5)' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? '\u26a1 Start at $47/mo \u2192' : '\u26a1 Upgrade to Pro $97/mo \u2192'}
                    </Link>
                  </div>
                )}`
);

// Fix 2 — More powerful upgrade nudge mobile
content = content.replace(
  `              <div style={{ background: 'rgba(232,97,10,0.06)', border: '1px solid rgba(232,97,10,0.15)', borderRadius: '8px', padding: '10px 12px', marginBottom: '10px' }}>
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
              </div>`,
  `              <div style={{ background: 'linear-gradient(135deg,#1a0800,#0d0600)', border: '1px solid rgba(232,97,10,0.5)', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
                <div style={{ fontSize: '12px', color: '#fff', fontWeight: 800, marginBottom: '2px', fontFamily: 'DM Sans, sans-serif' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\ude80 Unlock Full Power' : '\u26a1 Go Pro Today'}
                </div>
                <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 600, lineHeight: 1.5, marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>
                  {userPlan === 'free' || userPlan === 'trial'
                    ? 'AI posts daily to all platforms automatically'
                    : 'AI Agents run 24/7 \u2014 fully hands-off'}
                </div>
                <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '12px', fontWeight: 800, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 12px rgba(232,97,10,0.5)' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? '\u26a1 Start at $47/mo \u2192' : '\u26a1 Upgrade to Pro $97/mo \u2192'}
                </Link>
              </div>`
);

// Fix 3 — Brighter sign out button desktop
content = content.replace(
  `<button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              {collapsed ? '\u21a9' : 'Sign Out'}`,
  `<button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#aaa', border: '1px solid #333', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              {collapsed ? '\u21a9' : 'Sign Out'}`
);

// Fix 4 — Brighter sign out button mobile
content = content.replace(
  `<button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: '10px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              Sign Out`,
  `<button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#aaa', border: '1px solid #333', padding: '10px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              Sign Out`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Sidebar upgrade nudge powerful, sign out button brighter');