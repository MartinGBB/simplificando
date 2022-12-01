import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface RoutesProps {
  children: ReactNode
}

export function PrivateRoute({ children }: RoutesProps) {
  const isAuthenticated =
    localStorage.getItem('@simplificando:auth-user-token-1.0.0') !== null
  return (
    <React.Fragment>
      {isAuthenticated ? children : <Navigate to={'/login'} />}
    </React.Fragment>
  )
}
