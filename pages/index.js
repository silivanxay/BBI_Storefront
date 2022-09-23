import Article from "../components/Article";
import getAPI from "../components/Article/util";
import { handle, json } from "next-runtime";
import Login from "../components/Login";

export const getServerSideProps = handle({
  async get({ params, query }) {
    return getAPI();
  },

  async post({ req: { body } }) {
    return json();
  },
});

export default function Home(props) {
  return (
    <div>
      <Article {...props} />
      <Login method="post"  {...props} />
    </div>
  );
}

Article.defaultProps = {
  showImage: true,
};

Login.defaultProps = {
  url: 'http://shop.localhost:8000/api/v1/login/',
}