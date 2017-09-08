import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_ID
};

firebase.initializeApp(config);
const database = firebase.database();

//console.log(database.ref('messages'));

export default database;