"use client"
import { motion } from "framer-motion";
import contactImage from "../../app/[locale]/assets/contact-image.jpg";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  const t = useTranslations("HomePage");
  const localActive = useLocale();

  return (
    <section id="about-section" style={{ display: "flex", alignItems: "center" }}>
      {/* Texte avec animation venant de la gauche */}
      <motion.div
        className="left-about"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2> {t("about-section.title")} </h2>
        <p>{t("about-section.description")}</p>
        <div className="stat">
          <div className="stat-1">
            <h3>+20</h3>
            <p>{t("about-section.stats.label1")}</p>
          </div>
          <div className="stat-1">
            <h3>99%</h3>
            <p>{t("about-section.stats.label")}</p>
          </div>
        </div>
        <div className="button">
          <button>
            <Link href={`/${localActive}/Contact`}>
              {t("about-section.buttons.contact")}
            </Link>
          </button>
          <button>
            <Link href={`/${localActive}/Contact`}>
              {t("about-section.buttons.book")}
            </Link>
          </button>
        </div>
      </motion.div>

      {/* Image avec animation venant de la droite */}
      <motion.div
        className="right-about"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={contactImage} alt="contact-image" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
