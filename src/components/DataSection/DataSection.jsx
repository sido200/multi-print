"use client";
import React from "react";
import { motion } from "framer-motion";
import DataCard from "../DataCard/DataCard";
import icon1 from "../../app/[locale]/assets/icon1.png";
import icon2 from "../../app/[locale]/assets/icon2.png";
import icon3 from "../../app/[locale]/assets/icon3.png";
import { useTranslations } from "next-intl";

const DataSection = () => {
  const t = useTranslations("HomePage");

  // Liste des icônes pour rendre les DataCards dynamiquement
  const icons = [icon1, icon2, icon3];
  const titles = ["ISO 9001", "ISO 14001", "HACCP"];
  const descriptions = [
    "Card-data-desc-iso9001", // Each description is a translation key
    "Card-data-desc-iso14001",
    "Card-data-desc-haccp",
  ];

  return (
    <section id="data-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {t("data-title")}
      </motion.h2>

      <div className="grid-card">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }} // Chaque carte commence invisible et à gauche
            whileInView={{ opacity: 1, x: 0 }} // Devient visible et retourne à sa position normale
            transition={{
              duration: 0.6,
              delay: index * 0.3, // Chaque carte a un délai progressif
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <DataCard
              icon={icon}
              title={titles[index]}
              descriptionKey={descriptions[index]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DataSection;
