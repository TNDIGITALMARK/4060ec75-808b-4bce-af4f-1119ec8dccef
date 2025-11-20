export const dynamic = 'force-dynamic';

import { NetworkBackground } from '@/components/ui/network-background';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { FileSearch, MessageSquare, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Network Background */}
      <NetworkBackground className="min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto container-padding py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-6 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-semibold tracking-wide">AI-RESEARCH</span>
              </div>

              <h1 className="text-white">
                Unlock Knowledge,<br />Instantly
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Your AI Research Assistant for Accelerated Discovery
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-button hover:shadow-button-hover transform hover:-translate-y-0.5 transition-all"
                  >
                    Chat with AI
                    <MessageSquare className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/research">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Start Researching
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Dashboard Preview Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-[16px] shadow-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Research Summary</h3>
                  <span className="text-sm text-[#6B7280]">Just now</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold">
                      AI
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1F2937] leading-relaxed">
                        Based on analysis of 23 sources...
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F9FAFB] rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6B7280]">Sources analyzed</span>
                      <span className="font-semibold text-[#1F2937]">23</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6B7280]">Quality score</span>
                      <span className="font-semibold text-[#10B981]">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NetworkBackground>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-center mb-12">Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IconWrapper icon={FileSearch} />
              </div>
              <h4 className="font-semibold text-[#1F2937]">Automated Data Collection</h4>
              <p className="text-[#6B7280]">
                Automatically gather information from academic papers, news articles, and credible sources
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IconWrapper icon={MessageSquare} />
              </div>
              <h4 className="font-semibold text-[#1F2937]">Conversational AI Interface</h4>
              <p className="text-[#6B7280]">
                Chat naturally with our AI agent to get instant answers, insights, and research assistance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IconWrapper icon={Settings} />
              </div>
              <h4 className="font-semibold text-[#1F2937]">Custom Configurations</h4>
              <p className="text-[#6B7280]">
                Customize research depth, source preferences, and citation formats to match your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center container-padding space-y-6">
          <h2>Start Chatting with AI</h2>
          <p className="text-lg text-[#6B7280]">
            Get instant answers and research assistance through our conversational AI interface
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/chat">
              <Button
                size="lg"
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-button hover:shadow-button-hover"
              >
                Chat Now
              </Button>
            </Link>
            <Link href="/research">
              <Button
                size="lg"
                variant="outline"
                className="border-[#E5E7EB] hover:bg-[#F9FAFB]"
              >
                Start Researching
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
