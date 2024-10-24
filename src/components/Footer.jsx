import foot from "../assets/images/footer2.jpg"
import image from "../assets/images/footer1.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#392d48] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">About WeddVault</h3>
            <p>WeddVault is a premier wedding market place where vendors showcase their services and couples find inspiration for their special day.</p>
            <p className="mt-2">
              Explore, connect, and plan your dream wedding with us!
            </p>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4">
              Find A Vendor
            </button>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Latest News</h3>
            <div className="flex mb-4">
              <img src={image} alt="News" className="w-20 h-20 object-cover mr-4" />
              <div>
                <p className="text-sm">New Arrivals! Explore our latest wedding vendor listings and find your dream team.</p>
                <span className="text-gray-400 text-xs">March 22, 2017</span>
              </div>
            </div>
            <div className="flex">
              <img src={foot} alt="News" className="w-20 h-20 object-cover mr-4" />
              <div>
                <p className="text-sm">Meet your the WeddVault's Vendor of the month.</p>
                <span className="text-gray-400 text-xs">March 21, 2017</span>
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Subscribe Newsletter</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full">
              Subscribe Now
            </button>
            <div className="flex space-x-4 mt-4">
            
             <Link> <FaFacebookF  className="bg-blue-700 text-5xl"/></Link>
             <Link><FaXTwitter className="bg-black text-5xl"/></Link> 
             <Link><FaPinterest className="bg-red-600 text-5xl" /></Link> 
             
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">© 2017 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
