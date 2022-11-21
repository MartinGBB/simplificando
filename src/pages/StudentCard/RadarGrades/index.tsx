import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import { Grades } from '../../Home'

interface GradesProps {
  averageGrade: Grades[]
  name: string
}

export function RadarGrades({ averageGrade, name }: GradesProps) {
  return (
    <RadarChart height={500} width={500} outerRadius="70%" data={averageGrade}>
      <PolarGrid />
      <PolarAngleAxis dataKey="course" stroke="#AFC2D4" />
      <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
      <Radar
        name={name}
        dataKey="grade"
        stroke="gray"
        fill="gray"
        fillOpacity={0.7}
      />
    </RadarChart>
  )
}
