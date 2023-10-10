import "./App.css";
import "./components/home/Header";
import Header from "./components/home/Header";
import React, { useEffect, useState } from "react";
import { GetZalozky, LoginUser, AddTodo } from "./firebase/index";

function App() {
  const username = "User1";
  const [userData, setUserData] = useState(null);
  const [zalozky, setZalozky] = useState(null);

  const addtodo = (event) =>{
    console.log(event.target.className)
    AddTodo(username, event.target.className, 'poznámka');
}

  useEffect(() => {
    LoginUser(username, (data) => {
      setUserData(data);
    });
  }, []);

  useEffect(() => {
    GetZalozky(username, (data) => {
      setZalozky(data);
    });
  }, [username]);
  

  return (
    userData &&
    zalozky && (
      <div className="App">
        <header className="App-header">
          <Header zalozky={zalozky} />
        </header>
        <main className="App-main">
          {Object.keys(zalozky).map((key, index) => (
            <div className="zalozkaBlock" id={key}>
                {zalozky[key].map((key, index) => (
                  <div key={index}>{key}</div>
                ))}
                <button className={key} onClick={addtodo}>Add</button>
              </div>
          ))}
        </main>
        <footer className="App-footer"></footer>
      </div>
    )
  );
}

export default App;
