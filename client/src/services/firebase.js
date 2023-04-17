import { initializeApp } from "firebase/app";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
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
import { login, logOut } from "../redux/reducers/authSlice";
import store from "../redux/store";
import { setIsLoading } from "../redux/reducers/chatSlice";

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
      setCurrentUser();
    } else {
      logOutUser();
    }
  });
};

const setCurrentUser = () => {
  store.dispatch(setIsLoading(true));

  const currentUser = auth.currentUser;

  const userRef = collection(db, "users");
  const dataQuery = query(
    userRef,
    where("username", "==", currentUser.displayName)
  );
  getDocs(dataQuery).then((data) => {
    const userDetailed = data.docs[0].data();

    store.dispatch(
      login({
        username: userDetailed.username,
        email: userDetailed.email,
        about: userDetailed.about,
      })
    );

    store.dispatch(setIsLoading(false));
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

export const loginWithUsername = (username, password) => {
  return new Promise((resolve, reject) => {
    const userRef = collection(db, "users");
    const dataQuery = query(userRef, where("username", "==", username));
    getDocs(dataQuery)
      .then((data) => {
        if (data.docs.length === 0) {
          reject("Username cannot be found");
        }
        const email = data.docs[0].data().email;

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            resolve(user);
          })
          .catch((error) => {
            reject(error.code);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const logOutUser = () => {
  signOut(auth).then(() => {
    store.dispatch(logOut());
  });
};

export const getUserListFromCurrentUser = () => {
  const currentUser = auth.currentUser;

  onValue(ref(db_realTime), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      console.log(data);
    }
  });
};
