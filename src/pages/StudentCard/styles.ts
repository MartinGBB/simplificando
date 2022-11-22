import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 1.125rem;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 3rem;
`

export const ReturnPage = styled.section`
  padding: 0 0 2.1875rem 0;

  button {
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: 1px underline;
    }

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

    span {
      font-weight: 400;
      font-size: 2.25rem;
    }

    p {
      font-size: 1.25rem;
      & strong {
        font-weight: 400;
      }
    }
  }

  background: ${(props) => props.theme.white};
  padding: 3.8125rem 6rem;

  img {
    min-width: 9.875rem;
    min-height: 9.875rem;
    width: 9.875rem;
    height: 9.875rem;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1.56rem;
  }

  @media (max-width: 615px) {
    padding: 2rem;
    flex-direction: column;

    img {
      margin: 0 0 1rem 0;
    }

    div {
      display: flex;
      text-align: center;
      gap: 1rem;
    }
  }
`

export const GradesContent = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;

  background: ${(props) => props.theme.white};
  padding: 3.8125rem 6rem;

  @media (max-width: 615px) {
    padding: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
`
