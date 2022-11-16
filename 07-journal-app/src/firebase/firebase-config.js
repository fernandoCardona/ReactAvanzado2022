import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD9fq7kLEMMoI_giQk2XgKLLSx6x8-DIyE",
    authDomain: "reat-app-cursos.firebaseapp.com",
    projectId: "reat-app-cursos",
    storageBucket: "reat-app-cursos.appspot.com",
    messagingSenderId: "384396842759",
    appId: "1:384396842759:web:aefd57e668c4f2d70817a2"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}