import axios from './base';

export const getUser = () => axios.get('/user');