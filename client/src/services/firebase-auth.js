import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { get, onValue, ref, remove, set, update } from "firebase/database";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  login,
  logOut,
  setAbout,
  setBlockedFriends,
  setFriends,
  setProfilePhoto,
  setSavedWallpaperColor,
  setUsername,
} from "../redux/reducers/authSlice";
import store from "../redux/store";
import {
  setFriendRequests,
  setIsLoading,
  setMessages,
  setSentFriendRequests,
} from "../redux/reducers/chatSlice";
import { v4 as uuidv4 } from "uuid";
import { FRIEND_REQUEST_STATES, checkProfilePhoto } from "../constants";
import { db, db_realTime, auth } from "./firebase";
import { uploadPhoto, removePhoto } from "./firebase-storage";

export const checkUser = () => {
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      store.dispatch(setIsLoading(true));
      setCurrentUser().then(() => {
        fetchRealTimeUserProperties();
      });
    } else {
      store.dispatch(setIsLoading(true));
      logOutUser();
    }
  });
};

export const setCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser;

    const userRef = collection(db, "users");
    const dataQuery = query(
      userRef,
      where("username", "==", currentUser.displayName)
    );
    getDocs(dataQuery)
      .then((data) => {
        const userDetailed = data.docs[0].data();

        store.dispatch(
          login({
            username: userDetailed.username,
            email: userDetailed.email,
            about: userDetailed.about,
            savedWallpaperColor: userDetailed.savedWallpaperColor,
            photoURL: userDetailed.photoURL,
            blockedFriends: [],
          })
        );

        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUpWithEmail = (username, email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        //Username cannot be same
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, {
          username: username,
          email: email,
          savedWallpaperColor: "#EFEAE2",
          about: "Hey there! I am using WhatsApp.",
        })
          .then(() => {
            updateProfile(auth.currentUser, { displayName: username })
              .then(() => {
                resolve(user);
              })
              .catch((err) => reject(err));
          })
          .catch((err) => {
            reject(err.code);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const loginWithEmail = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        resolve(user);
      })
      .catch((error) => {
        reject(error.code);
      });
  });
};

export const logOutUser = () => {
  signOut(auth).then(() => {
    store.dispatch(logOut());
    store.dispatch(setFriendRequests([]));
    store.dispatch(setSentFriendRequests([]));
    store.dispatch(setMessages([]));
    store.dispatch(setFriends([]));
  });
};

export const updateUsername = (username) => {
  const currentUser = auth.currentUser;
  if (currentUser.displayName !== username) {
    return new Promise((resolve, reject) => {
      updateProfile(currentUser, { displayName: username })
        .then(() => {
          const userRef = doc(db, "users", currentUser.uid);
          updateDoc(userRef, {
            username,
          })
            .then(() => {
              store.dispatch(setUsername(username));
              resolve();
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => reject(err));
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("Username didn't change");
    });
  }
};

export const updateUserAbout = (about) => {
  const currentUser = auth.currentUser;

  const authState = store.getState().auth;

  if (authState.about !== about) {
    return new Promise((resolve, reject) => {
      const userRef = doc(db, "users", currentUser.uid);
      updateDoc(userRef, {
        about,
      })
        .then(() => {
          store.dispatch(setAbout(about));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("About didn't change");
    });
  }
};

export const updateUserSavedWallpaperColor = (color) => {
  const currentUser = auth.currentUser;

  return new Promise((resolve, reject) => {
    const userRef = doc(db, "users", currentUser.uid);
    updateDoc(userRef, {
      savedWallpaperColor: color,
    })
      .then(() => {
        store.dispatch(setSavedWallpaperColor(color));
        resolve();
      })
      .catch((err) => {
        reject(err.code);
      });
  });
};

export const updateProfilePhoto = (profilePhoto) => {
  const currentUser = auth.currentUser;
  return new Promise((resolve, reject) => {
    uploadPhoto(profilePhoto, currentUser.uid)
      .then((profilePhotoURL) => {
        updateProfile(currentUser, {
          photoURL: profilePhotoURL,
        })
          .then(() => {
            const userRef = doc(db, "users", currentUser.uid);
            updateDoc(userRef, {
              photoURL: profilePhotoURL,
            })
              .then(() => {
                store.dispatch(setProfilePhoto(profilePhotoURL));
                resolve();
              })
              .catch((err) => {
                reject(err.code);
              });
          })
          .catch((err) => {
            reject(err.code);
          });
      })
      .catch((err) => {
        reject(err.code);
      });
  });
};

export const removeProfilePhoto = () => {
  const currentUser = auth.currentUser;

  return new Promise((resolve, reject) => {
    removePhoto(currentUser.uid)
      .then(() => {
        const userRef = doc(db, "users", currentUser.uid);
        updateProfile(currentUser, {
          photoURL: "",
        })
          .then(() => {
            updateDoc(userRef, {
              photoURL: deleteField(),
            })
              .then(() => {
                store.dispatch(setProfilePhoto(checkProfilePhoto("")));
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const fetchRealTimeUserProperties = () => {
  fetchMessages();
  fetchFriendRequests();
  fetchBlockedFriends();
  fetchFriends();
};

const fetchFriends = () => {
  const currentUser = auth.currentUser;

  const friendRef = ref(db_realTime, "friends");

  onValue(friendRef, (allSnapshot) => {
    if (allSnapshot.exists()) {
      get(ref(db_realTime, `friends/${currentUser.uid}`)).then((snapShot) => {
        if (snapShot.exists()) {
          const friends = snapShot.val();

          Promise.all(
            Object.values(friends).map((friend) => {
              return getDoc(doc(db, "users", friend.id));
            })
          ).then((values) => {
            store.dispatch(
              setFriends(
                values.map((value) => {
                  return value.data();
                })
              )
            );

            store.dispatch(setIsLoading(false));
          });
        } else {
          store.dispatch(setIsLoading(false));
        }
      });
    } else {
      store.dispatch(setIsLoading(false));
    }
  });

  // onValue(friendRef, (snapshot) => {
  //   if (snapshot.exists()) {
  //     const friends = snapshot.val();

  //     if (
  //       Object.keys(friends).filter((key) => key === currentUser.uid).length !==
  //       0
  //     ) {
  //       Promise.all(
  //         friends[currentUser.uid].map((id) => {
  //           return getDoc(doc(db, "users", id));
  //         })
  //       ).then((values) => {

  //         store.dispatch(
  //           setFriends(
  //             values.map((value) => {
  //               return value.data();
  //             })
  //           )
  //         );

  //         store.dispatch(setIsLoading(false));
  //       });
  //     } else {
  //       store.dispatch(setIsLoading(false));
  //     }
  //   } else {
  //     store.dispatch(setIsLoading(false));
  //   }
  // });
};

const fetchMessages = () => {
  const currentUser = auth.currentUser;

  const messagesRef = ref(db_realTime, "/messages");

  onValue(messagesRef, (snapshot) => {
    if (snapshot.exists()) {
      const messages = snapshot.val();

      const messagesFiltered = Object.keys(messages)
        .map((key) => {
          return { ...messages[key], id: key };
        })
        .filter(
          (message) =>
            message.receiver === currentUser.uid ||
            message.sender === currentUser.uid
        )
        .sort(function (a, b) {
          return (
            new Date(Date.parse(a.createdAt)) -
            new Date(Date.parse(b.createdAt))
          );
        });

      messagesFiltered.forEach((messageItem) => {
        let messageDetailed = {
          message: messageItem.message,
          createdAt: messageItem.createdAt,
          id: messageItem.id,
        };

        Promise.all([
          getDoc(doc(db, "users", messageItem.receiver)),
          getDoc(doc(db, "users", messageItem.sender)),
        ]).then((values) => {
          messageDetailed = {
            ...messageDetailed,
            receiver: values[0].data(),
            sender: values[1].data(),
          };

          if (
            store
              .getState()
              .chat.messages.filter((item) => item.id === messageDetailed.id)
              .length === 0
          ) {
            store.dispatch(
              setMessages([...store.getState().chat.messages, messageDetailed])
            );
          }
        });
      });
    }
  });
};

export const sendMessage = (receiverEmail, message) => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser;

    const q = query(
      collection(db, "users"),
      where("email", "==", receiverEmail)
    );

    getDocs(q)
      .then((value) => {
        set(ref(db_realTime, `messages/${uuidv4()}`), {
          sender: user.uid,
          receiver: value.docs[0].id,
          createdAt: new Date().toISOString(),
          message: message,
        })
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const sendFriendRequest = (receiverEmail) => {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser;

    if (currentUser.email === receiverEmail) {
      return reject("You cannot send friend request to yourself");
    }

    get(ref(db_realTime, `blockedFriends`)).then((allSnapshot) => {
      if (allSnapshot.exists()) {
        const q = query(
          collection(db, "users"),
          where("email", "==", receiverEmail)
        );

        getDocs(q).then((receiverDetailed) => {
          get(
            ref(db_realTime, `blockedFriends/${receiverDetailed.docs[0].id}`)
          ).then((currentUserBlockedUsersSnapShot) => {
            if (currentUserBlockedUsersSnapShot.exists()) {
              const currentUserBlockedUsers =
                currentUserBlockedUsersSnapShot.val();

              if (
                Object.values(currentUserBlockedUsers).filter(
                  (blockedUser) => blockedUser === currentUser.uid
                ).length !== 0
              ) {
                return reject(
                  "You cannot send friend request because user blocked you"
                );
              } else {
                const q = query(
                  collection(db, "users"),
                  where("email", "==", receiverEmail)
                );

                getDocs(q)
                  .then((receiverDetailed) => {
                    get(ref(db_realTime, "friends/" + currentUser.uid))
                      .then((snapShot) => {
                        if (snapShot.exists()) {
                          const friendIds = snapShot.val();
                          if (
                            friendIds.filter(
                              (friendId) =>
                                friendId === receiverDetailed.docs[0].id
                            ).length > 0
                          ) {
                            reject("User already added");
                          } else {
                            set(
                              ref(db_realTime, "friendRequests/" + uuidv4()),
                              {
                                sender: currentUser.uid,
                                receiver: receiverDetailed.docs[0].id,
                              }
                            )
                              .then(() => {
                                resolve();
                              })
                              .catch((error) => {
                                reject(error.code);
                              });
                          }
                        } else {
                          set(ref(db_realTime, "friendRequests/" + uuidv4()), {
                            sender: currentUser.uid,
                            receiver: receiverDetailed.docs[0].id,
                          })
                            .then(() => {
                              resolve();
                            })
                            .catch((error) => {
                              reject(error.code);
                            });
                        }
                      })
                      .catch((error) => {
                        reject(error.code);
                      });
                  })
                  .catch((error) => {
                    reject(error.code);
                  });
              }
            } else {
              const q = query(
                collection(db, "users"),
                where("email", "==", receiverEmail)
              );

              getDocs(q)
                .then((receiverDetailed) => {
                  get(ref(db_realTime, "friends/" + currentUser.uid))
                    .then((snapShot) => {
                      if (snapShot.exists()) {
                        const friendIds = snapShot.val();
                        if (
                          friendIds.filter(
                            (friendId) =>
                              friendId === receiverDetailed.docs[0].id
                          ).length > 0
                        ) {
                          reject("User already added");
                        } else {
                          set(ref(db_realTime, "friendRequests/" + uuidv4()), {
                            sender: currentUser.uid,
                            receiver: receiverDetailed.docs[0].id,
                          })
                            .then(() => {
                              resolve();
                            })
                            .catch((error) => {
                              reject(error.code);
                            });
                        }
                      } else {
                        set(ref(db_realTime, "friendRequests/" + uuidv4()), {
                          sender: currentUser.uid,
                          receiver: receiverDetailed.docs[0].id,
                        })
                          .then(() => {
                            resolve();
                          })
                          .catch((error) => {
                            reject(error.code);
                          });
                      }
                    })
                    .catch((error) => {
                      reject(error.code);
                    });
                })
                .catch((error) => {
                  reject(error.code);
                });
            }
          });
        });
      } else {
        const q = query(
          collection(db, "users"),
          where("email", "==", receiverEmail)
        );

        getDocs(q)
          .then((receiverDetailed) => {
            get(ref(db_realTime, "friends/" + currentUser.uid))
              .then((snapShot) => {
                if (snapShot.exists()) {
                  const friendIds = snapShot.val();

                  if (
                    Object.values(friendIds).filter(
                      (friendId) => friendId === receiverDetailed.docs[0].id
                    ).length > 0
                  ) {
                    reject("User already added");
                  } else {
                    set(ref(db_realTime, "friendRequests/" + uuidv4()), {
                      sender: currentUser.uid,
                      receiver: receiverDetailed.docs[0].id,
                    })
                      .then(() => {
                        resolve();
                      })
                      .catch((error) => {
                        reject(error.code);
                      });
                  }
                } else {
                  set(ref(db_realTime, "friendRequests/" + uuidv4()), {
                    sender: currentUser.uid,
                    receiver: receiverDetailed.docs[0].id,
                  })
                    .then(() => {
                      resolve();
                    })
                    .catch((error) => {
                      reject(error.code);
                    });
                }
              })
              .catch((error) => {
                reject(error.code);
              });
          })
          .catch((error) => {
            reject(error.code);
          });
      }
    });
  });
};

export const handleFriendRequest = (friendRequestState, friendRequest) => {
  const currentUser = auth.currentUser;

  switch (friendRequestState) {
    case FRIEND_REQUEST_STATES.ACCEPTED:
      get(ref(db_realTime, "friends")).then((snapshot) => {
        if (snapshot.exists()) {
          const friends = snapshot.val();

          addFriendFromReceiver(friends, currentUser, friendRequest);
          addFriendFromSender(friends, currentUser, friendRequest);
        } else {
          const dataQuery = query(
            collection(db, "users"),
            where("email", "==", friendRequest.user.email)
          );

          getDocs(dataQuery).then((value) => {
            set(ref(db_realTime, `friends/${currentUser.uid}/${uuidv4()}`), {
              id: value.docs[0].id,
            });
            set(ref(db_realTime, `friends/${value.docs[0].id}/${uuidv4()}`), {
              id: currentUser.uid,
            });
          });
        }
      });

      remove(ref(db_realTime, `friendRequests/${friendRequest.id}`));
      break;
    case FRIEND_REQUEST_STATES.DECLINED:
      remove(ref(db_realTime, `friendRequests/${friendRequest.id}`));
      break;
    case FRIEND_REQUEST_STATES.BLOCKED:
      const dataQuery = query(
        collection(db, "users"),
        where("email", "==", friendRequest.user.email)
      );

      getDocs(dataQuery).then((friendRequestDetailed) => {
        get(ref(db_realTime, "blockedFriends")).then(
          (allBlockedUsersSnapshot) => {
            if (allBlockedUsersSnapshot.exists()) {
              get(ref(db_realTime, `blockedFriends/${currentUser.uid}`)).then(
                (currentUserBlockedUsersSnapShot) => {
                  if (currentUserBlockedUsersSnapShot.exists()) {
                    const currentUserBlockedUsers =
                      currentUserBlockedUsersSnapShot.val();

                    update(
                      ref(db_realTime, `blockedFriends/${currentUser.uid}`),
                      {
                        ...currentUserBlockedUsers,
                        [currentUserBlockedUsers.length]:
                          friendRequestDetailed.docs[0].id,
                      }
                    ).then(() => {
                      remove(
                        ref(db_realTime, `friendRequests/${friendRequest.id}`)
                      );
                    });
                  } else {
                    set(
                      ref(
                        db_realTime,
                        `blockedFriends/${currentUser.uid}/${uuidv4()}`
                      ),
                      {
                        id: friendRequestDetailed.docs[0].id,
                      }
                    ).then(() => {
                      remove(
                        ref(db_realTime, `friendRequests/${friendRequest.id}`)
                      );
                    });
                  }
                }
              );
            } else {
              set(
                ref(
                  db_realTime,
                  `blockedFriends/${currentUser.uid}/${uuidv4()}`
                ),
                {
                  id: friendRequestDetailed.docs[0].id,
                }
              );

              remove(ref(db_realTime, `friendRequests/${friendRequest.id}`));
            }
          }
        );
      });

      break;
    default:
      break;
  }
};

export const unblockUserFromBlockedFriends = (blockedFriendEmail) => {
  const currentUser = auth.currentUser;

  return new Promise((resolve, reject) => {
    get(ref(db_realTime, `blockedFriends/${currentUser.uid}`))
      .then((snapShot) => {
        const snapShotValue = snapShot.val();

        const dataQuery = query(
          collection(db, "users"),
          where("email", "==", blockedFriendEmail)
        );

        getDocs(dataQuery).then((blockedFriendDetailed) => {
          Object.keys(snapShotValue).forEach((key) => {
            if (snapShotValue[key].id === blockedFriendDetailed.docs[0].id) {
              remove(
                ref(db_realTime, `blockedFriends/${currentUser.uid}/${key}`)
              ).then(() => {
                store.dispatch(
                  setBlockedFriends(
                    store
                      .getState()
                      .auth.user.blockedFriends.filter(
                        (friend) => friend.email !== blockedFriendEmail
                      )
                  )
                );
                resolve();
              });
            }
          });
        });
      })
      .catch((err) => {
        reject(err.code);
      });
  });
};

const fetchBlockedFriends = () => {
  const currentUser = auth.currentUser;

  const blockedFriendsRef = ref(db_realTime, "blockedFriends");

  onValue(blockedFriendsRef, (allSnapshot) => {
    if (allSnapshot.exists()) {
      get(ref(db_realTime, `blockedFriends/${currentUser.uid}`)).then(
        (blockedUserIdsSnapshot) => {
          if (blockedUserIdsSnapshot.exists()) {
            const blockedUsers = blockedUserIdsSnapshot.val();

            Promise.all(
              Object.values(blockedUsers).map((blockedUser) => {
                return getDoc(doc(db, "users", blockedUser.id));
              })
            ).then((values) => {
              store.dispatch(
                setBlockedFriends(
                  values.map((value) => {
                    return value.data();
                  })
                )
              );
            });
          }
        }
      );
    }
  });
};

const fetchFriendRequests = () => {
  const currentUser = auth.currentUser;

  const friendRequestRef = ref(db_realTime, "/friendRequests");

  onValue(friendRequestRef, (snapshot) => {
    if (snapshot.exists()) {
      const friendRequests = snapshot.val();

      store.getState().chat.friendRequests.forEach((friendRequest) => {
        if (
          Object.keys(friendRequests).filter((key) => friendRequest.id === key)
            .length === 0
        ) {
          store.dispatch(
            setFriendRequests([
              ...store
                .getState()
                .chat.friendRequests.filter(
                  (item) => item.id !== friendRequest.id
                ),
            ])
          );
        }
      });

      store.getState().chat.sentFriendRequests.forEach((friendRequest) => {
        if (
          Object.keys(friendRequests).filter((key) => friendRequest.id === key)
            .length === 0
        ) {
          store.dispatch(
            setSentFriendRequests([
              ...store
                .getState()
                .chat.sentFriendRequests.filter(
                  (item) => item.id !== friendRequest.id
                ),
            ])
          );
        }
      });

      Object.keys(friendRequests)
        .map((key) => {
          return {
            receiver: friendRequests[key].receiver,
            sender: friendRequests[key].sender,
            id: key,
          };
        })
        .forEach((friendRequest) => {
          if (friendRequest.receiver === currentUser.uid) {
            getDoc(doc(db, "users", friendRequest.sender)).then((value) => {
              if (
                store
                  .getState()
                  .chat.friendRequests.filter(
                    (item) => item.id === friendRequest.id
                  ).length === 0
              ) {
                store.dispatch(
                  setFriendRequests([
                    ...store.getState().chat.friendRequests,
                    { user: value.data(), id: friendRequest.id },
                  ])
                );
              }
            });
          } else if (friendRequest.sender === currentUser.uid) {
            getDoc(doc(db, "users", friendRequest.receiver)).then((value) => {
              if (
                store
                  .getState()
                  .chat.sentFriendRequests.filter(
                    (item) => item.id === friendRequest.id
                  ).length === 0
              ) {
                store.dispatch(
                  setSentFriendRequests([
                    ...store.getState().chat.sentFriendRequests,
                    { user: value.data(), id: friendRequest.id },
                  ])
                );
              }
            });
          }
        });
    } else {
      store.dispatch(setFriendRequests([]));
      store.dispatch(setSentFriendRequests([]));
    }
  });
};

const addFriendFromReceiver = (friends, currentUser, friendRequest) => {
  if (
    Object.keys(friends).filter((key) => key === currentUser.uid).length === 0
  ) {
    const dataQuery = query(
      collection(db, "users"),
      where("email", "==", friendRequest.user.email)
    );

    getDocs(dataQuery).then((value) => {
      set(ref(db_realTime, `friends/${currentUser.uid}/${uuidv4()}`), {
        id: value.docs[0].id,
      });
    });
  } else {
    const dataQuery = query(
      collection(db, "users"),
      where("email", "==", friendRequest.user.email)
    );

    getDocs(dataQuery).then((value) => {
      update(ref(db_realTime, `friends/${currentUser.uid}`), {
        ...friends[currentUser.uid],
        [friends[currentUser.uid].length]: value.docs[0].id,
      });
    });
  }
};

const addFriendFromSender = (friends, currentUser, friendRequest) => {
  const dataQuery = query(
    collection(db, "users"),
    where("email", "==", friendRequest.user.email)
  );

  getDocs(dataQuery).then((snapShot) => {
    if (
      Object.keys(friends).filter((key) => key === snapShot.docs[0].id)
        .length === 0
    ) {
      set(ref(db_realTime, `friends/${snapShot.docs[0].id}`), {
        0: currentUser.uid,
      });
    } else {
      update(ref(db_realTime, `friends/${snapShot.docs[0].id}`), {
        ...friends[currentUser.uid],
        [friends[currentUser.uid].length]: currentUser.uid,
      });
    }
  });
};
