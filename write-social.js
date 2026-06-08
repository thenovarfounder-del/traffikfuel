const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Replace desktop upgrade nudge with powerful version
content = content.replace(
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
                )}`,
  `                  <div style={{ background: 'linear-gradient(135deg,#1a0800,#0a0400)', border: '2px solid #E8610A', borderRadius: '10px', padding: '12px', marginBottom: '8px', position: 'relative', overflow: 'hidden', animation: 'nudgePulse 2.5s ease-in-out infinite' }}>
                    <style>{\`
                      @keyframes nudgePulse { 0%,100%{box-shadow:0 0 8px rgba(232,97,10,0.3)} 50%{box-shadow:0 0 20px rgba(232,97,10,0.7)} }
                      @keyframes nudgeShimmer { 0%{left:-100%} 60%,100%{left:130%} }
                      .nudge-btn { position:relative; overflow:hidden; }
                      .nudge-btn::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:rgba(255,255,255,0.2); transform:skewX(-20deg); animation:nudgeShimmer 2s ease-in-out infinite; }
                    \`}</style>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,transparent,#E8610A,#ff8c42,#E8610A,transparent)' }} />
                    <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'DM Sans, sans-serif' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\udd25 Your competitors are ahead' : '\u26a1 You\u2019re one step away'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 800, marginBottom: '2px', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>
                      {userPlan === 'free' || userPlan === 'trial' ? 'Automate everything.\nStop losing ground.' : 'AI Agents. 24/7. Hands-off.'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? 'From $47/mo \u2014 less than 1 hr agency time' : '$97/mo \u2014 pays for itself with 1 client'}
                    </div>
                    <Link href="/pricing" className="nudge-btn" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '9px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 900, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 16px rgba(232,97,10,0.6)', letterSpacing: '.02em' }}>
                      {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\ude80 Unlock Now \u2014 $47/mo \u2192' : '\u26a1 Go Pro Now \u2014 $97/mo \u2192'}
                    </Link>
                  </div>
                )}`
);

// Replace mobile upgrade nudge with powerful version
content = content.replace(
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
              </div>`,
  `              <div style={{ background: 'linear-gradient(135deg,#1a0800,#0a0400)', border: '2px solid #E8610A', borderRadius: '10px', padding: '12px', marginBottom: '10px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 16px rgba(232,97,10,0.4)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,transparent,#E8610A,#ff8c42,#E8610A,transparent)' }} />
                <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\udd25 Your competitors are ahead' : '\u26a1 You\u2019re one step away'}
                </div>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: 800, marginBottom: '2px', lineHeight: 1.3 }}>
                  {userPlan === 'free' || userPlan === 'trial' ? 'Automate everything.' : 'AI Agents. 24/7. Hands-off.'}
                </div>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? 'From $47/mo \u2014 less than 1 hr agency time' : '$97/mo \u2014 pays for itself with 1 client'}
                </div>
                <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px', borderRadius: '6px', fontSize: '12px', fontWeight: 900, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 16px rgba(232,97,10,0.6)' }}>
                  {userPlan === 'free' || userPlan === 'trial' ? '\ud83d\ude80 Unlock Now \u2014 $47/mo \u2192' : '\u26a1 Go Pro Now \u2014 $97/mo \u2192'}
                </Link>
              </div>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Sidebar upgrade nudge — pulsing glow, shimmer button, urgency copy');