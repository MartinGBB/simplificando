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
