import axios from 'axios'
import { VITE_URL, VITE_URL_AUTH } from '../utils/envConfig'

export const api = axios.create({
  baseURL: VITE_URL,
})

export const apiAuth = axios.create({
  baseURL: VITE_URL_AUTH,
})
