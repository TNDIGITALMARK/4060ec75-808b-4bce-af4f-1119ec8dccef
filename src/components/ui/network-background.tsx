'use client';

import { cn } from '@/lib/utils';

interface NetworkBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Network Background Component - Matches ai-generated-preview.png design
 * Creates abstract tech network pattern with nodes and connections
 *
 * Design Specs:
 * - Base background: #0F1419 (deep navy/black)
 * - Node glow: #3B82F6 at 40% opacity with blur
 * - Connection lines: rgba(59, 130, 246, 0.2)
 * - Subtle animation for dynamic feel
 */
export function NetworkBackground({ className, children }: NetworkBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0F1419]" />

      {/* Network pattern SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Network connections (lines) */}
        <g stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none">
          <line x1="10%" y1="20%" x2="30%" y2="40%" />
          <line x1="30%" y1="40%" x2="50%" y2="30%" />
          <line x1="50%" y1="30%" x2="70%" y2="50%" />
          <line x1="70%" y1="50%" x2="85%" y2="35%" />
          <line x1="20%" y1="60%" x2="40%" y2="75%" />
          <line x1="40%" y1="75%" x2="65%" y2="80%" />
          <line x1="65%" y1="80%" x2="80%" y2="65%" />
          <line x1="15%" y1="85%" x2="35%" y2="90%" />
          <line x1="35%" y1="90%" x2="60%" y2="95%" />
          <line x1="30%" y1="40%" x2="40%" y2="75%" />
          <line x1="50%" y1="30%" x2="65%" y2="80%" />
          <line x1="70%" y1="50%" x2="80%" y2="65%" />
        </g>

        {/* Network nodes (circles with glow) */}
        <g fill="#3B82F6" filter="url(#glow)">
          <circle cx="10%" cy="20%" r="4" opacity="0.6" />
          <circle cx="30%" cy="40%" r="6" opacity="0.7" />
          <circle cx="50%" cy="30%" r="5" opacity="0.6" />
          <circle cx="70%" cy="50%" r="6" opacity="0.8" />
          <circle cx="85%" cy="35%" r="4" opacity="0.5" />
          <circle cx="20%" cy="60%" r="5" opacity="0.6" />
          <circle cx="40%" cy="75%" r="6" opacity="0.7" />
          <circle cx="65%" cy="80%" r="5" opacity="0.6" />
          <circle cx="80%" cy="65%" r="4" opacity="0.7" />
          <circle cx="15%" cy="85%" r="5" opacity="0.6" />
          <circle cx="35%" cy="90%" r="4" opacity="0.5" />
          <circle cx="60%" cy="95%" r="5" opacity="0.6" />
        </g>

        {/* Larger glow elements for depth */}
        <g fill="#3B82F6" opacity="0.15" filter="url(#glow)">
          <circle cx="25%" cy="25%" r="40" />
          <circle cx="75%" cy="60%" r="50" />
          <circle cx="45%" cy="85%" r="45" />
        </g>
      </svg>

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
