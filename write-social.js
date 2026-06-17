const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\Downloads\\freesportspicks';
const SB = 'https://ehjhsbrcbtqcvmgzjzkm.supabase.co';
const SK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoamhzYnJjYnRxY3ZtZ3pqemttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MDcwMjQsImV4cCI6MjA5MzQ4MzAyNH0.q96sEV0oUxX5kMCYyUJjysxxERMhhlq9cCBKAQ801_g';

// Fix index.html - inject Supabase save directly into form submit
let index = fs.readFileSync(path.join(BASE, 'index.html'), 'utf8');

// Add Supabase script tag before closing body if not already there
if (!index.includes('saveLeadToSupabase')) {
  const supabaseScript = `
<script>
async function saveLeadToSupabase(name, email, sport, team, message) {
  try {
    await fetch('${SB}/rest/v1/sports_leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': '${SK}',
        'Authorization': 'Bearer ${SK}',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name: name || '',
        email: email || '',
        phone: '',
        sport: sport || '',
        favorite_team: team || '',
        message: message || '',
        source: 'freesportspicks.pro - signup form'
      })
    });
    console.log('Lead saved to Supabase');
  } catch(e) {
    console.warn('Supabase save failed:', e);
  }
}

// Hook into form submit
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('guestbook-form');
  if (form) {
    form.addEventListener('submit', function() {
      var name = (form.querySelector('[name="name"]') || {}).value || '';
      var email = (form.querySelector('[name="email"]') || {}).value || '';
      var sport = (form.querySelector('[name="favSport"]') || {}).value || '';
      var team = (form.querySelector('[name="favTeam"]') || {}).value || '';
      var message = (form.querySelector('[name="message"]') || {}).value || '';
      saveLeadToSupabase(name, email, sport, team, message);
    });
  }
});
</script>`;

  index = index.replace('</body>', supabaseScript + '\n</body>');
  fs.writeFileSync(path.join(BASE, 'index.html'), index, 'utf8');
  console.log('DONE: Supabase lead capture injected into index.html');
} else {
  console.log('SKIP: Supabase already in index.html');
}

// Also clear the localStorage blocking by removing the blocked key check
// We do this by rewriting main.js to NOT block duplicate emails
let mainJs = fs.readFileSync(path.join(BASE, 'js/main.js'), 'utf8');
if (mainJs.includes('isEmailBlocked')) {
  // Make isEmailBlocked always return false so no one gets blocked
  mainJs = mainJs.replace(
    'function isEmailBlocked(email) {\n  try {\n    const blocked = JSON.parse(localStorage.getItem(BLOCKED_KEY) || \'[]\');\n    return blocked.includes(normalizeEmail(email));\n  } catch { return false; }\n}',
    'function isEmailBlocked(email) { return false; }'
  );
  // Also try the var version
  mainJs = mainJs.replace(
    'function isEmailBlocked(email){\n  try{\n    var blocked=JSON.parse(localStorage.getItem(BLOCKED_KEY)||\'[]\');\n    return blocked.includes(normalizeEmail(email));\n  }catch{return false;}\n}',
    'function isEmailBlocked(email){ return false; }'
  );
  fs.writeFileSync(path.join(BASE, 'js/main.js'), mainJs, 'utf8');
  console.log('DONE: Email blocking disabled in main.js');
}

console.log('ALL DONE');