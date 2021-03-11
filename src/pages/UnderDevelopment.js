import React from 'react';
import { Link } from 'react-router-dom';

import underDevelopment from '../assets/icons/under_development.svg';

const UnderDevelopment = () => {
    return (
        <main>
            <figure>
                <img className="" src={underDevelopment} loading="lazy" alt="Icon the programmer developing a this website, right now!" />
            </figure>
            <section>
                <h1>Coming Soon</h1>
                <h3>The website is under development</h3>
                <p>In the meantime visit my <a href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer">GitHub Account</a></p>
            </section>
        </main>
    );
}

export default UnderDevelopment;