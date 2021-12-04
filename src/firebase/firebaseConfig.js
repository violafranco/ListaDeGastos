import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQ8m_pInmzj2payMgtMBoY_aAMI3I7Nk8",
  authDomain: "app-lista-de-gastos-763c4.firebaseapp.com",
  projectId: "app-lista-de-gastos-763c4",
  storageBucket: "app-lista-de-gastos-763c4.appspot.com",
  messagingSenderId: "1098563700831",
  appId: "1:1098563700831:web:6647ad90d99ab59ff773ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {db, auth};