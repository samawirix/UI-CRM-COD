import React, { useState, useMemo } from "react";
import { Search, MoreVertical, Phone, ChevronDown, Download, Upload, Plus, X, MessageCircle, MapPin, Package, CheckCircle, CheckCircle2, Clock, UserPlus, Ban, Activity, Globe, ArrowRight, Instagram, Facebook, FileText } from "lucide-react";
import { StatusPill, StatusType } from "@/src/components/ui/StatusPill";
import { DataTable, Column } from "@/src/components/ui/DataTable";
import { SlideOver } from "@/src/components/ui/SlideOver";
import { FilterPills } from "@/src/components/ui/FilterPills";

const SourceIcon = ({ source }: { source: string }) => {
  let colorClass = 'text-slate-600 border-slate-200 bg-slate-50';
  let iconColor = 'text-slate-500';
  let label = source;
  
  if (source === 'FB') {
    colorClass = 'text-[#1877F2] border-[#1877F2]/20 bg-[#1877F2]/5';
    iconColor = 'text-[#1877F2]';
    label = 'Facebook';
  } else if (source === 'WA') {
    colorClass = 'text-[#25D366] border-[#25D366]/20 bg-[#25D366]/5';
    iconColor = 'text-[#25D366]';
    label = 'WhatsApp';
  } else if (source === 'IG') {
    colorClass = 'text-[#E1306C] border-[#E1306C]/20 bg-[#E1306C]/5';
    iconColor = 'text-[#E1306C]';
    label = 'Instagram';
  } else if (source === 'TT') {
    colorClass = 'text-black border-black/20 bg-black/5';
    iconColor = 'text-black';
    label = 'TikTok';
  } else if (source === 'GADS') {
    colorClass = 'text-[#4285F4] border-[#4285F4]/20 bg-[#4285F4]/5';
    iconColor = 'text-[#4285F4]';
    label = 'Google';
  }

  const renderIcon = () => {
    if (source === 'FB') return <Facebook className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
    if (source === 'IG') return <Instagram className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
    if (source === 'WA') return <MessageCircle className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
    if (source === 'TT') return (
      <svg className={`w-3.5 h-3.5 ${iconColor}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    );
    return <Globe className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[12px] font-semibold ${colorClass}`}>
      {renderIcon()}
      {label}
    </span>
  );
};

const initialLeads = [
  { id: "LD-1029", created: "Hier", name: "Fatima Zahra", phone: "06 79 85 95 26", product: "Abaya Collection", source: "FB", status: "annule" as StatusType, agent: "Yassine.K", agentInitials: "YA", amount: "450", city: "Casablanca" },
  { id: "LD-1028", created: "23 Fév", name: "Khadija Benali", phone: "06 49 95 35 10", product: "Ensemble Sport Modeste", source: "WA", status: "en_attente" as StatusType, agent: "Yassine.K", agentInitials: "YA", amount: "499", city: "Marrakech" },
  { id: "LD-1027", created: "Hier", name: "Amina El Ouardi", phone: "06 57 75 30 66", product: "Chemise Longue", source: "FB", status: "confirme" as StatusType, agent: "Sara.A", agentInitials: "SA", amount: "199", city: "Rabat" },
  { id: "LD-1026", created: "Il y a 2h", name: "Youssef Alaoui", phone: "06 30 11 12 61", product: "Ensemble Sport Modeste", source: "FB", status: "pas_de_reponse" as StatusType, agent: "Meryem.B", agentInitials: "ME", amount: "499", city: "Tanger" },
  { id: "LD-1025", created: "20 Fév", name: "Mehdi Tazi", phone: "06 35 27 82 64", product: "Abaya Collection", source: "WEB", status: "pas_de_reponse" as StatusType, agent: "Meryem.B", agentInitials: "ME", amount: "450", city: "Fès" },
  { id: "LD-1024", created: "Il y a 2h", name: "Salma Berrada", phone: "06 83 10 38 93", product: "Robe Modest", source: "FB", status: "en_attente" as StatusType, agent: "Yassine.K", agentInitials: "YA", amount: "349", city: "Agadir" },
  { id: "LD-1023", created: "23 Fév", name: "Hassan Chraibi", phone: "06 27 58 73 74", product: "Abaya Collection", source: "WA", status: "nouveau" as StatusType, agent: "Admin", agentInitials: "AD", amount: "450", city: "Oujda" },
  { id: "LD-1022", created: "Il y a 2h", name: "Meryem Idrissi", phone: "06 51 98 51 47", product: "Abaya Collection", source: "WA", status: "contacte" as StatusType, agent: "Sara.A", agentInitials: "SA", amount: "450", city: "Meknès" },
  { id: "LD-1021", created: "23 Fév", name: "Omar Mansouri", phone: "06 39 39 59 44", product: "Hijab Set Premium", source: "WA", status: "en_attente" as StatusType, agent: "Meryem.B", agentInitials: "ME", amount: "299", city: "Kénitra" },
  { id: "LD-1020", created: "Hier", name: "Sarah Amrani", phone: "06 39 53 45 60", product: "Ensemble Sport Modeste", source: "FB", status: "en_attente" as StatusType, agent: "Yassine.K", agentInitials: "YA", amount: "499", city: "Tétouan" },
  ...Array.from({ length: 40 }).map((_, i) => ({
    id: `LD-${1019 - i}`,
    created: `${Math.floor(Math.random() * 28) + 1} Fév`,
    name: `Client ${i + 1}`,
    phone: `06 ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)} ${Math.floor(Math.random() * 90 + 10)}`,
    product: ["Abaya Collection", "Ensemble Sport Modeste", "Chemise Longue", "Robe Modest", "Hijab Set Premium"][Math.floor(Math.random() * 5)],
    source: ["FB", "WA", "WEB", "IG", "TT", "GADS"][Math.floor(Math.random() * 6)],
    status: ["nouveau", "en_attente", "contacte", "confirme", "pas_de_reponse", "annule"][Math.floor(Math.random() * 6)] as StatusType,
    agent: ["Yassine.K", "Sara.A", "Meryem.B", "Admin"][Math.floor(Math.random() * 4)],
    agentInitials: ["YA", "SA", "ME", "AD"][Math.floor(Math.random() * 4)],
    amount: ["199", "299", "349", "450", "499"][Math.floor(Math.random() * 5)],
    city: ["Casablanca", "Marrakech", "Rabat", "Tanger", "Fès", "Agadir", "Oujda", "Meknès", "Kénitra", "Tétouan"][Math.floor(Math.random() * 10)]
  }))
];

export function Leads() {
  const [leads, setLeads] = useState(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<StatusType | "all">("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("7days");
  const [agentFilter, setAgentFilter] = useState("all");
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [slideOverMode, setSlideOverMode] = useState<"preview" | "edit" | "add">("preview");
  const [editingLead, setEditingLead] = useState<typeof initialLeads[0] | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            lead.phone.includes(searchQuery) ||
                            lead.product.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = activeFilter === "all" || lead.status === activeFilter;
      const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
      const matchesCity = cityFilter === "all" || lead.city === cityFilter;
      const matchesAgent = agentFilter === "all" || lead.agent === agentFilter;
      return matchesSearch && matchesStatus && matchesSource && matchesCity && matchesAgent;
    });
  }, [leads, searchQuery, activeFilter, sourceFilter, cityFilter, agentFilter]);

  const uniqueAgents = useMemo(() => Array.from(new Set(leads.map(l => l.agent))), [leads]);
  const uniqueCities = useMemo(() => Array.from(new Set(leads.map(l => l.city))), [leads]);

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  
  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredLeads.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredLeads, currentPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilter, sourceFilter, cityFilter, agentFilter]);

  const handleEdit = (lead: typeof initialLeads[0]) => {
    setEditingLead(lead);
    setSlideOverMode("preview");
    setIsSlideOverOpen(true);
  };

  const handleAdd = () => {
    setEditingLead(null);
    setSlideOverMode("add");
    setIsSlideOverOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newLead = {
      id: editingLead ? editingLead.id : `LD-${Math.floor(Math.random() * 10000)}`,
      created: editingLead ? editingLead.created : "Aujourd'hui",
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      product: formData.get("product") as string,
      source: formData.get("source") as string,
      status: formData.get("status") as StatusType,
      agent: formData.get("agent") as string,
      agentInitials: (formData.get("agent") as string).substring(0, 2).toUpperCase(),
      amount: formData.get("amount") as string,
      city: formData.get("city") as string,
    };

    if (editingLead) {
      setLeads(leads.map(l => l.id === editingLead.id ? newLead : l));
    } else {
      setLeads([newLead, ...leads]);
    }
    setIsSlideOverOpen(false);
  };

  const getFilterCount = (status: StatusType | "all") => {
    if (status === "all") return leads.length;
    return leads.filter(l => l.status === status).length;
  };

  const columns: Column<typeof initialLeads[0]>[] = [
    {
      key: 'checkbox',
      label: '',
      align: 'center',
      render: (_, lead) => (
        <div onClick={(e) => e.stopPropagation()}>
          <input type="checkbox" className="rounded border-[var(--border-card)] text-[var(--accent-brand)] focus:ring-[var(--accent-brand)]" />
        </div>
      )
    },
    {
      key: 'name',
      label: 'LEAD INFO',
      render: (_, lead) => (
        <>
          <div className="font-semibold text-[13px] text-[var(--text-primary)] mb-0.5">{lead.name}</div>
          <a
            href={`tel:${lead.phone.replace(/\s/g, '')}`}
            onClick={(e) => e.stopPropagation()}
            className="text-[12px] text-[var(--text-secondary)] hover:text-[var(--accent-brand)] flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 stroke-[2]" />
            {lead.phone}
          </a>
        </>
      )
    },
    {
      key: 'city',
      label: 'CITY',
      render: (_, lead) => <span className="text-[13px] text-[var(--text-secondary)] font-medium">{lead.city}</span>
    },
    {
      key: 'product',
      label: 'PRODUCT',
      render: (_, lead) => <span className="font-semibold text-[13px]">{lead.product}</span>
    },
    {
      key: 'source',
      label: 'SOURCE',
      render: (_, lead) => <SourceIcon source={lead.source} />
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (_, lead) => <StatusPill status={lead.status} />
    },
    {
      key: 'agent',
      label: 'AGENT',
      render: (_, lead) => (
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[var(--bg-page)] border border-[var(--border-card)] text-[var(--text-secondary)] flex items-center justify-center text-[10px] font-bold">
            {lead.agentInitials}
          </div>
          <span className="text-[13px] text-[var(--text-secondary)] font-medium">{lead.agent}</span>
        </div>
      )
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      render: (_, lead) => (
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-[15px] font-bold">{lead.amount}</span>
          <span className="text-[10px] font-semibold text-[var(--text-muted)] uppercase">MAD</span>
        </div>
      )
    },
    {
      key: 'created',
      label: 'CREATED',
      render: (_, lead) => <span className="text-[13px] text-[var(--text-secondary)] font-medium">{lead.created}</span>
    },
    {
      key: 'actions',
      label: '',
      align: 'right',
      render: () => (
        <button className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)] rounded-md transition-colors">
          <MoreVertical className="w-4 h-4 stroke-[1.5]" />
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6 pb-12 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-[28px] md:text-[32px] font-serif font-bold text-[var(--text-primary)] tracking-tight">
              Leads
            </h1>
            <span className="bg-[#e8e5e0] text-[var(--text-secondary)] text-[12px] font-semibold px-2.5 py-0.5 rounded-full">
              {leads.length}
            </span>
          </div>
          <p className="text-[14px] text-[var(--text-secondary)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            {getFilterCount("nouveau")} new leads waiting for callback
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-[var(--text-primary)] font-medium mr-2 hidden sm:inline-block">1 selected</span>
          <button className="btn-secondary hidden sm:flex items-center gap-2 rounded-full px-4 text-[13px] py-1.5">
            <FileText className="w-4 h-4 stroke-[1.5]" />
            Bulk Actions
          </button>
          <button className="btn-secondary flex items-center gap-2 rounded-full px-4 text-[13px] py-1.5">
            <Upload className="w-4 h-4 stroke-[1.5]" />
            Import
          </button>
          <button className="btn-secondary flex items-center gap-2 rounded-full px-4 text-[13px] py-1.5">
            <Download className="w-4 h-4 stroke-[1.5]" />
            Export CSV
          </button>
          <button 
            onClick={handleAdd}
            className="btn-primary flex items-center gap-2 rounded-full px-5 text-[13px] py-1.5"
          >
            <Plus className="w-4 h-4 stroke-[2]" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <FilterPills 
        filters={[
          { key: "all", label: "All", count: getFilterCount("all"), active: activeFilter === "all" },
          { key: "nouveau", label: "Nouveau", count: getFilterCount("nouveau"), active: activeFilter === "nouveau" },
          { key: "en_attente", label: "En attente", count: getFilterCount("en_attente"), active: activeFilter === "en_attente" },
          { key: "contacte", label: "Contacté", count: getFilterCount("contacte"), active: activeFilter === "contacte" },
          { key: "confirme", label: "Confirmé", count: getFilterCount("confirme"), active: activeFilter === "confirme" },
          { key: "pas_de_reponse", label: "Pas de réponse", count: getFilterCount("pas_de_reponse"), active: activeFilter === "pas_de_reponse" },
          { key: "annule", label: "Annulé", count: getFilterCount("annule"), active: activeFilter === "annule" },
        ]}
        onToggle={(key) => setActiveFilter(key as StatusType | "all")}
      />

      {/* Table Container */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[12px] shadow-micro overflow-hidden">
        {/* Table Controls */}
        <div className="p-4 border-b border-[var(--border-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-white border border-[var(--border-card)] rounded-full text-[13px] font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-page)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-brand)] focus:border-transparent cursor-pointer"
              >
                <option value="all">Source: All</option>
                <option value="FB">Facebook</option>
                <option value="IG">Instagram</option>
                <option value="TT">TikTok</option>
                <option value="WA">WhatsApp</option>
                <option value="GADS">Google Ads</option>
                <option value="WEB">Website</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-white border border-[var(--border-card)] rounded-full text-[13px] font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-page)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-brand)] focus:border-transparent cursor-pointer"
              >
                <option value="all">Date: All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-white border border-[var(--border-card)] rounded-full text-[13px] font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-page)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-brand)] focus:border-transparent cursor-pointer"
              >
                <option value="all">City: All</option>
                {uniqueCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)] pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={agentFilter}
                onChange={(e) => setAgentFilter(e.target.value)}
                className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-white border border-[var(--border-card)] rounded-full text-[13px] font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-page)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-brand)] focus:border-transparent cursor-pointer"
              >
                <option value="all">Agent: All</option>
                {uniqueAgents.map(agent => (
                  <option key={agent} value={agent}>{agent}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)] pointer-events-none" />
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search name, phone, product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[var(--border-card)] rounded-full py-2 pl-9 pr-4 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <DataTable 
          columns={columns} 
          data={paginatedLeads} 
          onRowClick={handleEdit}
          emptyMessage="No leads found matching your criteria."
        />
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[var(--border-card)] flex items-center justify-between bg-[var(--bg-page)]">
          <span className="text-[13px] text-[var(--text-secondary)]">
            Showing <span className="font-medium text-[var(--text-primary)]">{filteredLeads.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}-{Math.min(currentPage * itemsPerPage, filteredLeads.length)}</span> of <span className="font-medium text-[var(--text-primary)]">{filteredLeads.length}</span> leads
          </span>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-1.5 text-[13px] font-medium text-[var(--text-secondary)] bg-white border border-[var(--border-card)] rounded-full hover:bg-[var(--bg-page)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            
            <div className="flex items-center gap-1 px-2">
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5) {
                  if (currentPage > 3) {
                    pageNum = currentPage - 2 + i;
                  }
                  if (currentPage > totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  }
                }
                return (
                  <button 
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 flex items-center justify-center text-[13px] font-medium rounded-full transition-colors ${currentPage === pageNum ? "text-white bg-[var(--accent-brand)] shadow-sm" : "text-[var(--text-secondary)] hover:bg-[var(--bg-page)]"}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="text-[var(--text-muted)] text-[13px] px-1">...</span>
              )}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-4 py-1.5 text-[13px] font-medium text-[var(--text-secondary)] bg-white border border-[var(--border-card)] rounded-full hover:bg-[var(--bg-page)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Slide-over Panel */}
      <SlideOver
        isOpen={isSlideOverOpen}
        onClose={() => setIsSlideOverOpen(false)}
        title={
          slideOverMode === "preview" && editingLead ? (
            <div className="flex items-center gap-3">
              <StatusPill status={editingLead.status} />
              <span className="text-sm font-bold text-[var(--text-muted)] font-sans">{editingLead.id}</span>
            </div>
          ) : (
            editingLead ? "Edit Lead" : "Add Lead"
          )
        }
        width="sm:w-[450px]"
      >
        {slideOverMode === "preview" && editingLead ? (
          <div className="space-y-8 custom-scrollbar">
            {/* Customer Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-[var(--text-primary)]">{editingLead.name}</h2>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[var(--status-shipped)]/10 text-[var(--status-shipped)] flex items-center justify-center border border-[var(--status-shipped)]/20 hover:bg-[var(--status-shipped)]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-[var(--bg-page)] border border-[var(--border-card)] rounded-2xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[var(--text-muted)] mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Phone</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{editingLead.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--text-muted)] mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Address</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">Appt 1, Rue 38, Quartier Centre</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{editingLead.city}, Morocco</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Info */}
            <div>
              <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Order Details</h3>
              <div className="border border-[var(--border-card)] rounded-2xl overflow-hidden">
                <div className="p-4 bg-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--bg-page)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-[var(--text-muted)]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[var(--text-primary)] text-sm">{editingLead.product}</div>
                    <div className="text-xs font-medium text-[var(--text-secondary)]">Qty: 1</div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-bold text-[var(--text-primary)]">{editingLead.amount} <span className="text-[10px] font-sans text-[var(--text-muted)]">MAD</span></div>
                  </div>
                </div>
                <div className="bg-[var(--bg-page)] p-3 border-t border-[var(--border-card)] flex justify-between items-center text-xs font-semibold">
                  <span className="text-[var(--text-secondary)]">Source:</span>
                  <SourceIcon source={editingLead.source} />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-[var(--accent-brand)] text-white py-3 rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Confirmer
                </button>
                <button className="bg-[var(--status-pending)]/10 text-[var(--status-pending)] border border-[var(--status-pending)]/20 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-[var(--status-pending)]/20 transition-colors flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" /> Rappel
                </button>
                <button className="bg-[var(--bg-page)] text-[var(--text-primary)] border border-[var(--border-card)] py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" /> Assigner
                </button>
                <button className="bg-[var(--status-returned)]/10 text-[var(--status-returned)] border border-[var(--status-returned)]/20 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-[var(--status-returned)]/20 transition-colors flex items-center justify-center gap-2">
                  <Ban className="w-4 h-4" /> Annuler
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Activity Timeline</h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-card)] before:to-transparent">
                
                <div className="relative flex items-center justify-between group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--bg-page)] text-[var(--text-secondary)] shadow shrink-0 z-10">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-3.5rem)] bg-white p-3 rounded-xl border border-[var(--border-card)] shadow-sm ml-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-sm text-[var(--text-primary)]">Lead Created</div>
                      <div className="text-[10px] font-bold text-[var(--text-muted)]">22 Fév, 10:45</div>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-medium">Via {editingLead.source} campaign</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--status-shipped)]/10 text-[var(--status-shipped)] shadow shrink-0 z-10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-3.5rem)] bg-white p-3 rounded-xl border border-[var(--border-card)] shadow-sm ml-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-sm text-[var(--text-primary)]">Called by Agent</div>
                      <div className="text-[10px] font-bold text-[var(--text-muted)]">22 Fév, 11:30</div>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-medium">Agent: {editingLead.agent} - Pas de réponse</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--status-pending)]/10 text-[var(--status-pending)] shadow shrink-0 z-10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-3.5rem)] bg-white p-3 rounded-xl border border-[var(--border-card)] shadow-sm ml-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-sm text-[var(--text-primary)]">Status Updated</div>
                      <div className="text-[10px] font-bold text-[var(--text-muted)]">22 Fév, 11:31</div>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-medium">Moved to "En attente"</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Notes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Internal Notes</h3>
                <button className="text-[var(--accent-brand)] hover:opacity-80 text-xs font-bold flex items-center gap-1"><Plus className="w-3 h-3" /> Add Note</button>
              </div>
              <div className="bg-[var(--status-pending)]/10 border border-[var(--status-pending)]/20 p-4 rounded-xl text-sm font-medium text-[var(--text-primary)] shadow-sm">
                <p>Client injoignable le matin. A rappeler vers 18h après le travail.</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2 font-bold">- {editingLead.agent}, Hier 11:32</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex flex-col h-full bg-white -mx-6 -my-6">
            <div className="flex-1 overflow-y-auto p-6">
              <form id="lead-form" onSubmit={handleSave} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">Full Name</label>
                  <input 
                    name="name"
                    defaultValue={editingLead?.name || ""}
                    required
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">Phone Number</label>
                  <input 
                    name="phone"
                    defaultValue={editingLead?.phone || ""}
                    required
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">City</label>
                  <input 
                    name="city"
                    defaultValue={editingLead?.city || ""}
                    required
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">Product</label>
                  <input 
                    name="product"
                    defaultValue={editingLead?.product || ""}
                    required
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[var(--text-primary)]">Amount (MAD)</label>
                    <input 
                      name="amount"
                      type="number"
                      defaultValue={editingLead?.amount || ""}
                      required
                      className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-[var(--text-primary)]">Source</label>
                    <select 
                      name="source"
                      defaultValue={editingLead?.source || "FB"}
                      className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                    >
                      <option value="FB">Facebook</option>
                      <option value="IG">Instagram</option>
                      <option value="TT">TikTok</option>
                      <option value="WA">WhatsApp</option>
                      <option value="GADS">Google Ads</option>
                      <option value="WEB">Website</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">Status</label>
                  <select 
                    name="status"
                    defaultValue={editingLead?.status || "nouveau"}
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  >
                    <option value="nouveau">Nouveau</option>
                    <option value="en_attente">En attente</option>
                    <option value="contacte">Contacté</option>
                    <option value="confirme">Confirmé</option>
                    <option value="pas_de_reponse">Pas de réponse</option>
                    <option value="annule">Annulé</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[var(--text-primary)]">Assigned Agent</label>
                  <input 
                    name="agent"
                    defaultValue={editingLead?.agent || "Admin"}
                    required
                    className="w-full bg-white border border-[var(--border-card)] rounded-[8px] px-3 py-2 text-[13px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-brand)] transition-colors"
                  />
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-[var(--border-card)] bg-[var(--bg-page)] flex gap-3 mt-auto">
              <button 
                onClick={() => setIsSlideOverOpen(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button 
                type="submit"
                form="lead-form"
                className="btn-primary flex-1"
              >
                Save Lead
              </button>
            </div>
          </div>
        )}
      </SlideOver>
    </div>
  );
}

