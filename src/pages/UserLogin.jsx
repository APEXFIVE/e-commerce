import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { apiLogin } from '../services/auth';
import image from "../assets/images/form.jpg"
import { Link } from 'react-router-dom';

const UserLogin = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get ("email");
    const password = formData.get ("password");
    // console.log('Email:email', password:password);
    const response = await apiLogin({email, password});
    console.log(response.data);
    if (response.status===200) {
       localStorage.setItem("token", response.data.accessToken)
    }
  };


  return (
      <div className=" user-login min-h-screen flex items-center justify-center bg-[#392d48] ">
        <img className="w-80 h-80 rounded-lg shadow-lg p-8>" src={image} alt="image" />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 -ml-5">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#ff4061]">Login</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email and password to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#392d48]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#392d48]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-[#392d48] hover:text-[#ff4061]">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#392d48] hover:bg-[#ff4061] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Don't have an account?</span>{' '}
          <a href="#" className="font-medium text-[#392d48] hover:text-[#ff4061]">
           <Link to= '/register'>Sign up</Link> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;