import { initializeApp } from "firebase/app";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import { getDatabase, onValue, ref, set } from "firebase/database";
import {
  getAuth,
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
  setFriends,
  setUsername,
} from "../redux/reducers/authSlice";
import store from "../redux/store";
import { setIsLoading, setMessages } from "../redux/reducers/chatSlice";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const db_realTime = getDatabase(app);

export const checkUser = () => {
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      store.dispatch(setIsLoading(true));
      setCurrentUser().then(() => {
        fetchFriends();
      });
    } else {
      logOutUser();
    }
  });
};

const setCurrentUser = () => {
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

export const loginWithUsername = (email, password) => {
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
            .cathc((err) => {
              reject(err);
            });
        })
        .catch((err) => reject(err));
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("Username didn't changed");
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
        .cathc((err) => {
          reject(err);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("About didn't changed");
    });
  }
};

export const fetchFriends = () => {
  const currentUser = auth.currentUser;

  const allRef = ref(db_realTime);

  onValue(allRef, (snapshot) => {
    const { friends, messages } = snapshot.val();

    const messagesFiltered = messages.filter(
      (message) =>
        message.receiver === currentUser.uid ||
        message.sender === currentUser.uid
    ).sort(function(a,b){
      return new Date(Date.parse(b.createdAt)) - new Date(Date.parse(a.createdAt));
    });;

    messagesFiltered.forEach((messageItem) => {
      let messageDetailed = {
        message: messageItem.message,
        createdAt: messageItem.createdAt,
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

        store.dispatch(
          setMessages([...store.getState().chat.messages, messageDetailed])
        );
      });
    });

    Promise.all(
      friends[currentUser.uid].map((id) => {
        return getDoc(doc(db, "users", id));
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
  });

  // onValue(friendsRef, (snapshot) => {
  //   const friendIds = snapshot.val();

  //   Promise.all(
  //     friendIds.map((id) => {
  //       return getDoc(doc(db, "users", id));
  //     })
  //   ).then((values) => {
  //     store.dispatch(
  //       setFriends(
  //         values.map((value) => {
  //           return value.data();
  //         })
  //       )
  //     );

  //     store.dispatch(setIsLoading(false));
  //   });
  // });
};
