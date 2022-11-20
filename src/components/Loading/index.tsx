import ReactLoading from 'react-loading'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type="spinningBubbles" color="white" />
    </LoadingContainer>
  )
}
