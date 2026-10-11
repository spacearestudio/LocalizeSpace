import { createContext, useContext } from 'react';

type LeadModalContextValue = {
  /** Opens the sign-up popup. Call it from any button on the page. */
  open: () => void;
};

export const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal(): LeadModalContextValue {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error('useLeadModal must be used inside <LeadModalProvider>.');
  return ctx;
}
