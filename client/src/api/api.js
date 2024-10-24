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
        const response = await apiClient.put("/profile/updateUser", data);
        toast.success(response.message)
        return response;
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
        throw error;
    }
};



export const generateAiDiet = async (data) => {
    const toastId = toast.loading("FitGenie working its magic ✨")
    try {
        const response = await apiClient.post("/profile/genrateDiet", data);
        toast.dismiss(toastId)
        return response;
    } catch (error) {
        toast.dismiss(toastId)
        console.log(error);
    }
};

export const saveDiet = async (data) => {
    try {
        const response = await apiClient.post("/profile/setDiet", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteDiet = async () => {
    try {
        const response = await apiClient.post("/profile/deleteDiet");
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getDiet = async () => {
    try {
        const response = await apiClient.post("/profile/getDiet");
        return response;
    } catch (error) {
        console.log(error);
    }
};


export const generateAiWorkout = async (data) => {
    const toastId = toast.loading("FitGenie working its magic ✨")
    try {
        const response = await apiClient.post("/profile/genrateWorkout", data);

        toast.dismiss(toastId)
        toast.success("Here you go 💪")
        return response;
    } catch (error) {
        toast.dismiss(toastId)
        console.log(error);
    }
};

export const saveWorkout = async (data) => {
    try {
        const response = await apiClient.post("/profile/setWorkout", data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteWorkout = async () => {
    try {
        const response = await apiClient.post("/profile/deleteWorkout");
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const getWorkout = async () => {
    try {
        const response = await apiClient.post("/profile/getWorkout");
        return response;
    } catch (error) {
        console.log(error);
    }
};