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
  "#EFEAE2",
  "#BFDBFE",
  "#16A34A",
  "#35558A",
  "#FEF9C3",
  "#EA580C",
  "#EF4444",
  "#D8B4FE",
  "#D1D5DB",
];

export const checkProfilePhoto = (profilePhoto) => {
  if(profilePhoto){
    return profilePhoto
  }else{
    return "https://firebasestorage.googleapis.com/v0/b/react-whatsapp-clone-56e57.appspot.com/o/whatsapp-default-profilePhoto.png?alt=media&token=c1146ed3-cd9b-4738-b3b2-d94de0f9ba45";
  }
}


