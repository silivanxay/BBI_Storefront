import Article from "../components/Article";
import { getAPI } from "../components/Article/util";

import React from "react";

export default function index(props) {
  return (
    <div>
      <Article {...props} />
      <h1>hello</h1>
    </div>
  );
}

Article.defaultProps = {
  showImage: true,
};

export const getServerSideProps = getAPI