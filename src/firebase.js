import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0HdVWV7f8_uzgZ6VnNs1ZySxbGw9d43A",
    authDomain: "next-fire-443b9.firebaseapp.com",
    projectId: "next-fire-443b9",
    storageBucket: "next-fire-443b9.appspot.com",
    messagingSenderId: "81739948154",
    appId: "1:81739948154:web:f50ec5b0b6ae1faf57dbc3",
    measurementId: "G-280YFTGW2H"
};
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);