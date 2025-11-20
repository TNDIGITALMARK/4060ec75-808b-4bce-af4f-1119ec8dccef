import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Icon Wrapper Component - Matches ai-generated-preview.png design
 * Creates circular background with blue tint for icons
 *
 * Design Specs:
 * - Circle diameter: 48px (md), 40px (sm), 56px (lg)
 * - Background: rgba(59, 130, 246, 0.1) - 10% blue tint
 * - Icon size: 24px (md), 20px (sm), 28px (lg)
 * - Icon color: #3B82F6 (primary blue)
 * - Stroke width: 2px
 */
export function IconWrapper({ icon: Icon, className, size = 'md' }: IconWrapperProps) {
  const sizeClasses = {
    sm: 'w-10 h-10', // 40px
    md: 'w-12 h-12', // 48px
    lg: 'w-14 h-14', // 56px
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center',
        'bg-[rgba(59,130,246,0.1)]',
        sizeClasses[size],
        className
      )}
    >
      <Icon
        size={iconSizes[size]}
        className="text-[#3B82F6]"
        strokeWidth={2}
      />
    </div>
  );
}
