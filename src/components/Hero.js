import React from 'react';
import './styles/Hero.css';

import LinkedInIcon from '../assets/icons/icon-linkedin.svg';
import GitHubIcon from '../assets/icons/icon-github.svg';
import GmailIcon from '../assets/icons/icon-gmail.svg';

const Hero = () => {
    return(
        <div className="homepage__hero">
            <h1 className="homepage__title">I am Diego Rubio.</h1>
            <h3 className="homepage__text">I am a Front-end Developer specialized in JavaScript. I like learning language, doing calistecnics/running, reading books about various topics. I enjoy programming web applications because it allows me to be very creative.</h3>
            <ul className="homepage__list--social">
            <li className="homepage__list--item">
                    <a href="https://www.linkedin.com/in/darmdev/" target="_blank" rel="noreferrer"><img className="homepage__icon--social" src={LinkedInIcon} alt="LinkedIn Profile"></img></a>
                </li>
                <li className="homepage__list--item">
                    <a href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer"><img className="homepage__icon--social" src={GitHubIcon} alt="GitHub Profile"></img></a>
                </li>
                <li className="homepage__list--item">
                    <a href="mailto:darubiomunoz@gmail.com" target="_blank" rel="noreferrer"><img className="homepage__icon--social" src={GmailIcon} alt="Gmail Account"></img></a>
                </li>
            </ul>
        </div>
    );
}

export default Hero;