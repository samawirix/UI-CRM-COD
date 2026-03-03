import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon, title, subtitle, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-[var(--bg-page)] rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[var(--text-muted)]" />
      </div>
      <h3 className="text-[16px] font-medium text-[var(--text-secondary)] mb-1">{title}</h3>
      {subtitle && <p className="text-[13px] text-[var(--text-muted)] max-w-sm mb-6">{subtitle}</p>}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="bg-[var(--accent-brand)] text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[var(--accent-brand)]/90 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
