import React, { useState } from 'react';
import { 
  Phone, PhoneCall, PhoneOff, Volume2, RefreshCw, CheckCircle2, 
  Clock, Activity, MapPin, Package, User, Search, Plus, Minus, 
  Trash2, Truck, X, SkipForward, MessageSquare, CheckSquare, Globe,
  ShoppingCart, Facebook, Instagram
} from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const getSourceIcon = (source: string, className: string) => {
  switch (source.toUpperCase()) {
    case 'FACEBOOK': return <Facebook className={className} />;
    case 'INSTAGRAM': return <Instagram className={className} />;
    case 'TIKTOK': return <TikTokIcon className={className} />;
    default: return <Globe className={className} />;
  }
};

const getSourceColor = (source: string) => {
  switch (source.toUpperCase()) {
    case 'FACEBOOK': return 'text-blue-600 bg-blue-50 border-blue-100';
    case 'INSTAGRAM': return 'text-pink-600 bg-pink-50 border-pink-100';
    case 'TIKTOK': return 'text-black bg-gray-100 border-gray-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

// Mock Data
const QUEUE = [
  {
    id: '1',
    name: 'Nasser Bekkali',
    phone: '+212 600 81 86 12',
    product: 'Col Roulé (فستان ياقوت - أسود) - XL - XXL (44-46)',
    city: 'Rabat',
    calls: 0,
    status: 'NEW',
    source: 'TIKTOK',
    price: 299
  },
  {
    id: '2',
    name: 'Naser Bek',
    phone: '+212 600 81 86 17',
    product: 'ABAYA Al-Amira',
    city: 'Rabat',
    calls: 0,
    status: 'OTHER',
    source: 'FACEBOOK',
    price: 350
  },
  {
    id: '3',
    name: 'Fatima Zahra',
    phone: '+212 612 34 56 78',
    product: 'Hijab Set Premium',
    city: 'Casablanca',
    calls: 1,
    status: 'NEW',
    source: 'INSTAGRAM',
    price: 199
  }
];

export function CallCenter() {
  const [selectedLead, setSelectedLead] = useState<typeof QUEUE[0] | null>(null);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden -m-4 md:-m-8">
      {/* Page Header */}
      <div className="flex items-center justify-between px-8 py-6 shrink-0">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="font-serif text-[28px] font-bold text-[var(--text-primary)] leading-none mb-1">Centre d'Appels</h1>
            <p className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-[1.5px]">Opérations en Direct</p>
          </div>
          <div className="px-3 py-1 bg-[#0d736a]/10 text-[#0d736a] rounded-full text-[12px] font-medium flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d736a]" />
            4 En attente
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white border border-[var(--border-card)] rounded-xl px-2 py-1.5 shadow-sm">
            {/* Stats */}
              <div className="flex items-center gap-3 px-4 border-r border-[var(--border-card)]">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-[var(--text-secondary)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Appels</span>
                  <span className="font-serif text-[18px] font-bold leading-none">124</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 border-r border-[var(--border-card)]">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[var(--status-delivered)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[var(--status-delivered)] uppercase tracking-wider">Confirmé</span>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-[18px] font-bold leading-none text-[var(--status-delivered)]">42</span>
                    <span className="text-[10px] font-bold text-[var(--status-delivered)] bg-green-100 px-1.5 py-0.5 rounded">+3</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 border-r border-[var(--border-card)]">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[var(--status-pending)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[var(--status-pending)] uppercase tracking-wider">Rappels</span>
                  <span className="font-serif text-[18px] font-bold leading-none text-[var(--status-pending)]">18</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[var(--accent-brand)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[var(--accent-brand)] uppercase tracking-wider">Taux</span>
                  <span className="font-serif text-[18px] font-bold leading-none text-[var(--accent-brand)]">34%</span>
                </div>
              </div>
          </div>
          
          <button className="w-11 h-11 flex items-center justify-center bg-white border border-[var(--border-card)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] shadow-sm hover:bg-gray-50 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
          <button className="w-11 h-11 flex items-center justify-center bg-white border border-[var(--border-card)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] shadow-sm hover:bg-gray-50 transition-colors group">
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 gap-6 px-8 pb-8 overflow-hidden">
        {/* Left Sidebar (Queue) */}
        <div className="w-[360px] flex flex-col shrink-0">
          {/* Tabs */}
          <div className="flex items-center bg-[var(--bg-page)] border border-[var(--border-card)] rounded-xl p-1 mb-6">
            <button className="flex-1 py-2.5 text-[13px] font-bold bg-white shadow-sm rounded-lg text-[var(--text-primary)] flex items-center justify-center gap-2">
              Mode Focus <span className="px-1.5 py-0.5 bg-[var(--accent-brand)] text-white rounded-md text-[10px]">2</span>
            </button>
            <button className="flex-1 py-2.5 text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg">
              Historique
            </button>
            <button className="flex-1 py-2.5 text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg">
              Rappels
            </button>
          </div>

          {/* Queue Header */}
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[1.5px]">File d'Attente</h3>
            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">1 NOUVEAU</span>
            <span className="px-2 py-0.5 bg-gray-100 text-[var(--text-secondary)] rounded text-[10px] font-bold">1 AUTRE</span>
          </div>

          {/* Queue List */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-4">
            {QUEUE.map(lead => (
              <div 
                key={lead.id} 
                className={`bg-white border rounded-xl p-4 cursor-pointer transition-all ${selectedLead?.id === lead.id ? 'border-[var(--accent-brand)] shadow-[0_0_0_1px_var(--accent-brand)] bg-[#0d736a]/5' : 'border-[var(--border-card)] shadow-sm hover:border-gray-300 hover:bg-gray-50'}`} 
                onClick={() => setSelectedLead(lead)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[15px] text-[var(--text-primary)]">{lead.name}</h4>
                  {lead.status === 'NEW' ? (
                    <span className="px-2 py-1 bg-[#29a363]/10 text-[#29a363] rounded-md text-[10px] font-bold flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#29a363] animate-pulse" /> NOUVEAU
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-[var(--text-secondary)]/10 text-[var(--text-secondary)] rounded-md text-[10px] font-bold flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]" /> AUTRE
                    </span>
                  )}
                </div>
                <div className="font-mono text-[13px] font-semibold text-[var(--text-primary)] mb-3">{lead.phone}</div>
                
                <div className="flex items-center gap-2 text-[12px] text-[var(--text-secondary)] mb-2">
                  <Package className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate font-medium">{lead.product}</span>
                </div>
                <div className="flex items-center justify-between text-[12px] text-[var(--text-secondary)] mb-4">
                  <div className="flex items-center gap-1 text-[var(--accent-danger)] font-bold bg-red-50 px-2 py-0.5 rounded-md">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lead.city}</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium bg-gray-100 px-2 py-0.5 rounded-md">
                    <Phone className="w-3.5 h-3.5" />
                    {lead.calls} appels
                  </div>
                </div>

                <button className={`w-full py-2.5 rounded-lg text-[13px] font-bold flex items-center justify-center gap-2 transition-colors ${selectedLead?.id === lead.id ? 'bg-[var(--accent-brand)] text-white' : 'bg-white border border-[var(--border-card)] text-[var(--text-primary)] hover:bg-gray-50'}`}>
                  <PhoneCall className={`w-4 h-4 ${selectedLead?.id === lead.id ? 'text-white' : 'text-[var(--text-secondary)]'}`} />
                  {selectedLead?.id === lead.id ? 'Appel Actif' : 'Appeler'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Workspace */}
        <div className="flex-1 bg-white border border-[var(--border-card)] rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {!selectedLead ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-[var(--bg-page)] rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-[var(--text-muted)]" />
              </div>
              <h2 className="font-serif text-[24px] font-bold text-[var(--text-primary)] mb-2">Prêt pour les appels</h2>
              <p className="text-[14px] text-[var(--text-secondary)]">Sélectionnez un lead dans la file à gauche pour commencer</p>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              {/* Active Call Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--border-card)] bg-white shrink-0 relative overflow-hidden">
                {/* Animated background pulse for active call */}
                <div className="absolute inset-0 bg-[var(--status-delivered)]/5 animate-pulse pointer-events-none" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[var(--accent-brand)] rounded-xl flex items-center justify-center shadow-sm">
                      <PhoneCall className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--status-delivered)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--status-delivered)] border-2 border-white"></span>
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif text-[24px] font-bold text-[var(--text-primary)] leading-none mb-1">{selectedLead.name}</h2>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[14px] text-[var(--text-secondary)]">{selectedLead.phone}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border flex items-center gap-1 ${getSourceColor(selectedLead.source)}`}>
                        {getSourceIcon(selectedLead.source, "w-3 h-3")}
                        {selectedLead.source}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 relative z-10">
                  <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-xl border border-green-100">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-[var(--status-delivered)] rounded-full animate-[bounce_1s_infinite_100ms]" />
                      <div className="w-1 h-6 bg-[var(--status-delivered)] rounded-full animate-[bounce_1s_infinite_200ms]" />
                      <div className="w-1 h-3 bg-[var(--status-delivered)] rounded-full animate-[bounce_1s_infinite_300ms]" />
                      <div className="w-1 h-5 bg-[var(--status-delivered)] rounded-full animate-[bounce_1s_infinite_400ms]" />
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[24px] font-bold text-[var(--status-delivered)] leading-none">00:09</div>
                      <div className="text-[10px] font-bold text-[var(--status-delivered)] uppercase tracking-[1.5px] mt-0.5">Appel Actif</div>
                    </div>
                  </div>
                  <button 
                    className="px-6 py-3 bg-[var(--accent-danger)] hover:bg-red-700 text-white rounded-full font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95"
                    onClick={() => setSelectedLead(null)}
                  >
                    <PhoneOff className="w-5 h-5" />
                    Terminer l'appel
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-6 py-3 border-b border-[var(--border-card)] bg-[var(--bg-page)] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mr-2">WhatsApp:</span>
                  <button className="px-4 py-1.5 bg-white border border-[#25D366]/30 text-[#25D366] rounded-full text-[12px] font-bold hover:bg-[#25D366]/10 transition-colors">Sans Réponse</button>
                  <button className="px-4 py-1.5 bg-white border border-[#25D366]/30 text-[#25D366] rounded-full text-[12px] font-bold hover:bg-[#25D366]/10 transition-colors">Envoyer Localisation</button>
                  <button className="px-4 py-1.5 bg-white border border-[#25D366]/30 text-[#25D366] rounded-full text-[12px] font-bold hover:bg-[#25D366]/10 transition-colors">Confirmer détails</button>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-medium text-[var(--text-secondary)]">
                  <Activity className="w-4 h-4 text-[var(--accent-brand)]" />
                  Statut Agent: <span className="text-[var(--accent-brand)] font-bold">En Appel</span>
                </div>
              </div>

              {/* Workspace Columns */}
              <div className="flex-1 flex overflow-hidden">
                {/* Left Column: Notes & Intel */}
                <div className="w-[320px] border-r border-[var(--border-card)] flex flex-col overflow-y-auto bg-white shrink-0">
                  <div className="p-6 border-b border-[var(--border-card)]">
                    <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[1.5px] mb-3 flex items-center gap-2">
                      <CheckSquare className="w-3.5 h-3.5" /> Notes d'Appel
                    </h3>
                    <textarea 
                      className="w-full h-24 p-3 bg-[var(--bg-page)] border border-[var(--border-card)] rounded-xl text-[13px] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)] resize-none"
                      placeholder="Enregistrer l'adresse exacte, numéros alternatifs, ou préférences..."
                    />
                  </div>

                  <div className="p-6 border-b border-[var(--border-card)]">
                    <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[1.5px] mb-4">Intelligence Lead</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[var(--accent-danger)]" />
                        </div>
                        <div>
                          <div className="text-[11px] text-[var(--text-secondary)] mb-0.5">Ville</div>
                          <div className="text-[13px] font-semibold text-[var(--text-primary)]">{selectedLead.city}</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                          <Package className="w-4 h-4 text-[var(--status-pending)]" />
                        </div>
                        <div>
                          <div className="text-[11px] text-[var(--text-secondary)] mb-0.5">Produit</div>
                          <div className="text-[13px] font-semibold text-[var(--text-primary)]">{selectedLead.product}</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-[var(--status-shipped)]" />
                        </div>
                        <div>
                          <div className="text-[11px] text-[var(--text-secondary)] mb-0.5">Tentatives</div>
                          <div className="text-[13px] font-semibold text-[var(--text-primary)]">{selectedLead.calls} Appels Précédents</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                      <User className="w-4 h-4" />
                      <span className="text-[13px] font-semibold">Nouveau Client</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Order Builder */}
                <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg-page)]">
                  <div className="p-6 space-y-6">
                    {/* Order Builder */}
                    <div className="bg-white border border-[var(--border-card)] rounded-xl p-5 shadow-sm">
                      <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[1.5px] mb-4 flex items-center gap-2">
                        <ShoppingCart className="w-3.5 h-3.5" /> Création Commande
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Source</label>
                          <div className={`flex items-center gap-2 p-2.5 border rounded-lg ${getSourceColor(selectedLead.source)}`}>
                            {getSourceIcon(selectedLead.source, "w-4 h-4 ml-1")}
                            <span className="text-[13px] font-bold">{selectedLead.source}</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Type de Vente</label>
                          <select className="w-full p-2.5 border border-[var(--border-card)] rounded-lg bg-white text-[13px] font-bold focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]">
                            <option>Vente Normale</option>
                            <option>Vente Incitative</option>
                            <option>Vente Croisée</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-3">
                        <div className="flex-1 relative">
                          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input 
                            type="text" 
                            placeholder="Rechercher dans le catalogue..." 
                            className="w-full pl-9 pr-3 py-2.5 border border-[var(--border-card)] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]"
                          />
                        </div>
                      </div>

                      <button className="w-full py-3 border border-dashed border-gray-300 rounded-xl text-[13px] font-bold text-[var(--text-secondary)] hover:text-[var(--accent-brand)] hover:border-[var(--accent-brand)] hover:bg-[#0d736a]/5 transition-all flex items-center justify-center gap-2 mb-4">
                        <Plus className="w-4 h-4" /> Ajouter un Article
                      </button>

                      {/* Order Items */}
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-3 p-3 border border-[var(--border-card)] rounded-xl bg-white shadow-sm group hover:border-[var(--accent-brand)] transition-colors">
                          <div className="w-10 h-10 bg-[var(--bg-page)] rounded-lg flex items-center justify-center shrink-0">
                            <Package className="w-5 h-5 text-[var(--text-secondary)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-bold text-[var(--text-primary)] truncate">
                              {selectedLead.product}
                            </div>
                            <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">SKU: PRD-001 • En Stock</div>
                          </div>
                          <div className="flex items-center bg-[var(--bg-page)] rounded-lg p-1 shrink-0 border border-[var(--border-card)]">
                            <button className="w-7 h-7 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-md text-[var(--text-secondary)] transition-all">
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <div className="w-8 flex items-center justify-center text-[13px] font-bold text-[var(--text-primary)]">
                              1
                            </div>
                            <button className="w-7 h-7 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-md text-[var(--text-secondary)] transition-all">
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-[15px] font-bold w-24 text-right shrink-0 text-[var(--text-primary)]">
                            {selectedLead.price} <span className="text-[11px] text-[var(--text-muted)] font-normal">MAD</span>
                          </div>
                          <button className="w-8 h-8 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:bg-red-50 rounded-lg transition-colors shrink-0 opacity-0 group-hover:opacity-100">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Shipping & Fulfillment */}
                    <div className="bg-white border border-[var(--border-card)] rounded-xl p-5 shadow-sm">
                      <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[1.5px] mb-4 flex items-center gap-2">
                        <Truck className="w-3.5 h-3.5" /> Expédition & Livraison
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Ville</label>
                          <input 
                            type="text" 
                            defaultValue={selectedLead.city}
                            className="w-full p-2.5 border border-[var(--border-card)] rounded-lg text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Zone / Quartier</label>
                          <input 
                            type="text" 
                            placeholder="Sélectionner Zone / Quartier..."
                            className="w-full p-2.5 border border-[var(--border-card)] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Adresse Précise</label>
                        <input 
                          type="text" 
                          placeholder="Entrer l'adresse de livraison précise..."
                          className="w-full p-2.5 border border-[var(--border-card)] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]"
                        />
                      </div>
                      
                      <div className="flex items-center gap-4 bg-[var(--bg-page)] p-3 rounded-lg border border-[var(--border-card)]">
                        <div className="flex-1">
                          <label className="block text-[11px] text-[var(--text-secondary)] mb-1.5 font-bold">Méthode d'Expédition</label>
                          <select className="w-full p-2 border border-[var(--border-card)] rounded-md bg-white text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-[var(--accent-brand)] focus:border-[var(--accent-brand)]">
                            <option>OzoneExpress (Standard) - 25 MAD</option>
                            <option>Amana (Standard) - 35 MAD</option>
                            <option>Cathedis (Express) - 45 MAD</option>
                          </select>
                        </div>
                        <div className="w-px h-10 bg-[var(--border-card)] mx-2" />
                        <label className="flex items-center gap-2 text-[13px] font-bold text-[var(--text-primary)] cursor-pointer pr-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-card)] text-[var(--accent-brand)] focus:ring-[var(--accent-brand)]" />
                          Commande d'Échange
                        </label>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-[#0a0a0a] rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-brand)] opacity-10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                      
                      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[1.5px] mb-4">Résumé Commande</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center text-[13px] text-gray-400">
                          <span>Sous-total (1 article):</span>
                          <span className="font-medium text-white">{selectedLead.price} MAD</span>
                        </div>
                        <div className="flex justify-between items-center text-[13px] text-gray-400">
                          <span>Frais d'Expédition:</span>
                          <span className="font-medium text-white">25 MAD</span>
                        </div>
                        <div className="flex justify-between items-center text-[13px] text-gray-400">
                          <span>Remise:</span>
                          <span className="font-medium text-[var(--status-delivered)]">-0 MAD</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end border-t border-gray-800 pt-4 mt-2">
                        <div>
                          <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1">Total à Encaisser</span>
                          <span className="text-[14px] font-bold text-white">Paiement à la Livraison</span>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-[36px] font-bold text-[var(--status-delivered)] leading-none">{selectedLead.price + 25}</span>
                          <span className="text-[14px] text-[var(--status-delivered)] ml-1 font-medium">MAD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-4 border-t border-[var(--border-card)] bg-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <button className="px-6 py-2.5 bg-[var(--status-delivered)] hover:bg-green-700 text-white rounded-full text-[14px] font-bold flex items-center gap-2 transition-colors shadow-sm">
                    <CheckCircle2 className="w-4 h-4" /> CONFIRMER
                  </button>
                  <button className="px-6 py-2.5 bg-white border border-[var(--status-pending)] text-[var(--status-pending)] hover:bg-orange-50 rounded-full text-[14px] font-bold flex items-center gap-2 transition-colors">
                    <Clock className="w-4 h-4" /> Rappel
                  </button>
                  <button className="px-6 py-2.5 bg-white border border-[var(--border-card)] text-[var(--text-primary)] hover:bg-[var(--bg-page)] rounded-full text-[14px] font-bold flex items-center gap-2 transition-colors">
                    <X className="w-4 h-4 text-[var(--text-secondary)]" /> Sans Réponse
                  </button>
                  <button className="px-6 py-2.5 bg-white border border-[var(--accent-danger)] text-[var(--accent-danger)] hover:bg-red-50 rounded-full text-[14px] font-bold flex items-center gap-2 transition-colors">
                    <PhoneOff className="w-4 h-4" /> Annuler
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2.5 bg-white border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] rounded-full text-[13px] font-semibold flex items-center gap-2 transition-colors">
                    <PhoneOff className="w-4 h-4" /> Faux Numéro
                  </button>
                  <button className="px-4 py-2.5 bg-white border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] rounded-full text-[13px] font-semibold flex items-center gap-2 transition-colors">
                    <SkipForward className="w-4 h-4" /> Passer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

