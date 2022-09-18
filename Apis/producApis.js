import axios from "axios";
const { NEXT_PUBLIC_API_PATH } = process.env;

export const AddProduct = async (data, token) => {
  const { NEXT_PUBLIC_API_PATH } = process.env;
  return await axios.post(`${NEXT_PUBLIC_API_PATH}login`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearor ${token}`,
    },
  });
};
