import { Grades } from '../pages/Home'

interface CoursesGrades {
  grade: Grades
}

export function average(allGrades: number[]) {
  const gradesQuantity = allGrades.length
  const sum = allGrades.reduce((acc: number, curr: number) => (acc += curr), 0)
  const totalAverage = sum / gradesQuantity

  return totalAverage
}

export function averageGrades(courses: any) {
  const findAllGrades = courses.map(({ grade }: CoursesGrades) => grade)
  return average(findAllGrades)
}

// export function averageGrades(grades) {
//   const courses = listStudents.map(({ alunoNota }) =>
//     alunoNota.filter((grade) => grade.id === studentId),
//   )

//   const findGrades = courses.filter((course) => course.length > 1)
//   separateGrades(findGrades)
// }
