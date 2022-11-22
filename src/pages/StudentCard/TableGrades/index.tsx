import { Grades } from '../../Home'
import { TableContainer } from './styles'

interface GradesProps {
  averageGrade: Grades[]
}

export function TableGrades({ averageGrade }: GradesProps) {
  return (
    <TableContainer>
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
        {averageGrade.map((grade) => {
          return (
            <tr key={grade.id}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
