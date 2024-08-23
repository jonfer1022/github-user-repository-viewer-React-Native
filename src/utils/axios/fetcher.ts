import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';

const baseURL: string = 'https://api.github.com/';
const token: string = process.env.GITHUB_USER_TOKEN || '';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // It sets the token in the header
    config.headers.Authorization = `token ${token}`;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
