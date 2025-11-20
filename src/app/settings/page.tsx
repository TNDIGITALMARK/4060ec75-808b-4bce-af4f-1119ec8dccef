'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings as SettingsIcon, CheckCircle2 } from 'lucide-react';
import { mockSettings } from '@/lib/data/mock-research';
import type { ResearchSettings, SourceType, CitationFormat, ResearchDepth } from '@/lib/types/research';

export default function SettingsPage() {
  const [settings, setSettings] = useState<ResearchSettings>(mockSettings);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // In production, this would save to Supabase
    console.log('Saving settings:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const toggleSource = (source: SourceType) => {
    setSettings((prev) => ({
      ...prev,
      preferredSources: prev.preferredSources.includes(source)
        ? prev.preferredSources.filter((s) => s !== source)
        : [...prev.preferredSources, source],
    }));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto container-padding py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1F2937]">Research Settings</h1>
              <p className="text-[#6B7280] mt-1">Customize your research preferences</p>
            </div>
          </div>
        </div>
      </header>

      {/* Settings Form */}
      <div className="max-w-4xl mx-auto container-padding py-8">
        <div className="bg-white rounded-[16px] shadow-card p-6 space-y-8">
          {/* Preferred Sources */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Preferred Source Types</h3>
            <div className="space-y-3">
              {(['academic', 'news', 'industry', 'government'] as SourceType[]).map((source) => (
                <div key={source} className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors">
                  <Label htmlFor={source} className="flex-1 cursor-pointer">
                    <div>
                      <p className="font-medium text-[#1F2937] capitalize">{source} Papers</p>
                      <p className="text-sm text-[#6B7280]">
                        {source === 'academic' && 'Peer-reviewed journals and research papers'}
                        {source === 'news' && 'News articles and media reports'}
                        {source === 'industry' && 'Industry reports and analysis'}
                        {source === 'government' && 'Government publications and data'}
                      </p>
                    </div>
                  </Label>
                  <Switch
                    id={source}
                    checked={settings.preferredSources.includes(source)}
                    onCheckedChange={() => toggleSource(source)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Research Depth */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Research Depth</h3>
            <div className="grid grid-cols-3 gap-3">
              {(['quick', 'standard', 'comprehensive'] as ResearchDepth[]).map((depth) => (
                <button
                  key={depth}
                  onClick={() => setSettings((prev) => ({ ...prev, researchDepth: depth }))}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    settings.researchDepth === depth
                      ? 'border-[#3B82F6] bg-[#3B82F6]/5'
                      : 'border-[#E5E7EB] hover:border-[#3B82F6]/30'
                  }`}
                >
                  <p className="font-medium text-[#1F2937] capitalize mb-1">{depth}</p>
                  <p className="text-xs text-[#6B7280]">
                    {depth === 'quick' && '5-10 sources'}
                    {depth === 'standard' && '10-20 sources'}
                    {depth === 'comprehensive' && '20+ sources'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Citation Format */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Citation Format</h3>
            <div className="grid grid-cols-4 gap-3">
              {(['apa', 'mla', 'chicago', 'custom'] as CitationFormat[]).map((format) => (
                <button
                  key={format}
                  onClick={() => setSettings((prev) => ({ ...prev, citationFormat: format }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    settings.citationFormat === format
                      ? 'border-[#3B82F6] bg-[#3B82F6]/5'
                      : 'border-[#E5E7EB] hover:border-[#3B82F6]/30'
                  }`}
                >
                  <p className="font-medium text-[#1F2937] uppercase">{format}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Auto-save */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors">
            <Label htmlFor="auto-save" className="flex-1 cursor-pointer">
              <div>
                <p className="font-medium text-[#1F2937]">Auto-save Research Sessions</p>
                <p className="text-sm text-[#6B7280]">Automatically save your research progress</p>
              </div>
            </Label>
            <Switch
              id="auto-save"
              checked={settings.autoSave}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, autoSave: checked }))}
            />
          </div>

          {/* Research Language */}
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Research Language</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { code: 'en', name: 'English' },
                { code: 'es', name: 'Spanish' },
                { code: 'fr', name: 'French' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSettings((prev) => ({ ...prev, researchLanguage: lang.code }))}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    settings.researchLanguage === lang.code
                      ? 'border-[#3B82F6] bg-[#3B82F6]/5'
                      : 'border-[#E5E7EB] hover:border-[#3B82F6]/30'
                  }`}
                >
                  <p className="font-medium text-[#1F2937]">{lang.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 border-t border-[#E5E7EB]">
            <Button
              onClick={handleSave}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={saved}
            >
              {saved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Settings Saved
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
