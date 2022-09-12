import React from "react";
import Sidebar from "./Sidebar";
import FormInput from "./FormInput";
import Table from "../../table/Table";

const index = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
          <Sidebar />
        </div>
        {/*<div className="w-full md:w-2/3 px-4 mb-4 md:mb-0 mt-10">
          <FormInput />
        </div>*/}
      </div>
      <Table />
    </>
  );
};

export default index;
