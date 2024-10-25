import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, LayoutList } from 'lucide-react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

function Display() {
  const [adverts, setAdverts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchAdverts = async () => {
    try {
      setError(null);
      const { data } = await api.get('/adverts', {
      });
      setAdverts(data);
      setFilteredResults(data);
    } catch (err) {
      console.error('Error fetching adverts:', err);
      setError(
        err.response?.data?.message || 'Failed to load adverts. Please try again later.'
      );
    }
  };


  useEffect(() => {
    fetchAdverts();
  }, []);


  const handleSearch = () => {
    setHasSearched(true);
    const results = adverts.filter((advert) => {
      const matchesSearch =
        searchTerm === '' ||
        advert.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advert.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === '' || advert.category?.toLowerCase() === category.toLowerCase();

      const matchesPrice =
        !priceRange || advert.price <= Number(priceRange);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredResults(results);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setCategory('');
    setPriceRange('');
    setFilteredResults(adverts);
    setHasSearched(false);
  };

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredResults.map((advert) => (
        <Link
          key={advert.id}
          to={`/detail/${advert.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={`https://savefiles.org/${advert.image}?shareable_link=447`}
            alt={advert.title}
            className="w-full h-[100] object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#ff4061]">{advert.title}</h2>
            <p className="text-[#392d48] font-semibold mt-2">
              ${typeof advert.price === 'number' ? advert.price.toLocaleString() : advert.price}
            </p>
            <p className="text-sm text-gray-500 mt-1">{advert.category}</p>
            <p className="text-gray-600 mt-2 line-clamp-2">{advert.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredResults.map((advert) => (
        <Link
          key={advert.id}
          to={`/detail/${advert.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="flex mt-5">
            <img
              src={`https://savefiles.org/${advert.image}?shareable_link=447`}
              alt={advert.title}
              className="w-48 h-48 object-cover bg-white rounded-lg shadow-md"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-[#ff4061]">{advert.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{advert.category}</p>
                </div>
                <p className="text-[#392d48] font-semibold">
                  ${typeof advert.price === 'number' ? advert.price.toLocaleString() : advert.price}
                </p>
              </div>
              <p className="text-gray-600 mt-4">{advert.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <p className="text-xl font-semibold text-gray-600 mb-2">
        {hasSearched ? 'No matches found' : 'No adverts available'}
      </p>
      {hasSearched && (
        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
          <button
            onClick={resetSearch}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Adverts</h2>

          <input
            type="text"
            placeholder="Search adverts..."
            className="w-full p-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full p-2 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Catering">Catering</option>
            <option value="Decoration">Decoration</option>
            <option value="Accessories">Accessories</option>
            <option value="Closet">Closet</option>
            <option value="Invitation">Invitation</option>
            <option value="Photography">Photography</option>
          </select>

          <input
            type="number"
            placeholder="Max Price"
            className="w-full p-2 border rounded-lg"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />

          <div className="flex justify-between">
            <button
              onClick={handleSearch}
              className="w-full p-2 bg-[#ff4061] text-white hover:bg-[#392d48] focus:outline-none rounded-lg"
            >
              Search
            </button>

            {(searchTerm || category || priceRange) && (
              <button
                onClick={resetSearch}
                className="ml-2 p-2 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none rounded-lg"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Adverts Display</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#392d48] text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-[#ff4061] text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>

          {error ? (
            <EmptyState />
          ) : filteredResults.length === 0 ? (
            <EmptyState />
          ) : viewMode === 'grid' ? (
            <GridView />
          ) : (
            <ListView />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Display;
