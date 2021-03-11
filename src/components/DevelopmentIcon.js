import React from 'react';
import './styles/DevelopmentIcon.css';

import underDevelopment from '../assets/icons/under_development.svg';


const DevelopmentIcon = () => {
    return(
        <figure className="img__container--development">
            <img className="img" src={underDevelopment} loading="lazy" alt="Icon the programmer developing a this website, right now!" />
        </figure>
    );
}

export default DevelopmentIcon;