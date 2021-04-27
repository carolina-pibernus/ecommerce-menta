import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAOenwkz3bIWsVFPYvcXCmo1hjn9IF5Yvo",
    authDomain: "ecommerce-menta.firebaseapp.com",
    projectId: "ecommerce-menta",
    storageBucket: "ecommerce-menta.appspot.com",
    messagingSenderId: "273593134031",
    appId: "1:273593134031:web:482b03672f34ab5c3d40ba"
  };  

  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()