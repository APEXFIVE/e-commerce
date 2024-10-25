import React from 'react'
// import image from "../../assets/images copy/catering.jpg"
// import image1 from '../../assets/images copy/invite.jpg'
// import image2 from '../../assets/images copy/decor.jpg'
// import image3 from '../../images copy/access.jpg'
// import image4 from '../../images copy/closet.jpg'
// import image5 from '../../images copy/wedlist2.jpg'
import image from "../../assets/images/catering.jpg"
import image1 from "../../assets/images/invite.jpg"
import image2 from "../../assets/images/decor.jpg"
import image3 from "../../assets/images/access.jpg"
import image4 from "../../assets/images/closet.jpg"
import image5 from "../../assets/images/wedlist2.jpg"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'



const List = () => {


    return (
        <div>
            {/* <Navbar /> */}
            <div className='text-center pt-10'>
            <h1 className="text-3xl font-bold text-[#392d48] pb-3">Start Planning Your Wedding Step By Step</h1>
            <p>Let us handle your wedding from start to finish. Stress no more</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Catering Services</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">For all your food and drinks</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image1} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Invitation</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">Get in touch with our experts for your well designed invitation cards</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image2} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Decoration</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">For all your colorful decorations</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image3} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Accessories</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">For all your jewelries</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image4} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Closet</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">Elegant wedding outfits for bothe men and women</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={image5} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Photography</h1>
                <p className="text-[#392d48] font-semibold mt-2 text-center">Quality pictures and videos for a memorable day</p>
                <button className="w-36 ml-32 bg-[#392d48] text-white hover:bg-[#ff4061] focus:outline-none rounded-lg shadow-md mt-5 mb-5">View Details</button>
            </div>

           </div>
           {/* <Footer /> */}
        </div>
    )
};

export default List;