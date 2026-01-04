import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const ProductsPage = () => {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <Products />
            </main>
            <Footer />
        </div>
    )
}

export default ProductsPage
