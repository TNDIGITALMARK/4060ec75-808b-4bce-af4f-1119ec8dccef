import { ResearchSession, ResearchMessage, ResearchSettings } from '../types/research';

export const mockSessions: ResearchSession[] = [
  {
    id: '1',
    title: 'AI in Healthcare Applications',
    description: 'Comprehensive analysis of AI technologies in modern healthcare',
    status: 'active',
    researchDepth: 'comprehensive',
    sourceCount: 18,
    qualityScore: 92,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    title: 'Renewable Energy Market Trends',
    description: 'Overview of global renewable energy adoption and market dynamics',
    status: 'active',
    researchDepth: 'standard',
    sourceCount: 9,
    qualityScore: 85,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: 'Electric Vehicle Battery Impact',
    description: 'Environmental assessment of EV battery lifecycle',
    status: 'active',
    researchDepth: 'comprehensive',
    sourceCount: 23,
    qualityScore: 95,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    title: 'Quantum Computing Developments',
    description: 'Recent breakthroughs in quantum computing research',
    status: 'archived',
    researchDepth: 'quick',
    sourceCount: 6,
    qualityScore: 78,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const mockMessages: Record<string, ResearchMessage[]> = {
  '1': [
    {
      id: 'm1',
      sessionId: '1',
      role: 'user',
      content: 'Research the applications of AI in healthcare, focusing on diagnostics and treatment planning.',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'm2',
      sessionId: '1',
      role: 'assistant',
      content: 'Based on analysis of 18 academic papers and industry reports published in the last 2 years, here are the key findings on AI in healthcare:\n\n## Diagnostic Applications\n\n• Medical imaging analysis shows 94% accuracy in detecting early-stage cancers, matching or exceeding radiologist performance\n• AI-powered pathology systems reduce diagnostic time by 60% while maintaining 98% accuracy\n• Deep learning models for retinal imaging detect diabetic retinopathy with 97% sensitivity\n\n## Treatment Planning\n\n• Personalized medicine algorithms analyze genetic data to predict drug efficacy with 85% accuracy\n• AI-assisted surgery planning reduces operation time by 30% and complications by 25%\n• Treatment recommendation systems process patient history and clinical guidelines to suggest optimal care pathways\n\n## Implementation Challenges\n\n• Data privacy and HIPAA compliance remain primary concerns\n• Integration with existing hospital information systems requires significant investment\n• Physician training and trust-building are essential for adoption',
      sources: [
        {
          title: 'AI in Medical Imaging: A Systematic Review',
          url: 'https://example.com/ai-imaging-review',
          type: 'academic',
          credibility: 95,
          excerpt: 'Deep learning algorithms achieve radiologist-level performance in detecting...',
        },
        {
          title: 'Clinical Applications of Machine Learning in Healthcare',
          url: 'https://example.com/ml-healthcare',
          type: 'academic',
          credibility: 92,
          excerpt: 'Machine learning models for personalized treatment planning show promising...',
        },
        {
          title: 'AI-Powered Diagnostics Market Report 2024',
          url: 'https://example.com/ai-diagnostics-market',
          type: 'industry',
          credibility: 88,
          excerpt: 'The global AI diagnostics market is expected to reach $15B by 2026...',
        },
      ],
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 30000).toISOString(),
    },
    {
      id: 'm3',
      sessionId: '1',
      role: 'user',
      content: 'Can you expand on the data privacy challenges?',
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'm4',
      sessionId: '1',
      role: 'assistant',
      content: '## Data Privacy Challenges in Healthcare AI\n\nBased on recent regulatory analysis and industry reports:\n\n### HIPAA Compliance\n\n• Protected Health Information (PHI) must be de-identified before AI training\n• Covered entities remain liable for data breaches even with AI vendors\n• Minimum necessary standard applies to AI data access\n\n### Technical Safeguards\n\n• Federated learning allows model training without centralized data storage\n• Differential privacy techniques add noise to protect individual records\n• Homomorphic encryption enables computation on encrypted data\n\n### Emerging Regulations\n\n• EU AI Act classifies healthcare AI as "high-risk" requiring strict oversight\n• FDA guidance on AI/ML medical devices includes data governance requirements\n• State-level privacy laws (CCPA, VCDPA) add compliance complexity\n\n### Patient Consent Issues\n\n• Unclear how to obtain informed consent for AI-assisted care\n• Right to explanation conflicts with black-box AI models\n• Data portability requirements challenge AI system interoperability',
      sources: [
        {
          title: 'HIPAA Compliance for AI Healthcare Systems',
          url: 'https://example.com/hipaa-ai',
          type: 'government',
          credibility: 98,
          excerpt: 'HHS guidance clarifies covered entity responsibilities when using AI...',
        },
        {
          title: 'Privacy-Preserving Machine Learning in Healthcare',
          url: 'https://example.com/privacy-ml',
          type: 'academic',
          credibility: 94,
          excerpt: 'Federated learning and differential privacy offer practical solutions...',
        },
      ],
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000 + 45000).toISOString(),
    },
  ],
  '3': [
    {
      id: 'm5',
      sessionId: '3',
      role: 'user',
      content: 'Research the environmental impact of electric vehicle batteries',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'm6',
      sessionId: '3',
      role: 'assistant',
      content: 'Based on analysis of 23 academic papers and 15 industry reports published in the last 2 years:\n\n## Environmental Benefits\n\n• EVs produce 50% fewer lifecycle emissions than gasoline vehicles\n• Zero tailpipe emissions improve urban air quality\n• Renewable energy charging reduces carbon footprint by 70%\n\n## Manufacturing Concerns\n\n• Lithium mining requires 500,000 gallons of water per ton\n• Cobalt extraction linked to environmental degradation in DRC\n• Battery production accounts for 40% of EV lifecycle emissions\n\n## Recycling Challenges\n\n• Only 5% of lithium-ion batteries currently recycled globally\n• Economic viability of recycling depends on material prices\n• New direct recycling methods recover 95% of materials\n\n## Future Outlook\n\n• Solid-state batteries promise 50% lower environmental impact\n• Circular economy initiatives aim for 90% recycling rates by 2030\n• Alternative chemistries (sodium-ion, iron-air) reduce mining dependence',
      sources: [
        {
          title: 'Lifecycle Assessment of Electric Vehicle Batteries',
          url: 'https://example.com/ev-lca',
          type: 'academic',
          credibility: 96,
          excerpt: 'Comprehensive LCA shows EVs have lower total environmental impact...',
        },
        {
          title: 'Battery Recycling Technologies and Economics',
          url: 'https://example.com/battery-recycling',
          type: 'industry',
          credibility: 89,
          excerpt: 'Direct recycling methods offer superior material recovery and lower energy...',
        },
      ],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + 60000).toISOString(),
    },
  ],
};

export const mockSettings: ResearchSettings = {
  id: 'settings-1',
  preferredSources: ['academic', 'news'],
  researchDepth: 'standard',
  citationFormat: 'apa',
  autoSave: true,
  researchLanguage: 'en',
};
