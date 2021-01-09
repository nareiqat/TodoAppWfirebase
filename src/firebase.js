import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6m2eJkE7vipr0XnKwHemQY5BdHSuiufU",
    authDomain: "todo-33ff7.firebaseapp.com",
    databaseURL: "https://todoapp-a18dd-default-rtdb.firebaseio.com/",
    projectId: "todoapp-a18dd",
    storageBucket: "todo-33ff7.appspot.com",
    messagingSenderId: "306056989837",
    appId: "1:240110924148:web:2f103657dea8095df27c21",
    measurementId: "G-463TXX0S2N"
})

const db = firebaseApp.firestore();

export {db};