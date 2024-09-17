
import Image from "next/image"
import icon1 from "../../app/[locale]/assets/icon1.png"
import icon2 from "../../app/[locale]/assets/icon2.png"
import icon3 from "../../app/[locale]/assets/icon3.png"

import "./DataCard.css"
import { useTranslations } from "next-intl"
export default function DataCard() {
  const t = useTranslations('HomePage');
  return (
    <div className="data-card">
   <div className="icon">
    <Image src={icon1} alt="" />
   </div>
   <h3>{t("data-title-title")}</h3>
   <p>{t("Card-data-desc")}</p>
   <button>{t("see-more")}</button>

    </div>
  )
}
