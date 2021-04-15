import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCneM-PNkIFqjfULVorT8_l9HiKsB-Iwdk",
    authDomain: "estacionar-8cc6c.firebaseapp.com",
    projectId: "estacionar-8cc6c",
    storageBucket: "estacionar-8cc6c.appspot.com",
    messagingSenderId: "599140641649",
    appId: "1:599140641649:web:1bfe27043a60ae55d824d0",
    measurementId: "G-SEPKRGGZJF"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth()

export default{
    firebase,
    db,
    auth,
}