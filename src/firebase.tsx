import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCChGF2FHG3dibjg3r0jV-uCI9UZW_jab4",
  authDomain: "popular-tech-news.firebaseapp.com",
  projectId: "popular-tech-news",
  storageBucket: "popular-tech-news.appspot.com",
  messagingSenderId: "687492697361",
  appId: "1:687492697361:web:f24b604d61a4918d3cd0b0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
