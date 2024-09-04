import CardProduct from '@/components/CardProduct/CardProduct'

import React from 'react'


import './Product.css'
import Filter from '@/components/Filter/Filter';

export default function Product() {
  return (
    <main className='product-page'>
      <div className="header">
      <div className="titles">
      <h2>Take a look at our products</h2>
      <p>Introducing our latest Print marvel - Pushing boundaries and redefining print excellence  </p>
      </div>
 <Filter/>

      </div>
  <div className="grid-product">
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
  </div>

    </main>
  )
}
