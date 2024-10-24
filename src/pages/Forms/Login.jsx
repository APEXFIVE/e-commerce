import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'; 
import { MdAttachEmail } from "react-icons/md";
import { FaLock } from 'react-icons/fa6';
import { apiLogin } from '../../services/auth';
import axios from 'axios'; // Import Axios

const Login = () => {
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({email, password});
      
      if(response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        navigate('/dashboard'); 
      }
    } catch (error) {
      console.error("Login failed:", error);
    
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center loginpage'>
      <div className='w-[32%] h-auto py-10 px-12 rounded-xl logincard'>
        <div className='w-full h-auto'>
          <h1 className='text-[1.475rem] text-black font-semibold mb-1'>Sign In</h1>
          <p className='text-sm text-gray-400 font-normal mb-8'>Welcome back You've been missed!</p>
        </div>
        <div className='w-full h-auto flex items-center gap-7'>
          <div className='w-1/2 h-auto flex gap-4'>
            <button className='w-[200px] h-12 p-4 outline-none bg-transparent border-[2px] border-b-gray-200/40 justify-center text-black rounded-md flex items-center gap-x-2 hover:bg-gray-100/40 ease-out duration-700 text-2xl '>
              <FcGoogle size={30} /> Google
            </button>

            <button className='w-[250px] h-12 p-4 outline-none bg-transparent border-[2px] border-b-gray-200/40 justify-center text-black rounded-md flex items-center gap-x-2 hover:bg-gray-100/40 ease-out duration-700 text-2xl '>
              <FaSquareFacebook size={30} className=' text-blue-700' /> Facebook
            </button>
          </div>
        </div>

        <div className='w-full h-auto flex  items-center gap-x-1 my-5'>
          <span className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md'> </span>
          <span className='text-sm text-gray-300 font-normal px-2 '>OR</span>
          <span className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md'></span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='w-full h-auto mb-5'>
            <div>
              <label htmlFor="email" className='flex items-center text-black mb-1 mt-3'><MdAttachEmail />Email</label>
              <input 
                type="email"
                name='email'
                id='email'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md'
                placeholder='Enter your email'
                required 
              />
            </div>

            <div>
              <label htmlFor="password" className='flex text-center text-black mb-1 mt-3 '> <FaLock /><span>Password</span></label>
              <input 
                type="password"
                name='password'
                id='password'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md'
                placeholder='Enter your password'
                required 
              />
            </div>
          </div>

          <div className='w-full h-auto flex items-center justify-between mb-5'>
            <div className='flex items-center gap-x-2'>
              <input
                type="checkbox"
                id='remember'
                className='w-4 h-4 accent-gray-200/20 border-gray-200 rounded-md text-white '
              />
              <label htmlFor="remember" className='text-[0.875rem] text-black'>Remember me </label>
            </div>
            <div className='w-auto h-auto '>
              <Link className='text-black text-sm font-medium hover:underline ease-out duration-500'>Forgot Password?</Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-black py-2 px-4 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className='w-full h-auto flex items-center justify-center gap-x-1'>
          <p className='text-black text-sm font-medium'>Don't have an account?</p>
          <Link to={"/reg"} className='text-black text-sm font-medium hover:underline ease-out duration-500'>Create new Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
