import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBYQZZPugmnJgFoqlvBjR9xJuvfnPx2diU",
  authDomain: "solar-ladder.firebaseapp.com",
  projectId: "solar-ladder",
  storageBucket: "solar-ladder.appspot.com",
  messagingSenderId: "1078721513372",
  appId: "1:1078721513372:web:1c9043aaed2432e61aea59",
  measurementId: "G-E8MCQLMW7K"
});

const db = firebaseApp.firestore();

export { db };  