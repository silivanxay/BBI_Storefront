import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wrapper from "../store/app";

import store from "../store/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
