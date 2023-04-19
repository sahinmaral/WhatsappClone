import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  friends: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    setUsername: (state, action) => {
      state.user.username = action.payload;
    },
    setAbout: (state, action) => {
      state.user.about = action.payload;
    },
    setFriends: (state, action) => {
      state.friends = action.payload;
    },

  },
});

export const { login, logOut, setAbout, setUsername, setFriends , } =
  authSlice.actions;

export default authSlice.reducer;
