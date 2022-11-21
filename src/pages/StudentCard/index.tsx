import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CartContainer } from './styles'
import { Loading } from '../../components/Loading'
import { fetchStudents } from '../../lib/fetchStudents'
import { Student } from '../Home'

export function StudentCard() {
  const [student, setStudent] = useState<Student>()
  const { studentId } = useParams()

  useEffect(() => {
    async function fetchApi() {
      const response = await fetchStudents(studentId)
      console.log(response[0])
      setStudent(response[0])
    }
    fetchApi()
  }, [studentId])

  const isLoading = false
  if (isLoading) return <Loading />

  return (
    <CartContainer>
      <h1>student description</h1>
      <p>{studentId}</p>

      <p>{`Idade: ${student?.age}`}</p>
      <p>{`Turma ${student?.section}`}</p>

      <table>
        <thead>
          <tr>
            <td>Notas</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Materia</td>
            <td>Nota final</td>
          </tr>
          {student?.averageGrade.map((grade) => {
            return (
              <tr key={grade.id}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </CartContainer>
  )
}
