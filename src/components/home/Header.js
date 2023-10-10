import '../../css/Header.css';
import { GetZalozky } from '../../firebase/index';
import React, { useEffect, useState } from 'react';

function Header(username) {
  const [zalozky, setZalozky] = useState({});

  useEffect(() => {
    GetZalozky(username, (data) => {
      setZalozky(data);
    });
  }, [username]);

  return (
    <div className='navbar_block'>
      <div className='Logo'>TODOApp</div>
      <div className='User'></div>
      <div className='Navbar'>
      {Object.keys(zalozky).map((key, index) => (
          <button key={index}>{key}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;
