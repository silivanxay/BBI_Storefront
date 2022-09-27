import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { getAxios } from "../../../utils/get-axios.js";


export default function Stock ({url, method}) {
  const form = useRef(null);
  const execRequest = (e) => {
    console.log("ENTER");
    e.preventDefault();
    console.log(form.current);
    const formData = new FormData(form.current);

    const result = getAxios()[method](url, formData);
    console.log(result);
  };

  return (
    <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
      <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
        Stock
      </h1>
      <div className="container py-5 max-w-md mx-auto">
        <form
          action={url}
          ref={form}
          method={method}
          onSubmit={execRequest}
          encType="multipart/form-data"
        >
          <div className="text-left">
            <label htmlFor="number" className="text-white ">
              Num_in_stock:
            </label>
          </div>
          <div className="mb-4">
            <input
              placeholder="Num in stock"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="num_in_stock"
              type="number"
              name="num_in_stock"
            />
          </div>

          <div className="text-left">
            <label htmlFor="price" className="text-white ">
              Low_stock_threshold:
            </label>
          </div>

          <div className="mb-4">
            <input
              placeholder="Low stock threshold"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="low_stock_threshold"
              type="number"
              name="low_stock_threshold"
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
