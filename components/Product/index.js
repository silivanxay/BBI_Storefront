import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  title: yup.string().required(),
  decription: yup.string().required(),
  // decription: yup.number().positive().integer().required(),
}).required();

export default function index (props)  {
  var user = props?.user
  const formOptions = { resolver: yupResolver(schema) };

  if(user){
    const {...defaultValues } = user;
    formOptions.defaultValues = defaultValues;
  }

  const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

  const onSubmit = (data) => console.log(data);


  return (
    <div>
      <>
        <div className="font-sans">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-200 ">
            <div className="relative sm:max-w-sm w-full">
              {/* <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" /> */}
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-white shadow-md">
                <label
                  htmlFor=""
                  className="block mt-3 text-sm text-gray-700 text-center font-semibold"
                >
                  Login
                </label>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                  <label className="text-gray-600 font-medium">Title</label>
                    <input
                      {...register("title")} 
                      placeholder="title"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                    <p className="text-red-400">{errors.title?.message}</p>
                  </div>
                  <div className="mt-7">
                    <input
                      {...register("decription")} 
                      placeholder="decription"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                    <p className="text-red-400">{errors.decription?.message}</p>
                    
                  </div>

                  <div className="mt-7">
                    <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Login
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
};

