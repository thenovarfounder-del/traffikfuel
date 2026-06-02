const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', 'utf8')

const oldScript = `        (function() {
          document.querySelectorAll('.faq-item').forEach(function(item) {
            var q = item.querySelector('.faq-q');
            var a = item.querySelector('.faq-a');
            var arrow = item.querySelector('.faq-q-arrow');
            q.style.cursor = 'pointer';
            q.addEventListener('click', function() {
              var isOpen = a.style.display === 'block';
              document.querySelectorAll('.faq-item').forEach(function(i) {
                i.querySelector('.faq-a').style.display = 'none';
                i.querySelector('.faq-q-arrow').textContent = '+';
              });
              if (!isOpen) { a.style.display = 'block'; arrow.textContent = '\\u2212'; }
            });
          });`

const newScript = `        (function() {
          function initFaq() {
            document.querySelectorAll('.faq-item').forEach(function(item) {
              var q = item.querySelector('.faq-q');
              var a = item.querySelector('.faq-a');
              var arrow = item.querySelector('.faq-q-arrow');
              if (!q || !a || !arrow) return;
              q.style.cursor = 'pointer';
              q.addEventListener('click', function() {
                var isOpen = a.style.display === 'block';
                document.querySelectorAll('.faq-item').forEach(function(i) {
                  i.querySelector('.faq-a').style.display = 'none';
                  i.querySelector('.faq-q-arrow').textContent = '+';
                });
                if (!isOpen) { a.style.display = 'block'; arrow.textContent = '\\u2212'; }
              });
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initFaq);
          } else {
            setTimeout(initFaq, 100);
          }`

content = content.replace(oldScript, newScript)
fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', content)
console.log('SUCCESS: FAQ accordion fixed')