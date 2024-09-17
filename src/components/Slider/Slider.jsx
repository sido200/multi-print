"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import produit from "../../app/[locale]/assets/produit.png";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Slider.css";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { useTranslations } from "next-intl";

const outfit = Outfit({ subsets: ["latin"] });

export default function Slider() {
  const t = useTranslations('HomePage');
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSwiper={(swiper) => {
        const slides = document.querySelectorAll('.swiper-slide');
        
        slides.forEach((slide) => {
          slide.addEventListener('mouseenter', () => {
            swiper?.autoplay?.stop();
          });
          slide.addEventListener('mouseleave', () => {
            swiper?.autoplay?.start();
          });
        });
      }}
    >
      <SwiperSlide>
        <div
          className="left-slide"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2>{t('products-title')}</h2>
          <p>
          {t('products-details')}
          </p>
          <Link href="/Product">
            <button className={outfit.className}>
              <span>  {t('explore-btn')}</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="right-slide">
          <Image src={produit} alt="produit" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="left-slide"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2>{t('products-title')}</h2>
          <p>
          {t('products-details')}
          </p>
          <Link href="/Product">
            <button className={outfit.className}>
              <span>  {t('explore-btn')}</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="right-slide">
          <Image src={produit} alt="produit" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="left-slide"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h2>{t('products-title')}</h2>
          <p>
          {t('products-details')}
          </p>
          <Link href="/Product">
            <button className={outfit.className}>
              <span>  {t('explore-btn')}</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="right-slide">
          <Image src={produit} alt="produit" />
        </div>
      </SwiperSlide>
     
      
    </Swiper>
  );
}
