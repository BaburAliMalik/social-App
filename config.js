
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 // firebase database task started
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

 // firebase database task started

 const firebaseConfig = {
   apiKey: "AIzaSyCKcfQDCowI-VWR_khsQ7GO-Amgr0qDZ4w",
   authDomain: "social-app123-1f57b.firebaseapp.com",
   projectId: "social-app123-1f57b",
   storageBucket: "social-app123-1f57b.appspot.com",
   messagingSenderId: "479449204444",
   appId: "1:479449204444:web:a0cd1f83fd42594cb65619",
   measurementId: "G-TZVKLQBG2P"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 