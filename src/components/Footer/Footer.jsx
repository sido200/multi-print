
import "./Footer.css";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../app/[locale]/assets/whiteLogo.png"
import { Outfit } from 'next/font/google';
import { useTranslations } from "next-intl";


const outfit = Outfit({ subsets: ["latin"] });
export default function Footer() {
  const t = useTranslations('HomePage');
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <div className="logo">
            <Image src={whiteLogo} alt="white-logo" />
          </div>
          <p>
            {t("footer.top-footer.description")}
          
          </p>
          <button className={outfit.className}>  {t("footer.top-footer.button")}</button>
        </div>
        <div className="right-footer">
          <ul>
            <li className="title-liste"> {t("footer.top-footer.links.explore")}</li>
            <li>{t('home')}</li>
            <li>{t('about')}</li>
            <li>{t('products')}</li>
            <li>{t('contact')}</li>
          </ul>
          <ul>
            <li className="title-liste">{t("footer.top-footer.links.useful-links.title")}</li>
            <li>{t("footer.top-footer.links.useful-links.Give-feedback")}</li>
            <li>{t("footer.top-footer.links.useful-links.Support")}</li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social">
          <FiInstagram color="white" size={32}/>
          <FiLinkedin color="white" size={32}/>
          <FiFacebook  color="white" size={32}/>
        </div>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
