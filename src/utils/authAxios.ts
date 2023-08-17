import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_URL_API;

export const setAuthHeader = (token: string): void => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  if (process.env.REACT_APP_ENVIROMENT === 'development') {
    axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axiosInstance.defaults.headers.common['Access-Control-Allow-Methods'] =
      'GET, PUT, POST, DELETE, OPTIONS';
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem('persist:auth');
    if (auth != null) {
      const jsonAuth = JSON.parse(auth);
      if (jsonAuth != null) {
        config.headers.Authorization = `Bearer ${
          jsonAuth.accessToken as string
        }`;
      }
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  async (error) => await Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return await Promise.reject(error);
  }
);

export default axiosInstance;
