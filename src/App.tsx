import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default App
