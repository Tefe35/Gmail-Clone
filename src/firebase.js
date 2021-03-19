import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDUUqNcadI1fipWW4ATzCYOzcZHpMmWD9U',
  authDomain: 'clone-c5227.firebaseapp.com',
  projectId: 'clone-c5227',
  storageBucket: 'clone-c5227.appspot.com',
  messagingSenderId: '921766761768',
  appId: '1:921766761768:web:7a883fda83074a137c2c1d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
