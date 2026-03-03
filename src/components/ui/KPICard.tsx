import React from "react";
import { cn } from "@/src/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  unit?: string;
  isCritical?: boolean;
  tooltip?: string;
  className?: string;
}

export function KPICard({
  title,
  value,
  trend,
  trendDirection = "neutral",
  unit,
  isCritical = false,
  tooltip,
  className,
}: KPICardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-[20px] md:p-[24px] hover:-translate-y-[1px] transition-all duration-200 cursor-pointer relative overflow-hidden shadow-none hover:border-gray-300",
        isCritical && "border-l-[3px] border-l-[var(--accent-danger)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] md:text-[12px] font-normal text-[var(--text-secondary)]">
          {title}
        </span>
        <div className="group relative">
          <div className="w-4 h-4 rounded-full border border-[var(--border-card)] text-[var(--text-muted)] flex items-center justify-center text-[10px] font-serif italic cursor-help">
            i
          </div>
          <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-[#1a1a1a] text-white text-[11px] p-2 rounded shadow-lg z-10">
            {tooltip || `Information about ${title.toLowerCase()}`}
          </div>
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span
          className={cn(
            "font-serif text-[28px] md:text-[36px] font-bold leading-none",
            isCritical ? "text-[var(--accent-danger)]" : "text-[var(--text-primary)]"
          )}
        >
          {value}
        </span>
        {unit && <span className="text-[14px] text-[var(--text-muted)]">{unit}</span>}
      </div>

      {trend && (
        <div className="flex items-center gap-1">
          <span
            className={cn(
              "text-[12px] font-medium",
              trendDirection === "up" && "text-[var(--accent-brand)]",
              trendDirection === "down" && "text-[var(--accent-danger)]",
              trendDirection === "neutral" && "text-[var(--text-secondary)]",
              isCritical && "text-[var(--accent-danger)]"
            )}
          >
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}
