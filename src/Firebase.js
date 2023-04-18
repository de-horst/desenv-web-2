import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAxhuEItov-iISA-dYWbNBbVmz7imo66Dc",
    authDomain: "somativa2-28c19.firebaseapp.com",
    projectId: "somativa2-28c19",
    storageBucket: "somativa2-28c19.appspot.com",
    messagingSenderId: "217955143318",
    appId: "1:217955143318:web:7904e3629000e1484f3cb7",
    measurementId: "G-L0YBG5JLRW"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;
