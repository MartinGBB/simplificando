import { api } from './axios'

export const fetchStudents = async (search?: string) => {
  try {
    if (search) {
      const response = await api.get(`alunos/${search}`)
      console.log(response.data)
      return response.data
    }

    const response = await api.get('alunos')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
