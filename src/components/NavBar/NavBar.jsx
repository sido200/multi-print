"use client";
import "./NavBar.css";
import Image from "next/image";
import logo from "../../../public/assets/muliprint.png";
import en from "../../../public/assets/en.png";
import fr from "../../../public/assets/fr.jpg";
import ar from "../../../public/assets/dz.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useTransition, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const localActive = useLocale();
  const [Language, setLanguage] = useState(`${localActive}`);
  const t = useTranslations("HomePage");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (Language === "ar") {
      document.body.classList.add("rtl");
      document.body.style.fontFamily = "'Tajawal', sans-serif";
    } else {
      document.body.classList.remove("rtl");
      document.body.style.fontFamily = "'Outfit', sans-serif";
    }

    if (isLanguage) {
      startTransition(() => {
        router.replace(
          `/${Language}${pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "")}`
        );
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
          <Link href="/#hero-section" onClick={() => setIsOpen(false)}>
            <li>{t("home")}</li>
          </Link>
          <hr />
          <Link href="/#about-section" onClick={() => setIsOpen(false)}>
            <li>{t("about")}</li>
          </Link>
          <hr />
          <Link
            href={`/${localActive}/Product`}
            onClick={() => setIsOpen(false)}
          >
            <li>{t("products")}</li>
          </Link>
          <hr />
          <Link
            href={`/${localActive}/Contact`}
            onClick={() => setIsOpen(false)}
          >
            <li>{t("contact")}</li>
          </Link>
          <hr />
          <Link href="/#Testimonial-section" onClick={() => setIsOpen(false)}>
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
        <div
          className="language"
          onClick={() => {
            setIsLanguage(!isLanguage);
          }}
          style={{ cursor: "pointer" }}
        >
          <span>{localActive}</span>
          <Image
            src={localActive === "en" ? en : localActive === "fr" ? fr : ar}
            alt="Flag"
            width={24}
            height={24}
          />
        </div>
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          <RiMenu3Fill color="white" size={23} />
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
              <span> français</span>
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
