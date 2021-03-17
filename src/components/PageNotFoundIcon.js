import React from 'react';
import './styles/PageNotFoundIcon.css';

import PageNotFound from '../assets/icons/page-not-found.svg';


const PageNotFoundIcon = () => {
    return(
        <figure className="img__container--pagenotfound">
            <img className="img" src={PageNotFound} loading="lazy" tabIndex="0" alt="Illustration of error 404. Page not found!" />
        </figure>
    );
}

export default PageNotFoundIcon;