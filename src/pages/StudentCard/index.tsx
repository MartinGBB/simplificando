import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { CartContainer, GradesContent, ProfileInfo, ReturnPage } from './styles'
import { Loading } from '../../components/Loading'
import { fetchStudents } from '../../lib/fetchStudents'
import { Student } from '../Home'
import { TableGrades } from './TableGrades'
import { RadarGrades } from './RadarGrades'
import { averageGrades } from '../../utils/averageGrades'

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
      <ReturnPage>
        <button onClick={handleClick}>Turma</button>
        <span>{` > `}</span>
        <span>Estudante</span>
      </ReturnPage>

      <ProfileInfo>
        <img src={student.urlAvatar} alt="" />
        <div>
          <span>{student.nome}</span>
          <p>{`${student.idade} anos`}</p>
          <p>
            Nota final:<strong>{` ${averageGrades(student.alunoNota)}`}</strong>
          </p>
        </div>
      </ProfileInfo>

      <GradesContent>
        <RadarGrades averageGrade={student.alunoNota} name={student.nome} />
        <TableGrades averageGrade={student.alunoNota} />
      </GradesContent>
    </CartContainer>
  )
}
