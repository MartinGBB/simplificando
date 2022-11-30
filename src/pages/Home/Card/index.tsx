import { useNavigate } from 'react-router-dom'
import { Student } from '..'
import { averageGrades } from '../../../utils/averageGrades'

import { CartContainer, StudentContent } from './styles'

interface StudentProps {
  student: Student
}

export function Card({ student }: StudentProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`student/${student.id}`)
  }

  return (
    <CartContainer role={'button'} onClick={handleClick}>
      <StudentContent>
        <img src={student.urlAvatar} alt={student.nome} />
        <span>{student.nome}</span>
      </StudentContent>
      <span>{averageGrades(student.alunoNota)}</span>
    </CartContainer>
  )
}
