export const returnLocalizatedError = (error) => {
  switch (error) {
    case "auth/email-already-in-use":
      return "Email is already in use";
    case "auth/email-already-exists":
      return "Email already exists";
    default:
      return error;
  }
};

export const LEFT_PANEL_STATES = {
  DEFAULT: "default",
  UPDATE_PROFILE: "updateProfile",
  ADD_FRIEND: "addFriend",
  SHOW_BLOCKED_FRIENDS: "showBlockedFriends",
  SETTINGS: "settings",
  CHAT_WALLPAPER: "chatWallpaper",
};

export const MODAL_STATES = {
  THEME_MODAL: "theme-modal",
  NONE: "empty-modal",
};

export const FRIEND_REQUEST_STATES = {
  ACCEPTED: "accepted",
  DECLINED: "declined",
  BLOCKED: "blocked",
};

export const WALLPAPER_COLORS = [
  {
    id: "ca44d235-6c72-477b-b4b9-924fd8b98bd6",
    light: "#EFEAE2",
    dark: "#786342",
  },
  {
    id: "43de2c3c-a83e-487f-a345-85a31bbd4109",
    light: "#BFDBFE",
    dark: "#034faf",
  },
  {
    id: "ea1f42a4-0ba2-4af7-a9a7-5cce47b95d6d",
    light: "#16A34A",
    dark: "#09411e",
  },
  {
    id: "20d41c4f-a50e-4d7b-a3f6-3d09e05b5c74",
    light: "#35558A",
    dark: "#152237",
  },
  {
    id: "20c7b9bf-628b-4e7b-9b38-b3f0d10846e6",
    light: "#FEF9C3",
    dark: "#b1a203",
  },
  {
    id: "2bddec40-4079-42a3-917c-ce82025d03fb",
    light: "#EA580C",
    dark: "#5e2305",
  },
  {
    id: "d9435927-c954-4ee7-81dc-8e1b7c609cc8",
    light: "#EF4444",
    dark: "#710a0a",
  },
  {
    id: "aa39a36a-e53e-4158-aaa0-d7f3666c6de0",
    light: "#D8B4FE",
    dark: "#5402ab",
  },
  {
    id: "93d6eb12-6d12-487b-8fa4-cb65865c4589",
    light: "#D1D5DB",
    dark: "#4b5360",
  },
];

export const NO_LAST_MESSAGE =
  "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.";

export const checkProfilePhoto = (profilePhoto) => {
  if (profilePhoto) {
    return profilePhoto;
  } else {
    return "https://firebasestorage.googleapis.com/v0/b/react-whatsapp-clone-56e57.appspot.com/o/whatsapp-default-profilePhoto.png?alt=media&token=c1146ed3-cd9b-4738-b3b2-d94de0f9ba45";
  }
};
