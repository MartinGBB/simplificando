import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme['base-background']};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2.188rem 0;
  padding: 0.3125rem;
  padding-right: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 615px) {
    padding: 0.3125rem;

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
    min-width: 60px;
    min-height: 60px;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1.56rem;
  }
`
