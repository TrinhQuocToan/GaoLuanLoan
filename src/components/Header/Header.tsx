import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        // Navigate to separate pages
        if (sectionId === 'products') {
            navigate('/products')
            setIsMobileMenuOpen(false)
            return
        }

        if (sectionId === 'partners') {
            navigate('/partners')
            setIsMobileMenuOpen(false)
            return
        }

        if (sectionId === 'contact') {
            navigate('/contact')
            setIsMobileMenuOpen(false)
            return
        }

        // For hero (home), navigate to home page
        if (sectionId === 'hero') {
            navigate('/')
            setIsMobileMenuOpen(false)
            return
        }

        // If on home page and trying to scroll to a section
        if (location.pathname === '/') {
            scrollToElement(sectionId)
        }
        setIsMobileMenuOpen(false)
    }

    const scrollToElement = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 110;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="header-logo" onClick={() => navigate('/')}>
                        <img src="/assets/logo-kn.png" alt="Gạo Loan Luân Logo" className="logo-image" />
                        <span className="logo-text">Gạo Loan Luân</span>
                    </div>
                    <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <a onClick={() => scrollToSection('hero')} className="nav-link">Trang Chủ</a>
                        <a onClick={() => scrollToSection('products')} className="nav-link">Sản Phẩm</a>
                        <a onClick={() => scrollToSection('partners')} className="nav-link">Đối Tác</a>
                        <a onClick={() => scrollToSection('contact')} className="nav-link">Liên Hệ</a>
                    </nav>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
