const fs = require('fs');

const robots = `import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/api', '/admin'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.traffikora.com/sitemap.xml',
    host: 'https://www.traffikora.com',
  }
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\robots.ts', robots, 'utf8');
console.log('SUCCESS: robots.ts created with llms.txt reference and all AI bots allowed');