import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "./firebase";

export const uploadPhoto = (profilePhoto, photoName) => {
  const fileRef = ref(storage, photoName + ".png");

  return new Promise((resolve, reject) => {
    uploadBytes(fileRef, profilePhoto)
      .then(() => {
        getDownloadURL(fileRef)
          .then((downloadURL) => {
            resolve(downloadURL);
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

export const removePhoto = (photoName) => {
  return new Promise((resolve, reject) => {
    if (photoName) {
      const profilePhotoRef = ref(storage, `${photoName}.png`);
      deleteObject(profilePhotoRef)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err.code);
        });
    } else {
      resolve();
    }
  });
};
