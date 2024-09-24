"use client";
import React, { useState } from "react";
import "./ProductImage.css";
import productImAGE from "../../app/[locale]/assets/product-details.jpg";
import Image from "next/image";

export default function ProductImage({ Product }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);
  console.log(Product);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const xPos = (offsetX / clientWidth) * 100;
    const yPos = (offsetY / clientHeight) * 100;

    setPosition({ x: xPos, y: yPos });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="product-image">
      <div
        className="big-image"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={Product?.images[index]}
          alt="details"
          className={`zoom-image ${isHovered ? "hovered" : ""}`}
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
            objectFit: "cover",
          }}
        />
      </div>
      <div className="small-image">
       
       {Product?.images.map((image,index)=>(
         <img
         onClick={()=>setIndex(index)}
         key={index}
         src={image}
         alt="details"
         style={{
           objectFit: "cover",
         }}
       />
       ))}
      </div>
    </div>
  );
}
