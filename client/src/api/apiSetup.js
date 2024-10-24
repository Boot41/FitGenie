import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to handle token or custom logic
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to handle global errors or data transformations
apiClient.interceptors.response.use(
  (response) => {
    return response.data; 
  },
  (error) => {
    if (error?.response?.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
