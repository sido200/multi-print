'use client'
import React, { useState } from 'react'
import { FiFilter } from "react-icons/fi";
import './Filter.css'
import { IoClose } from 'react-icons/io5';
import { FaBottleWater } from "react-icons/fa6";
export default function Filter() {
  const [filter, setFilter] = useState(false)

  return (
  <>
    <div className="filter">
    <FiFilter onClick={()=>setFilter(!filter)}/>
          </div>
          <div className={filter?"filter-side open-side":'filter-side'}>

            <ul className='items-filter'>
            <li><FaBottleWater/>Categeory</li>
            <li><FaBottleWater/>Categeory</li>
            <li><FaBottleWater/>Categeory</li>
            <li><FaBottleWater/>Categeory</li>
           
          
            </ul>
          <div className="close">
          <IoClose
            size={23}
            onClick={() => {
              setFilter(false);
            }}
          />
        </div>
          </div>
          </>
  )
}
