import axios from "axios";

const API = axios.create({
  // baseURL: "https://nexilis-api.vercel.app/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default API;