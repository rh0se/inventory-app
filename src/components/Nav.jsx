import React from 'react'
import Logo from "../assets/images/Logo.png";
import search from "../assets/images/search.png";
import avatar from "../assets/images/avatar.png";
import arrow from "../assets/images/arrow.png";
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <nav className='flex justify-between text-navfont font-sans lg:px-[121px] lg:py-[54px] p-7'>
        <div className='md:w-[123px] md:h-[30px] w-[100px]'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='flex items-center gap-[8px] md:w-[187px] w-[150px]'>
          <Link to="/admin">
          <img src={avatar} alt='avatar'/>
            
            <p></p>
            <img src={arrow} alt='arrow'/>
          </Link>
            
        </div>
    </nav>
    </>
  )
}

export default Nav
