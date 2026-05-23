const fs = require('fs');

const layouts = [
  {
    path: 'src/app/features/ai-engine-optimization/layout.tsx',
    title: 'AI Engine Optimization | Traffikora',
    description: 'Get your business found in ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews. Traffikora is the only platform that optimizes for every AI search engine.',
  },
  {
    path: 'src/app/features/google-business-profile/layout.tsx',
    title: 'Google Business Profile Management | Traffikora',
    description: 'Traffikora automates your Google Business Profile — weekly posts, photo uploads, review responses, and profile optimization. Rank higher in local search automatically.',
  },
  {
    path: 'src/app/features/local-seo-automation/layout.tsx',
    title: 'Local SEO Automation | Traffikora',
    description: 'Traffikora automates local SEO with citation building, keyword tracking, NAP monitoring, and schema markup. Rank higher in local search without lifting a finger.',
  },
  {
    path: 'src/app/features/social-media-automation/layout.tsx',
    title: 'Social Media Automation | Traffikora',
    description: 'Traffikora creates and publishes social media content to every platform automatically. Facebook, Instagram, TikTok, LinkedIn, Twitter/X — set it once, post forever.',
  },
  {
    path: 'src/app/faq/layout.tsx',
    title: 'FAQ | Traffikora',
    description: 'Answers to the most common questions about Traffikora — features, pricing, how it works, and what makes it different from agencies and other marketing tools.',
  },
  {
    path: 'src/app/why-traffikora/layout.tsx',
    title: 'Why Traffikora | Automated Marketing for Small Businesses',
    description: 'See why thousands of small businesses choose Traffikora over marketing agencies and other tools. Google + AI engine optimization starting at $97/month.',
  },
];

layouts.forEach(({ path, title, description }) => {
  const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;
  fs.writeFileSync(path, content);
  console.log('wrote: ' + path);
});

console.log('All done!');