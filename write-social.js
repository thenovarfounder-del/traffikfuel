const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

// Fix date parsing - handle both MM/DD/YYYY and YYYY-MM-DD formats
cal = cal.replace(
  `      const parts = newDate.split('-')
      const scheduledDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0)`,
  `      let scheduledDate
      if (newDate.includes('/')) {
        const parts = newDate.split('/')
        scheduledDate = new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]), 12, 0, 0)
      } else {
        const parts = newDate.split('-')
        scheduledDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0)
      }`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- date parsing fixed');