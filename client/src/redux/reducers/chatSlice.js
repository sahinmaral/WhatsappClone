import { createSlice } from "@reduxjs/toolkit";
import { LeftPanelStates, ModalStates } from "../../constants/componentStates";

const initialState = {
  isLoading: true,
  leftPanelState: LeftPanelStates.DEFAULT,
  modalState: {
    id: ModalStates.NONE,
    header: "",
    isOpened: false,
  },
  theme: "light",
  messages: [],
  clickedChat: null,
  friendRequests: [],
  sentFriendRequests : []
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
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setClickedChat: (state, action) => {
      state.clickedChat = action.payload;
    },
    setFriendRequests : (state,action) => {
      state.friendRequests = action.payload
    },
    setSentFriendRequests : (state,action) => {
      state.sentFriendRequests = action.payload
    }
  },
});

export const {
  setIsLoading,
  setLeftPanelState,
  setModalState,
  setTheme,
  setMessages,
  setClickedChat,
  setFriendRequests,
  setSentFriendRequests
} = chatSlice.actions;

export default chatSlice.reducer;
