import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  const t = useTranslations("HomePage");
  const localActive = useLocale();
  return (
    <section id="contact-section">
      <h2> {t("contact-section.title")}</h2>
      <p>{t("contact-section.description")}</p>
      <div className="button">
        <button>
          <Link href={`/${localActive}/Contact`}>
            {t("contact-section.buttons.contact")}
          </Link>
        </button>
        <button>
          <Link href={`/${localActive}/Contact`}>
            {t("contact-section.buttons.book")}
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
