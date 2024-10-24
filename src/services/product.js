import { apiClient } from "./config";

export const apiGetProducts = async () => apiClient.get ("/products" );

export const apiAddProduct = async (payload) => apiClient.post("/products",payload);
    

export const apiGetSingleProduct = async (id) =>{
    return apiClient.get (`/adverts/${id}`);
};

// edit advert
export const apiEditproduct = async (id, payload) => {
    return apiClient.patch(`/adverts/${id}`, payload)
};



// delete advert
export const apiDeleteproduct = async (id) => {
    return apiClient.delete(`/adverts/${id}`)
};
