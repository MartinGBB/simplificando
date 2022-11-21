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

  // const fetchStudents = async (search?: string) => {
  //   try {
  //     const response = await api.get('students', {
  //       params: {
  //         q: search,
  //       },
  //     })
  //     setStudents(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function fetchApi() {
    const response = await fetchStudents()
    setStudents(response)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const isLoading = false

  if (isLoading) return <Loading />

  return (
    <HomeContainer>
      {students.map((student) => (
        <Card key={student.id} student={student} />
      ))}
    </HomeContainer>
  )
}
