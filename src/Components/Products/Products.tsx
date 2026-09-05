import { use } from "react"
import type { ProductType } from "../../type"
import './Products.css'

export interface ProductsProps {
    ProductPromise: Promise<ProductType[]>
}

export default function Products({ ProductPromise }: ProductsProps) {

    const Products = use(ProductPromise)

    return (
        <div  className="grid-c">
            {
                Products.map((product) => 
                    <section className="product-style">
                        <div className="product-card">
                            <img src={product.image} alt={product.title} />

                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>

                                <div className="product-rating">
                                    ⭐ {product.rating.rate} ({product.rating.count})
                                </div>

                                <div className="product-bottom">
                                    <span className="product-price">${product.price}</span>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </section>)
            }
        </div>
    )
}