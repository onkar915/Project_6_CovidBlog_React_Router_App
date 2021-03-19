import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8kMunRLwiY85KpBO1HcNax8hFc-3lXPQ',
  authDomain: 'covidfblog.firebaseapp.com',
  projectId: 'covidfblog',
  storageBucket: 'covidfblog.appspot.com',
  messagingSenderId: '385776855830',
  appId: '1:385776855830:web:156949cf39e44cc0a5be37',
  measurementId: 'G-FH1JEE70YW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
