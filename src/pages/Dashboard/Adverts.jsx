import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);

  const getAdverts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts?limit=0`);
      setAdverts(response.data);
    } catch (error) {
      console.error("Error fetching adverts:", error);
    }
  };

  useEffect(() => {
    getAdverts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">All Adverts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {adverts.map((advert) => (
          <div key={advert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link to={`/dashboard/adverts/${advert.id}`}>
              <img src={`https://savefiles.org/${advert.image}?shareable_link=447`} alt="title" />
            </Link>
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2 text-gray-800">{advert.title}</h2>
              <p className="text-gray-600 text-[20px] mb-2 truncate">{advert.description}</p>
              <p className="text-gray-500 text-xl">
                {advert?.category?.name || advert?.category || "No category"}
              </p>
              <p className="text-gray-900 text-lg font-bold mt-2">${advert.price}</p>
              <Link
                to={`/dashboard/adverts/${advert.id}`}
                className="inline-block mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/dashboard/adverts/add"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
        >
          Add New Advert
        </Link>
      </div>
    </div>
  );
};

export default Adverts;
