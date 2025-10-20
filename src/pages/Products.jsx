import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { Frown, Loader, Loader2, LoaderPinwheel, LucideLoader2, SearchCheck } from 'lucide-react';
import ProductCard from '../components/product-card';

const Products = () => {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = async () => {
    setIsLoading(true)
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    setProductList(data.products)
    setIsLoading(false)
  }

  useEffect(()=>{
    handleClickButton()
  }, [])

  return (
    <div>
      <Navbar />
      <button
        className="bg-amber-100 disabled:bg-slate-100 disabled:border-slate-400 disabled:cursor-progress font-bold cursor-pointer hover:bg-amber-500 border-amber-500 border-2 ms-1 p-2 rounded-2xl flex text-center justify-center items-center gap-2"
        onClick={handleClickButton}
        disabled={isLoading}
        >
        {isLoading ? <span className='flex gap-1 justify-items-center items-center'><Loader2 className='animate-spin text-slate-500'/> Loading...</span> : <span className='flex gap-1 justify-items-center items-center'>Get all products <SearchCheck /></span>}
      </button>

      <div className='w-full text-center p-10 flex flex-wrap gap-2 justify-center items-center bg-slate-100'>

        {

          isLoading ? <span className='flex gap-1 justify-items-center items-center'><Loader2 className='animate-spin text-slate-500'/> Please wait...</span>
            :
            productList.length > 0 ? productList.map((element) =>
            (<ProductCard product={element}/>)
            )
              : <div className='font-bold text-3xl text-red-400 flex flex-col items-center justify-center gap-2'><Frown size={32} className='text-amber-500' /> No data available!</div>}

      </div>
    </div>
  )
}

export default Products
