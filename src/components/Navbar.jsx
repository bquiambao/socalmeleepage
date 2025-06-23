import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="/images/socalmeleelogo.png" width="100" height="100"/> SoCal Melee 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/events" className="nav-links" onClick={closeMobileMenu}><span className="nav-link-text">Events</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}><span className="nav-link-text">About</span></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/archive" className="nav-links" onClick={closeMobileMenu}><span className="nav-link-text">Content Archive</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;