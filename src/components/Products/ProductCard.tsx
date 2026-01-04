import { Product } from '../../data/products'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    const navigate = useNavigate()

    return (
        <div
            className="product-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <div className="product-badge">{product.type}</div>
            </div>

            <div className="product-content">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-origin">
                    <span className="origin-icon">📍</span>
                    <span>{product.origin}</span>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-features">
                    {product.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="btn-contact" onClick={() => navigate('/contact')}>Liên Hệ</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
