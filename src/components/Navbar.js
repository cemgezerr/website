import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (<>
    <div className='navbar'>
      <p className='Logo'>Hakan Dursun</p>
      <div className='NavLinks'>
        <Link to='/'>Anasayfa</Link>
        <Link to='/hakkimda'>Hakkımda</Link>
        <Link to='/iletisim'>İletişim</Link>
        <Link to='/projeler'>Projeler</Link>
        <Link to='/teknolojiler'>Teknolojiler</Link>
      </div>
    </div>
    </>
  );
}

export default Navbar;