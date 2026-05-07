const fs = require('fs');
const content = `import type { Metadata } from 'next'
import './globals.css'
import CrispChat from '@/components/CrispChat'

export const metadata: Metadata = {
title: 'TraffikFuel',
description: 'Your marketing machine',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="antialiased">
{children}
<CrispChat />
</body>
</html>
)
}
`;
fs.writeFileSync('src/app/layout.tsx', content);
console.log('done');
