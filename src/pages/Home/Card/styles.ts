import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme['base-background']};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
  padding: 0.4rem;
  padding-right: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 5px;

  > span {
    font-weight: 400;
  }

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 615px) {
    padding: 0.4rem;

    > span {
      display: none;
    }
  }
`
export const StudentContent = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 615px) {
    > span {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  img {
    min-width: 3.75rem;
    min-height: 3.75rem;
    width: 3.75rem;
    height: 3.75rem;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1.56rem;
  }
`
