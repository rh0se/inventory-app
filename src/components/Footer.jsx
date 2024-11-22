import React from 'react'
import googlePlay from "../assets/images/googlePlay.png"
import phones from "../assets/images/phones.png"

const Footer = () => {
  return (
    <div>
      <footer className="text-navfont bg-white overflow-hidden relative">
        <div className='flex bg-navBg px-7 md:px-[121px] h-[350px] mt-[120px]'>
          <div className='flex-col flex gap-3 justify-center'>
            <h1 className='font-semibold text-4xl '>Order Food</h1>
            <p className='leading-6 w-[277px]'>Make ordering your food easier with our mobile app. You can get it on the google play store.</p>
            <button>
              <img src={googlePlay}/>
            </button>
          </div>
          <div className='w-[466px] h-[588px] absolute -bottom-44 right-32 hidden  lg:block'>
              <img src={phones}/>
          </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer
