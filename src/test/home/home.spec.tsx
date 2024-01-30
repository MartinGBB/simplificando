import { render, screen } from '@testing-library/react'
import { Home } from '../../pages/Home'

// const student = {
//   id: 1,
//   name: 'Pedro',
//   section: 'C',
//   age: 22,
//   avatar: 'string',
//   averageGrade: [{ id: 2, course: 'math', grade: 10 }],
//   finalGrade: 22,
// }
// jest.mock('axios')

describe('Home', () => {
  it('Renderiza o componente', () => {
    render(<Home />)

    expect(screen.getByText('Turma C'))
  })
})
