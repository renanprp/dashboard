import axios from 'axios';

export const baseURL = 'https://api.github.com';

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use((config) => {
    config.headers = {
        Accept: 'application/vnd.github.machine-man-preview+json'
    }

    return config;
})

export default axiosInstance;