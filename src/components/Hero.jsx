import {React, useState, useContext} from 'react';
import './Hero.css'
import LastNightTop3 from './LastNightTop3';

function Hero({ scrollToRegional }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <div className='hero-container'>
        <img className='hero-image' src='/images/finalverdugo.jpg' width="100%"/>
        <h1>WELCOME TO SOCAL MELEE</h1>

        {/* Container for button and social menu positioning */}
        <div className="button-social-container">
            {/* Get Started Button */}
            <button 
                className={`get-started-button ${menuOpen ? 'fade-out' : 'fade-in'}`} 
                onClick={() => setMenuOpen(true)}
            > 
                <i className="fa-solid fa-bars"></i> Get Started 
            </button>

            {/* Social Menu */}
            <div className={`social-menu-container ${menuOpen ? 'fade-in' : 'fade-out'}`}>
                <div className="social-menu">
                    <a href="https://discord.gg/5A9z8feZDW" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fa-brands fa-discord social-logo"></i>
                    </a>
                    <a href="https://x.com/socalmelee" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fa-brands fa-twitter social-logo"></i>
                    </a>
                    <a href="https://www.facebook.com/groups/SSBMsocal" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fa-brands fa-facebook social-logo"></i>
                    </a>
                    <a href="https://www.start.gg/hub/socal-melee-community" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/images/startgglogo.png" className="start-gg-logo"/>
                    </a>
                </div>
            </div>

            {/* Delayed Text Message */}
            <div className={`delayed-text-container ${menuOpen ? 'fade-in' : 'fade-out'}`}>
                <p 
                    className="delayed-text" 
                    onClick={scrollToRegional}
                >
                    Looking for your local community?
                </p>
            </div>

        </div>

        <LastNightTop3/>
        
        <p className='photo-credit'>Credit: @Jeff_in_3D / jeffin3d.pixieset.com</p>
      </div>
    );
}

export default Hero;