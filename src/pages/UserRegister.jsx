import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { apiSignup } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import image from "../assets/images/form.jpg"
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the page from reloading
    try {
      //prepare data to be sent to backend
      setLoading(true)
      const formData = new FormData(e.target) //take date from the form
      const firstName = formData.get("firstName")
      const lastName = formData.get("lastName")
      const email = formData.get("email")
      const password = formData.get("password")
      console.log("firstName", firstName)

      const payload = { firstName: firstName, lastName: lastName, email: email, password: password }
      const response = await apiSignup(payload);
      console.log(response.data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#392d48] py-8">
       <img className="w-80 h-80 rounded-lg shadow-lg p-8>" src={image} alt="image" />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 -ml-5">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#ff4061]">Create an Account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill in your details to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

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
                placeholder="Create a strong password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={8}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
              </button>
            </div>
          </div>



          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-[#392d48] hover:text-blue-500">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#392d48] hover:text-blue-500">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#392d48] hover:bg-[#ff4061] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Already have an account?</span>{' '}
          <a href="#" className="font-medium text-[#392d48] hover:text-[#ff4061]">
          <Link to= '/login'>Sign in</Link> 
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
