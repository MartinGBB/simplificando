import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 0 1.125rem;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  border-radius: 5px;

  > section {
    background: ${(props) => props.theme.white};
    height: 80vh;
    margin-bottom: 51px;
    padding: 2.188rem 6.06rem;

    h1 {
      margin-bottom: 2.188rem;
      font-weight: 400;
      font-size: 2.25rem;
    }
  }
`
