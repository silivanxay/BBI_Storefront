import React, { useState } from "react";
import { useRef } from "react";
import postAPI from "./util";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NumericFormat } from "react-number-format";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

function Stock({ url, method }) {
  const form = useRef(null);

  const execRequest = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };

  // var stock = props?.stock
  // const formOptions = { resolver: yupResolver(schema) };

  // if(stock){
  //   const {...defaultValues } = stock;
  //   formOptions.defaultValues = defaultValues;
  // }
  //   console.log("API", stock)

  // const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

  // const onSubmit = (data) => console.log(data);

  return (
    <div>
      <>
        <div className="font-sans">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-200 ">
            <div className="relative w-9/12">
              {/* <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" /> */}
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md">
                <label
                  htmlFor=""
                  className="block mt-3 text-lg text-gray-700 text-center font-semibold"
                >
                  Stock
                </label>
                <form
                  action={url}
                  ref={form}
                  method={method}
                  onSubmit={execRequest}
                >
                  <div>
                    <label className="text-gray-600 font-medium">
                      Num in stock
                    </label>
                    <input
                      type="number"
                      id="num_in_stock"
                      name="num_in_stock"
                      // {...register("num_in_stock")}
                      placeholder="num in stock"
                      className="px-3 mt-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                    {/* <p className="text-red-500">{errors.num_in_stock?.message}</p> */}

                    <div className="mt-7"></div>

                    {/* <p className="text-red-500">{errors.decription?.message}</p> */}
                  </div>
                  <label className="text-gray-600 font-medium">
                    Low stock threshold
                  </label>
                  <input
                    type="number"
                    id="low_stock_threshold"
                    // {...register("low_stock_threshold")}
                    name="low_stock_threshold"
                    placeholder="available"
                    className="px-3 mt-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />

                  <label className="text-gray-600 font-medium">
                    product
                  </label>
                  <input
                    type="text"
                    id="product"
                    // {...register("low_stock_threshold")}
                    name="product"
                    placeholder="product"
                    className="px-3 mt-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />

                  <div className="mt-7">
                    <button
                      type="submit"
                      className="bg-blue-500 w-32 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Stock;
