import React from 'react';
import './styles/PersonalData.css';

import ProfileImage from '../assets/images/profile-image.jpg';

const PersonalData = () => {
    return (
        <div className="card mt-5 d-flex flex-column align-items-center">
                <img src={ProfileImage} className="card-img-top rounded-circle mb-5" alt="Diego Rubio's profile avatar" />
                <div className="card-body">
                    <p className="card-text">
                        I really enjoy learning languages and I've been studying a lot of French and English the last couple of years, and I wanted to start learning German or Mandarin Chinese in 2020. However, I like to learn languages by immersion, in other words, by travelling and living in places where people speak those language but the last year I could not travel, due to the pandemic, so my curiosity spiked and I started looking for options to learn new things.
                    </p>
                    <p className="card-text">
                        That's how I came across with programming languages. I realized that they aren't so different to traditional languages so I could dive into studying them using the same principle of immersion by building things.
                    </p>
                    <p className="card-text">
                        In the process of learning to code, I started to meet other programmers and software developers, which introduced me more into different web development communities and I felt awesome been around people that shared the same passion for learning as me.
                        That's when thanks to a friend, made in the platzi's community for front-end students, I realized that there were very good chances of pursuing a career as web developer.
                    </p>
                    <p>
                        <i className="quotes">I felt the call, and I just couldn't wait to answer "Yes"!</i>
                    </p>
                </div>
            </div>
    );
}

export default PersonalData;