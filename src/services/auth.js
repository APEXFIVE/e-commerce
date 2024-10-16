import {apiClient} from  "/convig"

export const apiSignup = async () => {
    return apiClient.post("/users/signup",payLoad)
}

import {apiLogin} from  "/convig"
export const apiLogin = async () => {
    return apiClient.post("/users/login",payLoad)
}