export async function POST(req) {
  try {
    const { platform, brain, topic } = await req.json()
    const prompt = " Write a +platform+ post for: +JSON.stringify(brain)+ +(topic||auto)
    const d = await r.json()
    return NextResponse.json({post:d.content[0].text})
  } catch(e){return NextResponse.json({error:" Failed},{status:500})}
}