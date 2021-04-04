import React from "react";
import "./styles/Contact.css";

import LinkedInIcon from "../assets/icons/icon-linkedin.svg";
import GmailIcon from "../assets/icons/icon-gmail.svg";

const Contact = () => (
  <div id="contact" className="contact">
    <h3 className="contact__title" tabIndex="0">
      Contact
    </h3>
    <p className="contact__subtitle mt-3" tabIndex="0">
      Feel free to contact me &#128232; for any work or suggestions below &#128241;.
    </p>
    <ul className="hero__list--social">
      <li className="hero__list--item">
        <a
          href="https://www.linkedin.com/in/darmdev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="hero__icon--social"
            src={LinkedInIcon}
            alt="LinkedIn. Press enter to visit my LinkedIn profile"
          />
        </a>
      </li>
      <li className="hero__list--item">
        <a
          href="mailto:darubiomunoz@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="hero__icon--social"
            src={GmailIcon}
            alt="Gmail. Press enter to send me an email to my Gmail account"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
