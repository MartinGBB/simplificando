import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme['base-background']};
  display: flex;
  justify-content: space-between;

  margin: 2.188rem 0;
  padding: 0.3125rem;
  padding-right: 0;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
