import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

import Logo from '../assets/images/logo.svg';
import HamburgerIcon from '../assets/icons/hamburger-icon.svg';
import CloseIcon from '../assets/icons/close-icon.svg';

const ComponentLogic = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        if(!clicked) setClicked(true);
        else setClicked(false);
    }

    return { handleClick, clicked }
}

const Header = () => {
    const { handleClick, clicked } = ComponentLogic();

    return (
        <nav className="navbar navbar-expand-lg position-sticky top-0 start-0 end-100">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">
                    <img className="navbar__logo" src={Logo} alt="Diego Rubio's Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleClick()}>
                    <img className="navbar__menuicon" src={HamburgerIcon} alt="Press to show the website pages" />
                </button>
                <div id="navbarNav" className={`navbar__menutab collapse ${clicked ? '' : 'invisible'} navbar-collapse position-absolute d-flex flex-column`}>
                    <img className="navbar__closeicon" src={CloseIcon} alt="Press to hide the website pages" onClick={() => handleClick()} />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutme">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
} 

export default Header;