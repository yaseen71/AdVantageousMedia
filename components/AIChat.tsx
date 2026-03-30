
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I\'m the AdVantageous AI. How can I help you scale your brand today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.chatWithAssistant(messages, input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm experiencing a neural lag. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-8 z-[110] w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl group border border-white/10 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-[#3156fe] hover:scale-110'
        }`}
        aria-label="Chat with AI"
      >
        {isOpen ? (
          <span className="text-white text-2xl">✕</span>
        ) : (
          <div className="relative">
             <span className="text-3xl">🤖</span>
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#48fffa] rounded-full animate-ping"></span>
             <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#48fffa] rounded-full border-2 border-white dark:border-[#050505]"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-28 left-8 z-[110] w-[calc(100%-4rem)] md:w-[400px] h-[550px] glass rounded-[2.5rem] border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="p-6 bg-gradient-main text-white flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl backdrop-blur-md">🤖</div>
          <div>
            <h3 className="font-bold text-sm tracking-tight">AdVantageous Strategy AI</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48fffa] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Neural Model Online</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#3156fe] text-white rounded-tr-none' 
                : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-gray-200 border border-black/5 dark:border-white/10 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-slate-50 dark:bg-white/5 border-t border-black/5 dark:border-white/10">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything about AI marketing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all pr-12 dark:text-white"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#3156fe] text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
          <p className="text-[9px] text-center mt-3 text-slate-400 dark:text-gray-500 font-bold uppercase tracking-[0.2em]">
            Powered by AdVantageous Neural Engine
          </p>
        </form>
      </div>
    </>
  );
};

export default AIChat;
