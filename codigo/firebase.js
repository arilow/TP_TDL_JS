// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWv_AVidC--PcmlMSvysYC2-2qdCero74",
    authDomain: "soldify-3e47e.firebaseapp.com",
    databaseURL: "https://soldify-3e47e-default-rtdb.firebaseio.com",
    projectId: "soldify-3e47e",
    storageBucket: "soldify-3e47e.appspot.com",
    messagingSenderId: "844619593376",
    appId: "1:844619593376:web:4b2778d30982bc398b7bc5",
    measurementId: "G-4E0QCM6HWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const store = getFirestore();

export const add = (name, artist, genere)=> { 
    addDoc(collection(store, 'canciones'), {name, artist, genere});
};