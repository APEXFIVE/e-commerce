
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiGetSingleProduct } from "../services/product";

const AdDetail = () => {
  const params = useParams();
  const [adverts, setAdvert] = useState(null);
  const navigate = useNavigate();
  const advertsid = params.id;

  console.log("Adverts ID from params:", advertsid);

  const fetchAdvert = async () => {
    if (!advertsid) {
      console.error("Adverts ID is undefined");
      return;
    }

    try {
      const response = await apiGetSingleProduct(advertsid);
      const fetchedAdvert = response.data;
      setAdvert(fetchedAdvert);
    } catch (error) {
      console.error("Error fetching advert:", error.message);
    }
  };

  const handleDeleteAdvert = async (advertsid) => {
    if (!advertsid) {
      console.error("Adverts ID is undefined");
      return;
    }

    try {
      await apiDeleteproduct(advertsid);
      console.log(`Advert with ID ${advertsid} deleted successfully.`);
      navigate(-1); 
    } catch (error) {
      console.error("Error deleting advert:", error.message);
    }
  };

  useEffect(() => {
    fetchAdvert();
  }, [advertsid]);

  if (!adverts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mt-9">
      {adverts.image && (
        <img
          src={`https://savefiles.org/${adverts.image}?shareable_link=447`}
          alt="title"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{adverts.title}</h2>
      <p className="text-gray-600 mb-4">{adverts.description}</p>
      <p className="text-lg font-semibold text-gray-700">Price: ${adverts.price}</p>
      <p className="text-gray-600 mb-4">Category: {adverts.category}</p>

      <div className="flex space-x-4">
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-300 rounded-md">
          Back to Adverts
        </button>
      </div>
    </div>
  );
};

export default AdDetail;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { 
//   Calendar,
//   MapPin,
//   User,
//   Phone,
//   Mail,
//   Tag,
//   DollarSign,
//   Share2,
//   Heart,
//   MessageCircle
// } from 'lucide-react';

// function AdDetail() {
//   const { id } = useParams();
//   const [advert, setAdvert] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [showContactInfo, setShowContactInfo] = useState(false);

//   useEffect(() => {
//     // Simulate API call to fetch advert details
//     setTimeout(() => {
//       setAdvert({
//         id,
//         title: "2021 MacBook Pro M1",
//         price: 1299.99,
//         description: "Perfect condition MacBook Pro with M1 chip. Includes charger and original box. Battery cycle count under 100. Space Gray color. Features:\n- 8-core CPU\n- 8GB unified memory\n- 256GB SSD\n- 13-inch Retina display\n- Touch Bar and Touch ID\n- Two Thunderbolt / USB 4 ports",
//         category: "Electronics",
//         condition: "Like New",
//         location: "San Francisco, CA",
//         postedDate: "2024-03-15",
//         images: [
//           "/api/placeholder/800/600",
//           "/api/placeholder/800/600",
//           "/api/placeholder/800/600"
//         ],
//         vendor: {
//           name: "John Doe",
//           joinDate: "2023-01-01",
//           rating: 4.8,
//           totalListings: 15,
//           phone: "+1 (555) 123-4567",
//           email: "john.doe@example.com"
//         }
//       });
//       setLoading(false);
//     }, 1000);
//   }, [id]);

//   const [activeImage, setActiveImage] = useState(0);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!advert) {
//     return (
//       <div className="text-center py-12">
//         <h2 className="text-2xl font-bold text-gray-800">Advertisement not found</h2>
//         <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
//           Return to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       {/* Breadcrumb */}
//       <nav className="text-gray-500 text-sm mb-6">
//         <Link to="/" className="hover:text-blue-500">Home</Link>
//         <span className="mx-2">/</span>
//         <Link to={`/category/${advert.category}`} className="hover:text-blue-500">
//           {advert.category}
//         </Link>
//         <span className="mx-2">/</span>
//         <span className="text-gray-700">{advert.title}</span>
//       </nav>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left column - Images */}
//         <div className="lg:col-span-2">
//           <div className="bg-gray-100 rounded-lg overflow-hidden">
//             <img
//               src={advert.images[activeImage]}
//               alt={advert.title}
//               className="w-full h-96 object-contain"
//             />
//           </div>
          
//           {/* Thumbnail images */}
//           <div className="flex gap-2 mt-4">
//             {advert.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveImage(index)}
//                 className={`w-24 h-24 rounded-lg overflow-hidden border-2 
//                   ${activeImage === index ? 'border-blue-500' : 'border-transparent'}`}
//               >
//                 <img
//                   src={image}
//                   alt={`${advert.title} - view ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Description */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
//             <p className="text-gray-600 whitespace-pre-line">{advert.description}</p>
//           </div>
//         </div>

//         {/* Right column - Details and Contact */}
//         <div className="space-y-6">
//           {/* Price and title */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h1 className="text-3xl font-bold text-gray-800">{advert.title}</h1>
//             <div className="flex items-center justify-between mt-4">
//               <span className="text-3xl font-bold text-green-600">
//                 ${advert.price.toLocaleString()}
//               </span>
//               <div className="flex gap-2">
//                 <button 
//                   onClick={() => setIsWishlisted(!isWishlisted)}
//                   className={`p-2 rounded-full ${isWishlisted 
//                     ? 'bg-red-100 text-red-500' 
//                     : 'bg-gray-100 text-gray-500'}`}
//                 >
//                   <Heart className={isWishlisted ? 'fill-current' : ''} size={20} />
//                 </button>
//                 <button className="p-2 rounded-full bg-gray-100 text-gray-500">
//                   <Share2 size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Key details */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold text-[#ff4061] mb-4">Details</h2>
//             <div className="space-y-4">
//               <div className="flex items-center text-gray-600">
//                 <Tag className="w-5 h-5 mr-3" />
//                 <span>Condition: {advert.condition}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <MapPin className="w-5 h-5 mr-3" />
//                 <span>{advert.location}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <Calendar className="w-5 h-5 mr-3" />
//                 <span>Posted: {new Date(advert.postedDate).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>

//           {/* Vendor details */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold text-[#ff4061] mb-4">Seller Information</h2>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//                   <User size={24} className="text-gray-500" />
//                 </div>
//                 <div className="ml-3">
//                   <h3 className="font-semibold text-gray-800">{advert.vendor.name}</h3>
//                   <p className="text-sm text-gray-500">
//                     Member since {new Date(advert.vendor.joinDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <div className="flex items-center">
//                   <span className="text-yellow-400">★</span>
//                   <span className="ml-1">{advert.vendor.rating}</span>
//                 </div>
//                 <span className="mx-2">•</span>
//                 <span>{advert.vendor.totalListings} listings</span>
//               </div>
              
//               {!showContactInfo ? (
//                 <button
//                   onClick={() => setShowContactInfo(true)}
//                   className="w-full bg-[#392d48] text-white py-2 px-4 rounded-lg hover:bg-[#ff4061]
//                     transition-colors flex items-center justify-center gap-2"
//                 >
//                   <MessageCircle size={20} />
//                   Show Contact Info
//                 </button>
//               ) : (
//                 <div className="space-y-3">
//                   <div className="flex items-center text-gray-600">
//                     <Phone className="w-5 h-5 mr-3" />
//                     <span>{advert.vendor.phone}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Mail className="w-5 h-5 mr-3" />
//                     <span>{advert.vendor.email}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdDetail;