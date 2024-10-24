import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiEditproduct, apiGetSingleProduct } from '../../services/product';

const EditAdvert = () => {

  const params = useParams();
  const [advert, setAdvert] = useState({});
  const [image, setImage] = useState({})
  const navigate = useNavigate();
  const advertId = params.id;

  console.log("Adverts ID from params:", advertId);


  const fetchAdvert = async () => {
    if (!advertId) {
      console.error("Adverts ID is undefined");
      return;
    }

    try {
      const response = await apiGetSingleProduct(advertId);
      setAdvert(response.data);
      // toast.success
      // navigate("/dashboard/adverts");
    } catch (error) {
      console.error("Error fetching advert:", error.message);
    }
  };

  useEffect(() => {
    fetchAdvert();
  }, []);


  const editAdvert = async () => {
    if (!advertId) {
      console.error("Adverts ID is undefined");
      return;
    }

    try {
      const response = await apiEditproduct(advertId);
      setAdvert(response.data);
      toast.success
      navigate("/dashboard/adverts");
    } catch (error) {
      console.error("Error fetching advert:", error.message);
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

        <form onSubmit={editAdvert}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Advert Title</label>
            <input
              type="text"
              id="title"
              defaultValue={advert.title}
              placeholder="Enter advert title"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              defaultValue={advert.description}
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
              defaultValue={advert.price}
              placeholder="Enter price"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              defaultValue={advert.category}
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
