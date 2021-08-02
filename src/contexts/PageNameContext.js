import { createContext, useState, useEffect } from 'react'

export const PageNameContext = createContext()

export function PageNameContextProvider({ children }) {
  const [name, setName] = useState("I. de Palma")
  const value = { name, setName }

  return (
    <PageNameContext.Provider value={value}>{children}</PageNameContext.Provider>
  )
}

export const usePageNameContext = () => useContext(PageNameContext);