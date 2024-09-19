"use client";
import "./Footer.css";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Image from "next/image";
import whiteLogo from "../../app/[locale]/assets/whiteLogo.png";
import { Outfit } from "next/font/google";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Swal from "sweetalert2";
import { createNewsletter } from "@/app/services/newsletter";

const outfit = Outfit({ subsets: ["latin"] });
export default function Footer() {
  const t = useTranslations("HomePage");

  // State to toggle email input visibility
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterClick = () => {
    setShowEmailInput(true); // Toggle the visibility
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    createNewsletter({ email });
    console.log(email); // You can send this email to your backend or Brevo here

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Email has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <div className="logo">
            <Image src={whiteLogo} alt="white-logo" />
          </div>
          <p>{t("footer.top-footer.description")}</p>

          {/* Toggle button to show/hide email input */}
          {!showEmailInput && (
            <button
              className={`${outfit.className} ${
                showEmailInput ? "hidden" : ""
              }`}
              onClick={handleNewsletterClick}
            >
              {t("footer.top-footer.button")}
            </button>
          )}

          {/* Conditional rendering of the email input */}

          <form
            onSubmit={handleEmailSubmit}
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
              style={{
                width: showEmailInput ? "22vw" : "10%",
                transition: "all 0.5s ease-in-out",
              }}
            />
            <button
              type="submit"
              className="submit-button"
              style={{
                left: showEmailInput ? "16vw" : "0",
                transition: "all 0.5s ease-in-out",
                cursor: "pointer",
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
            <li>{t("home")}</li>
            <li>{t("about")}</li>
            <li>{t("products")}</li>
            <li>{t("contact")}</li>
          </ul>
          <ul>
            <li className="title-liste">
              {t("footer.top-footer.links.useful-links.title")}
            </li>
            <li>{t("footer.top-footer.links.useful-links.Give-feedback")}</li>
            <li>{t("footer.top-footer.links.useful-links.Support")}</li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social">
          <FiInstagram color="white" size={32} />
          <FiLinkedin color="white" size={32} />
          <FiFacebook color="white" size={32} />
        </div>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
