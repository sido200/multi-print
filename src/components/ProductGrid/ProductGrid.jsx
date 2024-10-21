"use client";
import { useState, useEffect } from "react";
import CardProduct from "@/components/CardProduct/CardProduct";
import Filter from "@/components/Filter/Filter";
import { getProducts } from "@/app/services/products";
import { getCategorie } from "@/app/services/categories";
import { useTranslations } from "next-intl";

export default function ProductGrid() {
  const t = useTranslations("products-page");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = (category) => {
    getProducts(category)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    getCategorie()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="product-page">
      <div className="header">
        <div className="titles">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>
        <Filter categories={categories} fatchProducts={fetchProducts} />
      </div>
      <div className="grid-product">
        {products.map((product,index) => (
          <CardProduct key={index} product={product} />
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
