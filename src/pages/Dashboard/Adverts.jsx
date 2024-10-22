


import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";


const Adverts = () => {
    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
        const getAdverts = async () => {
            // const response = await axios.get(`${BASE_URL}/books`);
            setAdverts(response.data)
        };
        getAdverts();
    }, []);



    return <div >
        

        <h2 className="font-bold text-4xl text-center mt-5 mb-5">Adverts Management</h2>

        <div className="adverts ">

            {adverts.map((advert) => (

                <div >
                    <div className="border p-4 hover:shadow-lg transition-shadow duration-300">
                        <Link to={`/adverts/${advert._id}`} >
                        <img src={advert.image} alt="" />
                        </Link>
                    </div>
                    <div className="border p-4 hover:shadow-lg transition-shadow duration-300 bg-orange-300">
                        <h1 className="font-bold text-2xl text-center ">{advert.title}</h1>
                        <h1 className=" text-2xl text-center mt-4" >{advert.description}</h1>
                        <h1 className=" text-2xl text-center mt-4">{advert?.category?.name}</h1>
                        <h1 className=" text-2xl text-center mt-4 font-bold">{advert.price}</h1>
                        {/* <h1 className=" text-2xl text-center mt-4">{book.genre}</h1> */}
                    </div>
                </div>



            ))}
            <Link to="/dashboard/adverts/add">Add New Adverts</Link>
        </div>
        
    </div>;

}

export default Adverts;
