import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBN5qZtg_A2z7nV5Cm4uvpbf9M8gaO0yzE",
    authDomain: "react-app-curso-32084.firebaseapp.com",
    databaseURL: "https://react-app-curso-32084.firebaseio.com",
    projectId: "react-app-curso-32084",
    storageBucket: "react-app-curso-32084.appspot.com",
    messagingSenderId: "502524986375",
    appId: "1:502524986375:web:e604c2f62e541653c296a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db, 
    googleAuthProvider,
    firebase
}