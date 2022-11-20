import { useParams } from "react-router-dom"

import { CartContainer } from "./styles";
import { Loading } from "../../components/Loading";

export function StudentCard() {
  const { studentId } = useParams()

  const isLoading = false
  if (isLoading) return <Loading />

  return (
    <CartContainer>
      <h1>student description</h1>
      <p>{studentId}</p>
    </CartContainer>
  )
}
