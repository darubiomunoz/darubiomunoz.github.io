import React from 'react';
import './styles/UnderDevelopment.css';

import DevelopmentIcon from '../components/DevelopmentIcon';
import DevelopmentInfo from '../components/DevelopmentInfo';

const UnderDevelopment = () => {
    return (
        <main className="development">
            <DevelopmentIcon />
            <DevelopmentInfo />
        </main>
    );
}

export default UnderDevelopment;