import React from 'react';

interface Filter {
  key: string;
  label: string;
  count?: number;
  active: boolean;
}

interface FilterPillsProps {
  filters: Filter[];
  onToggle: (key: string) => void;
}

export function FilterPills({ filters, onToggle }: FilterPillsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onToggle(filter.key)}
          className={`filter-pill whitespace-nowrap ${
            filter.active
              ? 'bg-[var(--accent-brand)]/10 text-[var(--accent-brand)] border-[var(--accent-brand)]'
              : 'bg-white text-[var(--text-secondary)] border-[var(--border-card)]'
          }`}
        >
          {filter.label}
          {filter.count !== undefined && (
            <span className="ml-1.5 opacity-70">({filter.count})</span>
          )}
        </button>
      ))}
    </div>
  );
}
