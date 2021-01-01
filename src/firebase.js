// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7JvbNunDYG7NYmv63A50QYPZyqbwHbrM",
    authDomain: "clone-20557.firebaseapp.com",
    projectId: "clone-20557",
    storageBucket: "clone-20557.appspot.com",
    messagingSenderId: "1072482814122",
    appId: "1:1072482814122:web:4cb7b3ee08eae6abba28d3",
    measurementId: "G-1YM9M3PEFT"
};
  
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth()

export { db, auth }
