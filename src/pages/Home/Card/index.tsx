import { useNavigate } from 'react-router-dom'
import { Student } from '..'

import { CartContainer } from './styles'

interface StudentProps {
  student: Student
}

export function Card({ student }: StudentProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/${student.id}`)
  }

  return (
    <CartContainer role={'button'} onClick={handleClick}>
      <span>{student.name}</span>
    </CartContainer>
  )
}
