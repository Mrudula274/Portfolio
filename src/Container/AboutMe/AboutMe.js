import React from 'react'
import './AboutMe.css'
export default function AboutMe() {
  return (
    <div className='aboutme-container' id='AboutMe'>
     <center>
        <div className='aboutme-parent'>
            <div className='aboutme-title'>
                <h3>ABOUT ME</h3>
                <span className='me-text'>Why choose me ?</span>
                <div className='me'>
                    <div className='symb'>
                        <div className='line'> </div>
                        <div className='circle'> </div>
                    </div>
                </div>
            </div>
            <div className='aboutme-box'>
                <div className='pic'>
                <div className='aboutme-picture'>
                    
                </div>
                </div>
                <div className='aboutme-sum'>
                    <div className='me-details'>
                        <span>Full stack web and mobile developer with background
                            knowledge of MERN stacks with redux, along with a knack of
                            building applications with utmost efficiency. Strong
                            professional with a BSC willing to be an asset for an
                            organization.
                        </span> 
                    </div>
                    <div className='highlights'>
                        <span>Here are few highlights</span>
                        <ul className='ul-li'>
                            <li className='orange-bullet'>Full Stack web and mobile development</li>
                            <li className='orange-bullet'>Interactive Front End as per the design</li>
                            <li className='orange-bullet'>React and React Native</li>
                            <li className='orange-bullet'>Redux for State Mnanagement</li>
                            <li className='orange-bullet'>Building REST API</li>
                            <li className='orange-bullet'>Managing database</li>
                        </ul>
                    </div>
                    <div className='about-button'>
                    <button className='btn primary-btn'>Resume{" "}</button>{"  "}
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </div>
                </div>
                
            </div>
            
        </div> 
        </center>     
    </div>
  )
}
