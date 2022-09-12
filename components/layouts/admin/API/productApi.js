import axios from "axios";
const { NEXT_PUBLIC_API_PATH } = process.env;

export const setNewProduct = async () => {
  return await axios.post(
    "http://localhost:8000/api/v1/product/",
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
