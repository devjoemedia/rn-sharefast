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
      state.user = action.payload;
      state.authenticated = true;
    },
    logout: (state, action) => {
      //
      state.user = null;
      state.authenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
