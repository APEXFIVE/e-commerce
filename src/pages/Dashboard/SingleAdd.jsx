import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { apiGetSingleProduct, apiDeleteproduct } from "../../services/product";
import { FiEdit, FiTrash } from 'react-icons/fi';
import { toast } from "react-toastify";
import { apiGetSingleProduct } from '../../services/product';
import { apiDeleteProduct } from '../../services/product';
const SingleAdvert = () => {
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

    // Show confirmation prompt
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiDeleteProduct(advertsid);
          console.log(`Advert with ID ${advertsid} deleted successfully.`);

          // Show success message
          Swal.fire(
            'Deleted!',
            'Your advert has been deleted.',
            'success'
          );

          navigate(-1); // Navigate back after deletion
        } catch (error) {
          console.error("Error deleting advert:", error.message);

          // Show error message
          Swal.fire(
            'Error!',
            'There was a problem deleting your advert.',
            'error'
          );
        }
      }
    });
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
      <h2 className="text-2xl font-bold text-[#ff4061] mb-2">{adverts.title}</h2>
      <p className="text-gray-600 mb-4">{adverts.description}</p>
      <p className="text-lg font-semibold text-gray-700">Price: ${adverts.price}</p>
      <p className="text-gray-600 mb-4">Category: {adverts.category}</p>

      <div className="flex space-x-4">
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-300 rounded-md">
          Back to Adverts
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
          <FiEdit className="mr-2" />
          <Link to={`/dashboard/edit/${adverts.id}`}>Edit Advert</Link>
        </button>
        <button onClick={() => handleDeleteAdvert(adverts.id)} className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center">
          <FiTrash className="mr-2" />
          Delete Advert
        </button>
      </div>
    </div>
  );
};

export default SingleAdvert;
