import { useEffect, useState } from 'react'

import { HomeContainer } from './styles'
import { Loading } from '../../components/Loading'
import { Card } from './Card'
import { fetchStudents } from '../../lib/fetchStudents'

export interface Grades {
  id: number
  course: string
  grade: number
}

export interface Student {
  id: number
  nome: string
  idade: number
  urlAvatar: string
  alunoNota: Grades[]
  // section: string
  // finalGrade: number
}

export function Home() {
  const [students, setStudents] = useState<Student[]>([])

  async function fetchApi() {
    const response = await fetchStudents()
    setStudents(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const isLoading = !students
  if (isLoading) return <Loading />

  return (
    <HomeContainer>
      <section>
        <h1>Turma C</h1>
        {students.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </section>
    </HomeContainer>
  )
}
