import React from 'react';
import './styles/AboutMe.css';

import ProfileImage from '../assets/images/profile-image.jpg';

const ComponentLogic = () => {
    const screen = window.screen.width;

    return { screen };
}

const AboutMe = () => {
    const { screen } = ComponentLogic();

    return(
        <div id="aboutme" className="aboutme">
            {/* I really enjoy learning languages and I've been studying a lot of French and English the last couple of years, and I wanted to start learning German or Mandarin Chinese in 2020. However, I like to learn languages by immersion, in other words, by travelling and living in places where people speak those language but the last year I could not travel so my curiosity spiked and I started looking for options to learn new things.
            That's how I came across with programming languages. I realized that they aren't so different to traditional languages so I could dive into studying them using the same principle of immersion by building things.
            So far I'm very comfortable using the next technologies: */}
            <h3 className="aboutme__title">About Me</h3>
            <div className="card mt-5 d-flex flex-column align-items-center">
                <img src={ProfileImage} className="card-img-top rounded-circle mb-5" alt="Diego Rubio's profile avatar" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;