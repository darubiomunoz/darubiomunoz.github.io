import React from 'react';
import './styles/DevelopmentInfo.css';

const DevelopmentInfo = () => {
    return(
        <section className="development__body">
            <h1 className="development__title" tabIndex="0">Coming Soon</h1>
            <h4 className="development__subtitle" tabIndex="0">The website is under development</h4>
            <a className="development__calltoaction" href="https://github.com/darubiomunoz" target="_blank" rel="noreferrer">Visit my github</a>
        </section>
    );
}

export default DevelopmentInfo;