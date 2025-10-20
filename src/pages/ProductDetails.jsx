import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductDetails = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    // Get individual query params
    const id = searchParams.get('id');

    const getProductDetailsById = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductDetailsById()
    }, [])

    return (
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 my-8">
            <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:underline text-sm mb-4"
            >
                ← Go Back
            </button>
            {/* Image */}
            <div className="flex justify-center mb-4">
                <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="h-48 object-contain rounded"
                />
            </div>

            {/* Product Title & Category */}
            <h2 className="text-2xl font-semibold text-gray-800">{product?.title}</h2>
            <p className="text-sm text-gray-500 capitalize">{product?.category} — {product?.brand}</p>

            {/* Price & Discount */}
            <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-green-600">${product?.price?.toFixed(2)}</span>
                {product?.discountPercentage > 0 && (
                    <span className="text-sm text-red-500 line-through">
                        ${(product?.price / (1 - product?.discountPercentage / 100))?.toFixed(2)}
                    </span>
                )}
            </div>

            {/* Rating & Stock */}
            <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>⭐ {product?.rating?.toFixed(1)} / 5</span>
                <span className={product?.stock < 10 ? "text-red-500" : "text-green-600"}>
                    {product?.availabilityStatus} ({product?.stock} left)
                </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700 text-sm">{product?.description}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {product?.tags?.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-600">
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Meta info */}
            <div className="mt-4 text-xs text-gray-400">
                <p>SKU: {product?.sku}</p>
                <p>Barcode: {product?.meta?.barcode}</p>
                <p>Weight: {product?.weight}g</p>
                <p>Dimensions: {product?.dimensions?.width} × {product?.dimensions?.height} × {product?.dimensions?.depth}</p>
            </div>

            {/* Warranty / Shipping / Return */}
            <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p><strong>Warranty:</strong> {product?.warrantyInformation}</p>
                <p><strong>Shipping:</strong> {product?.shippingInformation}</p>
                <p><strong>Return:</strong> {product?.returnPolicy}</p>
                <p><strong>Min. Order:</strong> {product?.minimumOrderQuantity} pcs</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-2">Reviews</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {product?.reviews?.map((review, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded text-sm">
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>{review?.reviewerName}</span>
                                <span>⭐ {review?.rating}</span>
                            </div>
                            <p className="text-gray-700 mt-1">{review?.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* QR Code */}
            <div className="mt-6 flex items-center gap-4">
                <img src={product?.meta?.qrCode} alt="QR Code" className="h-16 w-16" />
                <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
