import { useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const navigate = useNavigate()
    const location = useLocation()

    const scrollToSection = (sectionId: string) => {
        // Navigate to separate pages
        if (sectionId === 'products') {
            navigate('/products')
            return
        }

        if (sectionId === 'partners') {
            navigate('/partners')
            return
        }

        if (sectionId === 'contact') {
            navigate('/contact')
            return
        }

        // For hero (home), navigate to home page
        if (sectionId === 'hero') {
            navigate('/')
            return
        }

        // If on home page and trying to scroll to a section
        if (location.pathname === '/') {
            scrollToElement(sectionId)
        }
    }

    const scrollToElement = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 110;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/assets/logo-kn.png" alt="Gạo Loan Luân Logo" className="footer-logo-image" />
                            <span className="logo-text">Gạo Loan Luân</span>
                        </div>
                        <p className="footer-description">
                            Chuyên cung cấp các loại gạo chất lượng cao từ các vùng trồng nổi tiếng Việt Nam.
                            Cam kết nguồn gốc rõ ràng, an toàn cho sức khỏe.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Liên Kết Nhanh</h3>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('hero')}>Trang Chủ</a></li>
                            <li><a onClick={() => scrollToSection('products')}>Sản Phẩm</a></li>
                            <li><a onClick={() => scrollToSection('partners')}>Đối Tác</a></li>
                            <li><a onClick={() => scrollToSection('contact')}>Liên Hệ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Sản Phẩm</h3>
                        <ul className="footer-links">
                            <li><a href="#">Gạo Thơm</a></li>
                            <li><a href="#">Gạo Cao Cấp</a></li>
                            <li><a href="#">Gạo Hữu Cơ</a></li>
                            <li><a href="#">Gạo Đặc Biệt</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Liên Hệ</h3>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>Cổng Làng Ninh Mỹ, Xóm Tân Mỹ, Phường Hoa Lư, Ninh Bình</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:0901234567">0987 008 765</a>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:info@gaoloanluan.vn">info@gaoloanluan.vn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Gạo Loan Luân. Tất cả quyền được bảo lưu.</p>
                    <div className="footer-social">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Zalo</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
