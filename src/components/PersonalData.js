import React from 'react';
import './styles/PersonalData.css';

const PersonalData = () => {
    return (
      <div className="card mt-5 d-flex flex-column align-items-center">
        <img
          src="https://i.postimg.cc/ydtDTk1L/CV.png"
          className="card-img-top rounded-circle mb-5"
          tabIndex="0"
          alt="Selfie profile avatar of myself with the Eiffel tower as background."
        />
        <div className="card-body">
          <p className="card-text" tabIndex="0">
            I really enjoy learning languages &#127542; and I've been studying a
            lot of French and English the last couple of years, and I wanted to
            start learning a new language in 2020. However, I like to learn
            languages by immersion, in other words, by travelling &#128747; and
            living in places where people speak those language but the last year
            I could not travel, due to the pandemic, so my curiosity spiked and
            I started looking for &#127760; options to learn new things.
          </p>
          <p className="card-text" tabIndex="0">
            That's how I came across with programming languages &#127756;. I
            realized that they aren't so different to traditional languages so I
            could dive into studying them using the same principle of immersion
            by building things &#127981;.
          </p>
          <p className="card-text" tabIndex="0">
            In the process of learning to code, I started to meet other
            programmers and software developers, whom introduced me more into
            different web development communities and I felt awesome been around
            people that shared the same passion for learning &#129504; as me.
            That's when thanks to a friend &#128104;, made in the platzi's
            community for front-end development students, I realized that there
            were very good chances of pursuing a career as web developer
            &#128084;.
          </p>
          <p className="mt-5">
            <i className="quotes" tabIndex="0">
              I felt the call, and I just couldn't wait to answer "Yes"!
              &#128077;.
            </i>
          </p>
        </div>
      </div>
    );
}

export default PersonalData;