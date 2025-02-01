'use client'

import { createContext, useContext, ReactNode } from 'react'

interface AppContextType {
  // Add your global state types here
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  // Add your global state logic here
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
} 