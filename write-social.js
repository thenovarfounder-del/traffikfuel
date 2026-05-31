// @ts-nocheck
const fs = require('fs');
const path = require('path');

const agent2Path = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\content-creator\\route.ts');

let content = fs.readFileSync(agent2Path, 'utf8');

// Add duplicate check before saving to content_queue
content = content.replace(
  `    // Save to content_queue`,
  `    // Check if content already generated today
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)
    const { data: existing } = await supabase
      .from('content_queue')
      .select('id')
      .eq('user_id', user_id)
      .gte('created_at', todayStart.toISOString())
    
    if (existing && existing.length > 0) {
      await supabase
        .from('agent_logs')
        .update({ status: 'completed', message: 'Content already generated today -- skipping', completed_at: new Date().toISOString() })
        .eq('id', log.id)
      return NextResponse.json({ success: true, message: 'Already generated today' })
    }

    // Save to content_queue`
);

fs.writeFileSync(agent2Path, content, 'utf8');
console.log('DONE - Duplicate content check added');