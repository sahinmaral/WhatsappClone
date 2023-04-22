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
    setSavedWallpaperColor: (state, action) => {
      state.user.savedWallpaperColor = action.payload;
    },
    setBlockedFriends: (state, action) => {
      state.user.blockedFriends = action.payload;
    },
    setProfilePhoto : (state,action) => {
      state.user.photoURL = action.payload
    }
  },
});

export const {
  login,
  logOut,
  setAbout,
  setUsername,
  setFriends,
  setSavedWallpaperColor,
  setBlockedFriends,
  setProfilePhoto
} = authSlice.actions;

export default authSlice.reducer;
