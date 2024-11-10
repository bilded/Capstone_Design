import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFklxRd5TeKoJRuvacUeHGyYe3Gu8nrUw",
  authDomain: "capstone-design-kimpark.firebaseapp.com",
  projectId: "capstone-design-kimpark",
  storageBucket: "capstone-design-kimpark.appspot.com",
  messagingSenderId: "1092304109254",
  appId: "1:1092304109254:web:4891bdbbc5788fffc061c7",
  measurementId: "G-F3GTPCQYM2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);