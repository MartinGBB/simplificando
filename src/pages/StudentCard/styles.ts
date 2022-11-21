import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const ProfileInfo = styled.section``

export const GradesContent = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
