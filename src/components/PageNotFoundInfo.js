import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PageNotFoundInfo.css';

const PageNotFoundInfo = () => {
    return(
        <section className="pagenotfound__body">
            <h1 className="pagenotfound__title" tabIndex="0">Page Not Found!</h1>
            <h4 className="pagenotfound__subtitle" tabIndex="0">Error 404.</h4>
            <Link className="pagenotfound__calltoaction" to="/" target="_blank" rel="noreferrer">Go back to the Homepage!</Link>
        </section>
    );
}

export default PageNotFoundInfo;