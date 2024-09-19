"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import React, { useState, useEffect } from "react";

import "./Product.css";
import Filter from "@/components/Filter/Filter";
import { useTranslations } from "next-intl";
import { getProducts } from "@/app/services/products";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const t = useTranslations("products-page");
  return (
    <main className="product-page">
      <div className="header">
        <div className="titles">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>
        <Filter />
      </div>
      <div className="grid-product">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
