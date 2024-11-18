"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import profil from "../../../public/assets/profil.jpg";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import "./TestimonialSlider.css";

import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rate-card">
            <div className="user-profil">
              <Image src={profil} alt="profil" />
              <div className="user-info">
                <p className="user-name">John Doe</p>
                <p className="date">2023/10/9</p>
              </div>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-card">
            <div className="user-profil">
              <Image src={profil} alt="profil" />
              <div className="user-info">
                <p className="user-name">John Doe</p>
                <p className="date">2023/10/9</p>
              </div>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-card">
            <div className="user-profil">
              <Image src={profil} alt="profil" />
              <div className="user-info">
                <p className="user-name">John Doe</p>
                <p className="date">2023/10/9</p>
              </div>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-card">
            <div className="user-profil">
              <Image src={profil} alt="profil" />
              <div className="user-info">
                <p className="user-name">John Doe</p>
                <p className="date">2023/10/9</p>
              </div>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
