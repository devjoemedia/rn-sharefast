import { createSlice } from "@reduxjs/toolkit";

const userState = {
  user: null,
  authenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login: (state, action) => {
      //
      state.authenticated = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      //
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
