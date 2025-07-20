import axios from "axios";
import { useloginStore } from "../store";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const { accessToken } = useloginStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default instance;
