import "./App.css";
import "./css/Main.css"
import "./components/home/Header";
import Header from "./components/home/Header";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons'
import { GetZalozky, LoginUser, AddTodo, DeleteTODO } from "./firebase/index";

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

const removeTODO = (event) =>{
  DeleteTODO(username, event.target.classList[1], event.target.id);
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
          <Header zalozky={zalozky} username={username} />
        </header>
        <main className="App-main">
          {Object.keys(zalozky).map((key) => (
            <div className="zalozkaBlock" id={key}>                
                {Object.values(zalozky[key]).map((zalozka) => (
                  <>
                  {zalozka !== 'value' &&
                  <div className={"todoBlok " + key} id={zalozka}>
                    <div className={zalozka}>{zalozka}</div>
                    <button onClick={removeTODO}className={"btnOdeberTODO " + key} id={zalozka}><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                  
                  }
                  </>
                ))}
                <div className="pridejPoznamku">
                  <textarea className={'textarea ' + key}></textarea>
                  <button className={key} onClick={addtodo}><FontAwesomeIcon icon={faAdd} /></button>
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
