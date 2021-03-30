import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9zMYDAfL4cM4_YwZizTF1bjRWbSwiUCg",
    authDomain: "to-do-app-2e104.firebaseapp.com",
    projectId: "to-do-app-2e104",
    storageBucket: "to-do-app-2e104.appspot.com",
    messagingSenderId: "191259765678",
    appId: "1:191259765678:web:0b5ca001e0d74efa1d363f",
    measurementId: "G-KDTL8EG92J",
});

const db = firebaseApp.firestore();

export default db;
