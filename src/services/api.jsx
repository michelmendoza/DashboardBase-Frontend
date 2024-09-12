import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

console.log('URL da API:', apiUrl)
const api = axios.create({
    baseURL: apiUrl, // Coloque aqui a URL base da sua API
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api
