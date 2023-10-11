import '../../css/Header.css';
import React from 'react';
import './../../App.css';
import { AddZalozka } from '../../firebase';

function Header(parametry) {

    const showTODOList = (event) =>{
        const todolist = document.getElementsByClassName("zalozkaBlock");
        Array.from(document.getElementsByClassName('active')).forEach(button => {
          button.classList.remove('active');
        });
        event.target.classList.add('active');
        for(let i = 0; i < todolist.length; i++) {
            if(todolist[i].id === event.target.id){
                todolist[i].setAttribute('style', 'display: flex;');
            }
            else{
                todolist[i].setAttribute('style', 'display: none;');
            }
        }
    }

    const addZalozka = (event) =>{
      let textarea = document.getElementsByClassName('textarea zalozka')[0].value;
      if(textarea){
        AddZalozka(parametry.username, textarea);
      }
  }


  return (
    <div className='navbar_block'>
      <div className='Logo'>TODOApp</div>
      <div className='User'></div>
      <div className='Navbar'>
        {Object.keys(parametry.zalozky).map((key, index) => (
          <button onClick={showTODOList} key={index} id={key} >{key}</button>
        ))}
      </div>
      <div className='pridejZalozkuBlok'>
        <textarea className={'textarea zalozka'}></textarea>
        <button className='pridejZalozku' onClick={addZalozka}>Přidej Zalozku</button>
      </div>
    </div>
  );
}

export default Header;



