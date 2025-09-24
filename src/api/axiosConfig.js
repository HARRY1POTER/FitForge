// axiosConfig.js

import axios from "axios";

// Create an axios instance with a base URL and default configs
const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/auth",
  timeout: 10000, // Optional: Adjust based on your API speed
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Optional: needed if you're using cookies (sessions/JWTs)
});

// ✅ Request interceptor (optional, you can add tokens or logging here)
instance.interceptors.request.use(
  (config) => {
    // Example: attach token if needed
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor (for handling global errors)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle global errors like 401, 500, etc.
    // Example:
    // if (error.response?.status === 401) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  }
);

export default instance;
