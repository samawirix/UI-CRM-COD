import { cn } from "@/src/lib/utils";

export type StatusType = 
  | "nouveau" 
  | "en_attente" 
  | "contacte"
  | "confirme" 
  | "pas_de_reponse"
  | "expedie" 
  | "livre" 
  | "retourne" 
  | "annule";

interface StatusPillProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string; dotClass: string }> = {
  nouveau: { label: "Nouveau", className: "bg-[#3366cc]/10 text-[#3366cc]", dotClass: "bg-[#3366cc]" },
  en_attente: { label: "En attente", className: "bg-[#e38637]/10 text-[#e38637]", dotClass: "bg-[#e38637]" },
  contacte: { label: "Contacté", className: "bg-[#8b5cf6]/10 text-[#8b5cf6]", dotClass: "bg-[#8b5cf6]" },
  confirme: { label: "Confirmé", className: "bg-[#0d736a]/10 text-[#0d736a]", dotClass: "bg-[#0d736a]" },
  pas_de_reponse: { label: "Pas de réponse", className: "bg-[#64748b]/10 text-[#64748b]", dotClass: "bg-[#64748b]" },
  expedie: { label: "Expédié", className: "bg-[#3b82f6]/10 text-[#3b82f6]", dotClass: "bg-[#3b82f6]" },
  livre: { label: "Livré", className: "bg-[#29a363]/10 text-[#29a363]", dotClass: "bg-[#29a363]" },
  retourne: { label: "Retourné", className: "bg-[#d93025]/10 text-[#d93025]", dotClass: "bg-[#d93025]" },
  annule: { label: "Annulé", className: "bg-[#ef4444]/10 text-[#ef4444]", dotClass: "bg-[#ef4444]" },
};

export function StatusPill({ status, className }: StatusPillProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide",
        config.className,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", config.dotClass)} />
      {config.label}
    </span>
  );
}
