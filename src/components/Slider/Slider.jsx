"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import produit from "../../app/assets/produit.png";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Slider.css";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

export default function Slider() {
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
          <h2>Title for the Products</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
          <Link href="/Product">
            <button className={outfit.className}>
              <span> Explore Products</span>
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
          <h2>Title for the Products</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
          <Link href="/Product">
            <button className={outfit.className}>
              <span> Explore Products</span>
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
          <h2>Title for the Products</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
          <button className={outfit.className}>
            <span> Explore Products</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="right-slide">
          <Image src={produit} alt="produit" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
