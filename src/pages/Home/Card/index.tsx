import { useNavigate } from 'react-router-dom'

import { CartContainer } from "./styles";


interface Student {
  name: string
  id: number
  turma: string
}

interface StudentProps {
  student: Student
}

export function Card({ student }: StudentProps) {
  const navigate = useNavigate()
  
  function handleClick() {
    navigate(`/${student.id}`)
  }

  return (
    <CartContainer>
      <h1>{student.name}</h1>
      <button onClick={handleClick}>{student.name}</button>
    </CartContainer>
  )
}
