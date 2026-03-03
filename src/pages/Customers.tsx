import React, { useState } from 'react';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { DataTable } from '@/src/components/ui/DataTable';
import { FilterPills } from '@/src/components/ui/FilterPills';
import { SlideOver } from '@/src/components/ui/SlideOver';
import { Search, Filter, Phone, Mail, MapPin } from 'lucide-react';

const MOCK_CUSTOMERS = [
  { id: 'CUS-001', name: 'Fatima Zahra', phone: '+212 6 00 11 22 33', city: 'Casablanca', orders: 3, totalSpent: 1350, lastOrder: 'Aujourd\'hui', status: 'Actif' },
  { id: 'CUS-002', name: 'Youssef Alaoui', phone: '+212 6 11 22 33 44', city: 'Rabat', orders: 1, totalSpent: 299, lastOrder: 'Aujourd\'hui', status: 'Nouveau' },
  { id: 'CUS-003', name: 'Khadija Benali', phone: '+212 6 22 33 44 55', city: 'Marrakech', orders: 5, totalSpent: 2150, lastOrder: 'Hier', status: 'VIP' },
  { id: 'CUS-004', name: 'Omar Tazi', phone: '+212 6 33 44 55 66', city: 'Tanger', orders: 2, totalSpent: 850, lastOrder: 'Hier', status: 'Actif' },
  { id: 'CUS-005', name: 'Sara Idrissi', phone: '+212 6 44 55 66 77', city: 'Fès', orders: 1, totalSpent: 450, lastOrder: '23 Jan', status: 'Inactif' },
];

const STATUS_COLORS: Record<string, string> = {
  'Nouveau': 'var(--accent-brand)',
  'Actif': 'var(--status-shipped)',
  'VIP': 'var(--status-pending)',
  'Inactif': 'var(--status-cancelled)',
};

export function Customers() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const filters = [
    { id: 'Tous', label: 'Tous', count: 1245 },
    { id: 'Nouveau', label: 'Nouveau', count: 124 },
    { id: 'Actif', label: 'Actif', count: 856 },
    { id: 'VIP', label: 'VIP', count: 45 },
    { id: 'Inactif', label: 'Inactif', count: 220 },
  ];

  const columns = [
    { key: 'name', label: 'CLIENT' },
    { 
      key: 'phone', 
      label: 'TÉLÉPHONE',
      render: (val: string) => (
        <span className="text-[var(--accent-brand)] hover:underline cursor-pointer">{val}</span>
      )
    },
    { key: 'city', label: 'VILLE' },
    { key: 'orders', label: 'COMMANDES', align: 'center' as const },
    { 
      key: 'totalSpent', 
      label: 'DÉPENSÉ',
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
    { key: 'lastOrder', label: 'DERNIÈRE COMMANDE', align: 'right' as const },
  ];

  const filteredCustomers = MOCK_CUSTOMERS.filter(customer => {
    const matchesFilter = activeFilter === 'Tous' || customer.status === activeFilter;
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          customer.phone.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Clients
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Gérez votre base de données clients et leur historique.
          </p>
        </div>
        <button className="px-4 py-2 bg-[var(--accent-brand)] text-white text-[14px] font-semibold rounded-[8px] hover:bg-teal-800 transition-colors">
          + Ajouter Client
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
                placeholder="Rechercher un client..." 
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
          data={filteredCustomers} 
          onRowClick={setSelectedCustomer}
          emptyMessage="Aucun client trouvé."
        />
      </div>

      <SlideOver 
        isOpen={!!selectedCustomer} 
        onClose={() => setSelectedCustomer(null)}
        title={selectedCustomer?.name}
        subtitle={`Client depuis ${selectedCustomer?.lastOrder}`}
      >
        {selectedCustomer && (
          <div className="space-y-6">
            <SectionHeader title="Contact" />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[14px] text-[var(--text-primary)]">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[var(--text-secondary)]" />
                </div>
                <span className="text-[var(--accent-brand)]">{selectedCustomer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[var(--text-primary)]">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-page)] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[var(--text-secondary)]" />
                </div>
                <span>{selectedCustomer.city}</span>
              </div>
            </div>

            <SectionHeader title="Statistiques" />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)]">
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Commandes</p>
                <p className="font-serif font-bold text-[24px] text-[var(--text-primary)]">{selectedCustomer.orders}</p>
              </div>
              <div className="p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)]">
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Total Dépensé</p>
                <p className="font-serif font-bold text-[24px] text-[var(--text-primary)]">
                  {selectedCustomer.totalSpent} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                </p>
              </div>
            </div>

            <SectionHeader title="Statut" />
            <div className="flex items-center gap-3">
              <span 
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{ 
                  backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[selectedCustomer.status]} 10%, transparent)`,
                  color: STATUS_COLORS[selectedCustomer.status]
                }}
              >
                {selectedCustomer.status}
              </span>
            </div>
          </div>
        )}
      </SlideOver>
    </div>
  );
}
