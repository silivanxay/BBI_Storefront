import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
    token: "",
  },
  reducers: {
    login: (state, { payload }) => {
      console.log(payload);
      state.username = payload.username;
      state.password = payload.password;
      state.token = payload.password;
    },
    logout: (state) => {
      state.username = "";
      state.password = "";
      state.token = "";
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
