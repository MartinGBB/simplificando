import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

import { CartContainer } from './styles'
import { Loading } from '../../components/Loading'
import { fetchStudents } from '../../lib/fetchStudents'
import { Student } from '../Home'

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
      <h2>{`Nome: ${student.name}`}</h2>
      <p>{`Idade: ${student?.age}`}</p>
      <p>{`Turma ${student?.section}`}</p>

      <RadarChart
        height={500}
        width={500}
        outerRadius="70%"
        data={student.averageGrade}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="course" />
        <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
        <Radar
          name={student.name}
          dataKey="grade"
          stroke="gray"
          fill="gray"
          fillOpacity={0.7}
        />
      </RadarChart>

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
      <button onClick={handleClick}>Voltar</button>
    </CartContainer>
  )
}
