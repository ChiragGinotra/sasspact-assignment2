import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register user
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login user
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true,
  });
  return response.data;
};

// Logout user
export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

// Get current user
export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/me`, { withCredentials: true });

  return response.data;
};

// Update current user
export const updateCurrentUser = async (userData) => {
  const response = await axios.patch(`${API_URL}/me`, userData, {
    withCredentials: true,
  });
  return response.data;
};
