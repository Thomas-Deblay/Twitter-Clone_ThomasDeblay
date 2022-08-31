import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjhZL9QQFZPt9B6xZiSbijPwQDET6AUr0',
  authDomain: 'twitter-clone-7f3b0.firebaseapp.com',
  projectId: 'twitter-clone-7f3b0',
  storageBucket: 'twitter-clone-7f3b0.appspot.com',
  messagingSenderId: '433642035248',
  appId: '1:433642035248:web:2ab6af3620cdec178ff5f5',
  measurementId: 'G-GF3LSE3LY6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
