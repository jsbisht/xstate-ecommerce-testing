import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className="homepage" data-testid="home-page">
            <Directory/>   
        </div>
    )
}

export default HomePage;
