"use client";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";
import "./Filter.css";
import { useLocale } from "next-intl";
import { LuFilterX } from "react-icons/lu";
export default function Filter({ categories, fatchProducts }) {
  const [filter, setFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({});
  const localActive = useLocale();

  return (
    <>
      <div className="filtres">
    
     {selectedCategories.titlefr&&(   <div
          style={{ cursor: "pointer" }}
          className="filter2"
          onClick={() => {fatchProducts(),setSelectedCategories({})}}
        >
          <h3> {selectedCategories[`title${localActive}`]} </h3>
          <LuFilterX size={32}/>
        </div>)}
        <div
          style={{ cursor: "pointer" }}
          className="filter"
          onClick={() => setFilter(!filter)}
        >
          <FiFilter />
        </div>
      </div>
      <div
        className={filter ? "activeoverlay" : ""}
        style={{ display: filter ? "block" : "none" }}
        onClick={(e) => userClickedOutside(e)}
      ></div>
      <div className={filter ? "filter-side open-side" : "filter-side"}>
        <ul className="items-filter">
          {categories.map((categorie, index) => (
            <li
              key={index}
              onClick={() => {
                fatchProducts(categorie._id);
                setSelectedCategories(categorie)
                setFilter(false);
              }}
            >
              <FaBottleWater />
              {categorie[`title${localActive}`]}
            </li>
          ))}
        </ul>
        <div className="close2">
          <IoClose
            size={23}
            onClick={() => {
              setFilter(false);
            }}
          />
        </div>
      </div>
    </>
  );
}
