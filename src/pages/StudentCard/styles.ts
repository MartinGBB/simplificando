import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 1.125rem;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;
`

export const ReturnPage = styled.section`
  padding: 0 0 2.1875rem 0;

  button {
    border: none;
    cursor: pointer;

    &:focus {
      box-shadow: none;
    }
  }
`
export const ProfileInfo = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 2.1875rem;

  div {
    display: flex;
    flex-direction: column;
  }

  background: ${(props) => props.theme.white};
  padding: 3.8125rem 6rem;

  @media (max-width: 615px) {
    padding: 2rem;
  }

  img {
    min-width: 9.875rem;
    min-height: 9.875rem;
    width: 9.875rem;
    height: 9.875rem;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1.56rem;
  }
`

export const GradesContent = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0;

  background: ${(props) => props.theme.white};
  padding: 3.8125rem 6rem;

  @media (max-width: 615px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
`
