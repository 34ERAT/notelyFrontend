import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { useloginStore } from "../store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useloginStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    //check if the error is due to unauthorized error
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { setAccessToken } = useloginStore.getState();
        const { data } = await axios.post<{ accessToken: string }>(
          "/auth/refresh",
          {},
          {
            baseURL:
              import.meta.env.VITE_BASE_URL || "http://localhost:3000/api",
            withCredentials: true,
          },
        );
        setAccessToken(data.accessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        } else {
          originalRequest.headers = {
            Authorization: `Bearer ${data.accessToken}`,
          };
        }
        return axios(originalRequest);
      } catch (tokenRefreshError) {
        console.error("Token refresh failed", tokenRefreshError);
        return Promise.reject(tokenRefreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
