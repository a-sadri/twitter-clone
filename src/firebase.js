import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBaA6EDQ3ERVH86P_klj7H3NsLh7NPCjLc',
  authDomain: 'twitter-clone-611fa.firebaseapp.com',
  projectId: 'twitter-clone-611fa',
  storageBucket: 'twitter-clone-611fa.appspot.com',
  messagingSenderId: '371386359097',
  appId: '1:371386359097:web:52f52360634d5d83b09ce8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
