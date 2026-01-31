import { useState } from 'react';
import { Button } from '@oppal/ui';
import { Send, Bot, User } from 'lucide-react';

const initialMessages = [
  {
    role: 'assistant',
    content: 'Hello! I\'m your Prism AI assistant. I can help you with spend analysis, supplier insights, and procurement recommendations. How can I help you today?',
  },
  {
    role: 'user',
    content: 'Show me the top spending categories this quarter.',
  },
  {
    role: 'assistant',
    content: 'Here are the top 3 spending categories for Q1 2026:\n\n1. Building & Infrastructure — 38% ($34.2M)\n2. Medical Equipment — 27% ($24.3M)\n3. Sterilization Materials — 24% ($21.6M)\n\nBuilding & Infrastructure saw a 12% increase compared to last quarter. Would you like me to dig deeper into any category?',
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { role: 'user', content: input },
      {
        role: 'assistant',
        content: 'Thank you for your question. This is a demo interface — in production, this would connect to your AI analytics backend for real-time insights.',
      },
    ]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'assistant'
              ? 'bg-primary-100 text-primary-700'
              : 'bg-neutral-200 text-neutral-600'
              }`}>
              {msg.role === 'assistant' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`max-w-[70%] rounded-lg px-4 py-3 text-sm leading-relaxed ${msg.role === 'assistant'
              ? 'bg-white shadow-sm border border-neutral-200 text-neutral-800'
              : 'bg-primary-500 text-white'
              }`}>
              <p className="whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-neutral-200 pt-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your spend data..."
            className="flex-1 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Button onClick={handleSend} size="icon" disabled={!input.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
