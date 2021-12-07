// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8ioM3SBikT8Fr7vFUlIX_4H2TiTqcDTw",
  authDomain: "disney-clone-20579.firebaseapp.com",
  projectId: "disney-clone-20579",
  storageBucket: "disney-clone-20579.appspot.com",
  messagingSenderId: "419686246654",
  appId: "1:419686246654:web:8e6cd87bb253c3e4a69daf",
  measurementId: "G-Z27HN5RJXV",
};

// Initialize Firebase
// const db = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
firebase.analytics();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };

export default firebase;
