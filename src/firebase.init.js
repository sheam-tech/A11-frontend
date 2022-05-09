
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAsY2-yMsQ7ZOYEZtRGeYgg4uQPbQ6WOtY",
  authDomain: "ware-house-control.firebaseapp.com",
  projectId: "ware-house-control",
  storageBucket: "ware-house-control.appspot.com",
  messagingSenderId: "572704198674",
  appId: "1:572704198674:web:a385ede3986af9860248cb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth



