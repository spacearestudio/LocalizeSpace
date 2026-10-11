import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { LeadModal } from './LeadModal';
import { LeadModalContext } from './lead-modal-context';

/** Wrap the page once. Any component inside can then call useLeadModal().open(). */
export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {isOpen && <LeadModal onClose={close} />}
    </LeadModalContext.Provider>
  );
}
