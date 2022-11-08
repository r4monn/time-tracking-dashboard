import { createContext, useState } from "react";

interface DashboardsContextType {
  activeTimeframe: string;
  setActiveTimeframe: any;
}

export const DashboardsContext = createContext<DashboardsContextType | null>(null);

export function DashboardsContextProvider({ children }: any) {

  const [activeTimeframe, setActiveTimeframe] = useState<string>("weekly");

  return (
    <DashboardsContext.Provider value={{ activeTimeframe, setActiveTimeframe }}>
      {children}
    </DashboardsContext.Provider>
  )
}