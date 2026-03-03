import { Hexagon } from "lucide-react";

export function Login() {
  return (
    <div className="min-h-screen flex bg-background font-sans text-foreground">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
              <Hexagon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wide">COD CRM</span>
          </div>

          <h1 className="text-[32px] font-serif mb-2 tracking-tight">Bienvenue</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Connectez-vous à votre espace de gestion.
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@codcrm.ma"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Mot de passe
                </label>
                <a href="#" className="text-xs text-primary hover:underline font-medium">
                  Oublié ?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Image/Graphic */}
      <div className="hidden lg:flex flex-1 bg-sidebar relative overflow-hidden items-center justify-center p-12">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-lg text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Hexagon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[40px] font-serif text-white mb-6 leading-tight tracking-tight">
            Gérez votre activité COD avec précision.
          </h2>
          <p className="text-white/60 text-lg">
            Le CRM conçu spécifiquement pour l'e-commerce Cash On Delivery au Maroc. Suivez vos leads, commandes et livraisons en temps réel.
          </p>
        </div>
      </div>
    </div>
  );
}
