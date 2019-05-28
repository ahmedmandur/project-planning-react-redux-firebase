import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAp_mjww6YZidSbfgS2d0IsXHFE0cek1ts',
  authDomain: 'projectplanner-6391b.firebaseapp.com',
  databaseURL: 'https://projectplanner-6391b.firebaseio.com',
  projectId: 'projectplanner-6391b',
  storageBucket: 'projectplanner-6391b.appspot.com',
  messagingSenderId: '107557021977',
  appId: '1:107557021977:web:3b61d406f66f4efa'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
