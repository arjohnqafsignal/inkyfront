import axios from 'axios'

export let api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});
export default api;