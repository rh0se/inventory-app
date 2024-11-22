import React from 'react'
import { FaSearch } from "react-icons/fa";
import searchIcon from "../assets/images/searchIcon.png";
import Rectangletop from "../assets/images/Rectangletop.png"
import Rectangledown from "../assets/images/Rectangledown.png"

const Hero = () => {
  return (
    <>
    <div>
      <div className='bg-heroBg font-sans lg:w-[1200px] min-h-[367px] rounded-[50px] m-auto relative'>
        <div className='absolute right-0 -top-0 lg:block hidden'>
            <img src={Rectangletop} className='rounded-tr-[50px]' alt="" />
        </div>
        <div>
        <h1 className='text-white pt-14 md:pt-[87px] text-[40px] md:text-[48px] font-semibold text-center lg:w-[511px] m-auto leading-1 md:leading-[60px]'>Explore all the Food from our Cafeteria</h1>
        <div className="flex items-center bg-white text-[#576378] rounded-full px-[20px] py-[10px] max-w-[511px] md:mx-auto mt-[24px]">
      <img src={searchIcon} className="ml-1" /> {/* Search Icon */}
      <input
        type="text"
        placeholder="Search anything here..."
        className="ml-2 bg-white text-[#576378] placeholder-[#576378] focus:outline-none w-full"
      />
      </div>
      <div className='absolute w-[205px] left-0 -bottom-0 lg:block object-contain hidden rounded-[50px]'>
            <img src={Rectangledown} className="rounded-bl-[50px]" alt="" />
        </div>
    </div>
      </div>

      </div>
    </>
  )
}

export default Hero
