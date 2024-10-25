import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook, FaRegUser, FaLock, FaTag } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { SiGooglemybusiness } from "react-icons/si";
import { apiSignup } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Link } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa6';
const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(event.target);
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const businessName = formData.get("businessName");
      const category = formData.get("category");
      const product = formData.get('product');
      const contactNumber = formData.get("contactNumber");
      const password = formData.get("password");

      const payload = { firstName, lastName, email, password, businessName, product, category, contactNumber, role: 'vendor' };

      const response = await apiSignup(payload);

      // Success SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: 'You have successfully created an account.',
        confirmButtonText: 'OK',
      });
      navigate("/log");
    } catch (error) {
      // Error SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response?.data?.message || 'Something went wrong!',
        confirmButtonText: 'Try Again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-[50%] bg-white shadow-lg rounded-lg p-10'>
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-semibold text-gray-800'>Sign Up</h1>
          <p className='text-gray-500'>Don't have an Account? Create one!</p>
        </div>

        <div className='flex justify-center gap-6 mb-8'>
          <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition'>
            <FcGoogle size={24} /> Google
          </button>
          <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition'>
            <FaSquareFacebook size={24} className='text-blue-700' /> Facebook
          </button>
        </div>

        <div className='flex items-center justify-between mb-6'>
          <span className='w-1/3 h-[1px] bg-gray-300'></span>
          <span className='text-gray-500'>OR</span>
          <span className='w-1/3 h-[1px] bg-gray-300'></span>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 mb-5"> {/* Grid with two columns */}
  <div>
    <label htmlFor="firstName" className="flex items-center text-black mb-1"><FaRegUser />First Name</label>
    <input 
      type="text"
      id="firstName"
      name="firstName"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your First Name"
      required
    />
  </div>
  
  <div>
    <label htmlFor="lastName" className="flex items-center text-black mb-1"><FaRegUser />Last Name</label>
    <input 
      type="text"
      id="lastName"
      name="lastName"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your Last Name"
      required
    />
  </div>

  <div>
    <label htmlFor="businessName" className="flex items-center text-black mb-1"><SiGooglemybusiness />Business Name</label>
    <input 
      type="text"
      id="businessName"
      name="businessName"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your Business Name"
      required
    />
  </div>

  <div>
    <label htmlFor="product" className="flex items-center text-black mb-1"><FaTag />Product</label>
    <input 
      type="text"
      id="product"
      name="product"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your Product"
      required
    />
  </div>

  <div>
    <label htmlFor="category" className="flex items-center text-black mb-1"><FaTag />Category</label>
    <select
      id="category"
      name="category"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      required
    >
      <option value="">Select a category</option>
      <option value="catering">Catering</option>
      <option value="decoration">Decoration</option>
      <option value="accessories">Accessories</option>
      <option value="closet">Closet</option>
      <option value="invitation">Invitation</option>
      <option value="photography">Photography</option>
    </select>
  </div>

  <div>
    <label htmlFor="contactNumber" className="flex items-center text-black mb-1"><FaCreditCard />Contact Number</label>
    <input 
      type="text"
      id="contactNumber"
      name="contactNumber"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your Contact Number"
      required
    />
  </div>

  <div className="col-span-2"> {/* Make email and password full width */}
    <label htmlFor="email" className="flex items-center text-black mb-1"><MdAttachEmail />Email</label>
    <input 
      type="email"
      id="email"
      name="email"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="col-span-2">
    <label htmlFor="password" className="flex items-center text-black mb-1"><FaLock />Password</label>
    <input 
      type="password"
      id="password"
      name="password"
      className="w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-black rounded-md"
      placeholder="Enter your password"
      required
    />
  </div>
</div>


          <div className='mt-6'>
            <button type="submit" className='w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition font-semibold'>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className='text-center mt-4'>
          <p className='text-gray-700'>Already have an account? <Link to="/log" className='text-pink-600 hover:underline'>Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
