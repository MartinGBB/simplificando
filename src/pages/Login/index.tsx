import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { LoginContainer } from './styles'

export function Login() {
  const { handleLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  function handleClick() {
    handleLogin()
  }

  useEffect(() => {
    if (localStorage.getItem('@simplificando:auth-user-token-1.0.0') !== null) {
      navigate('/home')
    }
  }, [navigate])

  return (
    <LoginContainer>
      <button onClick={handleClick}>Login</button>
    </LoginContainer>
  )
}
