import Article from "../components/Article";
import getAPI from "../components/Article/util";
import Login from "../components/Login";

import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/conterActions";

import bodyParser from "body-parser";
import { promisify } from "util";

const Home = (props) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Counter : {props.counter}</h1>
        <button onClick={props.incrementCounter}>+ Count up</button> &nbsp;
        <button onClick={props.decrementCounter}>+ Count down</button>
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
  url: "http://shop.localhost:8000/api/v1/login/",
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

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
