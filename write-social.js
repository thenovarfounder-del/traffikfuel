const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx', 'utf8');

const updated = content
  .replace("'Start Free \u2014 No Card'", "'Start Free \u2014 No Credit Card'")
  .replace(/(\{ name: 'Free'.*?featured: false \})/s, (match) => 
    match.replace("btn: 'Start Free \u2014 No Card'", "btn: 'Start Free \u2014 No Credit Card'")
  )
  .replace(
    "fontSize: '10px', letterSpacing: '.2em', color: '#888', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>{plan.name}",
    "fontSize: '10px', letterSpacing: '.2em', color: plan.name === 'Free' ? '#ffffff' : '#888', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>{plan.name}"
  );

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx', updated, 'utf8');
console.log('SUCCESS: pricing/page.tsx updated — Free label bright white, button text updated');