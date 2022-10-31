import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPmae_IPQYA-B6IHfIuxSTXx2d6pmOHlw",
  authDomain: "miniblog-df8c6.firebaseapp.com",
  projectId: "miniblog-df8c6",
  storageBucket: "miniblog-df8c6.appspot.com",
  messagingSenderId: "762622577878",
  appId: "1:762622577878:web:3e3e0c6de48b8ef24f4d77"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db} 