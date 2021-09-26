import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://flpsoares-portfolio-backend.herokuapp.com'
})
