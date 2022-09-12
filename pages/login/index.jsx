import React, { useState } from "react";
import { toast } from "react-toastify";
import LayoutUser from "../../components/layouts/users";
import { handleLogin } from "./api";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "") {
      toast.error("username can’t be blank");
    } else if (user.password === "") {
      toast.error("Password can’t be blank");
    } else {
      const { NEXT_PUBLIC_TOKEN_ACCESS, NEXT_PUBLIC_TOKEN_REFRESH } =
        process.env;
      handleLogin(user)
        .then((res) => {
          if (res.data.stattus === "error") {
            toast.error(res.data.message);
            return null;
          }

          sessionStorage.setItem(NEXT_PUBLIC_TOKEN_ACCESS, res.data.access);
          sessionStorage.setItem(NEXT_PUBLIC_TOKEN_REFRESH, res.data.refresh);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <LayoutUser>
      <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white border-t border-yellow-600 rounded shadow-lg shadow-yellow-800/50 lg:max-w-md">
            <h1 className="text-3xl font-semibold text-center text-yellow-700">
              LOGO
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="text" className="block text-sm text-gray-800">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleChange}
                  />
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline">
                  Forget Password?
                </a>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                  >
                    Login
                  </button>
                </div>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                  {" "}
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-yellow-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default Login;
