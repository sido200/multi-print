"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ProductSlide.css";

// import required modules


import CardProduct from "../CardProduct/CardProduct";
import { Autoplay } from "swiper/modules";
export default function ProductSlide() {
  return (
    <>
      <Swiper    
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        utoplay={{
          delay: 5000,
          disableOnInteraction: false,
         
        }} modules={[Autoplay]}
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
          }}} className="mySwiper">
       
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
        <SwiperSlide>
       <CardProduct/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
