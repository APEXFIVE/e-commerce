import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios'; // Import Axios

const Login = () => {
  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      
      const response = await axios.post('YOUR_API_URL_HERE', {
        username,
        password,
      });

      console.log('Response:', response.data); 
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); 
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center loginpage'>
      <div className='w-[32%] h-auto py-10 px-12 rounded-xl logincard'>
        <div className='w-full h-auto'>
          <h1 className='text-[1.475rem] text-white font-semibold mb-1'>Sign In</h1>
          <p className='text-sm text-gray-400 font-normal mb-8'>Welcome back You've been missed!</p>
        </div>
        <div className='w-full h-auto flex items-center gap-7'>
          <div className='w-1/2 h-auto flex gap-4'>
            <button className='w-[200px] h-12 p-4 outline-none bg-transparent border-[2px] border-b-gray-200/40 justify-center text-white rounded-md flex items-center gap-x-2 hover:bg-gray-100/40 ease-out duration-700 text-2xl '>
              <FcGoogle size={30} /> Google
            </button>

            <button className='w-[250px] h-12 p-4 outline-none bg-transparent border-[2px] border-b-gray-200/40 justify-center text-white rounded-md flex items-center gap-x-2 hover:bg-gray-100/40 ease-out duration-700 text-2xl '>
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
            <label htmlFor="firstname" className='flex text-white mb-1'><FaRegUser />First Name</label>
            <input
              type="text"
              id='firstname'
              value={firstname} 
              onChange={(e) => setFirstname(e.target.value)} 
              className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-white rounded-md'
              placeholder='Enter your First Name'
              required
            />
            <label htmlFor="lastname" className='flex text-white mb-1 mt-3'><FaRegUser />Last Name</label>
            <input
              type="text"
              id='lastname'
              value={lastname} 
              onChange={(e) => setLastname(e.target.value)} 
              className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-white rounded-md'
              placeholder='Enter your Last name'
              required
            />

            <label htmlFor="password" className='flex text-white mb-1 mt-3 '><RiLockPasswordLine />Password</label>
            <input
              type="password"
              id='password'
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-white rounded-md'
              placeholder='Enter your password'
              required
            />
          </div>

          <div className='w-full h-auto flex items-center justify-between mb-5'>
            <div className='flex items-center gap-x-2'>
              <input
                type="checkbox"
                id='remember'
                className='w-4 h-4 accent-gray-200/20 border-gray-200 rounded-md text-white '
              />
              <label htmlFor="remember" className='text-[0.875rem] text-white'>Remember me </label>
            </div>
            <div className='w-auto h-auto '>
              <Link className='text-white text-sm font-medium hover:underline ease-out duration-500'>Forgot Password?</Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className='w-full h-auto flex items-center justify-center gap-x-1'>
          <p className='text-black text-sm font-medium'>Don't have an account?</p>
          <Link className='text-white text-sm font-medium hover:underline ease-out duration-500'>Create new Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
