import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBZWWlpZvF9ou5_Zu-nnTpSR6BB6npL8s4",
    authDomain: "andromeda-login-auth-dev-3c5ed.firebaseapp.com",
    projectId: "andromeda-login-auth-dev-3c5ed",
    storageBucket: "andromeda-login-auth-dev-3c5ed.appspot.com",
    messagingSenderId: "176761467102",
    appId: "1:176761467102:web:e21c0bb14aa81025c4924f",
    measurementId: "G-9LKL8PGEZD"
})

//exports authentication instance imported above
export const auth = fire.auth()
export default fire