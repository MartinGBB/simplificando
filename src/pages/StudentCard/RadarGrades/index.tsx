import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import { Grades } from '../../Home'
import { RadarContainer } from './styles'

interface GradesProps {
  averageGrade: Grades[]
  name: string
}

export function RadarGrades({ averageGrade, name }: GradesProps) {
  return (
    <RadarContainer>
      <RadarChart
        height={500}
        width={500}
        outerRadius="70%"
        data={averageGrade}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="course" stroke="#403937" />
        <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
        <Radar
          name={name}
          dataKey="grade"
          stroke="#006344"
          fill="#006344"
          fillOpacity={0.7}
        />
      </RadarChart>
    </RadarContainer>
  )
}
