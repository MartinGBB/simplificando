import { LoginContainer } from './styles'

export function Login() {
  function handleLogin() {
    console.log('login')
  }

  return (
    <LoginContainer>
      <button onClick={handleLogin}>Login</button>
    </LoginContainer>
  )
}
