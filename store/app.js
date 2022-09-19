import { configureStore } from "@reduxjs/toolkit";
import auth from "./services/auth";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
    },
  });
};
const wrapper = createWrapper(makeStore);
export default wrapper;
