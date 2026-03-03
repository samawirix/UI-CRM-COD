import React from 'react';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { KPICard } from '@/src/components/ui/KPICard';
import { InsightBox } from '@/src/components/ui/InsightBox';
import { BarChart3, TrendingUp, Users, Target, Activity } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-12 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Analyses & Rapports
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--accent-brand)]" />
            Performances détaillées de votre activité E-commerce.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-[var(--border-card)] text-[var(--text-primary)] text-[14px] font-medium rounded-[8px] hover:bg-[var(--bg-page)] transition-colors">
            7 Derniers Jours
          </button>
          <button className="px-4 py-2 border border-[var(--border-card)] text-[var(--text-primary)] text-[14px] font-medium rounded-[8px] hover:bg-[var(--bg-page)] transition-colors">
            Ce Mois
          </button>
        </div>
      </div>

      <InsightBox 
        message="Ce mois: 42,800 MAD revenus — 23,100 MAD coûts = 19,700 MAD profit net. Le taux de retour a baissé de 2% par rapport au mois dernier." 
      />

      <section>
        <SectionHeader title="Aperçu des Ventes" icon={TrendingUp} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="REVENU TOTAL"
            value="42,800"
            unit="MAD"
            trend="+15%"
            trendDirection="up"
          />
          <KPICard
            title="COMMANDES"
            value="342"
            trend="+8%"
            trendDirection="up"
          />
          <KPICard
            title="PANIER MOYEN"
            value="125"
            unit="MAD"
            trend="-2 MAD"
            trendDirection="down"
          />
          <KPICard
            title="PROFIT NET"
            value="19,700"
            unit="MAD"
            trend="+12%"
            trendDirection="up"
          />
        </div>
      </section>

      <section>
        <SectionHeader title="Performance Marketing" icon={Target} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="DÉPENSES PUBLICITAIRES"
            value="12,400"
            unit="MAD"
            trend="+5%"
            trendDirection="up"
          />
          <KPICard
            title="COÛT PAR ACQUISITION (CPA)"
            value="36.2"
            unit="MAD"
            trend="-1.5 MAD"
            trendDirection="down"
          />
          <KPICard
            title="ROAS GLOBAL"
            value="3.4"
            unit="x"
            trend="+0.2x"
            trendDirection="up"
          />
          <KPICard
            title="CLICS (CTR)"
            value="2.8"
            unit="%"
            trend="+0.1%"
            trendDirection="up"
          />
        </div>
      </section>

      <section>
        <SectionHeader title="Performance Agents" icon={Users} />
        <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider border-b border-[var(--border-card)]">Agent</th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider border-b border-[var(--border-card)] text-center">Appels</th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider border-b border-[var(--border-card)] text-center">Confirmés</th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider border-b border-[var(--border-card)] text-center">Taux Conf.</th>
                  <th className="px-6 py-4 text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider border-b border-[var(--border-card)] text-right">Revenu Généré</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border-card)] hover:bg-[var(--bg-page)] transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-[var(--text-primary)]">Sara. A</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">145</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">82</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-[var(--accent-brand)] text-center">56%</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-right font-serif font-bold">
                    12,450 <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                  </td>
                </tr>
                <tr className="border-b border-[var(--border-card)] hover:bg-[var(--bg-page)] transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-[var(--text-primary)]">Yassine. K</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">120</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">45</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-[var(--status-pending)] text-center">37%</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-right font-serif font-bold">
                    6,800 <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                  </td>
                </tr>
                <tr className="border-b border-[var(--border-card)] hover:bg-[var(--bg-page)] transition-colors">
                  <td className="px-6 py-4 text-[14px] font-medium text-[var(--text-primary)]">Fatima. Z</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">95</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-center">20</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-[var(--accent-danger)] text-center">21%</td>
                  <td className="px-6 py-4 text-[14px] text-[var(--text-primary)] text-right font-serif font-bold">
                    3,100 <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
