import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (username, email, password) => {
  return await axios.post(`${API_URL}/auth/register`, { username, email, password });
};

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/auth/login`, { email, password });
};

export const createPost = async (token, imageUrl, caption) => {
  return await axios.post(`${API_URL}/posts`, { imageUrl, caption }, {
    headers: {
      'x-auth-token': token,
    },
  });
};

export const getPosts = async () => {
  return await axios.get(`${API_URL}/posts`);
};