import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '17/05/2022 03:24',
        order_total: 'R$ 2.275,00',
        current_order_status: 'REALIZADO',
        shipment_address: 'Cottage Grove, SP 01310-300',
    },
    {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '14/05/2022 05:24',
        order_total: 'R$ 482,00',
        current_order_status: 'CONFIRMADO',
        shipment_address: 'São Paulo, SP 04578-000',
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '17/05/2022 07:14',
        order_total: 'R$ 4.182,20',
        current_order_status: 'ENVIADO',
        shipment_address: 'Rio de Janeiro, RJ 20040-020',
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '16/05/2022 12:40',
        order_total: 'R$ 1.672,50',
        current_order_status: 'ENVIADO',
        shipment_address: 'Belo Horizonte, MG 30130-110',
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '14/05/2022 03:24',
        order_total: 'R$ 4.380,00',
        current_order_status: 'SAIU PARA ENTREGA',
        shipment_address: 'Curitiba, PR 80010-150',
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '14/05/2022 05:24',
        order_total: 'R$ 482,00',
        current_order_status: 'ENTREGUE',
        shipment_address: 'Fortaleza, CE 60165-040',
    },
]

export default function RecentOrders() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID do Produto</th>
                            <th>Nome do Cliente</th>
                            <th>Data do Pedido</th>
                            <th>Total do Pedido</th>
                            <th>Endereço de Entrega</th>
                            <th>Status do Pedido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/order/${order.id}`}>
                                        #{order.id}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/product/${order.product_id}`}>
                                        #{order.product_id}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/customer/${order.customer_id}`}>
                                        {order.customer_name}
                                    </Link>
                                </td>
                                <td>{order.order_date}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>
                                    {getOrderStatus(order.current_order_status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
