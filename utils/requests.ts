import axios from "axios";

export const requests = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "/api/" : process.env.API_BASE_URL,
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
