import {
  HeaderContainer,
  LogoContent,
  ProfileContent,
  ProfileOptions,
} from './styles'
import logoX from '../../assets/logoX.svg'
import logo from '../../assets/logo.svg'
import admin from '../../assets/admin.svg'
import { useState } from 'react'
import { OptionsProfile } from './OptionsProfile'

export function Header() {
  const [activeModal, setActiveModal] = useState(false)

  function handleClickProfile() {
    activeModal ? setActiveModal(false) : setActiveModal(true)
  }

  return (
    <HeaderContainer>
      <main>
        <ProfileContent>
          <span>Olá, Marina Da Silva</span>
          <ProfileOptions onClick={handleClickProfile}>
            <img src={admin} alt="admin" />
          </ProfileOptions>
        </ProfileContent>
        <LogoContent>
          <img src={logo} alt="" />
          <img src={logoX} alt="" />
        </LogoContent>
        {activeModal && <OptionsProfile />}
      </main>
    </HeaderContainer>
  )
}
