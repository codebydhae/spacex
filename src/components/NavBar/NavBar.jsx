import React, { useRef } from 'react';
// hooks
import useNavigation from './../../hooks/useNavigation';
// style
import './style.scss';


const NavBar = () => {
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);

    return (
        <div ClassName="container-fluid" ref={navRef}></div>

    );
};

export default NavBar;