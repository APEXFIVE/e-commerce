import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, LayoutGrid, LayoutList } from 'lucide-react';

function Display() {
  const [adverts, setAdverts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    // Fetch adverts from your API
    // For now, we'll use dummy data
    setAdverts([
      { 
        id: 1, 
        title: 'Sample Advert 1', 
        price: 100, 
        category: 'Electronics',
        description: 'This is a sample description for advert 1',
        image: '/api/placeholder/300/200'
      },
      { 
        id: 2, 
        title: 'Sample Advert 2', 
        price: 200, 
        category: 'Furniture',
        description: 'This is a sample description for advert 2',
        image: '/api/placeholder/300/200'
      },
      // Add more dummy data as needed
    ]);
  }, []);

  const filteredAdverts = adverts.filter(advert => 
    advert.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || advert.category === category) &&
    (priceRange.min === '' || advert.price >= Number(priceRange.min)) &&
    (priceRange.max === '' || advert.price <= Number(priceRange.max))
  );

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredAdverts.map(advert => (
        <Link key={advert.id} to={`/advert/${advert.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src={advert.image} 
            alt={advert.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#ff4061]">{advert.title}</h2>
            <p className="text-green-600 font-semibold mt-2">${advert.price}</p>
            <p className="text-sm text-gray-500 mt-1">{advert.category}</p>
            <p className="text-gray-600 mt-2 line-clamp-2">{advert.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredAdverts.map(advert => (
        <Link key={advert.id} to={`/advert/${advert.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex">
            <img 
              src={advert.image} 
              alt={advert.title}
              className="w-48 h-48 object-cover"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{advert.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{advert.category}</p>
                </div>
                <p className="text-green-600 font-semibold">${advert.price}</p>
              </div>
              <p className="text-gray-600 mt-4">{advert.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#392d48]">Adverts</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-600'}`}
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-600'}`}
            aria-label="List view"
          >
            <LayoutList size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <input
          type="text"
          placeholder="Search Item..."
          className="p-2 border rounded-lg flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Catering">Catering</option>
          <option value="Decoration">Decoration</option>
          <option value="Accessories">Accessories</option>
          <option value="Closet">Closet</option>
          <option value="Invitation">Invitation</option>
          <option value="photography">Photography</option>
        </select>
        <input
          type="number"
          placeholder="Price"
          className="p-2 border rounded-lg w-24"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
        />
        {/* <input
          type="number"
          placeholder="Max Price"
          className="p-2 border rounded-lg w-24"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
        /> */}
        <button type="submit" className=" p-2 bg-[#ff4061] text-white hover:bg-[#392d48] focus:outline-none rounded-lg shadow-md ">Find Vendor</button>
      </div>

      {viewMode === 'grid' ? <GridView /> : <ListView />}
    </div>
  );
}

export default Display;