import React from "react";
import Nav from "./components/nav";

const LayoutUser = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default LayoutUser;
