import React, { useState } from 'react';
import './styles/Header.css';

import Logo from '../assets/images/logo.svg';

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-sticky top-0 start-0 end-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleClick()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" className={`collapse ${clicked ? 'show' : 'hide'} navbar-collapse`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
} 

export default Header;