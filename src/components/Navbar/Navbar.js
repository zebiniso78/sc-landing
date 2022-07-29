import React from 'react';
import Logo from '../../assets/images/logo_sc.png';

function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <img src={Logo} alt="Logo" />
          <div>
            <h1>Smart Campus</h1>
            <p>University of Future</p>
          </div>
        </div>
        <ul>
          <li>about</li>
          <li>about</li>
          <li>about</li>
          <li>about</li>
          <li>about</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
