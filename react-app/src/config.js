import axios from "axios";

const config = {
  baseURL:
    process.env.REACT_APP_BASE_API_URL ?? "http://localhost:8080/todo-app/",
};

export const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

export default config;
