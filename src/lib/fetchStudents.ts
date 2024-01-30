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

export function mockResolvedValueOnce(arg0: any[]) {
  throw new Error('Function not implemented.')
}
