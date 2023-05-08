import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3030',
  headers: {
    'x-access-token': localStorage.getItem(import.meta.env.REACT_APP_TOKEN_KEY)
  }
})

export default api