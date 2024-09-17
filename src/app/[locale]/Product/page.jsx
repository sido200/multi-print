import CardProduct from '@/components/CardProduct/CardProduct'

import React from 'react'


import './Product.css'
import Filter from '@/components/Filter/Filter';
import { useTranslations } from 'next-intl';

export default function Product() {
  const t = useTranslations('products-page');
  return (
    <main className='product-page'>
      <div className="header">
      <div className="titles">
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
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
