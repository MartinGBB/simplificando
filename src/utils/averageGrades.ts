import { Student } from '../pages/Home'

function average(allGrades) {
  const gradesQuantity = allGrades.length

  const sum = allGrades.reduce((acc, curr) => (acc += curr), 0)
  const totalAverage = sum / gradesQuantity
  return totalAverage
}

function separateGrades(courses) {
  const findAllGrades = courses[0].map(({ grade }) => grade)
  average(findAllGrades)
}

export function averageGrades(studentId: number, listStudents: Student[]) {
  const courses = listStudents.map(({ averageGrade }) =>
    averageGrade.filter((grade) => grade.studentId === studentId),
  )

  const findGrades = courses.filter((course) => course.length > 1)
  separateGrades(findGrades)
}
