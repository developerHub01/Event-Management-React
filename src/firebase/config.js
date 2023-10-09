import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCw5ttSdIBoQdQopV25LHeA2K0_Q2stpsw",
//   authDomain: "event-management-26e83.firebaseapp.com",
//   projectId: "event-management-26e83",
//   storageBucket: "event-management-26e83.appspot.com",
//   messagingSenderId: "267022829465",
//   appId: "1:267022829465:web:4e3bf179fb717768b3f508",
//   measurementId: "G-9B5ZGC898D",
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
