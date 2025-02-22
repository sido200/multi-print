"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductImage from "@/components/ProductImage/ProductImage";
import { useLocale, useTranslations } from "next-intl";
import { getProducts } from "@/app/services/products";
import Link from "next/link";

export default function DetailsProductContent({ productId }) {
  const [product, setProduct] = useState(null);
  const t = useTranslations("products-details");
  const localActive = useLocale();
  useEffect(() => {
    getProducts()
      .then((res) => {
        const foundProduct = res.data.products.find((p) => p._id === productId);
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <main className="product-details-page">
      <div className="header">
        {product && (
          <div className="titles">
            <h2>{product[`title${localActive}`]}</h2>
            <p id="exep-title"> {product[`desc${localActive}`]}</p>
          </div>
        )}
        <div className="btns">
          <button onClick={() => window.history.back()}>
            <FaArrowLeft />
            {t("see-more")}
          </button>
          <button>
            <Link href={`/${localActive}/Contact`} className="contact-team-btn">
              {t("contact")} <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
      <ProductImage Product={product} />
    </main>
  );
}
