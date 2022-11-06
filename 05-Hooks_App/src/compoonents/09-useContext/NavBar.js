import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
 

import { useContextCSS } from './useContext.css'

 

export const NavBar = () => {
     
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };
    
    return (
        <nav className="header-nav">
            <Link to="/" className="Link Link-icon">useContext</Link>
            <div className="nav-links">
                <NavLink exact activeClassName="active" to="/" className="Link">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" className="Link">About</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="Link">Login</NavLink>    
            </div>
        </nav>
        
    )
}
