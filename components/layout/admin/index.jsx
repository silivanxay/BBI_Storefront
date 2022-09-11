import React from "react";
import Sidebar from "./Sidebar";
import FormInput from "./FormInput";

const index = () => {
  return (
    <>
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <Sidebar />
        </div>
        <div class="w-full md:w-2/3 px-4 mb-4 md:mb-0 mt-10">
          <FormInput />
        </div>
      </div>
    </>
  );
};

export default index;
