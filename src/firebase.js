import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyAGYpItPMYuPpEBVKRn38RMWf_Giby8470',
  authDomain: 'react-crud-7e5f9.firebaseapp.com',
  databaseURL: 'https://react-crud-7e5f9.firebaseio.com',
  projectId: 'react-crud-7e5f9',
  storageBucket: 'react-crud-7e5f9.appspot.com',
  messagingSenderId: '835417101627',
  appId: '1:835417101627:web:9b7c583b26758d60e8d31e',
}
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()
