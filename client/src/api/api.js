import apiClient from "./apiSetup";
import toast from 'react-hot-toast'


export const loginUser = async (credentials) => {
    try {
        const response = await apiClient.post("/auth/login", credentials);

        toast.success(response.message);
        return response;
    } catch (error) {
        console.log(error);

        toast.error(error.response.data.message);
        throw error;
    }
};


export const signUpUser = async (userData) => {

    try {
        const response = await apiClient.post("/auth/signup", userData);

        toast.success(response.message);
        return response;
    } catch (error) {
        toast.error(error.response.data.message);
        throw error;
    }
};



export const getUserProfile = async () => {
    try {
        const response = await apiClient.get("/profile/getUser");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const updateUserProfile = async (data) => {
    try {
        const response = await apiClient.put("/profile/updateUser",data);
        toast.success(response.message)
        return response;
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
        throw error;
    }
};