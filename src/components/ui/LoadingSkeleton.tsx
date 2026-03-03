import React from 'react';

interface LoadingSkeletonProps {
  type: 'card' | 'table' | 'chart';
  count?: number;
}

export function LoadingSkeleton({ type, count = 1 }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-[#f0ede8] animate-shimmer rounded-xl h-[140px] w-full" />
        );
      case 'table':
        return (
          <div className="space-y-2 w-full">
            <div className="bg-[#f0ede8] animate-shimmer h-10 w-full rounded-md" />
            <div className="bg-[#f0ede8] animate-shimmer h-12 w-full rounded-md" />
            <div className="bg-[#f0ede8] animate-shimmer h-12 w-full rounded-md" />
            <div className="bg-[#f0ede8] animate-shimmer h-12 w-full rounded-md" />
            <div className="bg-[#f0ede8] animate-shimmer h-12 w-full rounded-md" />
          </div>
        );
      case 'chart':
        return (
          <div className="bg-[#f0ede8] animate-shimmer rounded-xl h-[300px] w-full" />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`grid gap-6 ${type === 'card' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}
