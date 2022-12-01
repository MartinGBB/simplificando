import { Link } from 'react-router-dom'
import { ErrorContent, InfContainer, NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorContent>
        <h1>404</h1>
      </ErrorContent>

      <InfContainer>
        <h1>Disculpe, Pagina Não Encontrada</h1>
        <p>A página solicitada não pôde ser encontrada</p>
        <Link to={'/home'}>Volver a pagina inicial</Link>
      </InfContainer>
    </NotFoundContainer>
  )
}
