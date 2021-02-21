import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBs_1LBupexsMAVy4lyQupX19l259Ap9_Y",
  authDomain: "dojo-bl.firebaseapp.com",
  projectId: "dojo-bl",
  storageBucket: "dojo-bl.appspot.com",
  messagingSenderId: "636777854264",
  appId: "1:636777854264:web:f059b60257693cf002bdcd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firebase service
const projectFirestore = firebase.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore }