const fs = require('fs');

let blog = fs.readFileSync('src/app/dashboard/blog/page.tsx', 'utf8');
blog = blog.replace(`        {profile && (
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
            Generating for: {businessName} -- {industry} -- {city}
          </p>
        )}`, '');
fs.writeFileSync('src/app/dashboard/blog/page.tsx', blog);

let social = fs.readFileSync('src/app/dashboard/social/page.tsx', 'utf8');
social = social.replace(`        {profile && (
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
            Generating for: {businessName} -- {industry} -- {city}
          </p>
        )}`, '');
fs.writeFileSync('src/app/dashboard/social/page.tsx', social);

console.log('DONE -- business info display removed from both generators');