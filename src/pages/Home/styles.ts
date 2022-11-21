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
  }
`
