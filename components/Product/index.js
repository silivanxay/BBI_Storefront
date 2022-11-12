import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NumericFormat } from "react-number-format";

const schema = yup
  .object({
    title: yup.string().required(),
    decription: yup.string().required(),
    // decription: yup.number().positive().integer().required(),
  })
  .required();

export default function index(props) {
  var user = props?.user;
  const formOptions = { resolver: yupResolver(schema) };

  if (user) {
    const { ...defaultValues } = user;
    formOptions.defaultValues = defaultValues;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(formOptions);

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { data } = await axios({
        method: "put",
        url: "http://localhost:8000/api/v1/product/",
        data: data,
        headers: { "Content-Type": "application/json" },
      });
      console.log("response upload", data);
    } catch (error) {
      console.log("request error ", error);
    }
  };

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
                  Add Product
                </label>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="text-gray-600 font-medium">Title</label>
                    <input
                      name="title"
                      {...register("title")}
                      placeholder="title"
                      className="px-3 mt-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                    <p className="text-red-500">{errors.title?.message}</p>

                    <div className="mt-7"></div>
                    <label className="text-gray-600 font-medium">
                      Decription
                    </label>

                    <textarea
                      {...register("decription")}
                      className="appearance-none w-full p-3  font-semibold leading-none bg-gray-50 rounded-lg outline-none"
                      name="decription"
                      rows="5"
                      placeholder="Write something..."
                    ></textarea>

                    {/* <p className="text-red-500">{errors.decription?.message}</p> */}
                  </div>
                  <label className="text-gray-600 font-medium">Upc</label>
                  <input
                    {...register("upc")}
                    name="upc"
                    placeholder="upc"
                    className="px-3 mt-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                  <p className="text-red-500">{errors.title?.message}</p>
                  <div className="py-4">
                    <label className="text-gray-600 font-medium">Media</label>
                    <div className="flex justify-center  w-full">
                      <input
                        className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        type="file"
                        name="image"
                        {...register("image")}
                      />
                    </div>
                  </div>

                  <label className="text-gray-600 font-medium">Upc</label>
                  <NumericFormat
                    thousandSeparator=","
                    prefix={"₭"}
                    {...register("price")}
                    name="price"
                    placeholder="price"
                    className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />

                  <label className="text-gray-600 font-medium">Slug</label>
                  <input
                    {...register("slug")}
                    name="slug"
                    placeholder="slug"
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
