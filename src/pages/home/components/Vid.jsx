import React from 'react';
// import image from '../components/images/wedlist2.jpg'
// import image1 from '../components/images/hero-7.png'
// import image2 from '../components/images/best.png'
import image from "../../../assets/images/wedlist2.jpg"
import image1 from "../../../assets/images/hero-7.png"
import image2 from "../../../assets/images/best.png"
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Vid = () => {
    return (
      <div>
        {/* <Navbar /> */}
          <section className="video-section">
            <h2 className="video-title">Our Best Featured Wedding</h2>
            <div className="video-container">
                <video controls autoPlay loop muted width="100%" height="480">
                    <source src="video/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className=" flex rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow gap-10 justify-center mt-10">
                <div>
                <img className="w-full h-48 object-cover" src={image} alt="image" />
                <h1 className="text-xl font-bold text-[#392d48] text-center mt-5">Mike&Nkums@23</h1>
                </div>
                <div>
                <img className="w-full h-48 object-cover" src={image1} alt="image" />
                <h1 className="text-xl font-bold text-[#ff4061] text-center mt-5">Godwin&Rose@22</h1>
                </div>
                <div>
                <img className="w-full h-48 object-cover" src={image2} alt="image" />
                <h1 className="text-xl font-bold text-[#392d48] text-center mt-5">Tekor&Henry@22</h1>
                </div>
               
            </div>
        </section>
        {/* <Footer /> */}
      </div>
    );
};

export default Vid;
