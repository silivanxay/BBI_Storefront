import React from "react";
import Sidebar from "./Sidebar";
import Stock from "../../stock/components/Stocks";
import Option from "../../options/components/Option";

const index = (props) => {
  return (
    <>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        {/* <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 fixed top-0 h-screen">
          <Sidebar />
        </div>
            */}

        <div className="w-full px-4 mb-4 mt-10">
          <Option method="post" {...props} />
        </div>

        <div className="w-full px-4 mb-4 mt-10">
          <Stock method="post" {...props} />
        </div>
      </div>
    </>
  );
};

Option.defaultProps = {
  url: "http://localhost:8000/api/v1/option/",
};

Stock.defaultProps = {
  url: "http://localhost:8000/api/v1/stock/",
};

export default index;
