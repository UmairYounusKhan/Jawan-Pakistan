import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Products from './Products/Products'

const Compcards = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products/:id" element={<Products />} />
    </Routes>
    </div>
  )
}

export default Compcards
