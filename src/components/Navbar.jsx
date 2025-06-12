import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src="/images/socalmeleelogo.png" width="100" height="100"/> SoCal Melee 
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to="/events" className="nav-links"><span className="nav-link-text">Events</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className="nav-links"><span className="nav-link-text">About</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/archive" className="nav-links"><span className="nav-link-text">Content Archive</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;