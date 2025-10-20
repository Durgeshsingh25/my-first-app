import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-screen h-10 p-2 ps-2 flex items-center gap-4 bg-slate-200 mb-2'>
            <h1 className='text-xl font-bold'>My First App</h1>
            <Link to="/login" className='hover:underline hover:text-blue-500' >Login Page</Link>
            <Link to="/products" className='hover:underline hover:text-blue-500' >Products</Link>
            <Link to="/about" className='hover:underline hover:text-blue-500' >About</Link>
            <Link to="/features" className='hover:underline hover:text-blue-500' >Features</Link>
            <Link to="/services" className='hover:underline hover:text-blue-500' >Services</Link>
        </div>
    )
}

export default Navbar
