import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { RiAdvertisementFill } from 'react-icons/ri'; 
import axios from 'axios';

const SingleAdd = () => {
  const { advertId } = useParams(); 
  const [advert, setAdvert] = useState(null);
  const navigate = useNavigate();

  // Fetch advert details (using a placeholder URL for now)
  useEffect(() => {
    axios.get(`/api/adverts/${advertId}`)
      .then((response) => setAdvert(response.data))
      .catch((error) => console.error('Error fetching advert:', error));
  }, [advertId]);

  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this advert?')) {
      axios.delete(`/api/adverts/${advertId}`)
        .then(() => {
          alert('Advert deleted successfully!');
          navigate('/dashboard/adverts'); 
        })
        .catch((error) => console.error('Error deleting advert:', error));
    }
  };

  if (!advert) {
    return <p>Loading advert details...</p>;
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-[50%] bg-white p-8 rounded-lg shadow-lg'>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold text-gray-800'>
            <RiAdvertisementFill className='inline-block mr-2' />
            {advert.title}
          </h1>
          <div className='flex items-center gap-x-4'>
            <Link to="/dashboard/adverts/edit/:advertId" className='flex items-center text-blue-500 hover:underline'>
              <FiEdit size={20} className='mr-1' /> Edit
            </Link>
            <button onClick={handleDelete} className='flex items-center text-red-500 hover:underline'>
              <FiTrash2 size={20} className='mr-1' /> Delete
            </button>
          </div>
        </div>

        <div className='mb-4'>
          <p className='text-lg text-gray-600'><strong>Description:</strong> {advert.description}</p>
        </div>

        <div className='mb-4'>
          <p className='text-lg text-gray-600'><strong>Category:</strong> {advert.category}</p>
        </div>

        <div className='mb-4'>
          <p className='text-lg text-gray-600'><strong>Date Posted:</strong> {new Date(advert.datePosted).toLocaleDateString()}</p>
        </div>

        <div className='mb-4'>
          <p className='text-lg text-gray-600'><strong>Price:</strong> ${advert.price}</p>
        </div>

        <div className='mt-6'>
          <Link to='/dashboard/adverts' className='text-blue-500 hover:underline'>Back to Adverts</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAdd;
