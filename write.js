const fs = require('fs');
const code = `import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: \`Webhook Error: \${err.message}\` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const subscriptionId = session.subscription as string;
        if (!userId || !subscriptionId) break;
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const priceId = subscription.items.data[0].price.id;
        const plan = getPlanFromPriceId(priceId);
        const trialEnd = subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null;
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
        await supabase.from('subscriptions').upsert({
          user_id: userId,
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: subscriptionId,
          plan,
          status: subscription.status,
          trial_end: trialEnd,
          current_period_end: currentPeriodEnd,
          price_id: priceId,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const priceId = subscription.items.data[0].price.id;
        const plan = getPlanFromPriceId(priceId);
        const trialEnd = subscription.trial_end ? new Date(subscription.trial_end * 1000).toISOString() : null;
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
        await supabase.from('subscriptions').upsert({
          stripe_subscription_id: subscription.id,
          plan,
          status: subscription.status,
          trial_end: trialEnd,
          current_period_end: currentPeriodEnd,
          price_id: priceId,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'stripe_subscription_id' });
        break;
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await supabase.from('subscriptions')
          .update({ status: 'canceled', updated_at: new Date().toISOString() })
          .eq('stripe_subscription_id', subscription.id);
        break;
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

function getPlanFromPriceId(priceId: string): string {
  const map: Record<string, string> = {
    'price_1TUvcsHuRIVTwN2fMNH7SjRh': 'starter',
    'price_1TUve7HuRIVTwN2fYvrd1UgG': 'pro',
    'price_1TUvfKHuRIVTwN2fzlinyhei': 'agency',
    'price_1TUvgSHuRIVTwN2fhUwmR6Kb': 'enterprise',
  };
  return map[priceId] || 'unknown';
}
`;
fs.writeFileSync('src/app/api/webhooks/stripe/route.ts', code);
console.log('done');