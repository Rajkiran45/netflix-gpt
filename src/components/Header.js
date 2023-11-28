import React from 'react'
import LogoImage from '../assets/MainLogo/Netflix_Logo_PMS.png'

function Header() {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
       <img  
          className='w-44'
          src={LogoImage} 
          alt='logo'
        />
    </div>
  )
}

export default Header