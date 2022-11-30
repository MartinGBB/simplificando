import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../components/Loading'
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
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  async function handleLogin() {
    try {
      const {
        data: { token },
      } = await apiAuth.post('/authenticate')

      localStorage.setItem(
        '@simplificando:auth-user-token-1.0.0',
        JSON.stringify(`Bearer ${token}`),
      )
      apiAuth.defaults.headers.Authorization = token

      navigate('/home')
      setAuthenticated(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@simplificando:auth-user-token-1.0.0')

    if (token) {
      apiAuth.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
