import axios from "axios";
const { NEXT_PUBLIC_API_PATH } = process.env;

export const login = async (token) => {
  return await axios.post(
    "http://localhost:8000/api/v1/login/",
    token,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    }
  );
};
