import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseSidenav {
  isOpen: boolean;
  toggle: (value: boolean) => void;
}

export function useSidenav(): UseSidenav {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (value: boolean) => setIsOpen(value)
  return { toggle, isOpen };
}

export default useSidenav;
