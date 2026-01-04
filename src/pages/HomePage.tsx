import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Partners from '../components/Partners/Partners'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <Hero />
                <Products />
                <Partners />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
