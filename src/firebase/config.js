import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyABdetQ3ecG9sl29JUZhumGfNbFKewrRQ0",
  authDomain: "dojo-blog-9e6b5.firebaseapp.com",
  projectId: "dojo-blog-9e6b5",
  storageBucket: "dojo-blog-9e6b5.appspot.com",
  messagingSenderId: "1026740091951",
  appId: "1:1026740091951:web:19b64428dcbc02fb751ada",
  measurementId: "G-ET3T5E7L91"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firebase service
const projectFirestore = firebase.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore }