import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
 

import { useContextCSS } from './useContext.css'

 

export const NavBar = () => {
     
    const [isActive, setActive] = useState(false);
    
    
    return (
        <nav className="header-nav">
            <Link to="/" className="Link Link-icon">useContext</Link>
            <div className="nav-links">
                <NavLink exact="true" to="/" className={(navData) => (navData.isActive ? "Link active" : 'Link')}>Home</NavLink>
                <NavLink exact="true" to="/about" className={(navData) => (navData.isActive ? "Link active" : 'Link')}>About</NavLink>
                <NavLink exact="true" to="/login" className={(navData) => (navData.isActive ? "Link active" : 'Link')}>Login</NavLink>    
            </div>
        </nav>
        
    )
}
