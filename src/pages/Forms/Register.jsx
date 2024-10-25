import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { FaCreditCard } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa6';
import { apiSignup } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();    //prevent the page from reloading
    try {
      // prepare data to be sent to backend
      setLoading(true)
      const formData = new FormData(event.target) //takes data from the form
      const firstName = formData.get("firstName")
      const lastName = formData.get("lastName")
      const email = formData.get("email")
      const businessName = formData.get("businessName")
      const category = formData.get("category")
      const product = formData.get('product')
      const contactNumber = formData.get("contactNumber")
      const subscription = formData.get("subscription")
      const password = formData.get("password")
      console.log("firstName", firstName)
      //  check if passwords mactch
      // if (password1 !==password2){
      // return 
      // }
      const payload = { firstName: firstName, lastName: lastName, email: email, password: password, businessName, product, category, contactNumber, role: 'vendor' }
      console.log(payload)
      const response = await apiSignup(payload);
      console.log(response.data)
      navigate("/log")
    } catch (error) {
      console.log(error)

    } finally {
      setLoading(false)

    }
  };
  return (
    <div className='w-full min-h-screen flex items-center justify-center loginpage'>
      <div className='w-[50%] h-auto py-10 px-12 rounded-xl logincard'>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
          <h1 className='text-[1.475rem] text-black font-semibold mb-1'>Sign Up</h1>
          <p className='text-sm text-gray-400 font-normal mb-8'>Don't have an Account? Create one!</p>
        </div>

        <div className='w-full h-auto flex items-center gap-7 '>
          <div className='w-1/2 h-auto flex gap-4 mx-auto'>
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
          <div className='w-full h-auto mb-5 	parent'>

            <div>
              <label htmlFor="firstname" className='flex text-center text-black mb-1'><FaRegUser />First Name</label>
              <input type="text"
                id='firstName'
                name='firstName'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black 
           rounded-md'
                placeholder='Enter your First Name'
                required />
            </div>

            <div>
              <label htmlFor="lastname" className='flex text-center text-black mb-1'><FaRegUser />Last Name</label>
              <input type="text"
                id='lastName'
                name='lastName'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black 
           rounded-md'
                placeholder='Enter your Last Name'
                required />
            </div>
            <div>
              <label htmlFor="lastname" className='flex text-center text-black mb-1'><FaRegUser />Business Name</label>
              <input type="text"
                id='businessName'
                name='businessName'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black 
           rounded-md'
                placeholder='Your Business Name'
                required />
            </div>
            <div>
              <label htmlFor="lastname" className='flex text-center text-black mb-1'><FaRegUser />Product</label>
              <input type="text"
                id='product'
                name='product'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black 
           rounded-md'
                placeholder='Product Name'
                required />
            </div>
            <div className="form-group">

              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                // defaultValue={advert.category}
                required
                className="form-input"
                name='category'
              >
                <option value="">Select a category</option>
                <option value="catering">Catering</option>
                <option value="decoration">Decoration</option>
                <option value="accessories">Accessories</option>
                <option value="closet">Closet</option>
                <option value="invitation">Invitation</option>
                <option value="photography">Photography</option>
              </select>
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                // defaultValue={advert.category}
                required
                className="form-input"
              >
                <option value="">Select a Role</option>
                <option value="vendor">Vendor</option>
              </select>

            </div>
            <div>
              <label htmlFor="lastname" className='flex text-center text-black mb-1'><FaRegUser />Contact Number</label>
              <input type="text"
                id='contactNumber'
                name='contactNumber'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black 
           rounded-md'
                placeholder='Your Contact'
                required />
            </div>

            <div>
              <label htmlFor="email" className='flex items-center text-black mb-1 mt-3'><MdAttachEmail />Email</label>
              <input type="email"
                name='email'
                id='email'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black
           rounded-md'
                placeholder='Enter your email'
                required />
            </div>



            <div>
              <label htmlFor="username" className='flex text-center text-black mb-1 mt-3 '> <FaLock /><span>Password</span></label>
              <input type="password"
                name='password'
                id='password'
                className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-gray-200/40 text-black
           rounded-md'
                placeholder='Enter your password'
                required />
            </div>
          </div>

          <div>
            <button
              type="Submit"

              className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600 font-bold text-xl"
            >{loading ? "Loading..." : "Sign Up"}


            </button>
          </div>
        </form>

        {/* {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>} */}

        <div className='w-full h-auto flex items-center justify-center gap-x-1'>
          <p className='text-black text-sm font-medium'>Already have an account?</p>
          <Link to={"/log"} className='text-black text-sm font-medium hover:underline ease-out duration-500'>Sign In</Link>
        </div>

      </div>
    </div>

  )
}

export default Register;