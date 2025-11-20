'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileSearch, BarChart3, Calendar, Plus, Archive } from 'lucide-react';
import { mockSessions } from '@/lib/data/mock-research';
import Link from 'next/link';
import type { ResearchSession } from '@/lib/types/research';

export default function LibraryPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'archived'>('all');

  const filteredSessions = mockSessions.filter((session) => {
    if (filter === 'all') return true;
    return session.status === filter;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">Research Library</h1>
              <p className="text-[#6B7280] mt-1">Manage and review your research sessions</p>
            </div>
            <Link href="/research">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Research
              </Button>
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mt-6">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-[#3B82F6] hover:bg-[#2563EB]' : ''}
            >
              All Sessions
            </Button>
            <Button
              variant={filter === 'active' ? 'default' : 'outline'}
              onClick={() => setFilter('active')}
              className={filter === 'active' ? 'bg-[#3B82F6] hover:bg-[#2563EB]' : ''}
            >
              Active
            </Button>
            <Button
              variant={filter === 'archived' ? 'default' : 'outline'}
              onClick={() => setFilter('archived')}
              className={filter === 'archived' ? 'bg-[#3B82F6] hover:bg-[#2563EB]' : ''}
            >
              Archived
            </Button>
          </div>
        </div>
      </header>

      {/* Sessions Grid */}
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-20">
            <FileSearch className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No sessions found</h3>
            <p className="text-[#6B7280] mb-6">Start a new research session to begin</p>
            <Link href="/research">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Start Research
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function SessionCard({ session }: { session: ResearchSession }) {
  const getDepthColor = (depth: string) => {
    switch (depth) {
      case 'comprehensive':
        return 'bg-[#10B981] text-white';
      case 'standard':
        return 'bg-[#3B82F6] text-white';
      case 'quick':
        return 'bg-[#F59E0B] text-white';
      default:
        return 'bg-[#6B7280] text-white';
    }
  };

  const getQualityColor = (score: number) => {
    if (score >= 90) return 'text-[#10B981]';
    if (score >= 75) return 'text-[#3B82F6]';
    return 'text-[#F59E0B]';
  };

  return (
    <Link href={`/research?session=${session.id}`}>
      <div className="bg-white rounded-[16px] shadow-card hover:shadow-card-hover p-6 transition-all hover:-translate-y-1 cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-[#1F2937] mb-1 line-clamp-2">{session.title}</h3>
            <p className="text-sm text-[#6B7280] line-clamp-2">{session.description}</p>
          </div>
          {session.status === 'archived' && (
            <Archive className="w-5 h-5 text-[#9CA3AF] flex-shrink-0 ml-2" />
          )}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${getDepthColor(session.researchDepth)}`}
          >
            {session.researchDepth}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-4 text-sm text-[#6B7280]">
            <div className="flex items-center gap-1">
              <FileSearch className="w-4 h-4" />
              <span>{session.sourceCount} sources</span>
            </div>
            <div className={`flex items-center gap-1 font-semibold ${getQualityColor(session.qualityScore)}`}>
              <BarChart3 className="w-4 h-4" />
              <span>{session.qualityScore}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mt-3">
          <Calendar className="w-3 h-3" />
          <span>{new Date(session.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}
