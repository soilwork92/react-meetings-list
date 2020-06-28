import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJIzl8U3FsfP7SCOyG7BiNaWTpf95FW6Q",
  authDomain: "react-spas-7e88a.firebaseapp.com",
  databaseURL: "https://react-spas-7e88a.firebaseio.com",
  projectId: "react-spas-7e88a",
  storageBucket: "react-spas-7e88a.appspot.com",
  messagingSenderId: "186819214774",
  appId: "1:186819214774:web:c4394b0fc5d3ea8175d517"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
