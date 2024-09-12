import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import api from '../services/api' // Importe a instância do Axios

function Customers() {
    const [customers, setCustomers] = useState([])
    const nameREF = useRef(null)
    const emailREF = useRef(null)
    const phoneREF = useRef(null)

    useEffect(() => {
        loadCustomers()
    }, [])

    async function loadCustomers() {
        const response = await api.get('/customer')
        setCustomers(response.data)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (
            !nameREF.current?.value ||
            !emailREF.current?.value ||
            !phoneREF.current?.value
        )
            return

        const response = await api.post('/customer', {
            name: nameREF.current?.value,
            email: emailREF.current?.value,
            phone: phoneREF.current?.value,
        })

        setCustomers((allCustomers) => [...allCustomers, response.data])
        nameREF.current.value = ''
        emailREF.current.value = ''
        phoneREF.current.value = ''
    }

    async function handleDelete(id) {
        try {
            await api.delete('/customer', {
                params: {
                    id: id,
                },
            })

            const allCustomers = customers.filter(
                (customer) => customer.id !== id
            )

            setCustomers(allCustomers)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="w-full min-h-screen  flex justify-left px-4">
            <h1 className="text-5xl font-bold text-blue-900 flex justify-self-start px-4">
                Clientes
            </h1>
            <main className="my-10 w-full bg-blue-400  md:max-w-2xl">
                <form
                    className="flex flex-col my-6 px-4"
                    onSubmit={handleSubmit}
                >
                    <label className="font-medium text-blue-900">Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome completo..."
                        className="w-full mb-5 p-2 rounded"
                        ref={nameREF}
                    ></input>

                    <label className="font-medium text-blue-900">Email:</label>
                    <input
                        type="email"
                        placeholder="Digite seu email..."
                        className="w-full mb-5 p-2 rounded"
                        ref={emailREF}
                    ></input>

                    <label className="font-medium text-blue-900">Phone:</label>
                    <input
                        type="text"
                        placeholder="Digite seu Telefone..."
                        className="w-full mb-5 p-2 rounded"
                        ref={phoneREF}
                    ></input>

                    <input
                        type="submit"
                        value="Cadastrar"
                        className="cursor-pointer w-full p-2 bg-green-700 rounded font-medium"
                    ></input>
                </form>

                <section className="flex flex-col px-4 gap-4">
                    {customers.map((customer) => (
                        <article
                            key={customer.id}
                            className="w-full bg-blue-100 rounded p-2 relative hover:scale-110 duration-300"
                        >
                            <p>
                                <span>Nome:</span> {customer.name}{' '}
                            </p>
                            <p>
                                <span>Email:</span> {customer.email}{' '}
                            </p>
                            <p>
                                <span>Phone:</span>{' '}
                                {customer.phone
                                    ? customer.phone
                                    : 'Não Cadastrado'}{' '}
                            </p>
                            <p>
                                <span>Status:</span>{' '}
                                {customer.status ? 'ATIVO' : 'INATIVO'}
                            </p>
                            <button
                                className="bg-red-500 w-7 h-7 flex 
                    items-center justify-center rounded-lg absolute right-0 -top-2"
                                onClick={() => handleDelete(customer.id)}
                            >
                                <FiTrash size={18} color="#FFF"></FiTrash>
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}
export default Customers
