import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCsI6jnuqn2_n53Oi9GNeTmLLb6PtBX8tE',
  authDomain: 'dinner-wee.firebaseapp.com',
  databaseURL: 'https://dinner-wee.firebaseio.com',
  projectId: 'dinner-wee',
  storageBucket: 'dinner-wee.appspot.com',
  messagingSenderId: '181098063872'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
