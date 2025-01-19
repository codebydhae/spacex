import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav ClassName="navbar">
        <ul>
            <li><Link to="/" ClassName="links">Home</Link></li>
            <li><Link to="/matrix" ClassName="links">Matrix</Link></li>
            <li><Link to="/alchemy" ClassName="links">Alchemy</Link></li>
        </ul>
    </nav>

    );
};

export default NavBar;