import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDh7168lw-U5sDUUEcnNzeT9KQfN6PBQFM",
    authDomain: "abin-pet.firebaseapp.com",
    databaseURL: "https://abin-pet-default-rtdb.firebaseio.com",
    projectId: "abin-pet",
    storageBucket: "abin-pet.appspot.com",
    messagingSenderId: "7136144647",
    appId: "1:7136144647:web:02f6420c3eaadf4027e9a2"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()

export { auth, storage,db}

export default firebase

