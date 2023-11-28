import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='text-red-800'>
        <Header />
      <div className='absolute'>
      <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt='logo'
      />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 bg-opacity-80 text-white mx-auto right-0 left-0 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ?  'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
        <input 
          type='text' 
          placeholder='Full Name'
          className='p-2 my-2 w-full rounded-sm bg-gray-500'
        />)}
        <input 
          type='text' 
          placeholder='Email Address'
          className='p-2 my-2 w-full rounded-sm bg-gray-500'
        />
        <input 
          type='text' 
          placeholder='Password'
          className='p-2 my-2 w-full rounded-sm bg-gray-500'
        />
        
        <button className='cursor-pointer p-4 my-2 w-full bg-[#e50914] font-bold rounded-lg'>
        {isSignInForm ?  'Sign In' : 'Sign Up'}
          </button>
          
        <p className='py-2' onClick={toggleSignInForm}>
          {isSignInForm 
            ? 'New to Netflix? SignUp Now' 
            : 'Already user.! SignIn Now'}
        </p>
      </form>
    </div>
  )
}

export default Login