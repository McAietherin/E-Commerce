import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProdDeet from './pages/ProdDeet'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Category from './pages/Category'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProdDeet />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Body
