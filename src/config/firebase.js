// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3oEcs4I0IdZAFriCI2W-IZHmhwURCZIo",
  authDomain: "notes-app-5991b.firebaseapp.com",
  databaseURL: "https://notes-app-5991b-default-rtdb.firebaseio.com",
  projectId: "notes-app-5991b",
  storageBucket: "notes-app-5991b.appspot.com",
  messagingSenderId: "854120236603",
  appId: "1:854120236603:web:8b2fb86f45455fcf4dfe1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database,  set, ref, onValue}
