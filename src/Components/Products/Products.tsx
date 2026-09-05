import { use, useState } from "react"
import type { ProductType } from "../../type"
import './Products.css'
import Product from "../product/product"

export interface ProductsProps {
    ProductPromise: Promise<ProductType[]>
}

export default function Products({ ProductPromise }: ProductsProps) {

    const Products = use(ProductPromise)

    const [cartProducts, setCartProducts] = useState<ProductType[]>([])

    const handeCartUpdate = (product: ProductType): void => {
        let newCartProduct = [...cartProducts, product]

        if (cartProducts.includes(product)) {
            newCartProduct = cartProducts.filter(p => p.id !== product.id)
        }

        setCartProducts(newCartProduct)
    }


    return (
        <>
            <div className="cart-box">
                <h3>
                    Your Cart: <span>{cartProducts.length}</span>
                </h3>
            </div>
            <div className="grid-c">
                {
                    Products.map((product, index) => <Product handeCartUpdate={handeCartUpdate} key={index} product={product}></Product>)
                }
            </div>
        </>
    )
}