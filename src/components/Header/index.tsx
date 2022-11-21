import { HeaderContainer, ProfileContent } from './styles'
import logoX from '../../assets/logoX.svg'
import admin from '../../assets/admin.svg'

export function Header() {
  return (
    <HeaderContainer>
      <main>
        <img src={logoX} alt="" />
        <ProfileContent>
          <span>Olá, Marina Da Silva</span>
          <img src={admin} alt="admin" />
        </ProfileContent>
      </main>
    </HeaderContainer>
  )
}
