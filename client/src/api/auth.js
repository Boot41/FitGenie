import apiClient from "./api";
import toast from 'react-hot-toast'


export const loginUser = async (credentials) => {
    try {
        const response = await apiClient.post("/auth/login", credentials);
        console.log(response);

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
        console.log(response);

        toast.success(response.message);
        return response;
    } catch (error) {
        toast.error(error.response.data.message);
        throw error;
    }
};

