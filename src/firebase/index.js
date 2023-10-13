import { getDatabase, ref, onValue, remove, set, update, doc } from "firebase/database";
import { initializeApp } from "firebase/app";

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

export function GetZalozka(username, zalozka, setData) {
    const db = getDatabase();
    const stateRef = ref(db, "/" + username.data + "/zalozky/" + zalozka);
    onValue(stateRef, (snapshot) => {
      setData(snapshot.val());
    });
  }

  export function AddTodo(username, zalozka, poznamka){
      const db = getDatabase();
  
    // Get a key for a new Post.
    let id = 0;

    const stateRef = ref(db, "/" + username + "/zalozky/" + zalozka);
    onValue(stateRef, (snapshot) => {
      id = Object.keys(snapshot.val()).length;
    });
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/' + username + "/zalozky/" + zalozka + "/" + id] = poznamka;
  
    return update(ref(db), updates);
  }

  export function AddZalozka(username, zalozka){
    const db = getDatabase();

    const firstData = {
      key: 'value'
    }

    const updates = {};
    updates['/' + username + "/zalozky/"  + zalozka] = firstData;
  
    return update(ref(db), updates);
   
  }


  export function DeleteTODO(username, zalozka, data){
    const db = getDatabase();
    let id = GetTODOID(username, zalozka, data);
    let todoRef = ref(db, "/" + username + "/zalozky/" + zalozka + "/" + id);
    remove(todoRef);
  }


  function GetTODOID(username, zalozka, data){
    const db = getDatabase();
    const stateRef = ref(db, "/" + username + "/zalozky/" + zalozka + "/");
    onValue(stateRef, (snapshot) => {
      Object.entries(snapshot.val()).forEach(value => {
          //if (data in value){
            if(value[1] == data){
              return value[10];
            }
            
          //}
      })
      //return Object.keys(snapshot.val());
    });
  
  }

