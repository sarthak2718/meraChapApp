import axios from "axios";

export const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.NODE_ENV == 'production' ? "https://merachatapp.onrender.com/" : "http://localhost:5001/api",
  withCredentials: true,
});
