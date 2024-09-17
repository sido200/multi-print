import Slider from "@/components/Slider/Slider";

import DataCard from "@/components/DataCard/DataCard";
import Image from "next/image";
import contactImage from "./assets/contact-image.jpg"
import contactImage2 from "./assets/contact-image2.jpg"

import ProductSlide from "@/components/ProductSlide/ProductSlide";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import { useTranslations } from "next-intl";


export default function LandingPage() {
  const t = useTranslations('HomePage');

  return (
    <main className="landing-page">
      <section id="hero-section">
        <Slider />
      </section>
      <section id="data-section">
        <h2>{t("data-title")}</h2>
        <div className="grid-card">
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
      </section>
      <section id="about-section">
        <div className="left-about">
          <h2> {t("about-section.title")} </h2>
          <p>
          {t("about-section.description")}
          </p>
          <div className="stat">
            <div className="stat-1">
              <h3>+20</h3>
              <p>  {t("about-section.stats.label1")}</p>
            </div>
            <div className="stat-1">
              <h3>99%</h3>
              <p> {t("about-section.stats.label")}</p>
            </div>
          </div>
          <div className="button">
            <button > {t("about-section.buttons.contact")}</button>
            <button > {t("about-section.buttons.book")} </button>
          </div>
        </div>
        <div className="right-about">
          <Image src={contactImage} alt="contact-image"/>
        </div>
      </section>
      <section id="product-section">
       <div className="text">
       <h2> {t("product-section.title")} </h2>
       <p>{t("product-section.description")} </p>
       </div>
        <ProductSlide/>
      </section>
      <section id="vision-section">
      <div className="left-vision">
          <Image src={contactImage2} alt="vision-image"/>
        </div>
      <div className="right-vision">
          <h2>{t("right-vision.title")}</h2>
          <h3>{t("right-vision.sections.subtitle1")}</h3>
          <p>
          {t("right-vision.sections.text1")}
          </p>
          <h3>{t("right-vision.sections.subtitle2")}</h3>
          <p>
          {t("right-vision.sections.text2")}
          </p>
      
         
        </div>
      
      </section>
      <section id="contact-section">
        <h2>  {t("contact-section.title")}</h2>
        <p>{t("contact-section.description")}</p>
        <div className="button">
            <button >{t("contact-section.buttons.contact")}</button>
            <button >{t("contact-section.buttons.book")}</button>
          </div>
      </section>
      <section id="Testimonial-section">
    <h2>{t("Testimonial-section.title")}</h2>
    <h3>{t("Testimonial-section.subtitle")}</h3>
    <TestimonialSlider/>
      </section>
    </main>
  );
}
