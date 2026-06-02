const fs = require("fs");

const pages = [
  "traffikora-vs-birdeye",
  "traffikora-vs-brightlocal",
  "traffikora-vs-constant-contact",
  "traffikora-vs-hootsuite",
  "traffikora-vs-hubspot",
  "traffikora-vs-later",
  "traffikora-vs-mailchimp",
  "traffikora-vs-reputation-com",
  "traffikora-vs-semrush",
  "traffikora-vs-sprout-social",
  "traffikora-vs-vendasta",
  "traffikora-vs-yext",
];

const base = "C:\\Users\\randy\\traffikfuel\\src\\app\\compare";
let fixed = 0;
let skipped = 0;

for (const page of pages) {
  const fp = base + "\\" + page + "\\page.tsx";
  if (!fs.existsSync(fp)) { console.log("SKIPPED: " + page); skipped++; continue; }
  let c = fs.readFileSync(fp, "utf8");
  const orig = c;
  c = c.split("Google SEO + Google SEO").join("Google SEO");
  c = c.split("No no credit card").join("No credit card");
  c = c.split("No No credit card").join("No credit card");
  c = c.split("7-day free trial").join("free plan");
  c = c.split("7-Day Free Trial").join("Free Plan");
  c = c.split("June 2025").join("2026");
  if (c !== orig) { fs.writeFileSync(fp, c, "utf8"); console.log("FIXED: " + page); fixed++; }
  else { console.log("CLEAN: " + page); }
}
console.log("DONE. Fixed: " + fixed + " Skipped: " + skipped);