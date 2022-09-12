import React from "react";
import Sidebar from "./Sidebar";
import FormInput from "./FormInput";
// import * as React from "react";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0 fixed  top-0  h-screen">
          <Sidebar />
        </div>
        <div class="w-full md:w-2/3 px-4 mb-4 md:mb-0 mt-10 mx-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
