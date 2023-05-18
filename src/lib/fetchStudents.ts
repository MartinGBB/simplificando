import { api } from './axios'

export const fetchStudents = async (search?: string) => {
  try {
    const response = await api.get('students', {
      params: {
        q: search,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
