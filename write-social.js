// @ts-nocheck
const fs = require('fs');
const path = require('path');

const vercelPath = path.join('C:\\Users\\randy\\traffikfuel\\vercel.json');

const content = `{
  "crons": [
    {
      "path": "/api/cron/daily",
      "schedule": "0 6 * * *"
    }
  ]
}`;

fs.writeFileSync(vercelPath, content, 'utf8');
console.log('DONE - vercel.json cron job configured for 6am daily');