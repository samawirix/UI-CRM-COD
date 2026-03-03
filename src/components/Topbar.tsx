import { Bell, RefreshCw, Menu } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-[64px] bg-white/80 backdrop-blur-[8px] border-b border-[var(--border-card)] sticky top-0 z-30 flex items-center justify-between px-4 md:px-8">
      {/* Left: Mobile Menu */}
      <div className="flex items-center flex-1">
        <button className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden md:flex items-center bg-[var(--bg-page)] border border-[var(--border-card)] rounded-full p-1">
          <button className="px-4 py-1.5 text-[12px] font-medium text-[var(--text-primary)] bg-white shadow-micro rounded-full border border-[var(--border-card)]">
            Today
          </button>
          <button className="px-4 py-1.5 text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-full">
            Yesterday
          </button>
          <button className="px-4 py-1.5 text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-full">
            7 Days
          </button>
        </div>

        <div className="hidden md:block h-4 w-px bg-[var(--border-card)] mx-2" />

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-brand)]/5 border border-[var(--accent-brand)]/10 rounded-full">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-brand)] animate-pulse" />
          <span className="text-[12px] font-medium text-[var(--accent-brand)]">Live sync</span>
        </div>

        <div className="hidden md:block h-4 w-px bg-[var(--border-card)] mx-2" />

        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--bg-page)] text-[var(--text-secondary)] transition-colors border border-[var(--border-card)]">
          <RefreshCw className="w-[16px] h-[16px] stroke-[1.5]" />
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--bg-page)] text-[var(--text-secondary)] transition-colors border border-[var(--border-card)] relative">
          <Bell className="w-[16px] h-[16px] stroke-[1.5]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--accent-danger)] rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  );
}
