import axios from "axios";
const { NEXT_PUBLIC_API_PATH } = process.env;

export const handleLogin = async (user) => {
  const { NEXT_PUBLIC_API_PATH } = process.env;
  return await axios.post(`${NEXT_PUBLIC_API_PATH}login`, user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
