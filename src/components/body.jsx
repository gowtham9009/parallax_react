import React,{useEffect, useState} from 'react';
import '../css/body.css';
import '../js/body.js'
import '../components/header.jsx'
import Header from '../components/header.jsx';


const Body = () => {
    const [scroll,setScroll]=useState(0);

    useEffect(()=>{
      const title = document.querySelector(".title");
      const description = document.querySelector(".description");
      const content = document.querySelector(".content");
      const about = document.querySelector(".about")
      var header_height= content.offsetHeight;
      window.addEventListener('scroll',()=>{
        setScroll(window.pageYOffset);
        console.log(scroll);
        title.style.top = `${50-scroll/50}%`
        title.style.opacity = `${-scroll/(header_height/0.9)+1}`;
        description.style.opacity = `${scroll/790}`
        document.querySelector('.effect-1').style.bottom=`${scroll/10}px`
      })
    },[scroll])
    
    return (
      <>
        <Header />
        <div className='wrapper'>
            <div className='content'>
              <div className='effect-1'></div>
              <h1 className='title'> 
                <span className='big-title'> COSMOS. </span>
              </h1>    
              <div className='shadow_1'></div>  
              <div className='effect-2' id="effect-2"></div>
            </div>
            <div className='about' id='about'>
              <h1>About</h1>
              <p className='description'>
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
              </p>
            </div>
            <div className='new' id='new'>
              <h1>New</h1>
              <p className='description'>
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
              </p>
            </div> 
            <div className='visit' id='visit'>
              <h1>Visit</h1>
              <p className='description'>
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
              </p>
            </div>  
            <div className='contact' id='contact'>
              <h1>Contact</h1>
              <p className='description'>
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
                ##########################
              </p>
            </div>    
        </div>
      </>
    );
}

export default Body;
