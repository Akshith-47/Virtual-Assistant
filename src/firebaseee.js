import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB9pRaT9G-pUWSOIfVQc-xsaDQRRxALGUg",
    authDomain: "hack-6f392.firebaseapp.com",
    databaseURL: "https://hack-6f392-default-rtdb.firebaseio.com",
    projectId: "hack-6f392",
    storageBucket: "hack-6f392.appspot.com",
    messagingSenderId: "452456002994",
    appId: "1:452456002994:web:ccc5c7abc71e08d213a0ab"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth= firebase.auth();
  
  export {auth};
  export default db;