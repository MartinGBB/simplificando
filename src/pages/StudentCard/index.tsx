import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CartContainer, GradesContent, ProfileInfo } from './styles'
import { Loading } from '../../components/Loading'
import { fetchStudents } from '../../lib/fetchStudents'
import { Student } from '../Home'
import { TableGrades } from './TableGrades'
import { RadarGrades } from './RadarGrades'

export function StudentCard() {
  const [student, setStudent] = useState<Student>()
  const { studentId } = useParams()

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  useEffect(() => {
    async function fetchApi() {
      const response = await fetchStudents(studentId)
      setStudent(response[0])
    }
    fetchApi()
  }, [studentId])

  const isLoading = !student
  if (isLoading) return <Loading />

  return (
    <CartContainer>
      <ProfileInfo>
        <button onClick={handleClick}>Voltar</button>

        <h2>{`Nome: ${student.name}`}</h2>
        <p>{`Idade: ${student?.age}`}</p>
        <p>{`Turma ${student?.section}`}</p>
      </ProfileInfo>
      <GradesContent>
        <RadarGrades averageGrade={student.averageGrade} name={student.name} />
        <TableGrades averageGrade={student.averageGrade} />
      </GradesContent>
    </CartContainer>
  )
}
