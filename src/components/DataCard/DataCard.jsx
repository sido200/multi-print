import Image from "next/image";
import "./DataCard.css";
import { useTranslations } from "next-intl";

export default function DataCard({ icon, title, descriptionKey }) {
  const t = useTranslations("HomePage");

  return (
    <div className="data-card">
      <div className="icon">
        <Image src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{t(descriptionKey)}</p> {/* Use the key for the description */}
    </div>
  );
}
