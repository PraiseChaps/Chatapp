import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IjDTO8AD0CYibBx-A0mTlp0o-Y8X18s",
  authDomain: "chatapp-32fd9.firebaseapp.com",
  projectId: "chatapp-32fd9",
  storageBucket: "chatapp-32fd9.appspot.com",
  messagingSenderId: "583739602288",
  appId: "1:583739602288:web:c13056693e1338e5f8cbb5",
  measurementId: "G-786C9NFYG3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
