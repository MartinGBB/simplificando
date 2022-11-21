import { useEffect, useState } from 'react'

import { HomeContainer } from './styles'
import { Loading } from '../../components/Loading'
import { Card } from './Card'
import { fetchStudents } from '../../lib/fetchStudents'

interface Grades {
  id: number
  course: string
  grade: number
}

export interface Student {
  id: number
  name: string
  section: string
  age: number
  averageGrade: Grades[]
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
      {students.map((student) => (
        <Card key={student.id} student={student} />
      ))}
    </HomeContainer>
  )
}
