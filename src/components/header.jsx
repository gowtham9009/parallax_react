import React from 'react';
import '../css/header.css';
import '../components/body.jsx'
//import '../js/body.js';

const Header = () => {
    return (
      <div className = 'container'>
        <nav className = 'navbar'>
          <div className='logo'>
            the
          <span className='big-logo'>
            BRAND.
            </span>
          </div>
          <ul className = 'lists' dataspeed = '0.02'>
            <li href = "#">
              <a href = "#about" className='About'>
                About
              </a>
            </li>
            <li href = "#">
              New!
            </li>
            <li href = "#">
              Visit
            </li>
            <li href = "#">
              Contact
            </li>
          </ul>
        </nav>
       </div>
    );
}

export default Header;
