import axios from 'axios'

const apiUrl = 'http://127.0.0.1:9001'
//const apiUrl = process.env.VITE_API_URL || process.env.REACT_APP_API_URL

console.log('URL da API:', apiUrl)
const api = axios.create({
    baseURL: apiUrl, // Coloque aqui a URL base da sua API
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api
