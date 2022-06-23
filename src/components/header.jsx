import React, {useEffect,  useState} from 'react';
import '../css/header.css';
import '../components/body.jsx'
//import '../js/body.js';

const Header = () => {
    // const [hovered, setHovered] = useState(false)
    
    // useEffect(()=>{
    //   const lists = document.querySelector('li');
    //   const links = document.querySelector('.links');
    //   const Hover = () =>{
        
    //     if(lists.onmouseover){
    //       setHovered(true)
    //       links.classList.toggle("links_hover")
    //     }
    //     else{
    //       setHovered(false)
    //       links.classList.toggle("links")
    //     }
    //   }
    //   window.addEventListener('mouseover',Hover)
    // },[hovered])
    

    return (
      <div className = 'container'>
        <nav className = 'navbar'>
          <a href="#">
            <div className='logo'>
              the
              <span className='big-logo'>
                COSMOS.
              </span>
            </div>
          </a>
          <ul className = 'lists'>
            <a href = "#about" className='links'>
              <li href = "#">
                  About
              </li>
            </a>
            <a href="#new" className='links'>
              <li href = "#">
                  New!
              </li>
            </a>
            <a href="#visit" className='links'>
              <li href = "#visit">
                Visit
              </li>
            </a>
            <a href="#contact" className='links'>
              <li href = "#contact">
                Contact
              </li>
            </a>
          </ul>
        </nav>
       </div>
    );
}

export default Header;
