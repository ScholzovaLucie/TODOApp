import "./App.css";
import "./css/Main.css"
import "./components/home/Header";
import Header from "./components/home/Header";
import React, { useEffect, useState } from "react";
import { GetZalozky, LoginUser, AddTodo } from "./firebase/index";

function App() {
  const username = "User1";
  const [userData, setUserData] = useState(null);
  const [zalozky, setZalozky] = useState(null);

  const addtodo = (event) =>{
    let textarea = document.getElementsByClassName('textarea ' + event.target.className)[0].value;
    if(textarea){
      AddTodo(username, event.target.className, textarea);
    }
    
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
                {Array(zalozky[key]).map((key, index) => (
                  <div key={index}>{key}</div>
                ))}
                <div className="pridejPoznamku">
                  <textarea className={'textarea ' + key}></textarea>
                  <button className={key} onClick={addtodo}>Přidej</button>
                </div>
              </div>
          ))}
        </main>
        <footer className="App-footer"></footer>
      </div>
    )
  );
}

export default App;
