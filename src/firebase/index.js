import { getDatabase, ref, onValue, child, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBauwmSkn3ELPHV0K1XziJ4dW5NSR6JJlY",
  authDomain: "todoapp-68a47.firebaseapp.com",
  databaseURL: "https://todoapp-68a47-default-rtdb.firebaseio.com",
  projectId: "todoapp-68a47",
  storageBucket: "todoapp-68a47.appspot.com",
  messagingSenderId: "834781669902",
  appId: "1:834781669902:web:01b85b90d2d3525db4aa5f",
  measurementId: "G-N8P08X4RZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function LoginUser(username, setData) {
    const db = getDatabase();
    const stateRef = ref(db, "/" + username);
    onValue(stateRef, (snapshot) => {
      setData(snapshot.val());
    });
}

export function CreateUser(username, heslo) {
  const db = getDatabase();
  set(ref(db, "/" + username), {
    username: username,
    heslo: heslo,
  });
}

export function GetZalozky(username, setData) {
  const db = getDatabase();
  const stateRef = ref(db, "/" + username + "/zalozky");
  onValue(stateRef, (snapshot) => {
    setData(snapshot.val());
  });
}
