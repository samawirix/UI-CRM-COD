import React, { useState } from 'react';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { DataTable } from '@/src/components/ui/DataTable';
import { FilterPills } from '@/src/components/ui/FilterPills';
import { SlideOver } from '@/src/components/ui/SlideOver';
import { KPICard } from '@/src/components/ui/KPICard';
import { Search, Filter, Truck, MapPin, Package } from 'lucide-react';

const MOCK_DELIVERIES = [
  { id: 'TRK-001', orderId: 'ORD-124', customer: 'Fatima Zahra', city: 'Casablanca', company: 'Amana', status: 'En Transit', date: 'Aujourd\'hui' },
  { id: 'TRK-002', orderId: 'ORD-125', customer: 'Youssef Alaoui', city: 'Rabat', company: 'Cathedis', status: 'Livré', date: 'Aujourd\'hui' },
  { id: 'TRK-003', orderId: 'ORD-126', customer: 'Khadija Benali', city: 'Marrakech', company: 'Ghazala', status: 'Retourné', date: 'Hier' },
  { id: 'TRK-004', orderId: 'ORD-127', customer: 'Omar Tazi', city: 'Tanger', company: 'Amana', status: 'En Transit', date: 'Hier' },
  { id: 'TRK-005', orderId: 'ORD-128', customer: 'Sara Idrissi', city: 'Fès', company: 'Cathedis', status: 'En Attente', date: '23 Jan' },
];

const STATUS_COLORS: Record<string, string> = {
  'En Attente': 'var(--status-pending)',
  'En Transit': 'var(--status-shipped)',
  'Livré': 'var(--status-delivered)',
  'Retourné': 'var(--status-returned)',
};

export function Delivery() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState<any>(null);

  const filters = [
    { id: 'Tous', label: 'Tous', count: 450 },
    { id: 'En Attente', label: 'En Attente', count: 45 },
    { id: 'En Transit', label: 'En Transit', count: 120 },
    { id: 'Livré', label: 'Livré', count: 250 },
    { id: 'Retourné', label: 'Retourné', count: 35 },
  ];

  const columns = [
    { key: 'id', label: 'TRACKING' },
    { key: 'orderId', label: 'COMMANDE' },
    { key: 'customer', label: 'CLIENT' },
    { key: 'city', label: 'VILLE' },
    { key: 'company', label: 'SOCIÉTÉ' },
    { 
      key: 'status', 
      label: 'STATUT',
      render: (val: string) => (
        <span 
          className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium"
          style={{ 
            backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[val]} 10%, transparent)`,
            color: STATUS_COLORS[val]
          }}
        >
          {val}
        </span>
      )
    },
    { key: 'date', label: 'DATE', align: 'right' as const },
  ];

  const filteredDeliveries = MOCK_DELIVERIES.filter(delivery => {
    const matchesFilter = activeFilter === 'Tous' || delivery.status === activeFilter;
    const matchesSearch = delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          delivery.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          delivery.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Expédition & Livraison
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Suivi des colis et gestion des sociétés de livraison.
          </p>
        </div>
        <button className="px-4 py-2 border border-[var(--border-card)] text-[var(--text-primary)] text-[14px] font-medium rounded-[8px] hover:bg-[var(--bg-page)] transition-colors">
          Exporter CSV
        </button>
      </div>

      <section>
        <SectionHeader title="Aperçu des Livraisons" icon={Truck} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="EN TRANSIT"
            value="120"
            trend="+15"
            trendDirection="up"
          />
          <KPICard
            title="TAUX DE LIVRAISON"
            value="82.5"
            unit="%"
            trend="+2.1%"
            trendDirection="up"
          />
          <KPICard
            title="TAUX DE RETOUR"
            value="17.5"
            unit="%"
            trend="-1.2%"
            trendDirection="down"
          />
          <KPICard
            title="DÉLAI MOYEN"
            value="2.4"
            unit="Jours"
            trend="-0.2 Jours"
            trendDirection="down"
          />
        </div>
      </section>

      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] overflow-hidden">
        <div className="p-4 border-b border-[var(--border-card)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <FilterPills 
            filters={filters} 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Rechercher un colis..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-[var(--bg-page)] border border-[var(--border-card)] rounded-[8px] text-[13px] focus:outline-none focus:border-[var(--accent-brand)] w-full md:w-64"
              />
            </div>
            <button className="p-2 border border-[var(--border-card)] rounded-[8px] text-[var(--text-secondary)] hover:bg-[var(--bg-page)]">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <DataTable 
          columns={columns} 
          data={filteredDeliveries} 
          onRowClick={setSelectedDelivery}
          emptyMessage="Aucun colis trouvé."
        />
      </div>

      <SlideOver 
        isOpen={!!selectedDelivery} 
        onClose={() => setSelectedDelivery(null)}
        title={`Colis ${selectedDelivery?.id}`}
        subtitle={`Commande ${selectedDelivery?.orderId}`}
      >
        {selectedDelivery && (
          <div className="space-y-6">
            <SectionHeader title="Détails de Livraison" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Société</p>
                <p className="text-[14px] text-[var(--text-primary)]">{selectedDelivery.company}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Ville</p>
                <p className="text-[14px] text-[var(--text-primary)]">{selectedDelivery.city}</p>
              </div>
            </div>

            <SectionHeader title="Client" />
            <div className="flex items-center gap-3 text-[14px] text-[var(--text-primary)]">
              <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[var(--text-secondary)]" />
              </div>
              <span>{selectedDelivery.customer}</span>
            </div>

            <SectionHeader title="Statut" />
            <div className="flex items-center gap-3">
              <span 
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{ 
                  backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[selectedDelivery.status]} 10%, transparent)`,
                  color: STATUS_COLORS[selectedDelivery.status]
                }}
              >
                {selectedDelivery.status}
              </span>
            </div>
          </div>
        )}
      </SlideOver>
    </div>
  );
}
