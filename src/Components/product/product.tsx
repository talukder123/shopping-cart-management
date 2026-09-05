import { useState } from "react"
import type { ProductType } from "../../type"
import './product.css'

export interface ProductProps {
    product: ProductType
    handeCartUpdate: (product:ProductType) => void
}

export default function Product({ product, handeCartUpdate }: ProductProps) {

    const [addCart, setAddCart] = useState<boolean>(false)

    const handleAddCart = () => {
        setAddCart(!addCart)
        handeCartUpdate(product)
    }

    return (
        <div>
            <div className="product-style">
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
                            <button onClick={handleAddCart}>{addCart ? "Added" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}