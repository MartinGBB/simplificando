import { useContext } from 'react'
import { AuthContext } from '../../Context/Auth.Context'
import { LoginContainer } from './styles'

export function Login() {
  const { handleLogin } = useContext(AuthContext)

  function handleClick() {
    handleLogin()
  }

  return (
    <LoginContainer>
      <button onClick={handleClick}>Login</button>
    </LoginContainer>
  )
}
