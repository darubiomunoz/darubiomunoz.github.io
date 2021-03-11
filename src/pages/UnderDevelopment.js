import React from 'react';
import './styles/UnderDevelopment.css';

import underDevelopment from '../assets/icons/under_development.svg';

const UnderDevelopment = () => {
    return (
        <main className="development">
            <figure className="img__container--development">
                <img className="img" src={underDevelopment} loading="lazy" alt="Icon the programmer developing a this website, right now!" />
            </figure>
            <section className="development__body">
                <h1 className="development__title">Coming Soon</h1>
                <h4 className="development__subtitle">The website is under development</h4>
                <a className="development__calltoaction" href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer">Visit GitHub Account</a>
            </section>
        </main>
    );
}

export default UnderDevelopment;