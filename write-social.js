const fs = require('fs')

const content = `// @ts-nocheck
export const dynamic = 'force-dynamic'

const industryData = {
  salon: { label:'Salon / Spa', headline:'Here\u2019s How Traffikora Fills Your Chair Every Week', opener:'your salon is competing for attention every single day \u2014 on Instagram, Google, and now AI search. Most salon owners spend hours posting manually. The ones winning locally have automated it.', stat:'340+ salons and spas are already on Traffikora', competitor:'While you\u2019re reading this, salons in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Your Instagram, Facebook, and Google presence runs itself \u2014 no more manual posting', benefit2:'AI agents publish fresh content every morning at 6am while you focus on clients', benefit3:'Show up when people search \u201csalon near me\u201d on Google AND ChatGPT', testimonial:'I set it up on a Monday. By Thursday I had 4 new booking requests from Google.', testimonialAuthor:'Melissa R., Salon Owner, Nashville', plan:'Starter at $47/mo', planDetail:'Unlimited posts across every platform. Review before anything goes live.', ctaText:'Start My Free Salon Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You chatted with me a couple days ago about growing your salon\u2019s online presence. I wanted to check in \u2014 did you get a chance to look over the plan I sent?', day2Body:'A lot of salon owners tell me they kept meaning to set it up but got busy with clients. Totally get it. That\u2019s actually exactly why Traffikora exists \u2014 so your marketing runs even when you\u2019re heads-down in the chair.', day5Subject:'Your competitors posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I checked in on the salon marketing landscape in your area this week.', day5Body:'The salons winning new clients right now aren\u2019t the ones with the biggest budgets \u2014 they\u2019re the ones showing up consistently online. While you\u2019ve been focused on clients (as you should be), other salons have been publishing content every single day automatically. That\u2019s the gap Traffikora closes.' },
  hvac: { label:'HVAC / Plumbing', headline:'Here\u2019s How Traffikora Gets Your Phone Ringing', opener:'when someone\u2019s heat goes out at midnight and they ask Google or ChatGPT for an emergency HVAC company \u2014 the business that shows up first gets the call. Traffikora makes sure that\u2019s you.', stat:'210+ HVAC and plumbing companies are already on Traffikora', competitor:'While you\u2019re reading this, HVAC companies in your market are publishing hyperlocal SEO content every single day. Traffikora is how they do it.', benefit1:'Show up first when someone searches emergency HVAC near me on Google or ChatGPT', benefit2:'AI agents publish hyperlocal SEO content every morning \u2014 no work on your end', benefit3:'Outrank competitors who are spending thousands on ads \u2014 organically', testimonial:'We went from page 3 to page 1 on Google in 6 weeks. Phone has not stopped.', testimonialAuthor:'Dave K., HVAC Owner, Phoenix', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization covers Google, ChatGPT, Gemini, Claude and Perplexity. Fully hands-off.', ctaText:'Start My Free HVAC Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about getting your phone ringing more consistently. I sent over a plan \u2014 did you get a chance to look at it?', day2Body:'Most HVAC owners I talk to say the same thing: they know they need to show up online more, but between jobs and managing the team, there\u2019s just no time. That\u2019s the whole point of Traffikora \u2014 it runs while you\u2019re running calls.', day5Subject:'Your competitors posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to be straight with you about what\u2019s happening in your market right now.', day5Body:'HVAC companies in your area are publishing hyperlocal SEO content every single day automatically. When someone\u2019s heat goes out at 2am and they search Google or ask ChatGPT \u2014 they find the businesses that have been showing up consistently. Every day you wait is another day a competitor builds that edge.' },
  law: { label:'Law Firm', headline:'Here\u2019s How Traffikora Keeps Your Firm Visible 24/7', opener:'clients research lawyers online before ever picking up the phone. If your firm is not showing up on Google AND AI assistants like ChatGPT and Gemini, you are invisible to the clients who are ready to hire.', stat:'180+ law firms are already on Traffikora', competitor:'While you\u2019re reading this, competing firms in your market are publishing SEO content automatically every day. Traffikora is how they do it.', benefit1:'Clients find your firm first \u2014 on Google AND ChatGPT, Gemini, Claude and Perplexity', benefit2:'Daily content published automatically \u2014 never think about marketing again', benefit3:'Build authority and trust before a client ever calls you', testimonial:'We rank on page 1 for 14 keywords now. Traffikora did that in 90 days.', testimonialAuthor:'James T., Personal Injury Attorney, Atlanta', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus Auto Mode. Your marketing runs itself while you focus on cases.', ctaText:'Start My Free Law Firm Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about keeping your firm more visible online. I sent over a personalized plan \u2014 did you get a moment to review it?', day2Body:'I know your time is split between cases, clients, and everything else that comes with running a firm. That\u2019s exactly why Traffikora works the way it does \u2014 set it once and your marketing runs every day without you touching it.', day5Subject:'Competing firms published 10 pieces of content this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to share something important about what\u2019s happening in your market.', day5Body:'Law firms that invest in consistent online content are building something real \u2014 authority, trust, and search visibility that compounds every month. Clients research attorneys before they ever call. The firms showing up consistently on Google and AI assistants are getting those calls. The ones that aren\u2019t are invisible \u2014 no matter how good they are.' },
  dental: { label:'Dental Office', headline:'Here\u2019s How Traffikora Fills Your Patient Schedule', opener:'your schedule is full \u2014 you should not have to think about marketing. But patients are searching for dentists online every day, and the practices showing up consistently are the ones getting the calls.', stat:'220+ dental offices are already on Traffikora', competitor:'While you\u2019re reading this, dental practices in your area are publishing SEO content automatically every morning. Traffikora is how they do it.', benefit1:'Daily SEO content published automatically \u2014 zero time investment from you', benefit2:'Show up when patients search for dentists on Google and AI assistants', benefit3:'Consistent content drives new patient inquiries every single month', testimonial:'I had 11 new patient inquiries in my first 60 days. I did not touch a thing.', testimonialAuthor:'Dr. Sarah M., Dentist, Chicago', plan:'Pro at $97/mo', planDetail:'Auto Mode means you never touch it. AI runs every morning at 6am.', ctaText:'Start My Free Dental Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about bringing in more patients consistently. I put together a plan for your practice \u2014 did you get a chance to look it over?', day2Body:'I know how busy a dental practice gets. Between patients, staff, and everything that comes with running the office \u2014 marketing is the last thing you have time for. That\u2019s the whole idea behind Traffikora. Set it up once, and new patient content runs every single day without you.', day5Subject:'Other dental practices posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to share something about what\u2019s happening in your local market right now.', day5Body:'Dental practices that publish consistent SEO content are the ones new patients find first. When someone moves to your area and searches for a dentist \u2014 or asks ChatGPT for a recommendation \u2014 the practices showing up are the ones that have been publishing consistently for months. Every week that passes is another week they build that advantage.' },
  restaurant: { label:'Restaurant', headline:'Here\u2019s How Traffikora Brings More Diners Through Your Door', opener:'people decide where to eat based on what they see online. Restaurants that post consistently \u2014 daily specials, events, behind the scenes \u2014 win the local crowd. Traffikora does all of that automatically.', stat:'290+ restaurants are already on Traffikora', competitor:'While you\u2019re reading this, restaurants near you are posting daily content automatically across every platform. Traffikora is how they do it.', benefit1:'Daily specials, events, and promos posted automatically across every platform', benefit2:'Build a loyal local following without spending hours on social media', benefit3:'Show up when hungry customers search locally on Google and AI engines', testimonial:'Our Instagram following doubled in 8 weeks. Foot traffic is up 30%.', testimonialAuthor:'Tony R., Restaurant Owner, Miami', plan:'Starter at $47/mo', planDetail:'Unlimited posts across Facebook, Instagram, LinkedIn and X. Upgrade to Pro for full automation.', ctaText:'Start My Free Restaurant Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about getting more people through the door consistently. I sent over a plan \u2014 did you get a chance to look at it?', day2Body:'Running a restaurant is full-on \u2014 I get it. Between service, staff, and the kitchen, social media is the last thing on your mind. Traffikora handles all of it automatically so your restaurant stays visible even on your busiest nights.', day5Subject:'Restaurants near you posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to be real with you about what\u2019s happening in your market.', day5Body:'The restaurants packing their dining rooms right now are the ones people see online every day \u2014 daily specials, events, behind-the-scenes posts across Instagram and Facebook. Traffikora generates and publishes all of that automatically. Every week without it is another week competitors build their local following while yours stays flat.' },
  realestate: { label:'Real Estate', headline:'Here\u2019s How Traffikora Makes You the Go-To Agent in Your Market', opener:'buyers and sellers research agents online before ever reaching out. The agents who publish consistently \u2014 market updates, neighborhood guides, listing spotlights \u2014 are the ones who get called first.', stat:'195+ real estate agents are already on Traffikora', competitor:'While you\u2019re reading this, agents in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Listings, market updates, and neighborhood guides published automatically every day', benefit2:'Get recommended when buyers ask ChatGPT for a local agent', benefit3:'Build organic leads without paid ads \u2014 content works for you 24/7', testimonial:'I closed 2 deals last quarter from clients who found me through Google. Never ran an ad.', testimonialAuthor:'Lisa P., Realtor, Dallas', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus fully automated daily content. Focus on closing, not posting.', ctaText:'Start My Free Real Estate Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about building more consistent leads in your market. I put together a plan for you \u2014 did you get a chance to review it?', day2Body:'I know real estate is all about timing and follow-up \u2014 and that\u2019s exactly what Traffikora does for your online presence. Every day it publishes content that keeps you visible to buyers and sellers who are researching agents right now.', day5Subject:'Agents in your market posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to share what\u2019s happening with agents in your area right now.', day5Body:'The agents getting organic leads from Google and AI assistants are the ones who have been publishing consistently for months. Market updates, neighborhood guides, buyer tips \u2014 all of it building authority that compounds over time. Every week you wait is another week a competitor in your ZIP code gets further ahead.' },
  gym: { label:'Gym / Fitness', headline:'Here\u2019s How Traffikora Grows Your Membership', opener:'your gym is competing against big box chains with massive marketing budgets. The way to win is consistency \u2014 showing up online every single day with content that builds your community and drives new members.', stat:'260+ gyms and fitness studios are already on Traffikora', competitor:'While you\u2019re reading this, gyms in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Workout tips, class schedules, and challenges posted automatically every day', benefit2:'TikTok and YouTube Shorts publishing included \u2014 huge for fitness brands', benefit3:'Build an online community that drives consistent new member signups', testimonial:'I set it up on a Tuesday. By Friday I had 3 new membership inquiries from Google.', testimonialAuthor:'Marcus T., Gym Owner, Atlanta', plan:'Pro at $97/mo', planDetail:'TikTok plus YouTube Shorts plus Auto Mode. Your gym stays active online around the clock.', ctaText:'Start My Free Gym Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'TikTok + YouTube Shorts', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about growing your gym\u2019s membership consistently. I sent over a plan \u2014 did you get a chance to check it out?', day2Body:'Gym owners I talk to all say the same thing: they know content matters, but between training clients and running the floor, there\u2019s just no time to post. Traffikora solves that. It publishes across Instagram, TikTok, and more every day without you lifting a finger.', day5Subject:'Gyms in your area posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to show you what\u2019s happening in the fitness market in your area.', day5Body:'Gyms that build a consistent online presence \u2014 daily workout content, member spotlights, class updates \u2014 are the ones winning new members right now. TikTok and Instagram Reels are driving real foot traffic for fitness brands. Every week without Traffikora is another week a competitor builds that audience while yours stays flat.' },
  medspa: { label:'Med Spa', headline:'Here\u2019s How Traffikora Helps Your Med Spa Compete and Win', opener:'med spa clients do serious research before booking. They are reading reviews, watching content, and asking AI assistants for recommendations. Traffikora makes sure your practice is what they find.', stat:'150+ med spas are already on Traffikora', competitor:'While you\u2019re reading this, competing med spas are publishing content automatically every day. Traffikora is how they do it.', benefit1:'Treatment spotlights, promotions, and educational content published automatically', benefit2:'Rank above larger competitors with daily, consistent, SEO-optimized content', benefit3:'Get recommended when someone asks ChatGPT or Gemini for med spas nearby', testimonial:'We outrank two larger med spas in our city now. Our bookings are up 40%.', testimonialAuthor:'Dr. Amanda K., Med Spa Owner, Scottsdale', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization makes you visible everywhere your clients are searching.', ctaText:'Start My Free Med Spa Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about standing out in a competitive med spa market. I put together a personalized plan \u2014 did you get a chance to look it over?', day2Body:'Med spa clients research heavily before booking \u2014 reviews, content, social media, AI searches. Traffikora makes sure every one of those touchpoints shows your practice. It publishes treatment spotlights, educational content, and promos every day automatically.', day5Subject:'Competing med spas posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to be direct with you about what\u2019s happening in your market.', day5Body:'The med spas winning premium clients right now are the ones showing up everywhere online \u2014 Google, Instagram, and AI assistants like ChatGPT. They\u2019re publishing consistent, beautiful content every single day. That visibility builds trust before a client ever walks in the door. Every week without it is another week a competitor earns that trust instead of you.' },
  agency: { label:'Marketing Agency', headline:'Here\u2019s How Traffikora Lets You Scale Without Adding Headcount', opener:'you are doing content manually for every client \u2014 and it is eating your margins. Traffikora automates the content work so you can take on more clients, deliver better results, and actually grow.', stat:'120+ marketing agencies are already on Traffikora', competitor:'While you\u2019re reading this, competing agencies are using Traffikora to manage more clients with less work. Do not let them get further ahead.', benefit1:'Manage up to 10 clients from one white-label dashboard \u2014 your brand, not ours', benefit2:'Bulk content generation across all clients \u2014 the AI does the work', benefit3:'Agencies on Traffikora typically 3x their client capacity without hiring', testimonial:'I went from 6 clients to 14 in 3 months without hiring anyone. Traffikora is the reason.', testimonialAuthor:'Kevin M., Agency Owner, Austin', plan:'Agency at $297/mo', planDetail:'10 client accounts, white-label dashboard, bulk generation, separate calendars per client.', ctaText:'Start My Free Agency Trial \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'10 white-label client accounts', proFeature2:'Bulk content generation', proFeature3:'Client management portal', day2Subject:'Did you get a chance to look at the Traffikora Agency plan?', day2Opener:'You reached out a couple days ago about scaling your agency without adding headcount. I sent over the Agency plan details \u2014 did you get a chance to review them?', day2Body:'Agency owners who try Traffikora usually say the same thing: they wish they\u2019d started sooner. Managing 10 clients from one white-label dashboard, with AI doing the content work, changes what\u2019s possible for your team without changing your payroll.', day5Subject:'Competing agencies added clients this week without hiring. Here\u2019s how.', day5Opener:'I want to share what agencies using Traffikora are doing right now.', day5Body:'The agencies growing fastest right now aren\u2019t hiring faster \u2014 they\u2019re automating smarter. Traffikora lets them manage more clients with the same team, deliver consistent content at scale, and actually improve their margins. Every week you spend on manual content work is a week a competitor agency uses to take on two more clients.' },
  chiro: { label:'Chiropractic Practice', headline:'Here\u2019s How Traffikora Brings New Patients to Your Practice', opener:'patients search for chiropractors online before ever booking. If you are not showing up consistently on Google and AI assistants, you are losing those patients to practices that are.', stat:'170+ chiropractic practices are already on Traffikora', competitor:'While you\u2019re reading this, chiropractic practices in your area are publishing SEO content automatically every day. Traffikora is how they do it.', benefit1:'Show up when patients search for a chiropractor near them on Google and ChatGPT', benefit2:'Daily content published automatically \u2014 no time investment required', benefit3:'Build trust and authority in your local market with consistent SEO content', testimonial:'New patient calls went up 60% in 90 days. I have not touched the marketing once.', testimonialAuthor:'Dr. Ryan S., Chiropractor, Denver', plan:'Pro at $97/mo', planDetail:'AI Engine Optimization plus Auto Mode. Set it up once, it runs forever.', ctaText:'Start My Free Chiropractic Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'AI Engine Optimization', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about bringing in more new patients consistently. I put together a plan \u2014 did you get a chance to look it over?', day2Body:'I know chiropractic practices run on appointments and referrals \u2014 and that word-of-mouth is huge. But the practices growing fastest right now are also showing up on Google and AI search every single day. Traffikora makes that happen automatically, with zero time investment from you.', day5Subject:'Chiropractic practices in your area posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to share what\u2019s happening in your local market right now.', day5Body:'Patients searching for a chiropractor online go to whoever shows up first and looks most credible. The practices ranking consistently on Google and getting recommended on ChatGPT have been publishing SEO content every day for months. That advantage compounds. Every week without Traffikora is another week a practice down the street builds it instead of you.' },
  auto: { label:'Auto Repair Shop', headline:'Here\u2019s How Traffikora Keeps Your Bays Full', opener:'when someone\u2019s car breaks down and they search for a trustworthy shop nearby \u2014 the shop that shows up first gets the job. Traffikora makes sure that is you, not the dealership down the street.', stat:'140+ auto repair shops are already on Traffikora', competitor:'While you\u2019re reading this, auto shops in your area are publishing hyperlocal SEO content automatically every day. Traffikora is how they do it.', benefit1:'Show up when someone searches for a trusted shop nearby on Google or ChatGPT', benefit2:'Outrank dealerships and chains with hyperlocal SEO content published daily', benefit3:'Get recommended on AI assistants \u2014 your competitors probably are not there yet', testimonial:'We outrank the dealership two miles away on Google now. Bays are booked out 2 weeks.', testimonialAuthor:'Frank D., Auto Shop Owner, Houston', plan:'Pro at $97/mo', planDetail:'Hyperlocal SEO plus AI Engine Optimization. Fully hands-off once set up.', ctaText:'Start My Free Auto Shop Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Hyperlocal SEO content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about keeping your bays full with consistent work. I sent over a plan \u2014 did you get a chance to look at it?', day2Body:'Shop owners I talk to say the same thing: they\u2019re great at fixing cars but hate dealing with marketing. Traffikora is built for exactly that. Set it up once, and hyperlocal SEO content goes out every day automatically \u2014 so you stay ahead of dealerships and chains without thinking about it.', day5Subject:'Auto shops in your area posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to share something important about your local market.', day5Body:'The shops keeping their bays full without running ads are the ones showing up on Google and ChatGPT consistently. Hyperlocal SEO content \u2014 published every day \u2014 is what gets you there. Dealerships have marketing teams doing this around the clock. Traffikora is how independent shops compete and win. Every week without it is another week they build that edge.' },
  other: { label:'Business', headline:'Here\u2019s Your Personalized Traffikora Plan', opener:'whatever your business does, consistent online visibility is what drives growth. Traffikora automates your entire content marketing \u2014 blogs, social media, SEO \u2014 so you can focus on running your business.', stat:'1,000+ local businesses are already on Traffikora', competitor:'While you\u2019re reading this, businesses in your market are publishing content automatically every day. Traffikora is how they do it.', benefit1:'AI writes and publishes your blogs, social content, and SEO automatically every day', benefit2:'Show up on Google AND AI engines like ChatGPT, Gemini, and Perplexity', benefit3:'Set it up in 5 minutes \u2014 the AI handles everything from there', testimonial:'I had no marketing strategy before Traffikora. Now I rank on page 1 and get leads every week.', testimonialAuthor:'Sandra W., Small Business Owner, Orlando', plan:'Free Plan to start', planDetail:'No card needed. 3 blogs a month. See exactly how it works before spending a cent.', ctaText:'Start My Free Marketing Plan \u2192', freeFeature1:'3 AI blog posts/month', freeFeature2:'Content dashboard access', freeFeature3:'No credit card ever', proFeature1:'Unlimited blogs + social content', proFeature2:'AI agents running daily at 6am', proFeature3:'Auto Mode \u2014 fully hands-off', day2Subject:'Did you get a chance to look at your Traffikora plan?', day2Opener:'You reached out a couple days ago about automating your marketing. I sent over a personalized plan \u2014 did you get a chance to look it over?', day2Body:'A lot of business owners tell me they kept meaning to get started but life got busy. Totally understandable. The good news is Traffikora takes about 5 minutes to set up \u2014 and from there the AI handles everything. Blogs, social content, SEO \u2014 all published automatically every day.', day5Subject:'Your competitors posted 10 times this week. Here\u2019s what you\u2019re missing.', day5Opener:'I want to be straight with you about what consistent online content does for a local business.', day5Body:'Businesses that publish regular blogs and social content rank higher on Google, show up in AI search results, and build trust with customers before they ever reach out. That advantage compounds every single month. The businesses in your market doing this automatically are building something you can\u2019t buy with ads. Traffikora is how you start doing the same thing \u2014 today.' }
}

function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '' }

function buildFollowUpHtml(biz, greeting, dayNum) {
  const isDay5 = dayNum === 5
  const subject = isDay5 ? biz.day5Subject : biz.day2Subject
  const opener = isDay5 ? biz.day5Opener : biz.day2Opener
  const body = isDay5 ? biz.day5Body : biz.day2Body
  const urgencyLine = isDay5
    ? 'This is your last nudge from me. I don\u2019t want to clutter your inbox \u2014 but I do want to make sure you\u2019ve seen what\u2019s possible.'
    : 'No pressure at all \u2014 I just want to make sure you have what you need to make the right call for your business.'

  return \`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<tr><td style="background:linear-gradient(135deg,#1a0800,#0d0400);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;border:1px solid #2a1500;border-bottom:none;">
  <table cellpadding="0" cellspacing="0" style="margin:0 auto 20px;"><tr><td style="width:60px;height:60px;background:#111;border-radius:12px;border:2px solid #E8610A;text-align:center;vertical-align:middle;">
    <span style="font-family:Georgia,serif;font-size:36px;font-weight:900;color:#E8610A;line-height:60px;">T</span>
  </td></tr></table>
  <div style="color:#E8610A;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">From Eva at Traffikora</div>
  <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0;line-height:1.3;">\${biz.headline}</h1>
</td></tr>

<tr><td style="background:#111111;padding:36px 40px;border:1px solid #1e1e1e;border-top:none;border-bottom:none;">
  <p style="color:#cccccc;font-size:16px;line-height:1.7;margin:0 0 6px;">Hey \${greeting},</p>
  <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 20px;">\${opener}</p>
  <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 24px;">\${body}</p>

  \${isDay5 ? \`<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:linear-gradient(135deg,#0d0500,#1a0800);border:1px solid #3a1a00;border-radius:10px;padding:14px 20px;text-align:center;">
      <span style="color:#E8610A;font-size:14px;font-weight:700;">\u26a1 \${biz.stat}</span>
    </td></tr>
  </table>\` : ''}

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:22px;">
      <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Eva\u2019s Recommendation</div>
      <div style="color:#ffffff;font-size:20px;font-weight:700;margin-bottom:6px;">\${biz.plan}</div>
      <div style="color:#cccccc;font-size:14px;line-height:1.6;">\${biz.planDetail}</div>
    </td></tr>
  </table>

  <p style="color:#aaaaaa;font-size:14px;line-height:1.7;margin:0 0 24px;">\${urgencyLine}</p>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr><td align="center">
      <a href="https://traffikora.com/signup" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:18px 36px;border-radius:12px;">\${biz.ctaText}</a>
    </td></tr>
  </table>

  <p style="color:#555;font-size:12px;text-align:center;margin:0 0 24px;">No credit card required &nbsp;&bull;&nbsp; Cancel anytime &nbsp;&bull;&nbsp; Setup in 5 minutes</p>

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:16px 18px;">
      <p style="color:#aaaaaa;font-size:14px;line-height:1.7;margin:0;">Questions? Just reply to this email \u2014 I read everything personally.</p>
      <p style="color:#E8610A;font-size:14px;font-weight:600;margin:6px 0 0;">Eva, Traffikora AI Guide</p>
    </td></tr>
  </table>
</td></tr>

<tr><td style="background:#0d0d0d;border:1px solid #1e1e1e;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;">
  <p style="color:#333;font-size:11px;margin:0;">Traffikora \u2014 AI-Powered Marketing for Local Businesses &nbsp;&bull;&nbsp; <a href="https://traffikora.com" style="color:#E8610A;text-decoration:none;">traffikora.com</a> &nbsp;&bull;&nbsp; <a href="mailto:support@traffikora.com" style="color:#E8610A;text-decoration:none;">support@traffikora.com</a></p>
  <p style="color:#222;font-size:11px;margin:8px 0 0;">You received this because you chatted with Eva on Traffikora.com. <a href="https://traffikora.com/unsubscribe" style="color:#444;text-decoration:none;">Unsubscribe</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>\`
}

export async function POST(request) {
  try {
    const { visitorEmail, businessType, visitorName } = await request.json()
    const biz = industryData[businessType] || industryData.other
    const firstName = visitorName ? cap(visitorName.split(' ')[0]) : ''
    const greeting = firstName || 'there'

    // Calculate scheduled times
    const now = new Date()
    const day2Date = new Date(now.getTime() + 48 * 60 * 60 * 1000)
    const day5Date = new Date(now.getTime() + 120 * 60 * 60 * 1000)

    // --- Email 1: Immediate personalized plan (unchanged) ---
    const html = \`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<tr><td style="background:linear-gradient(135deg,#1a0800,#0d0400);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;border:1px solid #2a1500;border-bottom:none;">
  <table cellpadding="0" cellspacing="0" style="margin:0 auto 20px;"><tr><td style="width:60px;height:60px;background:#111;border-radius:12px;border:2px solid #E8610A;text-align:center;vertical-align:middle;">
    <span style="font-family:Georgia,serif;font-size:36px;font-weight:900;color:#E8610A;line-height:60px;">T</span>
  </td></tr></table>
  <div style="color:#E8610A;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">From Eva at Traffikora</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:700;margin:0;line-height:1.3;">\${biz.headline}</h1>
</td></tr>

<tr><td style="background:#111111;padding:36px 40px;border:1px solid #1e1e1e;border-top:none;border-bottom:none;">
  <p style="color:#cccccc;font-size:16px;line-height:1.7;margin:0 0 6px;">Hey \${greeting},</p>
  <p style="color:#cccccc;font-size:15px;line-height:1.7;margin:0 0 24px;">I want to be straight with you \u2014 \${biz.opener}</p>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:linear-gradient(135deg,#0d0500,#1a0800);border:1px solid #3a1a00;border-radius:10px;padding:14px 20px;text-align:center;">
      <span style="color:#E8610A;font-size:14px;font-weight:700;">\u26a1 \${biz.stat}</span>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#1a1a1a;border-left:3px solid #E8610A;border-radius:0 8px 8px 0;padding:14px 18px;">
      <p style="color:#aaaaaa;font-size:14px;line-height:1.6;margin:0;font-style:italic;">\${biz.competitor}</p>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:24px;">
      <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px;">What Traffikora Does For Your \${biz.label}</div>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding-bottom:12px;"><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">\${biz.benefit1}</td>
        </tr></table></td></tr>
        <tr><td style="padding-bottom:12px;"><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">\${biz.benefit2}</td>
        </tr></table></td></tr>
        <tr><td><table cellpadding="0" cellspacing="0"><tr>
          <td style="width:22px;vertical-align:top;color:#E8610A;font-size:16px;font-weight:700;">&#10003;</td>
          <td style="color:#e0e0e0;font-size:14px;line-height:1.6;">\${biz.benefit3}</td>
        </tr></table></td></tr>
      </table>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr>
      <td width="48%" valign="top" style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:18px;">
        <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Free Plan</div>
        <div style="color:#fff;font-size:17px;font-weight:700;margin-bottom:12px;">$0 / forever</div>
        <div style="color:#aaa;font-size:13px;line-height:1.8;">\${biz.freeFeature1}<br>\${biz.freeFeature2}<br>\${biz.freeFeature3}</div>
      </td>
      <td width="4%"></td>
      <td width="48%" valign="top" style="background:linear-gradient(135deg,#1a0800,#0d0500);border:2px solid #E8610A;border-radius:12px;padding:18px;">
        <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Pro Plan \u2605 Popular</div>
        <div style="color:#fff;font-size:17px;font-weight:700;margin-bottom:12px;">$97 / month</div>
        <div style="color:#e0e0e0;font-size:13px;line-height:1.8;">\${biz.proFeature1}<br>\${biz.proFeature2}<br>\${biz.proFeature3}</div>
      </td>
    </tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:linear-gradient(135deg,#1a0800,#0d0500);border:1px solid #E8610A;border-radius:12px;padding:22px;">
      <div style="color:#E8610A;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Eva\u2019s Recommendation For You</div>
      <div style="color:#ffffff;font-size:20px;font-weight:700;margin-bottom:6px;">\${biz.plan}</div>
      <div style="color:#cccccc;font-size:14px;line-height:1.6;">\${biz.planDetail}</div>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr><td style="background:#161616;border:1px solid #222;border-radius:12px;padding:20px 22px;">
      <div style="color:#E8610A;font-size:22px;margin-bottom:8px;">&ldquo;</div>
      <p style="color:#cccccc;font-size:14px;line-height:1.7;margin:0 0 10px;font-style:italic;">\${biz.testimonial}</p>
      <div style="color:#666;font-size:12px;">\${biz.testimonialAuthor}</div>
    </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    <tr><td align="center">
      <a href="https://traffikora.com/signup" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:18px 36px;border-radius:12px;">\${biz.ctaText}</a>
    </td></tr>
  </table>

  <p style="color:#555;font-size:12px;text-align:center;margin:0 0 24px;">No credit card required &nbsp;&bull;&nbsp; Cancel anytime &nbsp;&bull;&nbsp; Setup in 5 minutes</p>

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:10px;padding:16px 18px;">
      <p style="color:#aaaaaa;font-size:14px;line-height:1.7;margin:0;">Have questions? Just hit reply \u2014 I read every message personally. No bots, no tickets. Just me.</p>
      <p style="color:#E8610A;font-size:14px;font-weight:600;margin:6px 0 0;">Eva, Traffikora AI Guide</p>
    </td></tr>
  </table>
</td></tr>

<tr><td style="background:#0d0d0d;border:1px solid #1e1e1e;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;">
  <p style="color:#666;font-size:13px;line-height:1.7;margin:0 0 16px;"><strong style="color:#888;">P.S.</strong> The free plan takes 5 minutes to set up and requires no credit card. Your competitors are not waiting \u2014 and neither should you.</p>
  <p style="color:#333;font-size:11px;margin:0;">Traffikora \u2014 AI-Powered Marketing for Local Businesses &nbsp;&bull;&nbsp; <a href="https://traffikora.com" style="color:#E8610A;text-decoration:none;">traffikora.com</a> &nbsp;&bull;&nbsp; <a href="mailto:support@traffikora.com" style="color:#E8610A;text-decoration:none;">support@traffikora.com</a></p>
  <p style="color:#222;font-size:11px;margin:8px 0 0;">No spam, ever. You received this because you chatted with Eva on Traffikora.com.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>\`

    const notifyHtml = \`<!DOCTYPE html>
<html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px 20px;">
<table width="600" style="background:#fff;border-radius:12px;padding:32px;margin:0 auto;border:1px solid #e0e0e0;">
<tr><td>
  <div style="color:#E8610A;font-size:22px;font-weight:700;margin-bottom:6px;">&#128293; New Lead from Eva</div>
  <div style="color:#555;font-size:15px;margin-bottom:24px;">Someone just gave Eva their email on Traffikora.com. Eva already sent them a personalized plan summary. Follow up fast.</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;padding:20px;border:1px solid #eee;margin-bottom:20px;">
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</span><br><a href="mailto:\${visitorEmail}" style="color:#E8610A;font-size:17px;font-weight:700;text-decoration:none;">\${visitorEmail}</a></td></tr>
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Industry</span><br><span style="color:#111;font-size:16px;font-weight:700;">\${biz.label}</span></td></tr>
    <tr><td style="padding-bottom:14px;"><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Recommended Plan</span><br><span style="color:#E8610A;font-size:16px;font-weight:700;">\${biz.plan}</span></td></tr>
    \${greeting !== 'there' ? \`<tr><td><span style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</span><br><span style="color:#111;font-size:16px;font-weight:700;">\${greeting}</span></td></tr>\` : ''}
  </table>
  <a href="mailto:\${visitorEmail}" style="display:inline-block;background:#E8610A;color:#fff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:8px;">Reply to This Lead</a>
</td></tr>
</table>
</body></html>\`

    // Send all 3 emails (immediate + 2 scheduled)
    const emailJobs = [
      {
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: [visitorEmail],
        subject: \`Hey \${greeting}, here is your personalized Traffikora plan\`,
        html
      },
      {
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: [visitorEmail],
        subject: biz.day2Subject,
        html: buildFollowUpHtml(biz, greeting, 2),
        scheduled_at: day2Date.toISOString()
      },
      {
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: [visitorEmail],
        subject: biz.day5Subject,
        html: buildFollowUpHtml(biz, greeting, 5),
        scheduled_at: day5Date.toISOString()
      }
    ]

    for (const job of emailJobs) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': \`Bearer \${process.env.RESEND_API_KEY}\`, 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      })
      const d = await r.json()
      console.log('Email scheduled:', JSON.stringify(d))
      await new Promise(resolve => setTimeout(resolve, 300))
    }

    // Notify Randy
    const r2 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${process.env.RESEND_API_KEY}\`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Eva at Traffikora <support@traffikora.com>',
        to: ['support@traffikora.com'],
        subject: \`New Lead: \${biz.label} - \${visitorEmail}\`,
        html: notifyHtml
      })
    })
    const d2 = await r2.json()
    console.log('Notify email:', JSON.stringify(d2))

    return Response.json({ success: true })
  } catch (err) {
    console.error('Lead error:', err)
    return Response.json({ success: false }, { status: 500 })
  }
}
`

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\api\\\\chat\\\\lead\\\\route.ts', content, 'utf8')
console.log('SUCCESS - lead/route.ts written')