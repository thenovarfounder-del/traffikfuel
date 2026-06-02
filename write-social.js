const fs = require("fs");

const blogs = [
  "how-to-get-found-on-chatgpt-perplexity",
  "how-to-get-more-google-reviews",
  "how-traffikora-is-different",
  "local-seo-tips-for-small-businesses",
  "local-seo-vs-ai-engine-optimization",
  "set-it-once-how-traffikora-works",
  "small-business-marketing-problem",
  "what-is-aeo",
  "what-is-ai-engine-optimization",
  "what-is-generative-engine-optimization",
  "what-is-local-seo",
  "what-is-traffikora",
  "why-ai-engine-optimization",
  "why-google-business-profile-matters",
];

const base = "C:\\Users\\randy\\traffikfuel\\src\\app\\blog";
const b1 = "Google SEO + Google SEO";
const b2 = "No no credit card";
const b3 = "No No credit card";
const b4 = "Free 7-day trial";
const b5 = "free 7-day trial";
const b6 = "7-Day Free Trial";
const b7 = "Start Free Free Today";
const b8 = "Start Free Free";
const b9 = "June 2025";
let fixed = 0;

for (const blog of blogs) {
  const fp = base + "\\" + blog + "\\page.tsx";
  if (!fs.existsSync(fp)) { console.log("SKIPPED: " + blog); continue; }
  let c = fs.readFileSync(fp, "utf8");
  const orig = c;
  c = c.split(b1).join("Google SEO");
  c = c.split(b2).join("No credit card");
  c = c.split(b3).join("No credit card");
  c = c.split(b4).join("Start free today");
  c = c.split(b5).join("start free today");
  c = c.split(b6).join("Free Plan");
  c = c.split(b7).join("Start Free Today");
  c = c.split(b8).join("Start Free");
  c = c.split(b9).join("2026");
  if (c !== orig) { fs.writeFileSync(fp, c, "utf8"); console.log("FIXED: " + blog); fixed++; }
  else { console.log("CLEAN: " + blog); }
}
console.log("DONE. Fixed: " + fixed);