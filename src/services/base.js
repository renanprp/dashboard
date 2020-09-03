import axios from 'axios';

export const baseURL = 'https://api.github.com';

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use((config) => {
    config.headers = {
        Accept: 'application/vnd.github.machine-man-preview+json',
        Authorization: "token 002d276778a8dc03e41c227829772d605ab4fc0f"
    }

    return config;
})

export default axiosInstance;