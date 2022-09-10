import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDhVKUBNPPb2ar2KsTEii4hr4V5oPxfN3I",
    authDomain: "wily-e2cc5.firebaseapp.com",
    projectId: "wily-e2cc5",
    storageBucket: "wily-e2cc5.appspot.com",
    messagingSenderId: "777561115995",
    appId: "1:777561115995:web:ed97a5862f8ba74eea1e7e"
  };
  firebase.innitialiseApp(firebaseConfig);
  export default firebase.firestore();