import React from 'react';
import '../css/body.css';
import '../js/body.js'
import '../components/header.jsx'

const Body = () => {
    return (
      <div>
          <section className='content'>
            <div className='effect-1'></div>
              <div className='shadow_1'></div>
              <nav>
                <h1 className='title'> 
                <span className='big-title'> COSMOS. </span>
                </h1>
            </nav>
          </section>
          <div className='effect-2' id="effect-2"></div>
            <nav>
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
            </nav>
      </div>
    );
}

export default Body;
