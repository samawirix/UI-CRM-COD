import React, { useState } from 'react';
import { SectionHeader } from '@/src/components/ui/SectionHeader';
import { DataTable } from '@/src/components/ui/DataTable';
import { FilterPills } from '@/src/components/ui/FilterPills';
import { SlideOver } from '@/src/components/ui/SlideOver';
import { KPICard } from '@/src/components/ui/KPICard';
import { Search, Filter, Package, Tag, TrendingUp } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: 'PRD-001', name: 'Linen Set Summer', category: 'Vêtements', price: 450, cost: 150, stock: 124, status: 'Actif', sales: 342 },
  { id: 'PRD-002', name: 'Smart Watch Pro', category: 'Électronique', price: 299, cost: 80, stock: 0, status: 'Rupture', sales: 856 },
  { id: 'PRD-003', name: 'Abaya Dubai', category: 'Vêtements', price: 350, cost: 120, stock: 45, status: 'Actif', sales: 124 },
  { id: 'PRD-004', name: 'Sneakers Air', category: 'Chaussures', price: 550, cost: 200, stock: 12, status: 'Faible', sales: 89 },
  { id: 'PRD-005', name: 'Sac en Cuir', category: 'Accessoires', price: 450, cost: 180, stock: 56, status: 'Actif', sales: 45 },
];

const STATUS_COLORS: Record<string, string> = {
  'Actif': 'var(--status-delivered)',
  'Faible': 'var(--status-pending)',
  'Rupture': 'var(--status-returned)',
  'Inactif': 'var(--status-cancelled)',
};

export function Products() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filters = [
    { id: 'Tous', label: 'Tous', count: 156 },
    { id: 'Actif', label: 'Actif', count: 120 },
    { id: 'Faible', label: 'Stock Faible', count: 15 },
    { id: 'Rupture', label: 'Rupture', count: 8 },
    { id: 'Inactif', label: 'Inactif', count: 13 },
  ];

  const columns = [
    { key: 'id', label: 'SKU' },
    { key: 'name', label: 'PRODUIT' },
    { key: 'category', label: 'CATÉGORIE' },
    { 
      key: 'price', 
      label: 'PRIX',
      align: 'right' as const,
      render: (val: number) => (
        <span className="font-serif font-bold text-[var(--text-primary)]">
          {val} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
        </span>
      )
    },
    { 
      key: 'stock', 
      label: 'STOCK',
      align: 'right' as const,
      render: (val: number) => (
        <span className={`font-serif font-bold ${val === 0 ? 'text-[var(--accent-danger)]' : 'text-[var(--text-primary)]'}`}>
          {val}
        </span>
      )
    },
    { key: 'sales', label: 'VENTES', align: 'right' as const },
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
  ];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesFilter = activeFilter === 'Tous' || product.status === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Produits
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Gérez votre catalogue, vos prix et votre inventaire.
          </p>
        </div>
        <button className="px-4 py-2 bg-[var(--accent-brand)] text-white text-[14px] font-semibold rounded-[8px] hover:bg-teal-800 transition-colors">
          + Ajouter Produit
        </button>
      </div>

      <section>
        <SectionHeader title="Aperçu du Catalogue" icon={Package} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="TOTAL PRODUITS"
            value="156"
            trend="+3"
            trendDirection="up"
          />
          <KPICard
            title="PRODUITS ACTIFS"
            value="120"
            trend="+5"
            trendDirection="up"
          />
          <KPICard
            title="RUPTURE DE STOCK"
            value="8"
            trend="+2"
            trendDirection="up"
            isCritical={true}
            tooltip="Produits nécessitant un réapprovisionnement urgent"
          />
          <KPICard
            title="VALEUR DU STOCK"
            value="245K"
            unit="MAD"
            trend="-12K MAD"
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
                placeholder="Rechercher un produit..." 
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
          data={filteredProducts} 
          onRowClick={setSelectedProduct}
          emptyMessage="Aucun produit trouvé."
        />
      </div>

      <SlideOver 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name}
        subtitle={selectedProduct?.id}
      >
        {selectedProduct && (
          <div className="space-y-6">
            <SectionHeader title="Détails Financiers" />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)]">
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Prix de Vente</p>
                <p className="font-serif font-bold text-[24px] text-[var(--text-primary)]">
                  {selectedProduct.price} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                </p>
              </div>
              <div className="p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)]">
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Coût d'Achat</p>
                <p className="font-serif font-bold text-[24px] text-[var(--text-primary)]">
                  {selectedProduct.cost} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">MAD</span>
                </p>
              </div>
            </div>
            <div className="p-4 bg-[var(--bg-page)] rounded-[8px] border border-[var(--border-card)] flex justify-between items-center">
              <span className="text-[14px] font-medium text-[var(--text-primary)]">Marge Brute</span>
              <span className="font-serif font-bold text-[18px] text-[var(--accent-brand)]">
                {selectedProduct.price - selectedProduct.cost} <span className="text-[12px] text-[var(--accent-brand)] font-sans font-normal">MAD</span>
              </span>
            </div>

            <SectionHeader title="Inventaire & Ventes" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Stock Actuel</p>
                <p className={`font-serif font-bold text-[24px] ${selectedProduct.stock === 0 ? 'text-[var(--accent-danger)]' : 'text-[var(--text-primary)]'}`}>
                  {selectedProduct.stock} <span className="text-[12px] text-[var(--text-muted)] font-sans font-normal">Unités</span>
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Total Ventes</p>
                <p className="font-serif font-bold text-[24px] text-[var(--text-primary)]">
                  {selectedProduct.sales}
                </p>
              </div>
            </div>

            <SectionHeader title="Statut" />
            <div className="flex items-center gap-3">
              <span 
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{ 
                  backgroundColor: `color-mix(in srgb, ${STATUS_COLORS[selectedProduct.status]} 10%, transparent)`,
                  color: STATUS_COLORS[selectedProduct.status]
                }}
              >
                {selectedProduct.status}
              </span>
            </div>
          </div>
        )}
      </SlideOver>
    </div>
  );
}
