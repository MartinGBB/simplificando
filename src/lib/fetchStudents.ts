import { api } from './axios'

export const fetchStudents = async (search?: string) => {
  try {
    if (search) {
      const response = await api.get(`alunos/${search}`)
      return response.data
    }

    const response = await api.get('alunos')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
