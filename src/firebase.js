import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0HdVWV7f8_uzgZ6VnNs1ZySxbGw9d43A",
    authDomain: "next-fire-443b9.firebaseapp.com",
    projectId: "next-fire-443b9",
    storageBucket: "next-fire-443b9.appspot.com",
    messagingSenderId: "81739948154",
    appId: "1:81739948154:web:f50ec5b0b6ae1faf57dbc3",
    measurementId: "G-280YFTGW2H"
};
  

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();