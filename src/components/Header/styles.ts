import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2.19rem;

  main {
    padding: 0.75rem 1.125rem;
    max-width: 1140px;
    margin: 0 auto;

    // invertir ordem para posicionar modal
    position: relative;
    flex-direction: row-reverse;

    display: flex;
    justify-content: space-between;
  }
`

export const ProfileContent = styled.section`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ProfileOptions = styled.button`
  background: transparent;
  border: none;
  line-height: 0;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }
`

export const LogoContent = styled.section`
  display: flex;
  align-items: center;

  & img:first-child {
    display: none;
  }

  @media (max-width: 768px) {
    & img:last-child {
      display: none;
    }

    & img:first-child {
      display: flex;
    }
  }
`
