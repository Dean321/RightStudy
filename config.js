import firebase from 'firebase';
try {
  firebase.initializeApp({
   apiKey: "AIzaSyDrx2P_m4KLA3Ke8uC_uU6qq58oAxSA2TY",
  authDomain: "nosound-43235.firebaseapp.com",
  databaseURL: "https://nosound-43235-default-rtdb.firebaseio.com",
  projectId: "nosound-43235",
  storageBucket: "nosound-43235.appspot.com",
  messagingSenderId: "955401549137",
  appId: "1:955401549137:web:07cfeb37a5c872f1044f70"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fb = firebase.database();
export default fb;

