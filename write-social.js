const fs = require('fs')

const vercelJson = {
  crons: [
    {
      path: "/api/cron/trial-expiry",
      schedule: "0 10 * * *"
    },
    {
      path: "/api/cron/daily",
      schedule: "0 11 * * *"
    },
    {
      path: "/api/cron/weekly",
      schedule: "0 13 * * 1"
    }
  ]
}

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\vercel.json', JSON.stringify(vercelJson, null, 2))
console.log('SUCCESS - vercel.json updated with weekly cron (Mondays 1pm UTC = 9am EST)')