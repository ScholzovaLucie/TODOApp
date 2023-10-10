import "./App.css";
import "./components/home/Header";
import Header from "./components/home/Header";
import Login from "./components/login/Login";
import { LoginUser } from "./firebase/index";
import React, { useEffect, useState } from "react";


function App() {
  const username = 'User1';
  const [userData, setUserData] = useState({});

  useEffect(() => {
    LoginUser(username, (data) => {
      setUserData(data);
    });
  }, [username]);

  return (
    <div className="App">
      <header className="App-header">
        <Header data={userData} />
      </header>
      <main className="App-main"></main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
