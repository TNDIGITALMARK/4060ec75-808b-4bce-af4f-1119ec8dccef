'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, FileSearch, Loader2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { mockMessages } from '@/lib/data/mock-research';
import type { ResearchMessage } from '@/lib/types/research';

export default function ResearchPage() {
  const [messages, setMessages] = useState<ResearchMessage[]>(mockMessages['1']);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ResearchMessage = {
      id: Date.now().toString(),
      sessionId: '1',
      role: 'user',
      content: input,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ResearchMessage = {
        id: (Date.now() + 1).toString(),
        sessionId: '1',
        role: 'assistant',
        content: `I'm analyzing your query: "${input}"\n\nBased on my research capabilities, I would typically:\n\n• Search academic databases and recent publications\n• Cross-reference multiple credible sources\n• Analyze patterns and key findings\n• Present organized insights with citations\n\nNote: This is a demo interface. In production, this would connect to real research APIs and AI analysis engines.`,
        sources: [
          {
            title: 'Example Research Paper',
            url: 'https://example.com/paper',
            type: 'academic',
            credibility: 90,
            excerpt: 'Key findings related to your query...',
          },
        ],
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto container-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <FileSearch className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#1F2937]">Research Chat</h1>
                <p className="text-sm text-[#6B7280]">AI-powered research assistant</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto container-padding py-8">
        <div className="bg-white rounded-[16px] shadow-card min-h-[600px] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#F9FAFB] border border-[#E5E7EB]'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>

                  {/* Sources */}
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#E5E7EB] space-y-2">
                      <p className="text-xs font-semibold text-[#6B7280] mb-2">
                        Sources ({message.sources.length})
                      </p>
                      {message.sources.map((source, idx) => (
                        <a
                          key={idx}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 p-2 rounded hover:bg-white transition-colors group"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-[#1F2937] group-hover:text-[#3B82F6] truncate">
                              {source.title}
                            </p>
                            <p className="text-xs text-[#6B7280] capitalize">
                              {source.type} • {source.credibility}% credibility
                            </p>
                          </div>
                          <ExternalLink className="w-3 h-3 text-[#6B7280] flex-shrink-0 opacity-0 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#6B7280] flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                    U
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  AI
                </div>
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4">
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Researching your query...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-[#E5E7EB] p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a research question..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
