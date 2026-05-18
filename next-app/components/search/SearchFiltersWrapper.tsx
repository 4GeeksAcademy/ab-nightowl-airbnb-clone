import type { ReactNode } from "react";

/**
 * Wrapper pour les filtres et le bouton de recherche (desktop)
 */
export default function SearchFiltersWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 items-center gap-2">
      {children}
    </div>
  );
}
