import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Features from './pages/Features';
import Services from './pages/Services';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import DashboardPage from './pages/Dashboard';
import UserProfileCard from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/> 
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<DashboardPage />}/>
        <Route path='/profile' element={<UserProfileCard />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/features' element={<Features />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/product-details' element={<ProductDetails />}/>

        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
