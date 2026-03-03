import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AlertBarProps {
  message: string;
  metric?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

export function AlertBar({ message, metric, actionLabel, onAction, onDismiss }: AlertBarProps) {
  return (
    <div className="bg-white border-l-[3px] border-[var(--accent-danger)] p-3 sm:px-4 sm:py-3 rounded-r-lg flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-4 h-4 text-[var(--accent-danger)] shrink-0" />
        <p className="text-[13px] sm:text-[14px] text-[var(--text-primary)]">
          {message}
          {metric && (
            <span className="text-[var(--accent-danger)] font-semibold ml-1">
              {metric}
            </span>
          )}
        </p>
      </div>
      
      <div className="flex items-center gap-4 shrink-0">
        {actionLabel && onAction && (
          <button 
            onClick={onAction}
            className="text-[13px] font-semibold text-[var(--accent-brand)] hover:underline whitespace-nowrap"
          >
            {actionLabel}
          </button>
        )}
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
