import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import {
  LayoutDashboard,
  PhoneCall,
  Users,
  UserSquare2,
  ShoppingCart,
  Truck,
  Package,
  BarChart3,
  DollarSign,
  TrendingUp,
  Users2,
  CreditCard,
  Settings,
  LogOut,
  Activity,
  Search
} from "lucide-react";

const navGroups = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/" },
      { name: "Call Center", icon: PhoneCall, path: "/call-center" },
    ],
  },
  {
    title: "PIPELINE",
    items: [
      { name: "Leads", icon: Users, path: "/leads", badge: 12 },
      { name: "Customers", icon: UserSquare2, path: "/customers" },
    ],
  },
  {
    title: "COMMERCE",
    items: [
      { name: "Orders (COD)", icon: ShoppingCart, path: "/orders" },
      { name: "Delivery", icon: Truck, path: "/delivery" },
      { name: "Products", icon: Package, path: "/products" },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      { name: "Analytics", icon: BarChart3, path: "/analytics" },
      { name: "Finance", icon: DollarSign, path: "/finance" },
      { name: "Marketing Spend", icon: TrendingUp, path: "/marketing" },
    ],
  },
  {
    title: "ADMIN",
    items: [
      { name: "Users", icon: Users2, path: "/users" },
      { name: "Payouts", icon: CreditCard, path: "/payouts" },
      { name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[60px] xl:w-[240px] bg-[#111827] flex-col h-screen fixed left-0 top-0 overflow-y-auto hidden md:flex z-40 transition-all duration-300 border-r border-white/5">
      {/* Logo */}
      <div className="p-4 xl:p-6 flex items-center justify-center xl:justify-start gap-3">
        <div className="w-8 h-8 bg-[#0d736a] rounded-lg flex items-center justify-center shrink-0">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-bold text-[16px] tracking-wide hidden xl:block">COD CRM</span>
      </div>

      {/* Search */}
      <div className="px-4 pb-4 hidden xl:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      <div className="h-px bg-white/5 mx-4 mb-4" />

      {/* Navigation */}
      <nav className="flex-1 px-2 xl:px-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-1">
            <h3 className="px-3 text-[10px] xl:text-[11px] font-semibold text-white/30 uppercase tracking-[1.5px] mb-1 hidden xl:block">
              {group.title}
            </h3>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    title={item.name}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-lg text-[13px] xl:text-[14px] transition-colors duration-150 group relative",
                      isActive
                        ? "bg-[#0d736a]/20 text-[#0d736a] font-medium"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                      "justify-center xl:justify-start"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#0d736a] rounded-r-full hidden xl:block" />
                    )}
                    <div className="flex items-center gap-3 w-full">
                      <item.icon
                        className={cn(
                          "w-[18px] h-[18px] stroke-[1.5] shrink-0",
                          isActive ? "text-[#0d736a]" : "text-white/40 group-hover:text-white/70"
                        )}
                      />
                      <span className="hidden xl:block">{item.name}</span>
                      {item.badge && (
                        <span className="hidden xl:flex ml-auto bg-[#ef4444] text-white text-[10px] font-bold h-5 min-w-[20px] items-center justify-center rounded-full px-1.5">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto">
        <div className="h-px bg-white/5 mb-4" />
        <div className="flex items-center justify-center xl:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#4f46e5] text-white flex items-center justify-center text-[13px] font-bold shrink-0">
              AU
            </div>
            <div className="hidden xl:block">
              <p className="text-white text-[13px] font-medium">Admin User</p>
              <p className="text-white/40 text-[12px]">Admin</p>
            </div>
          </div>
          <button className="hidden xl:block text-white/40 hover:text-white transition-colors">
            <LogOut className="w-[18px] h-[18px] stroke-[1.5]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
