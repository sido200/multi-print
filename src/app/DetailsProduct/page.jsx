import React from 'react'
import "./DetailsProduct.css"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductImage from '@/components/ProductImage/ProductImage';
export default function DetailsProduct() {
  return (
    <main className='product-details-page'>
    <div className="header">
    <div className="titles">
    <h2>Take a look at our products</h2>
    <p>Introducing our latest Print marvel - Pushing boundaries and redefining print excellence  </p>
    </div>
    <div className="btns">
<button><FaArrowLeft/>see more</button>
<button>Contact team <FaArrowRight/></button>
    </div>

    </div>
    <ProductImage/>
  


  </main>
  )
}
