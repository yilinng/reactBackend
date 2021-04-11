import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBZ6ml5P_Ub0V1r3YrjaxGBlX97SjiCq1I",
    authDomain: "testreact-d278f.firebaseapp.com",
    projectId: "testreact-d278f",
    storageBucket: "testreact-d278f.appspot.com",
    messagingSenderId: "726846697807",
    appId: "1:726846697807:web:72a3cd388a5a14d7cdd53a",
    measurementId: "G-8NPZ67PJYM"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
