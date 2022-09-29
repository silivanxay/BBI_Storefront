import Article from "../components/Article";
import getAPI from "../components/Article/util";
import Login from "../components/Login";
import {useSelector, useDispatch} from "react-redux";
import { toggleChangeAction } from "../redux/reducer";


import bodyParser from "body-parser";
import { promisify } from "util";

const Home = (props) => {
  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const onUpdate = () =>{
    dispatch(toggleChangeAction())
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Visible : {visible?"on":"off"}</h1>
        <button onClick={onUpdate}>Toggle</button> &nbsp;
      </div>
      <form method="post" herf="http://shop.localhost:8000/api/v1/login/">
        <input name="name" defaultValue={props.name} />
        <button type="submit">submit</button>
      </form>
      <p>{props.message}</p>
      <Article {...props} />
      <Login method="post" {...props} />
    </div>
  );
};

Article.defaultProps = {
  showImage: true,
};

Login.defaultProps = {
  url: "http://localhost:8000/api/v1/login/",
};

const getBody = promisify(bodyParser.urlencoded());

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  if (req.method === "POST") {
    await getBody(req, res);
    // call POST API here
  }
  return getAPI();
}
export default Home;