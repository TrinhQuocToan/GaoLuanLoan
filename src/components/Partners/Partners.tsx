import { useNavigate } from 'react-router-dom'
import { partners } from '../../data/partners'
import './Partners.css'

const Partners = () => {
    const navigate = useNavigate()

    return (
        <section id="partners" className="partners section">
            <div className="container">
                <div className="section-title">
                    <h2>Đối Tác Của Chúng Tôi</h2>
                    <p className="section-description">
                        Tự hào đồng hành cùng các đối tác uy tín trên toàn quốc
                    </p>
                </div>

                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.id}
                            className="partner-card animate-scale-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="partner-logo-wrapper">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="partner-logo"
                                />
                            </div>
                            <div className="partner-info">
                                <h3 className="partner-name">{partner.name}</h3>
                                <p className="partner-description">{partner.description}</p>
                                <span className="partner-category">{partner.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="partners-cta">
                    <h3>Muốn trở thành đối tác của chúng tôi?</h3>
                    <p>Liên hệ với chúng tôi để được tư vấn về chương trình hợp tác kinh doanh</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/contact')}
                    >
                        Liên Hệ Hợp Tác
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Partners
