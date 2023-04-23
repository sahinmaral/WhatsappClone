import { createSlice } from "@reduxjs/toolkit";
import { LEFT_PANEL_STATES, MODAL_STATES } from "../../constants";

const initialState = {
  isLoading: true,
  leftPanelState: LEFT_PANEL_STATES.DEFAULT,
  modalState: {
    id: MODAL_STATES.NONE,
    header: "",
    isOpened: false,
  },
  messages: [],
  clickedChat: null,
  friendRequests: [],
  sentFriendRequests: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLeftPanelState: (state, action) => {
      state.leftPanelState = action.payload;
    },
    setModalState: (state, action) => {
      state.modalState = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setClickedChat: (state, action) => {
      state.clickedChat = action.payload;
    },
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },
    setSentFriendRequests: (state, action) => {
      state.sentFriendRequests = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setLeftPanelState,
  setModalState,
  setMessages,
  setClickedChat,
  setFriendRequests,
  setSentFriendRequests,
} = chatSlice.actions;

export default chatSlice.reducer;
