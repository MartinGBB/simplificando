import { HomeContainer } from './styles'
import { Loading } from '../../components/Loading'
import { Card } from './Card'

export function Home() {
  const students = [
    {
      name: 'Pedro',
      id: 111,
      turma: 'A',
    },
    {
      name: 'Maria',
      turma: 'B',
      id: 222,
    },
    {
      name: 'Juan',
      id: 333,
      turma: 'C',
    },
  ]

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
