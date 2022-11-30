import { createContext, ReactNode } from 'react'

interface AuthContextType {}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={''}>{children}</AuthContext.Provider>
}
