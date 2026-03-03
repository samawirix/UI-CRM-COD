import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon?: LucideIcon;
}

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="w-4 h-4 text-[var(--text-muted)] shrink-0" />}
      <h2 className="text-[13px] font-semibold text-[var(--text-secondary)] uppercase tracking-[1.5px] whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-grow h-px bg-[var(--border-card)] ml-4" />
    </div>
  );
}
