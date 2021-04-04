import React from 'react';
import './styles/Hero.css';

import LinkedInIcon from '../assets/icons/icon-linkedin.svg';
import GitHubIcon from '../assets/icons/icon-github.svg';
import GmailIcon from '../assets/icons/icon-gmail.svg';

const Hero = () => {
    return(
        <div className="hero">
            <h1 className="hero__title" tabIndex="0">I am Diego Rubio.</h1>
            <h3 className="hero__text" tabIndex="0">I am a Front-end Developer &#128187; specialized in JavaScript. I like learning languages &#127544;, doing calistecnics/running &#127939;, reading books about various topics &#128218; and also I really enjoy programming web applications because it allows me to be very creative in finding solutions during the development process &#127776;.</h3>
            <ul className="hero__list--social">
                <li className="hero__list--item">
                    <a href="https://www.linkedin.com/in/darmdev/" target="_blank" rel="noreferrer">
                        <img className="hero__icon--social" src={LinkedInIcon} alt="LinkedIn. Press enter to visit my LinkedIn profile" />
                    </a>
                </li>
                <li className="hero__list--item">
                    <a href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer">
                        <img className="hero__icon--social" src={GitHubIcon} alt="GitHub. Press enter to visit my GitHub profile" />
                    </a>
                </li>
                <li className="hero__list--item">
                    <a href="mailto:darubiomunoz@gmail.com" target="_blank" rel="noreferrer">
                        <img className="hero__icon--social" src={GmailIcon} alt="Gmail. Press enter to send me an email to my Gmail account" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Hero;