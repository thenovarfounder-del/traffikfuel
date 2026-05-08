const fs = require('fs');
const content = `import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: '2024-06-20',
});
`;
fs.writeFileSync('src/lib/stripe.ts', content);
console.log('done');
