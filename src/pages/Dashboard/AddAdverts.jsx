import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAdverts = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(""); // State for category
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure category is selected
    if (!category) {
      alert("Please select a category.");
      return;
    }

    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('price', e.target.price.value);
    formData.append('category', category); // Use category from state
    formData.append('image', image); // Attach image

    // Debug: Log FormData to check category and other values
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const token = localStorage.getItem('token');

    if (!token) {
      console.error("No token found, redirecting to login");
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/adverts`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Advert created:", response.data);
      navigate("/dashboard/adverts");

    } catch (error) {
      console.error("Error creating advert:", error);
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized. Redirecting to login.");
        navigate('/login');
      }
    }
  };

  // Handle image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category state
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-header">Create Advert</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Advert Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter advert title"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
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
              placeholder="Enter price"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              required
              className="form-input"
              value={category} // Bind state to value
              onChange={handleCategoryChange} // Handle category change
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
            <label htmlFor="image" className="form-label">Upload Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="form-button">
            Add Advert
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdverts;
