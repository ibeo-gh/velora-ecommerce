import { createContext, useContext, useState } from "react";

type UIContextType = {
  isSearchOpen: boolean;
  isCartOpen: boolean;
  isAuthOpen: boolean;
  openSearch: () => void;
  openCart: () => void;
  openAuth: () => void;
  closeAll: () => void;
};

const UIContext = createContext<UIContextType | null>(null);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openSearch = () => {
    closeAll();
    setIsSearchOpen(true);
  };

  const openCart = () => {
    closeAll();
    setIsCartOpen(true);
  };

  const openAuth = () => {
    closeAll();
    setIsAuthOpen(true);
  };

  const closeAll = () => {
    setIsSearchOpen(false);
    setIsCartOpen(false);
    setIsAuthOpen(false);
  };

  return (
    <UIContext.Provider
      value={{
        isSearchOpen,
        isCartOpen,
        isAuthOpen,
        openSearch,
        openCart,
        openAuth,
        closeAll,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
};
