import { useParams } from "react-router-dom"

import { CartContainer } from "./styles";

export function StudentCard() {
  const { studentId } = useParams()

  return (
    <CartContainer>
      <h1>student description</h1>
      <p>{studentId}</p>
    </CartContainer>
  )
}
