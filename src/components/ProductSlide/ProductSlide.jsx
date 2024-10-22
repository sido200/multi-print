"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductSlide.css";
import { getProducts } from "@/app/services/products";
import { useState, useEffect } from "react";

// import required modules

import CardProduct from "../CardProduct/CardProduct";
import { Autoplay } from "swiper/modules";
export default function ProductSlide() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Swiper
        initialSlide={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {products.map((product,index) => (
          <SwiperSlide key={index}>
            <CardProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
