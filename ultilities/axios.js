import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_TEST,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiAxios;
