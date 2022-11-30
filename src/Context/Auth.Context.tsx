import { createContext, ReactNode, useState } from 'react'
import { apiAuth } from '../lib/axios'

interface AuthContextType {
  authenticated: boolean
  handleLogin: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false)

  async function handleLogin() {
    try {
      const {
        data: { token },
      } = await apiAuth.post('/authenticate')

      localStorage.setItem(
        '@simplificando:auth-user-token-1.0.0',
        JSON.stringify(token),
      )

      apiAuth.defaults.headers.Authorization = token
      setAuthenticated(true)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(authenticated)
  return (
    <AuthContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
