"use client";
import React, { useState, useEffect } from "react";
import "./DetailsProduct.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductImage from "@/components/ProductImage/ProductImage";
import { useTranslations } from "next-intl";
import { getProducts } from "@/app/services/products";

// This is the dynamic product details page
export default function DetailsProduct({ params }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  console.log(product);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
        const foundProduct = res.data.products.find((p) => p._id === params.id);
        setProduct(foundProduct);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);
  const t = useTranslations("products-details");

  return (
    <main className="product-details-page">
      <div className="header">
        <div className="titles">
          <h2>{product?.titlefr}</h2>
          <p>{product?.descfr}</p>
        </div>
        <div className="btns">
          <button onClick={() => window.history.back()}>
            <FaArrowLeft />
            {t("see-more")}
          </button>
          <button>
            {t("contact")} <FaArrowRight />
          </button>
        </div>
      </div>
      <ProductImage Product={product} />
    </main>
  );
}
