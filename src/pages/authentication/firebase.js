import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDrW77nni5RRIBAKtwXs-CrkEAwrbFRzo",
  authDomain: "clone-c7ddc.firebaseapp.com",
  projectId: "clone-c7ddc",
  storageBucket: "clone-c7ddc.appspot.com",
  messagingSenderId: "123917795998",
  appId: "1:123917795998:web:01a1b46672933b17af318f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
