import { useState } from 'react'
import { products } from '../../data/products'
import ProductCard from './ProductCard'
import './Products.css'

const Products = () => {
    const [filter, setFilter] = useState('all')

    const categories = ['all', 'Gạo thơm', 'Gạo cao cấp', 'Gạo nếp', 'Gạo lứt', 'Gạo đặc biệt']

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.type === filter)

    return (
        <section id="products" className="products section">
            <div className="container">
                <div className="section-title">
                    <h2>Sản Phẩm Của Chúng Tôi</h2>
                    <p className="section-description">
                        Khám phá bộ sưu tập gạo chất lượng cao từ các vùng trồng nổi tiếng Việt Nam
                    </p>
                </div>

                <div className="products-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'filter-active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category === 'all' ? 'Tất Cả' : category}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="no-products">
                        <p>Không tìm thấy sản phẩm nào trong danh mục này.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products
