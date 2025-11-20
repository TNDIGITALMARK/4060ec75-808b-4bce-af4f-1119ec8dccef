'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileSearch, Library, Settings, Home, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/chat', label: 'Chat', icon: MessageSquare },
    { href: '/research', label: 'Research', icon: FileSearch },
    { href: '/library', label: 'Library', icon: Library },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] md:top-0 md:bottom-auto z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around md:justify-start md:gap-8 h-16">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center gap-2 mr-8">
            <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <FileSearch className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-[#1F2937]">AI-RESEARCH</span>
          </Link>

          {/* Navigation Links */}
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'text-[#3B82F6] bg-[#3B82F6]/5'
                    : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F9FAFB]'
                )}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                <span className="text-xs md:text-sm font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
