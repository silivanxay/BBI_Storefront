// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { login } from "./API/loginApi";

// const initialState = ["usename", "password"];

// const login = () => {
//   const [data, setData] = useState(initialState);

//   const handleChange = (e) => {
//     setData(
//       {
//         ...data,
//         [e.target.name]: e.target.value,
//       },
//       console.log(data)
//     );
//   };

//   const handleSubmit = () => {
//     if (data.usename === "") {
//         toast.error("Usename can’t be blank");
//     } else if (data.password === "") {
//         toast.error("Password can’t be blank");
//     } else {
//         login(data)
//         .then((res) => {
//           console.log(res.data);
//         })
//         .catch((err) => {
//           toast.error("cannot connect api");
//           console.log(err);
//         });
//     }
//   return (
// <>    <div>
//       &lt;&gt;
//       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-white border-t border-yellow-600 rounded shadow-lg shadow-yellow-800/50 lg:max-w-md">
//           <h1 className="text-3xl font-semibold text-center text-yellow-700">
//             LOGO
//           </h1>
//           <form className="mt-6">
//             <div>
//               <label htmlFor="text" className="block text-sm text-gray-800">
//                 Username
//               </label>
//               <input
//                 name="usename"
//                 type="text"
//                 className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <div className="mt-4">
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm text-gray-800"
//                 >
//                   Password
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                   onChange={(e) => handleChange(e)}
//                 />
//               </div>
//               <a href="#" className="text-xs text-gray-600 hover:underline">
//                 Forget Password?
//               </a>
//               <div className="mt-6">
//                 <button  onClick={() => handleSubmit()} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
//                   Login
//                 </button>
//               </div>
//               <p className="mt-8 text-xs font-light text-center text-gray-700">
//                 {" "}
//                 Don't have an account?{" "}
//                 <a
//                   href="#"
//                   className="font-medium text-yellow-600 hover:underline"
//                 >
//                   Sign up
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       <ToastContainer/>
//     </div></>
//   );
// };

// export default login;
