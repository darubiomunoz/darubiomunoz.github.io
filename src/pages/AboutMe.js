import React from 'react';
import './styles/AboutMe.css';

import backgroundSmall from '../assets/images/aboutme-background-small.jpg';
import backgroundMedium from '../assets/images/aboutme-background-medium.jpg';
import backgroundLarge from '../assets/images/aboutme-background-large.jpg';
import Header from '../components/Header';

const ComponentLogic = () => {
    const screen = window.screen.width;

    return { screen };
}

const AboutMe = () => {
    const { screen } = ComponentLogic();

    return(
        <div className="aboutme">
            <picture className="aboutme__container">
                <source srcSet={backgroundLarge} media="(min-width: 0px)"></source>
                <source srcSet={backgroundMedium} media="(min-width: 500px)"></source>
                <source srcSet={backgroundSmall} media="(min-width: 1024px)"></source>
                <img className="aboutme__background" src={backgroundSmall} loading="lazy" alt="background images" />
            </picture>
            <Header />
            <div className="aboutme__hero">
                <h1 className={`aboutme__title color-option4 ${screen >= 280 ? 'mt-5' : ''}`} tabIndex="0">About Me</h1>
                <p className="aboutme__text mt-3" tabIndex="0">I really enjoy learning languages and I've been studying a lot of French and English the last couple of years, and I wanted to start learning German or Mandarin Chinese in 2020. However, I like to learn languages by immersion, in other words, by travelling and living in places where people speak those language but the last year I could not travel so my curiosity spiked and I started looking for options to learn new things.</p>
                <p className={`aboutme__text mt-3 color-option4 ${screen < 280 ? 'invisible' : ''}`} tabIndex="0">That's how I came across with programming languages. I realized that they aren't so different to traditional languages so I could dive into studying them using the same principle of immersion by building things.</p>
                <p className={`aboutme__text mt-3 ${screen < 280 ? 'invisible' : ''}`} tabIndex="0">So far I'm very comfortable using the next technologies:</p>
            </div>
            <div className="aboutme__container--badges mt-2">
                <img className="aboutme__badges" alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                <img className="aboutme__badges" alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
                <img className="aboutme__badges" alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
                <img className="aboutme__badges" alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/>
                <img className="aboutme__badges" alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                <img className="aboutme__badges" alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
                <img className="aboutme__badges" alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/>
                <img className="aboutme__badges" alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
                <img className="aboutme__badges" alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                <img className="aboutme__badges" alt="NPM" src="https://img.shields.io/badge/NPM%20-%23F05033.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
                <img className="aboutme__badges" alt="Canva" src="https://img.shields.io/badge/Canva%20-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white"/>
            </div>
        </div>
    );
};

export default AboutMe;