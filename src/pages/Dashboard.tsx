import { KPICard } from "@/src/components/ui/KPICard";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { AlertBar } from "@/src/components/ui/AlertBar";
import {
  Users,
  CheckCircle2,
  PhoneOff,
  DollarSign,
  ShoppingCart,
  Truck,
  RotateCcw,
  CreditCard,
  TrendingUp,
  Activity,
  Target,
  Package,
  Clock,
  Award,
  Megaphone,
  Box,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Tableau de Bord COD
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--accent-brand)]" />
            Aperçu en temps réel de votre tunnel Cash On Delivery.
          </p>
        </div>
      </div>

      <AlertBar 
        message="Taux de retour critique sur Oujda (45%)." 
        actionLabel="Analyser →" 
        onAction={() => {}} 
      />

      {/* Acquisition Section */}
      <section>
        <SectionHeader title="Acquisition" icon={Users} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="TOTAL LEADS"
            value="450"
            trend="+12%"
            trendDirection="up"
          />
          <KPICard
            title="TAUX CONFIRMATION"
            value="42.5"
            unit="%"
            trend="+3.2%"
            trendDirection="up"
          />
          <KPICard
            title="SANS RÉPONSE"
            value="15.2"
            unit="%"
            trend="-2.1%"
            trendDirection="down"
          />
          <KPICard
            title="COÛT / LEAD"
            value="4.2"
            unit="MAD"
            trend="-0.5 MAD"
            trendDirection="down"
          />
        </div>
      </section>

      {/* Fulfillment Section */}
      <section>
        <SectionHeader title="Expédition" icon={Package} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="COMMANDES"
            value="192"
            trend="+8%"
            trendDirection="up"
          />
          <KPICard
            title="TAUX LIVRAISON"
            value="18.5"
            unit="%"
            trend="+1.5%"
            trendDirection="up"
          />
          <KPICard
            title="TAUX RETOUR"
            value="35.2"
            unit="%"
            trend="+4.5%"
            trendDirection="up"
            isCritical={true}
            tooltip="Taux de retour supérieur à 30% - Action requise"
          />
          <KPICard
            title="PANIER MOYEN"
            value="245"
            unit="MAD"
            trend="+12 MAD"
            trendDirection="up"
          />
        </div>
      </section>

      {/* Financial Section */}
      <section>
        <SectionHeader title="Finances" icon={DollarSign} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="REVENU TOTAL"
            value="47,040"
            unit="MAD"
            trend="+15%"
            trendDirection="up"
          />
          <KPICard
            title="PROFIT NET"
            value="12,500"
            unit="MAD"
            trend="+8%"
            trendDirection="up"
          />
          <KPICard
            title="ROAS"
            value="4.2"
            unit="x"
            trend="+0.5x"
            trendDirection="up"
          />
          <KPICard
            title="MARGE"
            value="26.5"
            unit="%"
            trend="+2.1%"
            trendDirection="up"
          />
        </div>
      </section>

      {/* Live Operations Section */}
      <section>
        <SectionHeader title="Opérations en Direct" icon={Activity} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Confirmed Today */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[14px] font-medium text-[var(--text-primary)]">
                Confirmé Aujourd'hui
              </span>
              <div className="text-right">
                <span className="font-serif text-[28px] font-bold text-[var(--text-primary)] tracking-tight">
                  192
                </span>
                <span className="text-[12px] text-[var(--text-muted)] ml-1">/ 300</span>
              </div>
            </div>
            <div className="h-2 bg-[var(--bg-page)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent-brand)] rounded-full"
                style={{ width: "64%" }}
              />
            </div>
          </div>

          {/* Pending Callback */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[14px] font-medium text-[var(--text-primary)]">
                Rappels en Attente
              </span>
              <div className="text-right">
                <span className="font-serif text-[28px] font-bold text-[var(--text-primary)] tracking-tight">
                  85
                </span>
                <span className="text-[12px] text-[var(--text-muted)] ml-1">/ 150</span>
              </div>
            </div>
            <div className="h-2 bg-[var(--bg-page)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--status-pending)] rounded-full"
                style={{ width: "56%" }}
              />
            </div>
          </div>

          {/* Shipped Today */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[14px] font-medium text-[var(--text-primary)]">
                Expédié Aujourd'hui
              </span>
              <div className="text-right">
                <span className="font-serif text-[28px] font-bold text-[var(--text-primary)] tracking-tight">
                  45
                </span>
                <span className="text-[12px] text-[var(--text-muted)] ml-1">/ 200</span>
              </div>
            </div>
            <div className="h-2 bg-[var(--bg-page)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--status-shipped)] rounded-full"
                style={{ width: "22.5%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Ecosystem Section */}
      <section>
        <SectionHeader title="Écosystème en Direct" icon={Box} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Call Center Pro */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-brand)]/10 flex items-center justify-center">
                <PhoneOff className="w-5 h-5 text-[var(--accent-brand)]" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">Call Center Pro</span>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="bg-[var(--bg-page)] rounded-lg p-4">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                  Taux de Réponse
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[28px] font-bold text-[var(--text-primary)] tracking-tight">
                    82%
                  </span>
                  <span className="text-[12px] text-[var(--accent-brand)] font-medium">↑5%</span>
                </div>
              </div>
              <div className="bg-[var(--bg-page)] rounded-lg p-4">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                  Sans Réponse
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[28px] font-bold text-[var(--text-primary)] tracking-tight">
                    18%
                  </span>
                </div>
              </div>
              <div className="bg-[var(--bg-page)] rounded-lg p-4">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                  Taux Annulation
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[28px] font-bold text-[var(--accent-danger)] tracking-tight">
                    12%
                  </span>
                  <span className="text-[12px] text-[var(--accent-danger)] font-medium">↓2%</span>
                </div>
              </div>
              <div className="bg-[var(--bg-page)] rounded-lg p-4">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                  Taux Confirmation
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-[28px] font-bold text-[var(--status-pending)] tracking-tight">
                    42%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--status-shipped)]/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-[var(--status-shipped)]" />
                </div>
                <span className="font-medium text-[var(--text-primary)]">Inventaire</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[var(--accent-danger)] animate-pulse" />
            </div>
            <div className="mb-6">
              <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                Valeur du Stock
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-[32px] font-bold text-[var(--text-primary)] tracking-tight">
                  245K
                </span>
                <span className="text-[14px] text-[var(--text-muted)]">MAD</span>
              </div>
            </div>
            <div className="bg-[var(--accent-danger)]/5 border border-[var(--accent-danger)]/20 rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[var(--accent-danger)]">⚠️</span>
                <span className="text-[14px] font-semibold text-[var(--accent-danger)]">
                  2 ruptures de stock!
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between text-[14px]">
                  <span className="text-[var(--text-primary)] truncate">فستان زهرة</span>
                  <span className="text-[var(--accent-danger)] font-medium">0 u.</span>
                </li>
                <li className="flex justify-between text-[14px]">
                  <span className="text-[var(--text-primary)] truncate">Abaya-Chemise e...</span>
                  <span className="text-[var(--accent-danger)] font-medium">0 u.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--status-delivered)]/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-[var(--status-delivered)]" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">Expédition</span>
            </div>
            <div className="flex-1 bg-[var(--status-delivered)]/5 border border-[var(--status-delivered)]/20 rounded-lg flex flex-col items-center justify-center p-6">
              <div className="w-12 h-12 rounded-full bg-white border border-[var(--status-delivered)]/30 flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[var(--status-delivered)]" />
              </div>
              <span className="font-serif text-[28px] font-bold text-[var(--status-delivered)] tracking-tight">
                98% À Temps
              </span>
            </div>
          </div>

          {/* Top Agents */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--status-pending)]/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[var(--status-pending)]" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">Meilleurs Agents</span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-card)] bg-[var(--bg-page)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--status-pending)]/20 text-[var(--status-pending)] flex items-center justify-center text-[12px] font-bold">
                    SA
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--text-primary)]">Sara. A</p>
                    <p className="text-[10px] text-[var(--text-secondary)]">2 Confirmés</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold text-[var(--status-pending)]">100%</p>
                  <p className="text-[10px] text-[var(--text-secondary)] uppercase">Taux</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-card)] bg-[var(--bg-page)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-[var(--text-secondary)] flex items-center justify-center text-[12px] font-bold">
                    YK
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--text-primary)]">Yassine. K</p>
                    <p className="text-[10px] text-[var(--text-secondary)]">0 Confirmés</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold text-[var(--text-secondary)]">0%</p>
                  <p className="text-[10px] text-[var(--text-secondary)] uppercase">Taux</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-danger)]/10 flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-[var(--accent-danger)]" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">Marketing</span>
            </div>
            <div className="grid grid-cols-2 gap-6 flex-1">
              <div className="bg-[var(--bg-page)] rounded-lg p-6 flex flex-col justify-center">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  Total Dépensé
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-[32px] font-bold text-[var(--text-primary)] tracking-tight">
                    0
                  </span>
                  <span className="text-[14px] text-[var(--text-muted)]">MAD</span>
                </div>
              </div>
              <div className="bg-[var(--bg-page)] rounded-lg p-6 flex flex-col justify-center">
                <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                  CPA Moyen
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-[32px] font-bold text-[var(--text-primary)] tracking-tight">
                    0
                  </span>
                  <span className="text-[14px] text-[var(--text-muted)]">MAD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Matrix */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] p-6 flex flex-col col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--status-shipped)]/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--status-shipped)]" />
              </div>
              <span className="font-medium text-[var(--text-primary)]">Matrice Produits</span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between p-4 rounded-lg border-l-[3px] border-l-[var(--accent-brand)] bg-[var(--bg-page)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-[var(--border-card)] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[var(--accent-brand)]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--text-primary)]">Linen Set</p>
                    <p className="text-[12px] text-[var(--text-secondary)]">
                      ROAS 0x • 0% Livré
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 bg-[var(--accent-brand)]/10 text-[var(--accent-brand)] text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                    Phase Scale
                  </span>
                  <p className="text-[12px] text-[var(--text-secondary)]">0 Commandes</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border-l-[3px] border-l-[var(--accent-danger)] bg-[var(--bg-page)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-[var(--border-card)] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[var(--accent-danger)] rotate-180" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--text-primary)]">Smart Watch</p>
                    <p className="text-[12px] text-[var(--text-secondary)]">
                      CPA 0 MAD • 0% RTO
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 bg-[var(--accent-danger)]/10 text-[var(--accent-danger)] text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                    Couper Ads
                  </span>
                  <p className="text-[12px] text-[var(--text-secondary)]">0 Commandes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
