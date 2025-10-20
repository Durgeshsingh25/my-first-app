import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
            {/* Thumbnail Placeholder */}
            <div className="h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-md">
                <span className="text-gray-400 text-sm">Image</span>
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>

            {/* Price & Discount */}
            <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-bold text-green-600">${product.price}</span>
                {product.discountPercentage > 0 && (
                    <span className="text-sm text-red-500 line-through">
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>
                )}
            </div>

            {/* Rating & Stock */}
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>⭐ {product.rating}</span>
                <span className={product.stock < 10 ? "text-red-500" : ""}>
                    {product.availabilityStatus}
                </span>
            </div>

            {/* CTA Button */}
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium">
                View Product
            </button>
        </div>
    )
}

export default ProductCard
