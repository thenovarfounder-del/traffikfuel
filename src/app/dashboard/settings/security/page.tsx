"use client"
import { useState } from "react"

const tabs = ["Password", "2FA", "Trusted Devices", "Sessions"]

export default function SecurityPage() {
const [activeTab, setActiveTab] = useState("Password")

return (
<div className="p-6 max-w-3xl mx-auto">
<h1 className="text-2xl font-bold text-white mb-6">Security Settings</h1>

<div className="flex gap-2 mb-8 border-b border-gray-700">
{tabs.map((tab) => (
<button
key={tab}
onClick={() => setActiveTab(tab)}
className={`pb-3 px-4 text-sm font-medium transition-colors ${
activeTab === tab
? "text-white border-b-2 border-orange-500"
: "text-gray-400 hover:text-white"
}`}
>
{tab}
</button>
))}
</div>

{activeTab === "Password" && (
<div className="space-y-4">
<h2 className="text-lg font-semibold text-white">Change Password</h2>
<input type="password" placeholder="Current password" className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700" />
<input type="password" placeholder="New password" className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700" />
<input type="password" placeholder="Confirm new password" className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700" />
<button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">Update Password</button>
</div>
)}

{activeTab === "2FA" && (
<div className="space-y-4">
<h2 className="text-lg font-semibold text-white">Two-Factor Authentication</h2>
<p className="text-gray-400">Add an extra layer of security to your account using an authenticator app.</p>
<button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg">Set Up Authenticator App</button>
</div>
)}

{activeTab === "Trusted Devices" && (
<div className="space-y-4">
<h2 className="text-lg font-semibold text-white">Trusted Devices</h2>
<p className="text-gray-400">Devices you have trusted will skip 2FA for 30 days.</p>
<div className="bg-gray-800 rounded-lg p-4 text-gray-400">No trusted devices yet.</div>
</div>
)}

{activeTab === "Sessions" && (
<div className="space-y-4">
<h2 className="text-lg font-semibold text-white">Active Sessions</h2>
<p className="text-gray-400">Manage where you are logged in.</p>
<div className="bg-gray-800 rounded-lg p-4 text-gray-400">No active sessions found.</div>
</div>
)}
</div>
)
}
