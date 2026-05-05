import { createContext, useContext, useState } from 'react';

const TerminalContext = createContext();

export function TerminalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTerminal = () => setIsOpen((v) => !v);
  return (
    <TerminalContext.Provider value={{ isOpen, toggleTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  return useContext(TerminalContext);
}
