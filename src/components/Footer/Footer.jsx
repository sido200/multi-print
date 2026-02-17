"use client";
import "./Footer.css";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../../public/assets/whiteLogo.png";
import { Outfit } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { createNewsletter } from "@/app/services/newsletter";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

export default function Footer() {
  const t = useTranslations("HomePage");
  const localActive = useLocale();

  // State to toggle email input visibility
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const handleNewsletterClick = () => {
    setShowEmailInput(true); // Toggle the visibility
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    createNewsletter({ email });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Email has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setEmail("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowEmailInput(false);
      }
    };

    if (showEmailInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmailInput]);

  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <div className="logo">
            <Image src={whiteLogo} alt="white-logo" />
          </div>
          <p>{t("footer.top-footer.description")}</p>

          <button
            id="newsletter-button"
            className={`${outfit.className}`}
            onClick={handleNewsletterClick}
            style={{
              display: showEmailInput ? "none" : "block",
              opacity: showEmailInput ? 0 : 1,
              transition: "all 0.4s ease-in-out",
            }}
          >
            {t("footer.top-footer.button")}
          </button>

          <form
            onSubmit={handleEmailSubmit}
            ref={formRef}
            className="newsletter-form"
            style={{
              transition: "all 0.4s ease-in-out",
              opacity: showEmailInput ? 1 : 0,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email-input"
              style={{
                width: showEmailInput ? "22vw" : "10%",
                transition: "all 0.5s ease-in-out",
                display: showEmailInput ? "block" : "none",
              }}
            />
            <button
              type="submit"
              id="submit-button"
              className="submit-button"
              style={{
                left: showEmailInput ? "16vw" : "0",
                transition: "all 0.5s ease-in-out",
                cursor: "pointer",
                right: "16vw",
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="right-footer">
          <ul>
            <li className="title-liste">
              {t("footer.top-footer.links.explore")}
            </li>
            <Link href="/#hero-section">
              <li>{t("home")}</li>
            </Link>
            <Link href="/#about-section">
              <li>{t("about")}</li>
            </Link>
            <Link href={`/${localActive}/Product`}>
              <li>{t("products")}</li>
            </Link>
            <Link href={`/${localActive}/Contact`}>
              <li>{t("contact")}</li>
            </Link>
          </ul>
          <ul>
            <li className="title-liste">
              {t("contact")}
            </li>
            <li>+213 (0) 23 930 339</li>
            <li>+213 (0) 770 654 497</li>
            <li>contact@sarl-multiprint.com</li>

            {/* <li>{t("footer.top-footer.links.useful-links.Support")}</li> */}
          </ul>
        </div>
        <div className="footer-map">
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.172491136201!2d3.2186820762873425!3d36.72804847176269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e502d8729f1c7%3A0xf710a4ffc2dd13ff!2sSarl%20MULTI%20DISTINATIONS%20TOURS!5e1!3m2!1sfr!2sdz!4v1771311406037!5m2!1sfr!2sdz"
            }
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </div>
      </div>
      <div className="bottom-footer">
        {/* <div className="social">
          <a href="https://instagram.com" target="_blank">
            <FiInstagram color="white" size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FiLinkedin color="white" size={32} />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FiFacebook color="white" size={32} />
          </a>
        </div> */}
        <p>{"© " + (new Date().getFullYear()) + " " + t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
