const fs = require("fs");

const pages = [
  "atlanta",
  "chicago",
  "dallas",
  "houston",
  "las-vegas",
  "los-angeles",
  "miami",
  "new-york",
  "phoenix",
  "seattle",
];

const base = "C:\\Users\\randy\\traffikfuel\\src\\app\\local-businesses";
const bad1 = "Google SEO + Google SEO";
const bad2 = "No no credit card";
const bad3 = "No No credit card";
const bad4 = "7-day free trial";
const bad5 = "June 2025";
let fixed = 0;

for (const page of pages) {
  const fp = base + "\\" + page + "\\page.tsx";
  if (!fs.existsSync(fp)) { console.log("SKIPPED: " + page); continue; }
  let c = fs.readFileSync(fp, "utf8");
  const orig = c;
  c = c.split(bad1).join("Google SEO");
  c = c.split(bad2).join("No credit card");
  c = c.split(bad3).join("No credit card");
  c = c.split(bad4).join("free plan");
  c = c.split(bad5).join("2026");
  if (c !== orig) { fs.writeFileSync(fp, c, "utf8"); console.log("FIXED: " + page); fixed++; }
  else { console.log("CLEAN: " + page); }
}
console.log("DONE. Fixed: " + fixed);