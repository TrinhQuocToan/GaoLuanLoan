import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img
                    src="/assets/images/hero-banner.jpg"
                    alt="Cánh đồng lúa vàng"
                    className="hero-image"
                />
            </div>

            <div className="container">
                <div className="hero-content animate-fade-in-up">
                    <h1 className="hero-title">
                        Gạo Loan Luân
                        <span className="hero-subtitle">Tinh Hoa Từ Đồng Ruộng Việt</span>
                    </h1>

                    <p className="hero-description">
                        Chuyên cung cấp các loại gạo chất lượng cao, từ gạo thơm truyền thống
                        đến gạo hữu cơ cao cấp. Cam kết nguồn gốc rõ ràng, an toàn cho sức khỏe.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => navigate('/products')}>
                            Khám Phá Sản Phẩm
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => navigate('/contact')}
                        >
                            Liên Hệ Ngay
                        </button>
                    </div>

                    <div className="hero-features">
                        <div className="hero-feature">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">100% Tự Nhiên</span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Nguồn Gốc Rõ Ràng</span>
                        </div>
                        <div className="hero-feature">
                            <span className="feature-icon">✓</span>
                            <span className="feature-text">Giá Cả Hợp Lý</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero
