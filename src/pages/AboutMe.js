import React from 'react';
import './styles/AboutMe.css';

import PersonalData from '../components/PersonalData';

const ComponentLogic = () => {
    const screen = window.screen.width;

    return { screen };
}

const AboutMe = () => {
    const { screen } = ComponentLogic();

    return(
        <div id="aboutme" className="aboutme">
            <h3 className="aboutme__title">About Me</h3>
            <PersonalData />
        </div>
    );
};

export default AboutMe;