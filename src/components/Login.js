import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/redux/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            updateProfile(user,{
              displayName:name.current.value,
              photoURL:"https://avatars.githubusercontent.com/u/61178521?v=4",
            })
            .then(()=>{
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL
                })
                );
            })
            navigate("/browse");
            })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // setErrorMessage(errorCode +"-"+errorMessage)
            setErrorMessage(error.message);
             });
            } 
      else {
        // SignIn Logic
        signInWithEmailAndPassword(
          auth, 
          email.current.value,
          password.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
              })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)
            });
      }
          };
  return (
    <div className='text-red-800'>
        <Header />
      <div className='absolute'>
      <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt='logo'
      />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 bg-opacity-80 text-white mx-auto right-0 left-0 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ?  'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
        <input 
          type='text' 
          ref={name}
          placeholder='Full Name'
          className='p-2 my-2 w-full rounded-sm bg-[#333]'
        />)}
        <input 
          type='text' 
          ref={email}
          placeholder='Email Address'
          className='p-2 my-2 w-full rounded-sm bg-[#333]'
        />
        <input 
          type='password' 
          ref={password}
          placeholder='Password'
          className='p-2 my-2 w-full rounded-sm bg-[#333]'
        />
        <p className='text-red-500'>{errorMessage}</p>
        <button 
          className='cursor-pointer p-4 my-2 w-full bg-[#e50914] font-bold rounded-lg'
          onClick={handleButtonClick}
          >
        {isSignInForm ?  'Sign In' : 'Sign Up'}
          </button>
          
        <p className='py-2 text-gray-400'>
          {isSignInForm
            ? 'New to Netflix? '
            : 'Already a user! '}
          <span className='text-white font-bold hover:underline' onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign Up Now' : 'Sign In Now'}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login