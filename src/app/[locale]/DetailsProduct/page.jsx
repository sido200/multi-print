import React from 'react'
import "./DetailsProduct.css"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductImage from '@/components/ProductImage/ProductImage';
import { useTranslations } from 'next-intl';
export default function DetailsProduct() {
  const t = useTranslations('products-details');
  return (
    <main className='product-details-page'>
    <div className="header">
    <div className="titles">
    <h2>{t("title")}</h2>
    <p>{t("description")}</p>
    </div>
    <div className="btns">
<button><FaArrowLeft/>{t("see-more")}</button>
<button>{t("contact")} <FaArrowRight/></button>
    </div>

    </div>
    <ProductImage/>
  


  </main>
  )
}
