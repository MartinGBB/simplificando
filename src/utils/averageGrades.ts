import { Grades, Student } from '../pages/Home'

interface CoursesGrades {
  grade: Grades
}

function average(allGrades: number[]) {
  const gradesQuantity = allGrades.length

  const sum = allGrades.reduce((acc: number, curr: number) => (acc += curr), 0)
  const totalAverage = sum / gradesQuantity
  return totalAverage
}

function separateGrades(courses: any) {
  const findAllGrades = courses[0].map(({ grade }: CoursesGrades) => grade)
  average(findAllGrades)
}

export function averageGrades(studentId: number, listStudents: Student[]) {
  const courses = listStudents.map(({ averageGrade }) =>
    averageGrade.filter((grade) => grade.studentId === studentId),
  )

  const findGrades = courses.filter((course) => course.length > 1)
  separateGrades(findGrades)
}
