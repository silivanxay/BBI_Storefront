import Article from "../components/Article";
import { getAPI } from "../components/Article/util";


import React from "react";

export default function index(props) {
  return (
    
    <div>
      <Article {...props} />
    </div>
  );
}

Article.defaultProps = {
  showImage: true,
};

export const getServerSideProps = getAPI