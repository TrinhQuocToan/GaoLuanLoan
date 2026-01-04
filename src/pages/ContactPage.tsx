import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage
