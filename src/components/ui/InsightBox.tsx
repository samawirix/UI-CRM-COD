import React, { ReactNode } from 'react';

interface InsightBoxProps {
  icon?: string;
  children: ReactNode;
}

export function InsightBox({ icon = "💡", children }: InsightBoxProps) {
  return (
    <div className="bg-[var(--bg-page)] border-l-[3px] border-[var(--accent-brand)] p-4 sm:px-5 sm:py-4 rounded-r-lg flex gap-3 items-start">
      <span className="text-lg leading-none mt-0.5">{icon}</span>
      <div className="text-[13px] sm:text-[14px] text-[var(--text-primary)] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
