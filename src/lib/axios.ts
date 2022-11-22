import axios from 'axios'
import { VITE_URL } from '../utils/envConfig'

export const api = axios.create({
  baseURL: VITE_URL,
})
