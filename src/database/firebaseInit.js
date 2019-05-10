import firebase from '@firebase/app';
import '@firebase/firestore'
import FirebaseConfig from '../database/firebaseConfig'
const firebaseApp = firebase.initializeApp(FirebaseConfig)
export default firebaseApp.firestore()

