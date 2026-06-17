const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\citizenshipbyinvestmentpro';

// Fix Chatbot button position - move up to match WhatsApp
const chatbotPath = path.join(BASE, 'components/Chatbot.js');
let chatbot = fs.readFileSync(chatbotPath, 'utf8');

// Change bottom from 20px to 90px on the floating button
chatbot = chatbot.replace(
  "position:'fixed',bottom:'20px',right:'20px'",
  "position:'fixed',bottom:'90px',right:'20px'"
);

// Also fix the chat window position
chatbot = chatbot.replace(
  "position:'fixed',bottom:'90px',right:'20px',width:'360px'",
  "position:'fixed',bottom:'160px',right:'20px',width:'360px'"
);

fs.writeFileSync(chatbotPath, chatbot, 'utf8');
console.log('DONE: Chatbot button moved up to 90px to match WhatsApp');