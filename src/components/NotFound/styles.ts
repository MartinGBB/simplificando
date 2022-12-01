import styled from 'styled-components'

export const NotFoundContainer = styled.section`
  margin-top: 5rem;
  flex-direction: column;
`

export const ErrorContent = styled.section`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  width: 100%;
  background: ${(props) => props.theme['base-background']};

  > h1 {
    font-size: 10rem;
    padding-bottom: 0;
    line-height: normal;
    height: 9.6rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const InfContainer = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  line-height: 160%;

  color: ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-100']};
  padding: 2rem 1rem 3rem;

  h1 {
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  & a {
    margin: 0 auto;
    padding: 1rem 2rem;
    border-radius: 1000px;

    font-weight: 400;

    margin-top: 1rem;
    text-decoration: none;
    background: ${(props) => props.theme['base-text']};
    color: ${(props) => props.theme['base-background']};
  }
`
