import React from 'react';
import './styles/Page404.css';

import PageNotFoundIcon from '../components/PageNotFoundIcon';
import PageNotFoundInfo from '../components/PageNotFoundInfo';

const Page404 = () => {
    return (
        <main className="pagenotfound">
            <PageNotFoundIcon />
            <PageNotFoundInfo />
        </main>
    );
}

export default Page404;