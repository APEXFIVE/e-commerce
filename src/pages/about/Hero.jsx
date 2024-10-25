import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [adverts, setAdverts] = useState([]);
  const navigate = useNavigate();

  // Fetch adverts from API
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

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter adverts by title, category, and price
    const results = adverts.filter((advert) => {
      const matchesTitle = title ? advert.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesCategory = category ? advert.category === category : true;
      const matchesPrice = price ? advert.price <= parseFloat(price) : true;
      return matchesTitle && matchesCategory && matchesPrice;
    });

    navigate("/display", {
      state: { filteredAdverts: results },
    });
  };

  return (
    <div className="hero">
      <div className="overlay">
        <div className="text-center text-2xl font-bold pt-80 font-serif">
          <h1 className="text-4xl">Find Your Perfect Wedding Vendor</h1>
          <p>Over 1500+ Wedding Vendors for Your Special Date & Find The Perfect Venue & Save Your Date</p>
        </div>

        <div className="form-overlay">
          <form onSubmit={handleSearch} className="grid gap-4 grid-cols-1 md:grid-cols-4 items-center mt-6 m-20">
            <input 
              type="text"
              placeholder="Enter Keyword (item)" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-[#f8f8f8] bg-[#f8f8f8] text-gray-600"
            />

            <select 
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-[#f8f8f8] bg-[#f8f8f8] text-gray-600"
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="catering">Catering</option>
              <option value="decoration">Decoration</option>
              <option value="accessories">Accessories</option>
              <option value="closet">Closet</option>
              <option value="invitation">Invitation</option>
              <option value="photography">Photography</option>
            </select>

            <input 
              type="number"
              placeholder="Max Price" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-[#392d48] bg-[#f8f8f8] text-gray-600"
            />

            <button type="submit" className="w-full p-2 bg-[#ff4061] text-white hover:bg-[#392d48] focus:outline-none">Find Vendor</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
