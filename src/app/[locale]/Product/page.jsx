"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import React, { useState, useEffect } from "react";

import "./Product.css";
import Filter from "@/components/Filter/Filter";
import { useTranslations } from "next-intl";
import { getProducts } from "@/app/services/products";
import { getCategorie } from "@/app/services/categories";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //function
  const fatchProducts = (category) => {
    getProducts(category)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //fatch
  useEffect(() => {
    fatchProducts();
  }, []);
  useEffect(() => {
    getCategorie()
      .then((res) => {
        setCategories(res.data.categories);
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
        <Filter categories={categories} fatchProducts={fatchProducts} />
      </div>
      <div className="grid-product">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
        {products.length === 0 && (
          <h2
            style={{
              textAlign: "center",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #d7c4c4",
            }}
          >
            No products found
          </h2>
        )}
      </div>
    </main>
  );
}
