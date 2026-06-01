const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update proof line price reference
home = home.replace(
  'Starts at $97/mo',
  'Free to start'
);

// Update comparison table price
home = home.replace(
  'From $97/mo',
  'Free to start'
);

// Update the entire pricing grid section on homepage
home = home.replace(
  `<div class="pricing-grid"><div class="plan"><div class="plan-name plan-name-light">Starter</div><div class="plan-price"><sup>$</sup>97<sub>/mo</sub></div><div class="plan-desc">Perfect for solo business owners ready to automate their marketing.</div><ul class="plan-features"><li>Blog + social automation</li><li>Google SEO tools</li><li>1 website connected</li><li>AI content generation</li><li>7-day free trial</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=starter'">Start Free Trial</button></div><div class="plan plan-featured"><div class="plan-badge">Most Popular</div><div class="plan-name">Pro</div><div class="plan-price plan-price-light"><sup style="color:#aaa">$</sup>197<sub>/mo</sub></div><div class="plan-desc plan-desc-light">Full automation for serious business owners who want it all.</div><ul class="plan-features plan-features-light"><li>Everything in Starter</li><li>TikTok + YouTube push</li><li>AI engine optimization</li><li>Reddit amplifier</li><li>Priority support</li></ul><button class="plan-btn plan-btn-featured" onclick="window.location.href='/signup?plan=pro'">Start Free Trial</button></div><div class="plan"><div class="plan-name plan-name-light">Agency</div><div class="plan-price"><sup>$</sup>797<sub>/mo</sub></div><div class="plan-desc">Manage multiple clients from one powerful dashboard.</div><ul class="plan-features"><li>Everything in Pro</li><li>Up to 10 client accounts</li><li>White-label reports</li><li>Client management tools</li><li>Dedicated support</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=agency'">Start Free Trial</button></div><div class="plan"><div class="plan-name plan-name-light">Enterprise</div><div class="plan-price"><sup>$</sup>1,497<sub>/mo</sub></div><div class="plan-desc">For large agencies scaling across many clients at once.</div><ul class="plan-features"><li>Everything in Agency</li><li>Unlimited client accounts</li><li>Custom integrations</li><li>SLA guarantee</li><li>Dedicated account manager</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=enterprise'">Start Free Trial</button></div></div>`,
  `<div class="pricing-grid" style="grid-template-columns:repeat(5,1fr)"><div class="plan"><div class="plan-name plan-name-light">Free</div><div class="plan-price"><sup style="font-size:18px">$</sup>0<sub>/forever</sub></div><div class="plan-desc">Try Traffikora with no credit card. Get a real taste of AI content before you commit.</div><ul class="plan-features"><li>3 AI blog posts per month</li><li>Preview content before publish</li><li>Access to content dashboard</li><li>No credit card required</li><li>Upgrade anytime</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=free'">Start Free &mdash; No Card</button></div><div class="plan"><div class="plan-name plan-name-light">Starter</div><div class="plan-price"><sup>$</sup>47<sub>/mo</sub></div><div class="plan-desc">Automate your marketing and show up online every single day.</div><ul class="plan-features"><li>Unlimited AI blog posts</li><li>AI social content for Facebook, Instagram, LinkedIn &amp; X</li><li>One-Push Publish to WordPress</li><li>Content Calendar &amp; Queue</li><li>Manual publishing controls</li><li>1 website connected</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=starter'">Get Started</button></div><div class="plan plan-featured"><div class="plan-badge">Most Popular</div><div class="plan-name">Pro</div><div class="plan-price plan-price-light"><sup style="color:#aaa">$</sup>97<sub>/mo</sub></div><div class="plan-desc plan-desc-light">Fully hands-off. AI agents run every morning at 6am and handle everything.</div><ul class="plan-features plan-features-light"><li>Everything in Starter</li><li>AI Agents run daily at 6am automatically</li><li>Auto Mode &mdash; fully hands-off</li><li>TikTok + YouTube Shorts publishing</li><li>AI Engine Optimization &mdash; ChatGPT, Claude, Gemini</li><li>Advanced analytics</li></ul><button class="plan-btn plan-btn-featured" onclick="window.location.href='/signup?plan=pro'">Start Pro</button></div><div class="plan"><div class="plan-name plan-name-light">Agency</div><div class="plan-price"><sup>$</sup>297<sub>/mo</sub></div><div class="plan-desc">Manage up to 10 clients. White-label it and bill whatever you want.</div><ul class="plan-features"><li>Everything in Pro</li><li>Up to 10 client accounts</li><li>White-label dashboard</li><li>Client management portal</li><li>Bulk content generation</li><li>Agency analytics overview</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=agency'">Start Agency Plan</button></div><div class="plan"><div class="plan-name plan-name-light">Enterprise</div><div class="plan-price"><sup>$</sup>997<sub>/mo</sub></div><div class="plan-desc">Unlimited clients, custom AI training, dedicated account manager.</div><ul class="plan-features"><li>Everything in Agency</li><li>Unlimited client accounts</li><li>Custom AI voice per client</li><li>Google Search Console integration</li><li>SLA uptime guarantee</li><li>Dedicated account manager</li></ul><button class="plan-btn" onclick="window.location.href='/contact'">Contact Us</button></div></div>`
);

// Update pricing subtitle
home = home.replace(
  'Credit card required &mdash; No charge for 7 days &mdash; Cancel anytime',
  'Free plan available &mdash; No card needed &mdash; Paid plans from $47/mo &mdash; Cancel anytime'
);

// Update ROI math starting price
home = home.replace(
  '<div class="roi-math-num">$97</div><div class="roi-math-lbl">Starting price per month</div>',
  '<div class="roi-math-num">$47</div><div class="roi-math-lbl">Starting price per month</div>'
);

// Update bottom CTA notes
home = home.replace(
  '<span class="cta-note-item">Credit card required</span><span class="cta-note-item">No charge for 7 days</span><span class="cta-note-item">Cancel anytime</span>',
  '<span class="cta-note-item">Free plan available</span><span class="cta-note-item">Paid plans from $47/mo</span><span class="cta-note-item">Cancel anytime</span>'
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - homepage pricing updated');