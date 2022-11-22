import styled from 'styled-components'

export const RadarContainer = styled.main`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    svg {
      /* max-height: 70%; */
      width: 100%;
      min-width: 320px;
      background-size: cover;
    }
  }
`
