import React from 'react'
import './Resume.css';
import  { useEffect } from 'react';

  

export default function Resume() {
    
    useEffect(() => {
        const allIndicator = document.querySelectorAll('.indicator li');
        const allContent = document.querySelectorAll('.content li');
    
        allIndicator.forEach(item => {
          item.addEventListener('click', function () {
            const content = document.querySelector(this.dataset.target);
    
            allIndicator.forEach(i => {
              i.classList.remove('active');
            });
    
            allContent.forEach(i => {
              i.classList.remove('active');
            });
    
            content.classList.add('active');
            this.classList.add('active');
          });
        });
    
        // Clean up the event listeners when the component unmounts
        return () => {
          allIndicator.forEach(item => {
            item.removeEventListener('click', () => {});
          });
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
    return (
        <div className='resume-container' id='Resume'>
            <center>
                <div className='resume-title'>
                    <h3>Resume</h3>
                    <div className='me'>
                        <span className='me-text'>- My Formal Bio Details -</span>
                    </div>
                    <div className='symb2'>
                        <div className='line2'> </div>
                        <div className='circle2'> </div>
                    </div>
                </div>


                <div className="container-resume">
                    <div className="wrapper">
                        <ul className='bigborder'>
                                
                        </ul>
                        <ul className="indicator">
                            <li className="active" data-target="#home"><i className="ph-house"> Education</i></li>
                            <li data-target="#skills"><i className="ph-user-circle">Skills </i></li>
                            <li data-target="#work"><i className="ph-phone"> Work History</i></li>
                            <li data-target="#project"><i className="ph-gear-six"> Projects</i></li>
                            <li data-target="#interest"><i className="ph-gear-six"> Interest </i></li>
                        </ul>
                        <ul className="content">
                            <li className="active" id="home">
                                <div className='education1'>
                                    <div className="main">
                                        <div className="sub-heading">
                                            <div>🔸 Under Graduation</div>                                           
                                        </div>
                                        <div className='year'>(2022-25)</div>
                                    </div>
                                    <div className="detail">
                                            <div>Vishwakarma Institute of Information Technology </div>
                                            <p>Artificial Intelligence & Data Science</p>
                                    </div>
                                    <br/>
                                    <div className="main1">
                                        <div className="sub-heading1">
                                            <div>🔸 Diploma</div>                                           
                                        </div>
                                        <div className='year1'>(2019-22)</div>
                                    </div>
                                    <div className="detail1">
                                            <div>Government Polytechnic College , Nanded </div>
                                            <p>Information Technology</p>
                                    </div>
                                    <br/>
                                    <div className="main">
                                        <div className="sub-heading">
                                            <div>🔸 School</div>                                           
                                        </div>
                                        <div className='year2'>(10th- 2019)</div>
                                    </div>
                                    <div className="detail">
                                            <div>Mhatma Jyotiba Phule Vidhyalay, Kalamnuri  Dist.Hingoli</div>
                                            
                                    </div>

                               </div> 
                             </li>
                            <li id="skills">
                              <div className='skC'>
                              <p className='skill-title'>DSA</p><div class="skill-container"><div class="skills html">90%</div></div>
                              <p className='skill-title'>DBMS</p><div class="skill-container"><div class="skills html">90%</div></div>
                              <p className='skill-title'>Tablue</p><div class="skill-container"><div class="skills html">90%</div></div>
                                <br/>
                                <br/>
                                <h1>Programming Languages</h1>
                                
                                <p className='skill-title'>Java</p><div class="skill-container"><div class="skills html">90%</div></div>
                                

                                <p className='skill-title'>C++</p>
                                <div class="skill-container">
                                <div class="skills css">80%</div>
                                </div>

                                <p className='skill-title'>C</p>
                                <div class="skill-container">
                                <div class="skills js">65%</div>
                                </div>

                                <p className='skill-title'>Python</p>
                                <div class="skill-container">
                                <div class="skills php">60%</div>
                                </div>
                                </div>
                                <br/><br/>
                              <div className='skC'>
                                <h1>WEB DEVELOPMENT</h1>
                                
                                <p className='skill-title'>HTML</p><div class="skill-container"><div class="skills html">90%</div></div>
                                

                                <p className='skill-title'>CSS</p>
                                <div class="skill-container">
                                <div class="skills css">80%</div>
                                </div>

                                <p className='skill-title'>JavaScript</p>
                                <div class="skill-container">
                                <div class="skills js">65%</div>
                                </div>

                                <p className='skill-title'>React</p>
                                <div class="skill-container">
                                <div class="skills php">60%</div>
                                </div>
                                </div>
                            </li>
                            <li id="work">
                                <h1>Experience</h1>
                                    <div className="mainX">
                                        <div className="sub-headingX">
                                            <div>🔸 IEEE Student Branch</div>                                           
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='yearX'>(feb 2023)</div>
                                    </div>
                                    <div className="detailX">
                                            <div>Assosiate Technical Head</div>
                                            
                                    </div>
                                    <br/>
                                    <div className="mainX">
                                        <div className="sub-headingX">
                                            <div>🔸 OASIS Infobyte </div>                                           
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='yearX'>(Apr - May 23)</div>
                                    </div>
                                    <div className="detailX">
                                            <div>Web Devlopment and Designing Intern</div>
                                            
                                    </div>
                                <br/>
                                <div className="mainX">
                                        <div className="sub-headingX">
                                            <div>🔸 SUMAGO INFOTECH Pvt. Ltd </div>                                           
                                        </div>
                                        <div className='yearX'>( present )</div>
                                    </div>
                                    <div className="detailX">
                                            <div>Software Engineer intern</div>
                                            
                                    </div>

                             </li>
                            <li id="project">
                                <h1>Projects</h1>
                            </li>

                            <li id="interest">
                                <h1>Settings</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Velit quaerat magnam sit, nobis sed cum eius voluptatem quis facilis sunt, quia? Non atque, facere obcaecati veniam! Impedit atque, facilis similique doloribus quidem quibusdam quod! Quam odit quasi quia accusantium natus eos accusamus sequi repellat modi reiciendis vitae provident tenetur sint tempora quaerat expedita facere, assumenda quos consequatur minima quod deleniti.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias quasi est expedita, a pariatur deleniti cum reiciendis similique cupiditate?</p>
                            </li>
                        </ul>
                    </div>
                </div>




            </center>
        </div>
    )
}