// Research Assistant Types

export interface ResearchSession {
  id: string;
  title: string;
  description?: string;
  status: 'active' | 'archived';
  researchDepth: 'quick' | 'standard' | 'comprehensive';
  sourceCount: number;
  qualityScore: number;
  createdAt: string;
  updatedAt: string;
}

export interface ResearchMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: ResearchSource[];
  metadata?: Record<string, any>;
  createdAt: string;
}

export interface ResearchSource {
  title: string;
  url: string;
  type: 'academic' | 'news' | 'industry' | 'government';
  credibility: number;
  excerpt?: string;
}

export interface ResearchSettings {
  id: string;
  preferredSources: ('academic' | 'news' | 'industry' | 'government')[];
  researchDepth: 'quick' | 'standard' | 'comprehensive';
  citationFormat: 'apa' | 'mla' | 'chicago' | 'custom';
  autoSave: boolean;
  researchLanguage: string;
}

export type ResearchDepth = 'quick' | 'standard' | 'comprehensive';
export type CitationFormat = 'apa' | 'mla' | 'chicago' | 'custom';
export type SourceType = 'academic' | 'news' | 'industry' | 'government';
