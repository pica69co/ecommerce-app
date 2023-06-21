import Link from "next/link"
import ProductImage from "./ProductImage"

type Props = {
    product: Product
}

const Product = ({product}: Props) => {
  return (
    <Link 
        prefetch={false} 
        href={`/product/${product.id}`}
        className="h-96 flex flex-col border group-hover:scale-105 transition-transform ease-out duration-200"    
    >
        <div className="relative   max-h-72 flex-1">
            <ProductImage 
                product={product} 
                fill
            />
        </div>
        <div className="font-semibold flex items-center justify-between mt-4 mb-1 p-3">
           <p className="w-30">{product.title}</p>
           <span className="italic text-xs w-60 line-clamp-2 text-gray-600">
            {product.description}
           </span>
           <p>${product.price}</p>
                {/* <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
                    {product.description}
                </p> */}
        </div>
        <span className="italic text-xxs line-clamp-2 text-gray-600">See More...</span> 
    </Link>
  )
}

export default Product