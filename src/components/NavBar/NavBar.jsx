"use client";
import "./NavBar.css";
import Image from "next/image";
import logo from "../../app/[locale]/assets/muliprint.png";
import en from "../../app/[locale]/assets/en.png";
import fr from "../../app/[locale]/assets/fr.jpg";
import ar from "../../app/[locale]/assets/dz.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useTransition, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const localActive = useLocale();
  const [Language, setLanguage] = useState(`${localActive}`);
  const t = useTranslations("HomePage");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    if (Language == "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
    if (isLanguage) {
      startTransition(() => {
        router.replace(`/${Language}`);
      });
    }
  }, [isLanguage, Language, router]);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={50} />
        </Link>
      </div>
      <div className={isOpen ? "items active" : "items"}>
        <ul>
          <Link href="/#hero-section">
            <li>{t("home")}</li>
          </Link>
          <hr />
          <Link href="/#about-section">
            <li>{t("about")}</li>
          </Link>
          <hr />
          <Link href={`/${localActive}/Product`}>
            <li>{t("products")}</li>
          </Link>
          <hr />
          <Link href={`/${localActive}/Contact`}>
            <li>{t("contact")}</li>
          </Link>
          <hr />
          <Link href="/#Testimonial-section">
            <li>{t("Testimonials")}</li>
          </Link>
        </ul>
        <div className="close">
          <IoClose
            size={23}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </div>
      <div className="language">
        <span>{localActive}</span>
        <Image
          src={localActive === "en" ? en : localActive === "fr" ? fr : ar}
          alt="Flag"
          width={24}
          height={24}
          onClick={() => {
            setIsLanguage(!isLanguage);
          }}
        />
        <div className="menu">
          <RiMenu3Fill
            color="white"
            size={23}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div
          className={
            isLanguage ? "language-menu active-language" : "language-menu"
          }
        >
          <ul>
            <li onClick={() => setLanguage("en")}>
              <Image src={en} alt="English Flag" width={24} height={24} />
              <span> English</span>
            </li>
            <li onClick={() => setLanguage("fr")}>
              <Image src={fr} alt="French Flag" width={24} height={24} />
              <span> française</span>
            </li>
            <li onClick={() => setLanguage("ar")}>
              <Image src={ar} alt="Arabic Flag" width={24} height={24} />
              <span>Arabe</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
