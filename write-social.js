const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\faq\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix wrong pricing
content = content.replace(
  'Traffikora starts at $97 per month for the Starter plan, which covers one business location. The Pro plan is $197 per month for up to 3 locations. The Agency plan is $797 per month for up to 20 locations. Enterprise is $1,497 per month for unlimited locations and custom needs.',
  'Traffikora offers a Free plan at $0 forever with 3 blog posts per month. The Starter plan is $47 per month for unlimited blogs and social content. The Pro plan is $97 per month and adds AI Agents, Auto Mode, TikTok and YouTube. The Agency plan is $297 per month for up to 10 clients. Enterprise is $997 per month for unlimited clients and custom AI training.'
);

// Fix free trial language in CTA
content = content.replace(
  'Free 7-day trial. No no credit card required. Cancel anytime.',
  'Free plan available. No credit card required. Cancel anytime.'
);

// Fix "No no credit card"
content = content.replace(/No no credit card/g, 'No credit card');

// Fix "Free plan available" used awkwardly in getting started
content = content.replace(
  'You can start your Free plan available with just your email address. You will not be charged anything until your trial ends and you choose to continue.',
  'You can start your free plan with just your email address. No credit card required ever on the free plan.'
);

// Fix refund answer
content = content.replace(
  'We offer a Free plan available so you can experience Traffikora before being charged. If you have a billing issue after your trial, contact our support team and we will work with you to make it right.',
  'We offer a free plan so you can experience Traffikora before being charged. If you have a billing issue after upgrading, contact our support team within 30 days and we will make it right.'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: FAQ page fixed');