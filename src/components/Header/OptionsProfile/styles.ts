import styled from 'styled-components'

export const OptionsProfileContainer = styled.section`
  position: absolute;
  top: 6rem;
`

export const Triangle = styled.div`
  top: -10px;
  right: 0;
  position: absolute;

  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid ${(props) => props.theme.white};
`
export const ButtonContent = styled.ul`
  height: auto;
  min-width: 9rem;

  background: ${(props) => props.theme.white};
  border-radius: 6px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;

  li {
    list-style-type: none;

    & button {
      text-align: left;
      margin: 0;
      padding: 0.2rem 1rem;
      width: 100%;

      border: none;
      background: transparent;

      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;

      &:focus {
        box-shadow: none;
      }
    }
    &:hover {
      background: ${(props) => props.theme['base-background']};
      border-radius: inherit;
    }
  }
`
