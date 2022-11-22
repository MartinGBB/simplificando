import { Grades } from '../../Home'
import { TableContainer, TitleTableAndGrades } from './styles'

interface GradesProps {
  averageGrade: Grades[]
}

export function TableGrades({ averageGrade }: GradesProps) {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <TitleTableAndGrades>Materías</TitleTableAndGrades>
          <TitleTableAndGrades>Notas</TitleTableAndGrades>
        </tr>
        {averageGrade.map((grade) => {
          return (
            <tr key={grade.id}>
              <td>{grade.course}</td>
              <TitleTableAndGrades>{grade.grade}</TitleTableAndGrades>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
