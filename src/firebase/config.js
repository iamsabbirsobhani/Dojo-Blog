import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCt9cLgwnll8G-ySlmzbHrSvYKHXXSQI68",
    authDomain: "vue-firebase-sites---learning.firebaseapp.com",
    projectId: "vue-firebase-sites---learning",
    storageBucket: "vue-firebase-sites---learning.appspot.com",
    messagingSenderId: "917486628068",
    appId: "1:917486628068:web:4fc39f7749bf4b55a710f1"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firebase service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore , timestamp}