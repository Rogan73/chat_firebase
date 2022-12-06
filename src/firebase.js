import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAahmeNLucP6wMAU57DsRiN9nliphnCFhE",
    authDomain: "vuetifychat-a5451.firebaseapp.com",
    projectId: "vuetifychat-a5451",
    storageBucket: "vuetifychat-a5451.appspot.com",
    messagingSenderId: "353901511339",
    appId: "1:353901511339:web:8caae7e6f5ab979106adee"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db }