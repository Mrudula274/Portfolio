import React from 'react'
import Typical from 'react-typical';
import './Profile.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Profile() {
    return (
        <BrowserRouter>
            <div className='profile-container'>
                <center>
                    <div className='profile-header'>
                        <div className='header-title'>
                            <b><span>PORTFOLIO</span></b>
                        </div>
                        <div className='header-subs'>
                            <ul>
                                <li><Link to="#ContactMe">Contact Me</Link></li>
                                <li><Link to="#Testimonial">Testimonial</Link></li>
                                <li><Link to="#Resume">Resume</Link></li>
                                <li><Link to="#AboutMe">About Me</Link></li>
                                <li><Link to="#Home">Home</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className='profile-parent'>
                         <div className='profile-details'>
                            <div className='colz'>
                                <div className='colz-icon'>
                                    <a href='#'>
                                        <i className='fa fa-facebook-square'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-google-plus-square'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </div>

                            </div>
                            <div className='profile-details-name'>
                                <span className='primary-text'>
                                    {' '}
                                    Hello, I'M <span className='highlighted-text'>Mrudula</span>
                                </span>
                            </div>
                            <div className='profile-details-role'>
                                <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Enthusiastic Dev😎", 1000,
                                                "FrontEnd developer💻", 1000,
                                                "Python Developer🐍", 1000,
                                                "Java Developer😀", 1000,
                                            ]}
                                        />
                                    </h1>
                                    <span className='profile-role-tagline'>
                                        Knack of building application with front and back end operations.
                                    </span>
                                </span>
                            </div>
                            <div className='profile-options'>
                                <button className='btn primary-btn'>Resume{" "}</button>
                                <a href='Mrudula_Wakodkar_CV_UPDATED.pdf'><button className='btn highlighted-btn'>Get Resume</button></a>
                            </div>
                     </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>
            </div>
        </center>
        </div >
        </BrowserRouter >
    );
}
