'use client'
import { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  loading: boolean;
  setLoading: (boolean: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  return(
    <LoadingContext.Provider value={{ loading, setLoading: () => setLoading(false) }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading(){
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
