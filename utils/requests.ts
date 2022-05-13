import axios from "axios";

export const requests = axios.create({
  baseURL: "/api/",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

requests.interceptors.response.use(
  res => res.data,
  err => {
    console.error(err);
    Promise.reject(err);
  }
);
