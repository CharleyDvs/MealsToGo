import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  firebase.auth().sigInWithEmailAndPassword(email, password);
};
