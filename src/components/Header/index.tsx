import { HeaderContainer, LogoContent, ProfileContent } from './styles'
import logoX from '../../assets/logoX.svg'
import logo from '../../assets/logo.svg'
import admin from '../../assets/admin.svg'

export function Header() {
  return (
    <HeaderContainer>
      <main>
        <LogoContent>
          <img src={logo} alt="" />
          <img src={logoX} alt="" />
        </LogoContent>
        <ProfileContent>
          <span>Olá, Marina Da Silva</span>
          <img src={admin} alt="admin" />
        </ProfileContent>
      </main>
    </HeaderContainer>
  )
}
