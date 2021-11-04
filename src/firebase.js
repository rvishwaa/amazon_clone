import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW7cpIJR2OFbSy31PxMdWGHKPVwkcJvkc",
    authDomain: "clone-4aa1f.firebaseapp.com",
    projectId: "clone-4aa1f",
    storageBucket: "clone-4aa1f.appspot.com",
    messagingSenderId: "966539883414",
    appId: "1:966539883414:web:773b89d690346e6763a3b7",
    measurementId: "G-N2CZN9XG1C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };