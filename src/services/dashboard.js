import axios from './base';

export const getRepositories = () => axios.get("/user/repos");