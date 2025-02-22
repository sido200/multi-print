"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import contactImage2 from "../../app/[locale]/assets/contact-image2.jpg";
import { useTranslations } from "next-intl";

const VisionSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="vision-section"
      style={{ display: "flex", alignItems: "center", gap: "2rem" }}
    >
      {/* Image avec animation venant de la gauche */}
      <motion.div
        className="left-vision"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={contactImage2} alt="vision-image" />
      </motion.div>

      {/* Texte avec animation venant de la droite */}
      <motion.div
        className="right-vision"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>{t("right-vision.title")}</h2>
        <h3>{t("right-vision.sections.subtitle1")}</h3>
        <p>{t("right-vision.sections.text1")}</p>
        <h3>{t("right-vision.sections.subtitle2")}</h3>
        <p>{t("right-vision.sections.text2")}</p>
      </motion.div>
    </section>
  );
};

export default VisionSection;
