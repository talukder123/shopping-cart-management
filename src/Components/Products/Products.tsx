import { use } from "react"
import type { ProductType } from "../../type"
import './Products.css'
import Product from "../product/product"

export interface ProductsProps {
    ProductPromise: Promise<ProductType[]>
}

export default function Products({ ProductPromise }: ProductsProps) {

    const Products = use(ProductPromise)

    return (
        <div  className="grid-c">
            {
                Products.map((product, index) => <Product key={index} product={product}></Product> )
            }
        </div>
    )
}