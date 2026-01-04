import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Frontend only - just show alert
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-title">
                    <h2>Liên Hệ Với Chúng Tôi</h2>
                    <p className="section-description">
                        Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn cho bạn
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Địa Chỉ</h3>
                            <p>Cổng Làng Ninh Mỹ, Xóm Tân Mỹ<br />Phường Hoa Lư, Ninh Bình</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Điện Thoại</h3>
                            <p>
                                <a href="tel:0987008765">0987 008 765</a><br />
                                <a href="tel:0287654321">0943 675 290</a>
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:info@gaoloanluan.vn">info@gaoloanluan.vn</a><br />
                                <a href="mailto:sales@gaoloanluan.vn">sales@gaoloanluan.vn</a>
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">⏰</div>
                            <h3>Giờ Làm Việc</h3>
                            <p>
                                Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                                Thứ 7: 8:00 - 12:00
                            </p>
                        </div>

                        <div className="social-links">
                            <h3>Kết Nối Với Chúng Tôi</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon facebook">Facebook</a>
                                <a href="#" className="social-icon zalo">Zalo</a>
                                <a href="#" className="social-icon instagram">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Họ và Tên *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nhập họ và tên của bạn"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="example@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Số Điện Thoại *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="090 123 4567"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Nội Dung *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Nhập nội dung cần tư vấn..."
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit">
                            Gửi Liên Hệ
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
