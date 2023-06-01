
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-study-1.firebaseapp.com",
  projectId: "dashboard-study-1",
  storageBucket: "dashboard-study-1.appspot.com",
  messagingSenderId: "554678196100",
  appId: "1:554678196100:web:80414b0c455bb044a16fd1"
};
const app = initializeApp(firebaseConfig);
export  const auth=getAuth()