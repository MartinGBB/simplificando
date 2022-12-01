import { useNavigate } from 'react-router-dom'
import { ButtonContent, OptionsProfileContainer, Triangle } from './styles'

export function OptionsProfile() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('@simplificando:auth-user-token-1.0.0')
    navigate('/login')
  }

  function handleProfile() {
    alert('Em processo de implementação')
  }

  return (
    <OptionsProfileContainer>
      <Triangle />
      <ButtonContent>
        <li>
          <button onClick={handleProfile}>Meu perfil</button>
        </li>
        <li>
          <button onClick={handleLogout}>Sair</button>
        </li>
      </ButtonContent>
    </OptionsProfileContainer>
  )
}
