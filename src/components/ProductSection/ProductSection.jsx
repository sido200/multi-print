"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ProductSlide from "../ProductSlide/ProductSlide";
import { useTranslations } from "next-intl";

const ProductSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="product-section">
      {/* Texte animé */}
      <motion.div
        className="text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>{t("product-section.title")}</h2>
        <p>{t("product-section.description")}</p>
      </motion.div>

      <ProductSlide />
    </section>
  );
};

export default ProductSection;
