"use client";
import "./NavBar.css";
import Image from "next/image";
import logo from "../../app/assets/muliprint.png";
import en from "../../app/assets/en.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link href="/" >
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className={isOpen ? "items active" : "items"}>
        <ul>
          <Link href="/#hero-section">
            <li>Home</li>
          </Link>
          <hr />
          <Link href="/#about-section">
            <li>About us</li>
          </Link>
          <hr />
          <Link href="/Product">
            <li>Products</li>
          </Link>
          <hr />
          <Link href="/Contact">
            <li>Contact us</li>
          </Link>

          <hr />
          <Link href="/#Testimonial-section">
            <li>Testimonials</li>
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
        EN{" "}
        <Image
          src={en}
          alt="Flage"
          onClick={() => {
            setIsLanguage(!isLanguage);
          }}
        />
        <div className="menu">
          <RiMenu3Fill
            color="white"
            size={23}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div
          className={
            isLanguage ? "language-menu active-language" : "language-menu"
          }
        >
          <ul>
            <li>
              <Image src={en} alt="Flage" />
              <span> English</span>
            </li>
            <li>
              <Image src={en} alt="Flage" />
              <span> française</span>
            </li>
            <li>
              <Image src={en} alt="Flage" /> <span>Arabe</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
