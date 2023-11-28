import React from 'react';
import LogoImage from '../assets/MainLogo/Netflix_Logo_PMS.png';
import userLogo from '../assets/user-logo.png';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';



function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
   
   signOut(auth).then(() => {
     navigate("/")
   }).catch((error) => {
     navigate('/error')
   });
   }
  return (
    <div className='absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
       <img  
          className='w-44'
          src={LogoImage} 
          alt='logo'
        />
        {user && ( <div className='flex p-2'>
          <img className='w-20 h-20 p-4' alt="usericon" src={user?.photoURL}/>
          <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>
        )} 
    </div>
  )
}

export default Header