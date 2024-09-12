import React from 'react'
import { useEffect, useState } from 'react'
import api from '../services/api' // Importe a instância do Axios

function Products() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Faz uma requisição GET ao carregar o componente
        api.get('/customer') // Substitua '/endpoint' pelo seu endpoint
            .then((response) => {
                setData(response.data) // Atualiza o estado com os dados recebidos
                setLoading(false)
            })
            .catch((error) => {
                setError(error) // Define o estado de erro
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Carregando...</p>
    if (error) return <p>Erro: {error.message}</p>

    return (
        <div>
            <h1>Dados da API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Exibe os dados */}
        </div>
    )
}
export default Products
