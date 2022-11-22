import styled from 'styled-components'

export const RadarContainer = styled.main`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    svg {
      width: 380px;
      background-size: cover;
    }
  }
`
