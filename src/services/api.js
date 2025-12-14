import axios from 'axios';
import { getToken, clearAuth } from '../utils/auth';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAuth();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const register = (username, email, password) => {
  return api.post('/auth/register', { username, email, password });
};

export const login = (username, password) => {
  return api.post('/auth/login', { username, password });
};

// Sweet endpoints
export const getAllSweets = () => {
  return api.get('/sweets');
};

export const searchSweets = (params) => {
  return api.get('/sweets/search', { params });
};

export const createSweet = (sweet) => {
  return api.post('/sweets', sweet);
};

export const updateSweet = (id, sweet) => {
  return api.put(`/sweets/${id}`, sweet);
};

export const deleteSweet = (id) => {
  return api.delete(`/sweets/${id}`);
};

export const purchaseSweet = (id, quantity) => {
  return api.post(`/sweets/${id}/purchase`, null, { params: { quantity } });
};

export const restockSweet = (id, quantity) => {
  return api.post(`/sweets/${id}/restock`, null, { params: { quantity } });
};

export default api;


