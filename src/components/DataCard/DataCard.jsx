import Image from "next/image";
import "./DataCard.css";
import { useTranslations } from "next-intl";
export default function DataCard({ icon }) {
  const t = useTranslations("HomePage");
  return (
    <div className="data-card">
      <div className="icon">
        <Image src={icon} alt="icon" />
      </div>
      <h3>{t("data-title-title")}</h3>
      <p>{t("Card-data-desc")}</p>
      <button>{t("see-more")}</button>
    </div>
  );
}
