import React, { useState } from 'react';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { DataTable } from '@/src/components/ui/DataTable';
import { FilterPills } from '@/src/components/ui/FilterPills';
import { SlideOver } from '@/src/components/ui/SlideOver';
import { ShoppingCart, Search, Filter } from 'lucide-react';

const MOCK_ORDERS = [
  { id: 'ORD-001', customer: 'Fatima Zahra', city: 'Casablanca', product: 'Linen Set', amount: 450, status: 'Nouveau', date: 'Aujourd\'hui' },
  { id: 'ORD-002', customer: 'Youssef Alaoui', city: 'Rabat', product: 'Smart Watch', amount: 299, status: 'Confirmé', date: 'Aujourd\'hui' },
  { id: 'ORD-003', customer: 'Khadija Benali', city: 'Marrakech', product: 'Abaya', amount: 350, status: 'Expédié', date: 'Hier' },
  { id: 'ORD-004', customer: 'Omar Tazi', city: 'Tanger', product: 'Sneakers', amount: 550, status: 'Livré', date: 'Hier' },
  { id: 'ORD-005', customer: 'Sara Idrissi', city: 'Fès', product: 'Linen Set', amount: 450, status: 'Retourné', date: '23 Jan' },
];

const STATUS_COLORS: Record<string, string> = {
  'Nouveau': 'var(--accent-brand)',
  'Confirmé': 'var(--accent-brand)',
  'En attente': 'var(--status-pending)',
  'Expédié': 'var(--status-shipped)',
  'Livré': 'var(--status-delivered)',
  'Retourné': 'var(--status-returned)',
  'Annulé': 'var(--status-cancelled)',
};

export function Orders() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const filters = [
    { id: 'Tous', label: 'Tous', count: 156 },
    { id: 'Nouveau', label: 'Nouveau', count: 42 },
    { id: 'Confirmé', label: 'Confirmé', count: 28 },
    { id: 'Expédié', label: 'Expédié', count: 56 },
    { id: 'Livré', label: 'Livré', count: 18 },
    { id: 'Retourné', label: 'Retourné', count: 12 },
  ];

  const columns = [
    { key: 'id', label: 'ID COMMANDE' },
    { key: 'customer', label: 'CLIENT' },
    { key: 'city', label: 'VILLE' },
    { key: 'product', label: 'PRODUIT' },
    { 
      key: 'amount', 
      label: 'MONTANT',
      align: 'right' as const,
      render: (val: number) => (
        <span className="font-serif font-bold text-[var(--text-primary)]">
          {val} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
        </span>
      )
    },
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

  const filteredOrders = MOCK_ORDERS.filter(order => {
    const matchesFilter = activeFilter === 'Tous' || order.status === activeFilter;
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Commandes
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Gérez vos commandes, expéditions et retours.
          </p>
        </div>
        <button className="px-4 py-2 bg-[var(--accent-brand)] text-white text-[14px] font-semibold rounded-[8px] hover:bg-teal-800 transition-colors">
          + Nouvelle Commande
        </button>
      </div>

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
                placeholder="Rechercher une commande..." 
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
          data={filteredOrders} 
          onRowClick={setSelectedOrder}
          emptyMessage="Aucune commande trouvée."
        />
      </div>

      <SlideOver 
        isOpen={!!selectedOrder} 
        onClose={() => setSelectedOrder(null)}
        title={`Commande ${selectedOrder?.id}`}
        subtitle={selectedOrder?.date}
      >
        {selectedOrder && (
          <div className="space-y-6">
            <SectionHeader title="Détails du Client" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Nom</p>
                <p className="text-[14px] text-[var(--text-primary)]">{selectedOrder.customer}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Ville</p>
                <p className="text-[14px] text-[var(--text-primary)]">{selectedOrder.city}</p>
              </div>
            </div>

            <SectionHeader title="Détails du Produit" />
            <div className="flex justify-between items-center p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)]">
              <div>
                <p className="text-[14px] font-medium text-[var(--text-primary)]">{selectedOrder.product}</p>
                <p className="text-[12px] text-[var(--text-secondary)]">Qté: 1</p>
              </div>
              <p className="font-serif font-bold text-[18px] text-[var(--text-primary)]">
                {selectedOrder.amount} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
              </p>
            </div>

            <SectionHeader title="Statut" />
            <div className="flex items-center gap-3">
              <span 
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{ 
                  backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[selectedOrder.status]} 10%, transparent)`,
                  color: STATUS_COLORS[selectedOrder.status]
                }}
              >
                {selectedOrder.status}
              </span>
            </div>
          </div>
        )}
      </SlideOver>
    </div>
  );
}
