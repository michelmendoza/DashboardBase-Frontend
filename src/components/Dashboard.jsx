import React from 'react'
import DashboardStatusGrid from '../components/DashboardStatusGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatusGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}
