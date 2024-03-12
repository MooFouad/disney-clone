// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'
// import 'firebase/compat/storage'

import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyA2Am7vutnY6YxI_Jy4VyynPMgzcRi1RpA",

    authDomain: "disney-clone-e9640.firebaseapp.com",

    projectId: "disney-clone-e9640",

    storageBucket: "disney-clone-e9640.appspot.com",

    messagingSenderId: "586888671666",

    appId: "1:586888671666:web:e0a3e256ab012ab1a074ab",

    measurementId: "G-GLWP0MF9PD",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;