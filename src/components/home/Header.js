import '../../css/Header.css';
import React from 'react';
import showTODOList from '../../App';



function Header(zalozky) {
    const showTODOList = (event) =>{
        const todolist = document.getElementsByClassName("zalozkaBlock");
        for(let i = 0; i < todolist.length; i++) {
            if(todolist[i].id === event.target.id){
                todolist[i].setAttribute('style', 'display: flex;');
            }
            else{
                todolist[i].setAttribute('style', 'display: none;');
            }
        }
    }


  return (
    <div className='navbar_block'>
      <div className='Logo'>TODOApp</div>
      <div className='User'></div>
      <div className='Navbar'>
        {Object.keys(zalozky.zalozky).map((key, index) => (
          <button onClick={showTODOList} key={index} id={key} >{key}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;



