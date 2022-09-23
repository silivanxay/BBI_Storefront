import Article from "../components/Article";
import  getAPI  from "../components/Article/util";
import { handle, json } from 'next-runtime';

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
    <Article {...props} />
  );
}

Article.defaultProps = {
  showImage: true,
};