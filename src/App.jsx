import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Customers from './components/Customers'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="Customers" element={<Customers />} />
                </Route>
                <Route path="login" element={<div>this is a login page</div>} />
            </Routes>
        </Router>
    )
}

export default App
