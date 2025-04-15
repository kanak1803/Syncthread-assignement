import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const loginUser = (credentials) =>
  axios.post(`${BASE_URL}/auth/login`, credentials);

export const fetchCards = (token) =>
  axios.get(`${BASE_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
