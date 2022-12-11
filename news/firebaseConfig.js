import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiRyDpkbBgB8b90AqR5Bl6CI4Acfzeb44",
  authDomain: "news-3fe7e.firebaseapp.com",
  projectId: "news-3fe7e",
  storageBucket: "news-3fe7e.appspot.com",
  messagingSenderId: "176425895356",
  appId: "1:176425895356:web:d065a0226506bdbe9e17b9",
  measurementId: "G-L3JTCP4E73"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);