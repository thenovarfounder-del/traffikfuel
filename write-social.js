const fs = require('fs')
const path = require('path')

const filePath = path.join('src', 'app', 'api', 'content', 'blog', 'route.ts')
let content = fs.readFileSync(filePath, 'utf8')

const oldCode = `    if (saveError) {
      return NextResponse.json({ error: "Failed to save post" }, { status: 500 })
    }
    return NextResponse.json(saved)`

const newCode = `    if (saveError) {
      return NextResponse.json({ error: "Failed to save post" }, { status: 500 })
    }

    // Track blog generation for free tier limit
    await supabase.from("blog_generations").insert({ user_id: userId })

    return NextResponse.json(saved)`

if (!content.includes(oldCode)) {
  console.log('ERROR: Could not find target code. Content may have changed.')
  process.exit(1)
}

content = content.replace(oldCode, newCode)
fs.writeFileSync(filePath, content)
console.log('SUCCESS: blog route updated — blog_generations insert added')