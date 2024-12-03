"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Slider.css";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getpub } from "@/app/services/pub";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const outfit = Outfit({ subsets: ["latin"] });

export default function Slider() {
  const localActive = useLocale();
  const [pub, setpub] = useState([]);
  useEffect(() => {
    getpub()
      .then((res) => {
        setpub(res.data.pubs);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const t = useTranslations("HomePage");
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          const slides = document.querySelectorAll(".swiper-slide");

          slides.forEach((slide) => {
            slide.addEventListener("mouseenter", () => {
              swiper?.autoplay?.stop();
            });
            slide.addEventListener("mouseleave", () => {
              swiper?.autoplay?.start();
            });
          });
        }}
      >
        {pub.map((pub, index) => (
          <SwiperSlide key={index}>
            <div
              className={`left-slide ${pub.color}tt`}
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h2>{pub[`title${localActive}`]}</h2>
              <p> {pub[`description${localActive}`]}</p>
              <Link href="/fr/Product">
                <button className={outfit.className}>
                  <span> {t("explore-btn")}</span>
                  <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className={`right-slide ${pub.color}`}>
              <img src={pub.image} alt="produit" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
