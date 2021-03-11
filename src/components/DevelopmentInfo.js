import React from 'react';
import './styles/DevelopmentInfo.css';

const DevelopmentInfo = () => {
    return(
        <section className="development__body">
            <h1 className="development__title">Coming Soon</h1>
            <h4 className="development__subtitle">The website is under development</h4>
            <a className="development__calltoaction" href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer">Visit GitHub Account</a>
        </section>
    );
}

export default DevelopmentInfo;