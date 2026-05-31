const fs = require('fs');

const content = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

// Find the addEvent function and replace just the date line
const fixed = content.replace(
  'scheduled_at: new Date(newDate).toISOString(),',
  `scheduled_at: (() => {
          const s = newDate.trim()
          if (s.includes('/')) {
            const p = s.split('/')
            return new Date(parseInt(p[2]), parseInt(p[0])-1, parseInt(p[1]), 12, 0, 0).toISOString()
          }
          const p = s.split('-')
          return new Date(parseInt(p[0]), parseInt(p[1])-1, parseInt(p[2]), 12, 0, 0).toISOString()
        })(),`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', fixed);
console.log('DONE -- date fix applied');