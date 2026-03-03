import React, { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  width?: string;
}

export function SlideOver({ isOpen, onClose, title, subtitle, children, width = "max-w-[480px]" }: SlideOverProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className={`relative w-full ${width} bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.08)] transform transition-transform duration-300 ease-in-out flex flex-col h-full`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-card)]">
          <div>
            <h2 className="text-[20px] font-serif text-[var(--text-primary)]">{title}</h2>
            {subtitle && <p className="text-[13px] text-[var(--text-secondary)] mt-1">{subtitle}</p>}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[var(--bg-page)] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
