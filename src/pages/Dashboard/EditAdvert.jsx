import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditAdvert = () => {
  const { advertId } = useParams(); 
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  // Fetch existing advert details on mount
  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await axios.get(`/api/adverts/${advertId}`);
        const advert = response.data;
        setTitle(advert.title);
        setDescription(advert.description);
        setPrice(advert.price);
        setCategory(advert.category);
      } catch (error) {
        console.error('Error fetching advert details:', error);
      }
    };

    fetchAdvert();
  }, [advertId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`/api/adverts/${advertId}`, formData);
      alert('Advert updated successfully!');
      navigate(`/dashboard/adverts/${advertId}`); 
    } catch (error) {
      console.error('Error updating advert:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-header">Edit Advert</h2>
        <p className="form-subtext">Modify the details of the advertisement.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Advert Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter advert title"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter advert description"
              required
              className="form-input textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="form-input"
            >
              <option value="">Select a category</option>
              <option value="catering">Catering</option>
              <option value="decoration">Decoration</option>
              <option value="accessories">Accessories</option>
              <option value="closet">Closet</option>
              <option value="invitation">Invitation</option>
              <option value="photography">Photography</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">Upload Image (optional)</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="form-button">
            Update Advert
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAdvert;
