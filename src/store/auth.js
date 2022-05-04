import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  loggedIn: false,
  token: "",
  userData: {},
  biz: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
    updateToken(state, action) {
      // console.log("action", action);
      state.token = action.payload;
    },
    updateUser(state, action) {
      // console.log("action", action);
      state.userData = action.payload;
    },

    userBiz(state) {
      state.biz = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
