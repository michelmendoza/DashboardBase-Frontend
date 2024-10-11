import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Customers from './components/Customers'
import CustomersV2 from './components/Customersv2'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="Customers" element={<Customers />} />
                    <Route path="Customersv2" element={<CustomersV2 />} />
                </Route>
                <Route path="login" element={<div>this is a login page</div>} />
            </Routes>
        </Router>
    )
}

export default App
