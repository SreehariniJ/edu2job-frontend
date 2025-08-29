import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:5000";

const API = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
