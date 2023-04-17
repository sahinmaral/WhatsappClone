import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = chatSlice.actions;

export default chatSlice.reducer;
